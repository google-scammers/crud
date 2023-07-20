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

export const login = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{ email: string }>> => {
  const res = await axiosInstance({
    url: 'user',
    method: 'POST',
    data,
  });
  return res;
};
