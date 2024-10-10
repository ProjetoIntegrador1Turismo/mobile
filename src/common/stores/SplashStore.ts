import { create } from 'zustand';

interface SplashState {
  splashComplete: boolean;
  setSplashComplete: () => void;
}

export const useSplashStore = create<SplashState>((set) => ({
  splashComplete: false,
  setSplashComplete: () => {
    set({ splashComplete: true });
  },
}));
