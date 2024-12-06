import { useEffect, useState } from 'react';
import { fetchPaginatedPoints } from '~/src/common/repositories/paginated/paginated.repository';
import { PaginatedResponse } from '~/src/common/repositories/paginated/paginated.types';

export function useCategoryDetailsScreenViewModel(categoryTitle: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PaginatedResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //     async function fetchData() {
  //         setLoading(true);
  //         setError(null); // Reset de erro antes de cada chamada
  //         try {
  //             const result = await fetchPaginatedPoints(0, 5, categoryTitle); // Ajusta os parâmetros conforme necessário
  //             setData(result);
  //         } catch (err) {
  //             setError("Erro ao buscar os dados. Tente novamente.");
  //             console.error(err);
  //         } finally {
  //             setLoading(false);
  //         }
  //     }
  //     fetchData();
  // }, [categoryTitle]);

  return {
    loading,
    data,
  };
}
