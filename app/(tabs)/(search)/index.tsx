import { Pressable, SafeAreaView } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { CustomText } from 'src/components/Text/CustomText';
import { Avatar } from '~/src/components/Avatar/Avatar';
import { CategoryCardList } from '~/src/components/CategoryCardList/CategoryCardList';
import { Container } from '~/src/components/Container/Container';
import { NotifiedInterestCard } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard';
import { BasicPointCard } from '~/src/components/Point/BasicPoint/BasicPointCard';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { UserAvatar } from '~/src/components/User/UserAvatar';
import CategoryView from '~/src/screens/Category/CategoryView';

export default function Search() {
  const { push } = useAppRouter();

  const handlePress = () => {
    push('/(search)/point');
  };

  return (
    // <SafeAreaView className='flex-1 items-center justify-center p-8'>
    //   <CustomText>Categories/Search Screen</CustomText>
    //   <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
    //     <CustomText>Go to Point</CustomText>
    //   </Pressable>
    // </SafeAreaView>
    <Container className='flex-1 items-center justify-center bg-tl-bg p-8 bg-tl-bg'>
      <CategoryView />
    </Container>
  );
}