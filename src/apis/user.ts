import { AxiosResponse } from 'axios';

import { axiosInstance } from './config';

export type User = {
  email: string;
};

export const getUser = async (
  accessToken: string
): Promise<AxiosResponse<User>> => {
  const res = await axiosInstance({
    method: 'GET',
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });
  return res;
};

export const login = async (data: FormData): Promise<AxiosResponse<User>> => {
  const res = await axiosInstance({
    url: 'user/signin',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const signup = async (data: FormData): Promise<AxiosResponse<User>> => {
  const res = await axiosInstance({
    url: 'user/signup',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
