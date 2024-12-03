import { useEffect } from 'react';
 import { useAuthStore } from 'src/common/stores/AuthStore';
import { useSplashStore } from 'src/common/stores/SplashStore';

export const useAppRootViewModel = () => {
  const { splashComplete } = useSplashStore();
  const { loadSession } = useAuthStore();

  useEffect(() => {
    loadSession();
  }, []);

  return { splashComplete };
};
