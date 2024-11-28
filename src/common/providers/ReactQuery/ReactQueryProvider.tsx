import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryProviderProps } from './ReactQueryProvider.types';
import { useReactQueryProviderViewModel } from './ReactQueryProviderViewModel';

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const { queryClient } = useReactQueryProviderViewModel();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
