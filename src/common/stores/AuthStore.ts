import { Alert } from 'react-native';
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
      Alert.alert('Erro', 'E-mail ou senha incorreto!');
    }
  },
  logout: async () => {
    set({ user: null, isAuthenticated: false });
    await deleteEntry('user');
  },
}));
