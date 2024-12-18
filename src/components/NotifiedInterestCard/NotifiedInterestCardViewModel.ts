import { Alert, Linking } from 'react-native';

export const useNotifiedInterestCardViewModel = () => {
  const handleOnPressItineraryRef = (itineraryId: number) => {
    console.log('Link do roteiro acionado: ', itineraryId);
  };

  const formatPhoneNumber = (phone: string): string => {
    return phone
      .replace(/\D/g, '') // Remove tudo que não é número
      .replace(/^0/, '') // Remove um zero inicial, se houver
      .padStart(13, '55'); // Adiciona o código do Brasil (55) se estiver ausente
  };

  const openWhatsApp = (phone: string) => {
    const formattedPhone = formatPhoneNumber(phone);
    const whatsappUrl = `https://wa.me/${formattedPhone}`;
    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(whatsappUrl);
        } else {
          Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
        }
      })
      .catch(() => {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar abrir o WhatsApp.');
      });
  };

  return {
    handleOnPressItineraryRef,
    openWhatsApp,
  };
};
