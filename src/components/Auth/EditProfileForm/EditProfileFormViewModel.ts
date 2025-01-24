import { zodResolver } from '@hookform/resolvers/zod';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useEditProfileMutation } from 'src/common/hooks/mutations/useEditProfileMutation';
import { useAppRouter } from 'src/common/lib/router';
import { BASE_URL } from 'src/common/repositories/client';
import EditProfileSchema from 'src/common/schemas/EditProfile/EditProfileSchema';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { nameSplit } from 'src/common/utils/nameSplit';

import { EditProfileFormData } from './EditProfileForm.types';

import { useUploadProfilePictureMutation } from '~/src/common/hooks/mutations/useUploadProfilePictureMutation';

export const useEditProfileViewModel = () => {
  const { user, updateUser } = useAuthStore();
  const { goBack } = useAppRouter();
  const { mutate: UpdateProfile } = useEditProfileMutation();
  const { mutate: uploadProfilePicture } = useUploadProfilePictureMutation();
  const { control, handleSubmit, setValue, watch } = useForm<EditProfileFormData>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      email: user?.email,
      name: `${user?.firstName} ${user?.lastName}`,
      phone: user?.phone,
      password: '',
    },
  });

  const pickImage = async () => {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;

        uploadProfilePicture(imageUri, {
          onSuccess: (data) => {
            updateUser({
              profileImageUrl: data,
            });
            Toast.show({
              type: 'success',
              text1: 'Sucesso!',
              text2: 'Sua foto de perfil foi atualizada com sucesso!',
            });
          },
          onError: (error) => {
            console.error('Upload error:', error);
            Toast.show({
              type: 'error',
              text1: 'Erro ao enviar foto!',
              text2: 'Por favor, tente novamente.',
            });
          },
        });
      }
    } catch (error) {
      console.error('Image picker error:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao acessar a galeria!',
      });
    }
  };

  const onPressEdit = (values: EditProfileFormData) => {
    const { firstName, lastName } = nameSplit(values.name);
    UpdateProfile(values, {
      onSuccess: () => {
        updateUser({
          firstName,
          lastName,
          phone: values.phone,
        });
        Toast.show({
          type: 'success',
          text1: 'Sucesso!',
          text2: 'Suas informações foram atualizadas!',
        });

        goBack();
      },
      onError: () => {
        Toast.show({
          type: 'error',
          text1: 'Erro!',
          text2: 'Ocorreu um erro ao atualizar suas informações!',
        });
      },
    });
  };

  const userProfilePicture = BASE_URL + user?.profileImageUrl;

  return { control, handleSubmit, onPressEdit, pickImage, userProfilePicture };
};
