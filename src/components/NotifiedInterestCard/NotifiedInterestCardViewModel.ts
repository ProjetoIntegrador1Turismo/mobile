import { Alert, Linking } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';

export const useNotifiedInterestCardViewModel = () => {
  const router = useAppRouter();

  const handleOnPressItineraryRef = (itineraryId: number) => {
    router.replace(`/(tabs)/(search)`);
    setTimeout(() => {
      router.push(`/(tabs)/(search)/itinerary/${itineraryId}`);
    }, 0);
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
          Alert.alert('Erro', 'WhatsApp não está instalado no dispositivo');
        }
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir o WhatsApp');
      });
  };

  return {
    handleOnPressItineraryRef,
    openWhatsApp,
  };
};
