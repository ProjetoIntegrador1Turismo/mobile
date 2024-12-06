import { SafeAreaView } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { Container } from '~/src/components/Container/Container';

import { TopInterestPointCard } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard';
import { InterestPointCard } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard';
import { TopGuideCard } from '~/src/components/Guide/TopGuideCard/TopGuideCard';
import { Divider } from 'src/components/Divider/Divider';
import { AddressLabel } from 'src/components/InterestPoint/AddressLabel/AddressLabel';
import { Stars } from 'src/components/Stars/Stars';
import { Price } from 'src/components/Price/Price';
import Comment from 'src/components/Comment/Comment';
import { GuideItineraryCard } from 'src/components/Guide/GuideItineraryCard/GuideItineraryCard';
import { TagToggle } from 'src/components/Comment/TagToggle/TagToggle';
import { HomeScreen } from '~/src/screens/Home/HomeScreen';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-tl-bg'>
      <HomeScreen />

      {/* <CustomText>Home</CustomText>

      <Divider text='Components' />
      <AddressLabel address='Rua Belo Horizonte, 123 - Vila C, Foz do Iguaçu, PR' />
      <Stars rating={1} />
      <Price priceLevel={0} />

      <GuideItineraryCard
        backgroundImage='https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/05/cataratas.jpg?w=1200&h=900&crop=1'
        guide={{
          name: 'Jackson Lentinho',
          profileImage:
            'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        title='Cataratas com Idosos'
        onPress={() => {}}
      />

      <TagToggle
        title='Do que você gostou?'
        tags={['simpático', 'legal', 'bom', 'ruim', 'péssimo', 'otimo', 'muito bom', 'muito ruim']}
        onTagsChange={(selectedTags) => console.log('Selected tags:', selectedTags)}
      />

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
      </Pressable> */}
    </SafeAreaView>
  );
}
