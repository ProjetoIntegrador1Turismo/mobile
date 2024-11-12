import { Pressable, SafeAreaView } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { CustomText } from 'src/components/Text/CustomText';
import { Avatar } from '~/src/components/Avatar/Avatar';
import { CategoryCardList } from '~/src/components/CategoryCardList/CategoryCardList';
import { NotifiedInterestCard } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { UserAvatar } from '~/src/components/User/UserAvatar';

export default function Search() {
  const { push } = useAppRouter();

  const handlePress = () => {
    push('/(search)/point');
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center p-8'>
      {/* <CustomText>Categories/Search Screen</CustomText>
      <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
        <CustomText>Go to Point</CustomText>
      </Pressable> */}            
      <NotifiedInterestCard
      userName='Carlos Alberto de Nobrega'
      imageUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      phone='(45) 99999-1111'
      email='carlinhos@gmail.com'
      itineraryTitle='Aventura nas Cataratas' />
    </SafeAreaView>
  );
}
