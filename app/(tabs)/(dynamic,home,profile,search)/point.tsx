import { useSegments } from 'expo-router';
import { Pressable } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

export default function Point() {
  const segments = useSegments();
  const { goBack } = useAppRouter();
  const currentTab = segments[1];

  return (
    <Container className='items-center justify-center'>
      <CustomText size={36} weight='bold'>
        Interest Point Page
      </CustomText>
      <CustomText>
        Viewing from <CustomText weight='bold'>{currentTab}</CustomText> tab
      </CustomText>
      <Pressable className='rounded-lg border border-black p-3' onPress={goBack}>
        <CustomText>Voltar</CustomText>
      </Pressable>
    </Container>
  );
}
