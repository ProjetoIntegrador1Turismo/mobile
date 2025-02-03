import React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomText } from 'src/components/Text/CustomText';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { useAddReviewFormViewModel } from './AddReviewFormViewModel';
import {
  AddReviewFormData,
  AddReviewFormProps,
  LIKED_TAGS,
  DISLIKED_TAGS,
} from './AddReviewForm.types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TagToggle } from 'src/components/Comment/TagToggle/TagToggle';
import { useAppRouter } from 'src/common/lib/router';

export function AddReviewForm({ guideId }: AddReviewFormProps) {
  const router = useAppRouter();
  const { control, handleSubmit: onSubmit } = useForm<AddReviewFormData>({
    defaultValues: {
      comment: '',
      rating: 5,
      likedTags: [],
      dislikedTags: [],
    },
  });

  const { rating, setRating, handleSubmit, isPending } = useAddReviewFormViewModel({
    guideId,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className='flex-1 bg-[#171717] pt-12'>
        {/* Header */}
        <View className='flex-row items-center justify-between border-b border-gray-800 px-4 py-4'>
          <TouchableOpacity onPress={() => router.dismiss()}>
            <AntDesign name='close' size={24} color='white' />
          </TouchableOpacity>
          <CustomText size={18} weight='bold' className='text-white'>
            Avalie o Guia!
          </CustomText>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView className='flex-1 px-4'>
          <View className='mt-4'>
            <CustomText className='mb-2 text-white' size={16} weight='regular'>
              O que você achou do guia?
            </CustomText>
            <CustomText className='mb-6 text-gray-400' size={14} weight='regular'>
              (Dê uma nota de 1 a 5)
            </CustomText>

            {/* Rating */}
            <View className='mb-6 flex-row items-center gap-x-2'>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity key={value} onPress={() => setRating(value)}>
                  <AntDesign
                    name='star'
                    size={32}
                    color={value <= rating ? '#FF1493' : '#3f3f46'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Liked Tags */}
            <View className='mb-6'>
              <CustomText className='mb-4 text-white' size={16} weight='regular'>
                Do que você gostou?
              </CustomText>
              <Controller
                control={control}
                name='likedTags'
                render={({ field: { onChange, value } }) => (
                  <View className='flex-row flex-wrap gap-2'>
                    {LIKED_TAGS.map((tag) => (
                      <TagToggle
                        key={tag}
                        label={tag}
                        selected={value.includes(tag)}
                        onPress={() => {
                          if (value.includes(tag)) {
                            onChange(value.filter((t) => t !== tag));
                          } else {
                            onChange([...value, tag]);
                          }
                        }}
                      />
                    ))}
                  </View>
                )}
              />
            </View>

            {/* Disliked Tags */}
            <View className='mb-6'>
              <CustomText className='mb-4 text-white' size={16} weight='regular'>
                Do que você não gostou? :(
              </CustomText>
              <Controller
                control={control}
                name='dislikedTags'
                render={({ field: { onChange, value } }) => (
                  <View className='flex-row flex-wrap gap-2'>
                    {DISLIKED_TAGS.map((tag) => (
                      <TagToggle
                        key={tag}
                        label={tag}
                        selected={value.includes(tag)}
                        onPress={() => {
                          if (value.includes(tag)) {
                            onChange(value.filter((t) => t !== tag));
                          } else {
                            onChange([...value, tag]);
                          }
                        }}
                      />
                    ))}
                  </View>
                )}
              />
            </View>

            {/* Comment Input */}
            <Controller
              control={control}
              name='comment'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className='mb-6 h-32 rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white'
                  placeholder='Deixe aqui o seu comentário (opcional)'
                  placeholderTextColor='#71717a'
                  multiline
                  textAlignVertical='top'
                  value={value}
                  onChangeText={onChange}
                  maxLength={100}
                />
              )}
            />

            {/* Submit Button */}
            <TLGradientButton
              title='Enviar!'
              onPress={onSubmit(handleSubmit)}
              loading={isPending}
              className='mb-6'
            />
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
