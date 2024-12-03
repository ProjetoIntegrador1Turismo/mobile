import { SafeAreaView } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';

export default function Search() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-tl-bg p-8'>
      <CustomText className='text-white'>Categories/Search Screen</CustomText>
    </SafeAreaView>
  );
}
