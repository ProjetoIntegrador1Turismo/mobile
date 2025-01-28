import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';
import {
  deleteEntry,
  getObject,
  getString,
  storeObject,
  storeString,
} from 'src/common/lib/storage';
import UserModel from 'src/common/models/user.model';
import { Login, RefreshToken } from 'src/common/repositories/auth/auth.repository';
import { LoginDTO } from 'src/common/repositories/auth/auth.types';
import { create } from 'zustand';

interface AuthState {
  user: UserModel | null;
  isAuthenticated: boolean;
  error: string | null;
  isRefreshing: boolean;
  tokenExpirationTime: number | null;
  refreshPromise: Promise<string | null> | null;
  login: (data: LoginDTO) => Promise<void>;
  logout: () => Promise<void>;
  loadSession: () => Promise<void>;
  updateUser: (userData: DeepPartial<UserModel>) => Promise<void>;
  getAccessToken: () => Promise<string | null>;
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isRefreshing: false,
  tokenExpirationTime: null,
  refreshPromise: null,

  login: async ({ username, password }: LoginDTO) => {
    try {
      set({ error: null });
      const userData = await Login({ username, password });

      const expirationTime = Date.now() + Number(userData.authTokenExpiresIn) * 1000;

      set({
        user: userData,
        isAuthenticated: true,
        tokenExpirationTime: expirationTime,
      });

      await storeObject('user', userData);
      await storeString('tokenExpirationTime', String(expirationTime));
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Usuário ou senha incorreto!',
      });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  },

  logout: async () => {
    set({
      user: null,
      isAuthenticated: false,
      tokenExpirationTime: null,
    });
    await deleteEntry('user');
    await deleteEntry('tokenExpirationTime');
  },

  loadSession: async () => {
    try {
      const [userData, expirationTime] = await Promise.all([
        getObject('user'),
        getString('tokenExpirationTime'),
      ]);

      if (userData && expirationTime) {
        set({
          user: userData,
          isAuthenticated: true,
          tokenExpirationTime: +expirationTime,
        });
      }
    } catch (error) {
      console.error('Erro ao carregar sessão:', error);
    }
  },

  updateUser: async (userData: DeepPartial<UserModel>) => {
    const currentUser = get().user;

    const updatedUser = {
      ...currentUser,
      ...userData,
    } as UserModel;

    if (userData.authTokenExpiresIn) {
      const newExpirationTime = Date.now() + Number(userData.authTokenExpiresIn) * 1000;
      set({ tokenExpirationTime: newExpirationTime });
      await storeString('tokenExpirationTime', String(newExpirationTime));
    }

    set({ user: updatedUser });
    await storeObject('user', updatedUser);
  },

  getAccessToken: async () => {
    const state = get();
    const user = state.user;
    const expirationTime = state.tokenExpirationTime;

    if (!user?.authToken || !user?.refreshToken) {
      return null;
    }

    try {
      const isExpired = expirationTime && Date.now() >= expirationTime;

      if (!isExpired) {
        return user.authToken;
      }

      if (state.refreshPromise) {
        return state.refreshPromise;
      }

      const refreshPromise = (async () => {
        try {
          set({ isRefreshing: true });
          const response = await RefreshToken(user.refreshToken);

          await state.updateUser({
            authToken: response.authToken,
            refreshToken: response.refreshToken,
            authTokenExpiresIn: response.authTokenExpiresIn,
            refreshTokenExpiresIn: response.refreshTokenExpiresIn,
          });

          return response.authToken;
        } catch (error) {
          await state.logout();
          Toast.show({
            type: 'error',
            text1: 'Sessão expirada',
            text2: 'Por favor, faça login novamente',
          });
          throw error;
        } finally {
          set({
            isRefreshing: false,
            refreshPromise: null,
          });
        }
      })();

      set({ refreshPromise });

      return refreshPromise;
    } catch (error) {
      await state.logout();
      throw error;
    }
  },
}));
