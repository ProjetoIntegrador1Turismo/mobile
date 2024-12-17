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

interface CategoryDetailsProps {
  categoryTitle: string;
}

export default function CategoryDetailsScreen({ categoryTitle }: CategoryDetailsProps) {
  const { data, isLoading, handleSearchAction } = useCategoryDetailsScreenViewModel(categoryTitle);
  const { goBack } = useAppRouter();

  if (isLoading || !data) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View>
      <GoBackButton  className='mb-4 mt-8'/>
      <SearchTextInputBar onChangeText={handleSearchAction} />
      <View className='mt-4 w-full items-center justify-center'>
        <CustomText size={24} weight='bold' className='items-center justify-center text-white'>
          {categoryTitle}
        </CustomText>
        <Divider text='Com base na categoria'></Divider>
      </View>
      <BasicPointCardList {...data}/>
    </View>
  );
}
