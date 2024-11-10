import { Pressable, SafeAreaView } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { CustomText } from 'src/components/Text/CustomText';

import { TopInterestPointCard } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard';
import { InterestPointCard } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard';
import { TopGuideCard } from '~/src/components/Guide/TopGuideCard/TopGuideCard';
import { Divider } from 'src/components/Divider/Divider';
import { AddressLabel } from 'src/components/InterestPoint/AddressLabel/AddressLabel';
import { Stars } from 'src/components/Stars/Stars';
import { Price } from 'src/components/Price/Price';
import Comment from 'src/components/Comment/Comment';

export default function Home() {
  const { push } = useAppRouter();

  const handlePress = () => {
    push('/(home)/point');
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-tl-bg p-8'>
      <CustomText>Home</CustomText>

      <Divider text='Components' />
      <AddressLabel address='Rua Belo Horizonte, 123 - Vila C, Foz do Iguaçu, PR' />
      <Stars rating={1} />
      <Price priceLevel={0} />

      <Comment
        name='Jackson Lentinho'
        date='2023-01-01'
        text='Poucos sabem o que fiz no intervalo aquele dia...'
        rating={4}
        avatarUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />

      <Divider text='Guia' />

      <TopGuideCard
        id='1'
        profileImage='https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22408516/Big_Chungus.png?quality=90&strip=all&crop=8.36%2C0%2C83.28%2C100&w=750'
        name='Guia Chungus da Silva'
        rating={1}
      />

      <Divider text='Pontos de Interesse' />

      <InterestPointCard
        id='1'
        name='cataratas do iguaçu'
        imageCover='https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/05/cataratas.jpg?w=1200&h=900&crop=1'
      />

      <TopInterestPointCard
        name='Cataratas do Iguaçu'
        imageCover='https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/05/cataratas.jpg?w=1200&h=900&crop=1'
        duration='4 Horas'
        medal={1}
        priceLevel={1}
      />

      <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
        <CustomText>Go to Point</CustomText>
      </Pressable>
    </SafeAreaView>
  );
}
