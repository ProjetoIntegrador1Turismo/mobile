import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppRouter } from 'src/common/lib/router';
import EditProfileSchema from 'src/common/schemas/EditProfile/EditProfileSchema';
import LoginSchema from 'src/common/schemas/Login/LoginSchema';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { LoginFormData } from 'src/components/Auth/LoginForm/LoginForm.types';

import { EditProfileFormData } from './EditProfileForm.types';

export const useEditProfileViewModel = () => {
  const { user } = useAuthStore();

  const { control, handleSubmit } = useForm<EditProfileFormData>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      email: user?.email,
      name: `${user?.firstName} ${user?.lastName}`,
      phone: user?.phone,
    },
  });

  const onPressEdit = () => {};

  return { control, handleSubmit, onPressEdit };
};
