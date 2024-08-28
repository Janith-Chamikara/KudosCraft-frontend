'use server';

import { axiosPublic } from '@/lib/axios';
import { isAxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import { getTokenFromCookies, getTokenOptions } from './utils';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth-options';

export type Status = {
  status: 'default' | 'success' | 'error';
  message: string;
  data?: object;
};

export const loginAction = async (data: FieldValues) => {
  try {
    const response = await axiosPublic.post('/v1/auth/login', data);
    const cookies = response.headers['set-cookie'];
    const accessToken = getTokenFromCookies(cookies as string[], 'accessToken');
    const accessTokenExpiresIn = getTokenOptions(
      cookies as string[],
      'accessToken',
      2,
    );
    const refreshTokenExpiresIn = getTokenOptions(
      cookies as string[],
      'refreshToken',
      2,
    );
    const refreshToken = getTokenFromCookies(
      cookies as string[],
      'refreshToken',
    );
    return {
      data: {
        ...response.data.user,
        accessToken,
        refreshToken,
        accessTokenExpiresIn,
        refreshTokenExpiresIn,
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

export const logOutAction = async () => {
  const session = await getServerSession(authOptions);
  try {
    const response = await axiosPublic.get('/v1/auth/logout', {
      headers: {
        Cookie: `accessToken=${session?.user.accessToken}; refreshToken=${session?.user.refreshToken}`,
      },
    });
    return {
      data: response.data,
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
    const response = await axiosPublic.get('/v1/auth/refresh', {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    });
    const cookies = response.headers['set-cookie'];
    const newAccessToken = getTokenFromCookies(
      cookies as string[],
      'accessToken',
    );
    const newAccessTokenExpiresIn = getTokenOptions(
      cookies as string[],
      'accessToken',
      2,
    );
    const newRefreshToken = getTokenFromCookies(
      cookies as string[],
      'refreshToken',
    );
    const newRefreshTokenExpiresIn = getTokenOptions(
      cookies as string[],
      'refreshToken',
      2,
    );

    return {
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        accessTokenExpiresIn: newAccessTokenExpiresIn,
        refreshTokenExpiresIn: newRefreshTokenExpiresIn,
      },
      message: response.data.message,
      status: 'success',
    } as Status;
  } catch (error) {
    console.log(error);
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
    return {
      status: 'success',
      data: response.data,
      message: response.data.message as string,
    } as Status;
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: 'error',
        message: error.response?.data.message,
      } as Status;
    }
  }
};
