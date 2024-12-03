import { QueryClient } from '@tanstack/react-query';

export const useReactQueryProviderViewModel = () => {
  const queryClient = new QueryClient();

  return { queryClient };
};
