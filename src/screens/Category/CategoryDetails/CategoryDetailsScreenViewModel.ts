import { useEffect, useMemo, useState } from 'react';
import { useCategoryDetailQuery } from '~/src/common/hooks/queries/useCategoryDetailQuery';
import { CategoryDetailModel, Content } from '~/src/common/models/Category/categoryDetail.model';

export function useCategoryDetailsScreenViewModel(categoryTitle: string) {
  const { data: originalData, isLoading } = useCategoryDetailQuery(categoryTitle);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(handler); // Limpa o timeout se o texto mudar antes de 1 segundo
  }, [searchText]);

  const filteredData: CategoryDetailModel | undefined = useMemo(() => {
    if (!originalData || searchText.trim() === '') return originalData;

    return {
      ...originalData,
      content: originalData.content.filter((item: Content) =>
        (item.name || item.title || '').toLowerCase().includes(searchText.toLowerCase())
      ),
    };
  }, [originalData, debouncedSearchText]);

  const handleSearchAction = (search: string) => {
    setSearchText(search);
  };

  return {
    isLoading,
    data: filteredData,
    handleSearchAction,
  };
}
