import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryProviderProps } from 'src/common/providers/ReactQuery/ReactQueryProvider.types';
import { useReactQueryProviderViewModel } from 'src/common/providers/ReactQuery/ReactQueryProviderViewModel';

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const { queryClient } = useReactQueryProviderViewModel();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
