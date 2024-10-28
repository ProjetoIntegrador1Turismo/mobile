import { Pressable, SafeAreaView } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { CustomText } from 'src/components/Text/CustomText';

export default function Search() {
  const { push } = useAppRouter();

  const handlePress = () => {
    push('/(search)/point');
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center p-8'>
      <CustomText>Categories/Search Screen</CustomText>
      <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
        <CustomText>Go to Point</CustomText>
      </Pressable>
    </SafeAreaView>
  );
}
