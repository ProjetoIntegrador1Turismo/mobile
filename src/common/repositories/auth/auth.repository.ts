import 'react-native-get-random-values';
import { Platform } from 'react-native';
import RegisterModel from 'src/common/models/register.model';
import UserModel from 'src/common/models/user.model';
import {
  LoginDTO,
  RecoveryDTO,
  RegisterDTO,
  RegisterGuideDTO,
  UpdateProfileDTO,
} from 'src/common/repositories/auth/auth.types';
import { api } from 'src/common/repositories/client';
import { v4 as uuidv4 } from 'uuid';

import { GetMeModel } from '../../models/getme.model';
import UpdateModel from '../../models/update.model';
import { nameSplit } from '../../utils/nameSplit';

export const Login = async ({ username, password }: LoginDTO): Promise<UserModel> => {
  const { data } = await api.post<UserModel>(
    '/auth',
    JSON.stringify({
      username,
      password,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

export const Register = async (data: RegisterDTO | RegisterGuideDTO): Promise<RegisterModel> => {
  const payload = {
    ...data,
    ...('cadasturCode' in data ? { cadasturCode: data.cadasturCode } : {}),
  };
  const { data: UserData } = await api.post<RegisterModel>(
    '/user/create',
    JSON.stringify(payload),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return UserData;
};

export const Recovery = async ({ email }: RecoveryDTO) => {
  const { data } = await api.post(`/user/recovery?email=${email}`);
  return data;
};

export const UpdateProfile = async ({ name, password, phone }: UpdateProfileDTO) => {
  const { firstName, lastName } = nameSplit(name);
  const { data } = await api.put<UpdateModel>(
    '/user/update',
    JSON.stringify({
      firstName,
      lastName,
      newPassword: password || null,
      phone,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

export const UploadProfilePicture = async (uri: string) => {
  if (!uri) {
    throw new Error('URI inválido para o upload.');
  }

  const payload = new FormData();
  const fileType = uri.split('.').pop();

  payload.append('file', {
    uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
    type: `image/${fileType}`,
    name: `${uuidv4()}.${fileType}`,
  } as any);

  try {
    const { data } = await api.post<string>('/file/upload/user', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    console.error('Upload API error:', error);
    throw error;
  }
};

export const RefreshToken = async (refresh_token: string): Promise<UserModel> => {
  const response = await fetch(
    `http://104.236.219.8:8081/auth/refresh?refreshToken=${refresh_token}`,
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    throw new Error('Refresh token failed');
  }

  return response.json();
};

export const GetMe = async (): Promise<GetMeModel> => {
  const { data } = await api.get<GetMeModel>('/user/me');
  return data;
};
