import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { FullCommentModalProps } from './FullCommentModal.types';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';

export function FullCommentModal({
  visible,
  onClose,
  name,
  date,
  text,
  rating,
  avatarUrl,
  isReview,
}: FullCommentModalProps) {
  return (
    <Modal visible={visible} transparent animationType='fade' onRequestClose={onClose}>
      <View className='flex-1 items-center justify-center bg-black/90'>
        <TouchableOpacity onPress={onClose} className='absolute right-4 top-12 z-10'>
          <AntDesign name='close' size={30} color='white' />
        </TouchableOpacity>
        <View className='w-11/12 rounded-lg bg-[#1C1C1E] p-6'>
          <View className='mb-4 flex-row items-center'>
            <Avatar imageUrl={avatarUrl} size={48} />
            <View className='ml-4 flex-1'>
              <CustomText className='text-white' size={18} weight='bold'>
                {name}
              </CustomText>
              <CustomText className='text-gray-400' size={12} weight='regular'>
                {isReview
                  ? `Avaliado em: ${new Date(date).toLocaleDateString('pt-BR')}`
                  : `Comentou em: ${date}`}
              </CustomText>
            </View>
            <Stars rating={rating} />
          </View>
          <CustomText className='text-gray-200' size={14} weight='regular'>
            {text}
          </CustomText>
        </View>
      </View>
    </Modal>
  );
}
