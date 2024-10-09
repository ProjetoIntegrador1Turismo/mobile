import * as SecureStore from 'expo-secure-store';
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
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  login: async ({ username, password }: LoginDTO) => {
    try {
      const userData = await Login({ username, password });
      set({ user: userData, isAuthenticated: true });
      await SecureStore.setItemAsync('user', JSON.stringify(userData));
    } catch (error) {
      set({ error: `Erro ao fazer login! ${error}` });
    }
  },
  logout: async () => {
    set({ user: null, isAuthenticated: false });
    await SecureStore.deleteItemAsync('user');
  },
}));
