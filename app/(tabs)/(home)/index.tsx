import { SafeAreaView } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-tl-bg p-8'>
      <CustomText className='text-white'>Home</CustomText>
    </SafeAreaView>
  );
}
