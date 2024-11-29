import UserModel from 'src/common/models/user.model';
import { LoginDTO, RegisterDTO, RegisterGuideDTO } from 'src/common/repositories/auth/auth.types';
import { api } from 'src/common/repositories/client';

import RegisterModel from '../../models/register.model';

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
