'use server';

import { axiosPublic } from '@/lib/axios';
import { isAxiosError } from 'axios';
import { getServerSession } from 'next-auth';
import { FieldValues } from 'react-hook-form';
import { authOptions } from './auth-options';

export type Status = {
  status: 'default' | 'success' | 'error';
  message: string;
  data?: object;
};

//auth actions
export const loginAction = async (data: FieldValues) => {
  try {
    const response = await axiosPublic.post('/auth/sign-in', data);
    console.log(response.data);
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    const accessTokenExpiresIn = response.data.accessTokenExpiresIn;
    const refreshTokenExpiresIn = response.data.refreshTokenExpiresIn;
    return {
      data: {
        user: { ...response.data.user },
        tokenInfo: {
          accessToken,
          refreshToken,
          accessTokenExpiresIn,
          refreshTokenExpiresIn,
        },
      },
      message: response.data.message,
      status: 'success',
    } as Status;
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: 'error',
      } as Status;
    }
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await axiosPublic.get('/auth/refresh', {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    });
    console.log(response);
    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    const newAccessTokenExpiresIn = response.data.accessTokenExpiresIn;
    const newRefreshTokenExpiresIn = response.data.refreshTokenExpiresIn;

    return {
      data: {
        accessToken: newAccessToken,
        accessTokenExpiresIn: newAccessTokenExpiresIn,
        refreshToken: newRefreshToken,
        refreshTokenExpiresIn: newRefreshTokenExpiresIn,
      },
      message: response.data.message,
      status: 'success',
    } as Status;
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: 'error',
      } as Status;
    }
  }
};

export const signUpAction = async (data: FieldValues) => {
  console.log(data);
  try {
    const { email, firstName, lastName, password } = data;
    const response = await axiosPublic.post('/auth/sign-up', {
      email,
      firstName,
      lastName,
      password,
    });
    console.log(response.data);
    return {
      status: 'success',
      data: response.data,
      message: response.data.message as string,
    } as Status;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        status: 'error',
        message: error.response?.data.message,
      } as Status;
    }
  }
};

//account-setup

export const setupAccountDetails = async (data: FieldValues) => {
  const session = await getServerSession(authOptions);
  try {
    const response = await axiosPublic.post('/user/account-setup', data, {
      headers: {
        Authorization: `Bearer ${session?.tokenInfo.accessToken}`,
        Cookie: `refreshToken=${session?.tokenInfo.refreshToken}`,
      },
    });
    return {
      status: 'success',
      data: response.data,
      message: response.data.message as string,
    } as Status;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        status: 'error',
        message: error.response?.data.message,
      } as Status;
    }
  }
};
