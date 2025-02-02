import { useAppRouter } from '~/src/common/lib/router';

export const useEditItineraryStepTwoViewModel = () => {
  const { push } = useAppRouter();

  const handleAddInsterestPointPress = () => {
    push('(modals)/select-interest-point-edit');
  };

  return { handleAddInsterestPointPress };
};
