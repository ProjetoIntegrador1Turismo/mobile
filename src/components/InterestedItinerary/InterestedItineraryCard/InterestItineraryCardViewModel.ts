import { useAppRouter } from '~/src/common/lib/router';

export function useInterestedItineraryCardViewModel() {
  const { push } = useAppRouter();

  const truncatedName = (name: string, maxLength: number) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  //Essa rota deve levar para a pagina do roteiro
  async function handleSeeDetails(id: number) {
    push(`/itinerary/${id}`);
  }

  return {
    truncatedName,
    handleSeeDetails,
  };
}
