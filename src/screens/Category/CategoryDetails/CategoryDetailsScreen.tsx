import { Divider } from '~/src/components/Divider/Divider';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { useAppRouter } from 'src/common/lib/router';
import { useCategoryDetailsScreenViewModel } from './CategoryDetailsScreenViewModel';
import { BasicPointCard } from '~/src/components/Point/BasicPoint/BasicPointCard';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';
import BasicPointCardList from '~/src/components/Point/BasicPointCardList';
import { LogoTl } from '~/src/components/Logo/LogoTL';

interface CategoryDetailsProps {
  categoryTitle: string;
}

export default function CategoryDetailsScreen({ categoryTitle }: CategoryDetailsProps) {
  const { data, isLoading, handleSearchAction } = useCategoryDetailsScreenViewModel(categoryTitle);

  if (isLoading || !data) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' color='white'/>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-black'>
      <View className='flex-row items-center justify-between px-4 pt-12'>
        <View className='flex-1'>
          <GoBackButton />
        </View>
        
        <View className='flex-1 items-center justify-center'>
          <LogoTl />
        </View>
        
        <View className='flex-1' />
      </View>

      <View className='mt-8 px-4'>
        <SearchTextInputBar onChangeText={handleSearchAction} />
        <View className='mt-4 items-center justify-center'>
          <CustomText size={24} weight='bold' className='text-white'>
            {categoryTitle}
          </CustomText>
          <Divider text='Com base na categoria'></Divider>
        </View>
      </View>
      
      <View className='flex-1 mt-4 px-4'>
        <BasicPointCardList {...data} />
      </View>
    </View>
  );
}
