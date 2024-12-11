import { useEffect, useState } from 'react';
import { useCategoryDetailQuery } from '~/src/common/hooks/queries/useCategoryDetailQuery';
import { fetchPaginatedPoints } from '~/src/common/repositories/paginated/paginated.repository';
import { PaginatedResponse } from '~/src/common/repositories/paginated/paginated.types';

export function useCategoryDetailsScreenViewModel(categoryTitle: string) {
  
  const pointRouteMapping: Record<string, string> = {
    Hotel: 'hotels',
    Experiência: 'experiences',
    Restaurante: 'restaurants',
    Evento: 'events',
    'Ponto Turístico': 'tourist-points'
};

console.log("Valor da string a ser enviada: ", pointRouteMapping[categoryTitle])
const { data, isLoading } = useCategoryDetailQuery(pointRouteMapping[categoryTitle], 0, 5)

console.log(data?.content[0])


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
    isLoading,
    data,
  };
}
