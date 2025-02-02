import { useAppRouter } from '~/src/common/lib/router';

export const useNewItineraryStepTwoViewModel = () => {
  const { push } = useAppRouter();

  const handleAddInsterestPointPress = () => {
    push('(modals)/select-interest-point');
  };

  return { handleAddInsterestPointPress };
};
