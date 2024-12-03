import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';
import { deleteEntry, getObject, storeObject } from 'src/common/lib/storage';
import UserModel from 'src/common/models/user.model';
import { Login } from 'src/common/repositories/auth/auth.repository';
import { LoginDTO } from 'src/common/repositories/auth/auth.types';
import { create } from 'zustand';

interface AuthState {
  user: UserModel | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (data: LoginDTO) => Promise<void>;
  logout: () => Promise<void>;
  loadSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  login: async ({ username, password }: LoginDTO) => {
    try {
      set({ error: null });
      const userData = await Login({ username, password });
      set({ user: userData, isAuthenticated: true });
      await storeObject('user', userData);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Não foi possivel criar sua conta!',
      });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  },
  logout: async () => {
    set({ user: null, isAuthenticated: false });
    await deleteEntry('user');
  },
  loadSession: async () => {
    try {
      const userData = await getObject('user');
      if (userData) {
        set({ user: userData, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Erro ao carregar sessão:', error);
    }
  },
}));
