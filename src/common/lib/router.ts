import { useRouter, type Href } from 'expo-router';

export const useAppRouter = () => {
  // Router abstraction
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const push = (path: Href<string | object>) => {
    router.push(path);
  };

  const replace = (path: Href<string | object>) => {
    router.replace(path);
  };

  return { goBack, push, replace };
};
