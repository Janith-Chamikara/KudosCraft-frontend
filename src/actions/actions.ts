'use server';

import { axiosPublic } from '@/app/axios/axios';
import { isAxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';

export type Status = {
  status: 'default' | 'success' | 'error';
  message: string;
};

export const loginAction = async (data: FieldValues) => {
  try {
    const response = await axiosPublic.post('/auth/sign-in', data);
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
export const signUpAction = async (data: FieldValues) => {
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
