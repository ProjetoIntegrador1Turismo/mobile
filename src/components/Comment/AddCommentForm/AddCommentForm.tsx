import React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomText } from 'src/components/Text/CustomText';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { useAddCommentFormViewModel } from './AddCommentFormViewModel';
import { AddCommentFormData, AddCommentFormProps, LIKED_TAGS, DISLIKED_TAGS } from './AddCommentForm.types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TagToggle } from 'src/components/Comment/TagToggle/TagToggle';
import { useAppRouter } from 'src/common/lib/router';

export function AddCommentForm({ interestPointId }: AddCommentFormProps) {
  const router = useAppRouter();
  const { control, handleSubmit: onSubmit } = useForm<AddCommentFormData>({
    defaultValues: {
      comment: '',
      likedTags: [],
      dislikedTags: [],
    },
  });

  const { handleSubmit, isPending } = useAddCommentFormViewModel({
    interestPointId,
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
            Deixe seu comentário!
          </CustomText>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView className='flex-1 px-4'>
          <View className='mt-4'>
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
