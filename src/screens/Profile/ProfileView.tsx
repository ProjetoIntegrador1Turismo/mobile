import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { Avatar } from 'src/components/Avatar/Avatar';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

import { useProfileViewModel } from './ProfileViewModel';

import { Comment, Review } from '~/src/common/models/getme.model';
import { GuideReviewCommentCard } from '~/src/components/Comment/GuideReviewCommentCard/GuideReviewCommentCard';
import { InterestPointCommentCard } from '~/src/components/Comment/InterestPointCommentCard/InterestPointCommentCard';

export function ProfileView() {
  const {
    handleLoginPress,
    isAuthenticated,
    handleLogoutPress,
    handlePressEdit,
    user,
    userTypeMap,
    GetMeData,
    isLoading,
  } = useProfileViewModel();

  const renderComments = (comments: Comment[]) => {
    if (comments.length === 0) {
      return (
        <View className='mt-2 w-full rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
          <CustomText className='text-center text-gray-400' size={14} weight='regular'>
            Você não fez nenhum comentário de lugar ainda!
          </CustomText>
        </View>
      );
    }

    return comments.map((comment) => (
      <InterestPointCommentCard
        key={comment.id}
        avatarUrl={user!.profileImageUrl}
        date={comment.wasVisitingDate}
        interestPoint={{ id: String(comment.interestPoint.id), name: comment.interestPoint.name }}
        name={comment.tourist.touristName}
        rating={comment.rating}
        text={comment.text}
      />
    ));
  };

  const renderReviews = (reviews: Review[]) => {
    if (reviews.length === 0) {
      return (
        <View className='mt-2 w-full rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
          <CustomText className='text-center text-gray-400' size={14} weight='regular'>
            Você não fez nenhum review de guia ainda!
          </CustomText>
        </View>
      );
    }

    return reviews.map((review) => (
      <GuideReviewCommentCard
        key={review.id}
        avatarUrl={user!.profileImageUrl}
        date={review.date}
        guide={{
          id: String(review.guide.id),
          avatarUrl: review.guide.profileImageUrl,
          name: review.guide.firstName + ' ' + review.guide.lastName,
        }}
        name={user!.firstName + ' ' + user!.lastName}
        rating={review.rating}
        text={review.text}
      />
    ));
  };

  if (!isAuthenticated) {
    return (
      <SafeAreaView className='flex-1 bg-tl-bg px-4'>
        <View className='items-center pt-12'>
          <TLLogoWhite className='h-16 w-20 object-cover' />
        </View>
        <View className='flex-1 items-center justify-center gap-6'>
          <UnauthenticatedImage className='h-64 w-64' />
          <CustomText className='text-center text-white' weight='regular' size={16}>
            Faça login para ver seus roteiros!
          </CustomText>
          <TLGradientButton title='Login' className='w-11/12' onPress={handleLoginPress} />
        </View>
        <View className='h-32' />
      </SafeAreaView>
    );
  }

  if (user?.userType === 'Guide') {
    return (
      <ScrollView
        className='h-full flex-1 bg-tl-bg'
        overScrollMode='never'
        contentContainerStyle={{ paddingBottom: 120 }}>
        <Container className='gap-4 bg-tl-bg px-4 pt-12'>
          <View className='flex w-full flex-row justify-between '>
            <View className='ml-1 h-[80px] w-[95px] items-start justify-center'>
              <TouchableOpacity onPress={handlePressEdit}>
                <Feather name='edit' color='#FFF' size={30} />
                <CustomText className='text-white' size={10}>
                  Editar
                </CustomText>
              </TouchableOpacity>
            </View>
            <TLLogoWhite className='-ml-3 h-[80px] w-[95px] object-cover' />
            <View className='h-[80px] w-[95px] items-end justify-center border'>
              <TouchableOpacity onPress={handleLogoutPress}>
                <Feather name='log-out' color='#FFF' size={30} />
                <CustomText className='text-white' size={10}>
                  Logout
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
          <View className='items-center'>
            <Avatar imageUrl={user!.profileImageUrl} size={180} />
            <CustomText weight='bold' size={36} className=' text-center text-white'>
              {user!.firstName + ' ' + user?.lastName}
            </CustomText>
            <CustomText size={24} className=' text-white'>
              {userTypeMap[user!.userType]}
            </CustomText>
          </View>
          <View className='flex h-2/3 items-center justify-center'>
            <View className='flex h-2/3 w-2/3 items-center justify-center'>
              <CustomText className='text-white' size={22} weight='bold'>
                Que vazio...
              </CustomText>
              <CustomText className='w-1/2 text-center text-white'>
                Guias não podem fazer Reviews e comentários!
              </CustomText>
            </View>
          </View>
        </Container>
      </ScrollView>
    );
  }

  if (isLoading) {
    return (
      <ScrollView
        className='h-full flex-1 bg-tl-bg'
        overScrollMode='never'
        contentContainerStyle={{ paddingBottom: 120 }}>
        <Container className='gap-4 bg-tl-bg px-4 pt-12'>
          <View className='flex w-full flex-row justify-between '>
            <View className='ml-1 h-[80px] w-[95px] items-start justify-center'>
              <TouchableOpacity onPress={handlePressEdit}>
                <Feather name='edit' color='#FFF' size={30} />
                <CustomText className='text-white' size={10}>
                  Editar
                </CustomText>
              </TouchableOpacity>
            </View>
            <TLLogoWhite className='-ml-3 h-[80px] w-[95px] object-cover' />
            <View className='h-[80px] w-[95px] items-end justify-center border'>
              <TouchableOpacity onPress={handleLogoutPress}>
                <Feather name='log-out' color='#FFF' size={30} />
                <CustomText className='text-white' size={10}>
                  Logout
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
          <View className='items-center'>
            <Avatar imageUrl={user!.profileImageUrl} size={180} />
            <CustomText weight='bold' size={36} className=' text-center text-white'>
              {user!.firstName + ' ' + user?.lastName}
            </CustomText>
            <CustomText size={24} className=' text-white'>
              {userTypeMap[user!.userType]}
            </CustomText>
          </View>
          <View className='flex h-2/3 items-center justify-center'>
            <ActivityIndicator size={40} />
          </View>
        </Container>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      className='h-full flex-1 bg-tl-bg'
      overScrollMode='never'
      contentContainerStyle={{ paddingBottom: 120 }}>
      <Container className='gap-4 bg-tl-bg px-4 pt-12'>
        <View className='flex w-full flex-row justify-between '>
          <View className='ml-1 h-[80px] w-[95px] items-start justify-center'>
            <TouchableOpacity onPress={handlePressEdit}>
              <Feather name='edit' color='#FFF' size={30} />
              <CustomText className='text-white' size={10}>
                Editar
              </CustomText>
            </TouchableOpacity>
          </View>
          <TLLogoWhite className='-ml-3 h-[80px] w-[95px] object-cover' />
          <View className='h-[80px] w-[95px] items-end justify-center border'>
            <TouchableOpacity onPress={handleLogoutPress}>
              <Feather name='log-out' color='#FFF' size={30} />
              <CustomText className='text-white' size={10}>
                Logout
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <View className='items-center'>
          <Avatar imageUrl={user!.profileImageUrl} size={180} />
          <CustomText weight='bold' size={36} className=' text-center text-white'>
            {user!.firstName + ' ' + user?.lastName}
          </CustomText>
          <CustomText size={24} className=' text-white'>
            {userTypeMap[user!.userType]}
          </CustomText>
        </View>
        <View>
          <CustomText weight='bold' size={24} className='text-white'>
            Reviews de Guias
          </CustomText>
          <CustomText className='text-white'>Reviews feitos por você</CustomText>
          <View className='mt-2 flex items-center gap-4'>{renderReviews(GetMeData!.reviews)}</View>
        </View>
        <View>
          <CustomText weight='bold' size={24} className='text-white'>
            Comentário de Lugares
          </CustomText>
          <CustomText className='text-white'>Comentários feitos por você</CustomText>
          <View className='mt-2 flex items-center gap-4'>
            {renderComments(GetMeData!.comments)}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}
