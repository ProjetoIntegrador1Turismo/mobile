import { useInterestPointByIdQuery } from '~/src/common/hooks/queries/useInterestPointByIdQuery';

export const useSelectedInterestPointCardViewModel = (id: number) => {
  const { data, isLoading } = useInterestPointByIdQuery(id);

  return { data, isLoading };
};
