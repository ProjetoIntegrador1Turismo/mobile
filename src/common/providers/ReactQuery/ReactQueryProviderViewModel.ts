import { QueryClient } from '@tanstack/react-query';

export const useReactQueryProviderViewModel = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 5 * 60 * 1000, 
        gcTime: 10 * 60 * 1000, 
      },
    },
  });

  return { queryClient };
};
