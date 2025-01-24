
import { useLocalSearchParams, useRouter } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { Container } from '~/src/components/Container/Container';
import { InterestedTouristsItineraryScreen } from '~/src/screens/GuidePainel/InterestedTouristsItineraryScreen/InterestedTouristsItineraryScreen';

export default function InterestedItineraryTouristsScreen(){     
     const { authToken } = useLocalSearchParams();

     //PROVISORIO: Só até ajustarmos a forma correta de identificar o guia autenticado.
     const sanitizedAuthToken: string = String(Array.isArray(authToken) ? authToken[0] : authToken);

    return (
        <Container className='flex-1 items-center justify-center bg-tl-bg bg-tl-bg p-8'>
            <InterestedTouristsItineraryScreen  authToken={sanitizedAuthToken}/>
        </Container>
    )

}