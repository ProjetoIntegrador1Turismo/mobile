import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CustomText } from 'src/components/Text/CustomText';
import { DeleteItineraryModalProps } from './DeleteItineraryModal.types';

export function DeleteItineraryModal({ visible, onClose, onConfirm }: DeleteItineraryModalProps) {
  return (
    <Modal visible={visible} transparent={true} animationType='fade' onRequestClose={onClose}>
      <View className='flex-1 items-center justify-center bg-black/90'>
        <View className='w-[80%] rounded-xl bg-[#1C1C1E] p-6'>
          <TouchableOpacity onPress={onClose} className='absolute right-4 top-4 z-10'>
            <AntDesign name='close' size={24} color='white' />
          </TouchableOpacity>
          
          <CustomText className='mb-4 text-center text-white' weight='bold' size={20}>
            Excluir Roteiro
          </CustomText>
          
          <CustomText className='mb-6 text-center text-white' weight='regular' size={16}>
            Tem certeza que deseja excluir este roteiro? Esta ação não pode ser desfeita e você perderá todos os avisos de turistas interessados neste roteiro.
          </CustomText>

          <View className='flex-row justify-center space-x-6'>
            <TouchableOpacity 
              onPress={onClose}
              className='rounded-lg border border-white px-8 py-3'>
              <CustomText className='text-white' weight='regular'>
                Cancelar
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={onConfirm}
              className='rounded-lg bg-red-500 px-8 py-3'>
              <CustomText className='text-white' weight='bold'>
                Excluir
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
