import { AxiosResponse } from 'axios';

import { axiosInstance } from './config';
import { Temp } from './user';

export type Article = {
  id: number;
  author: string;
  title: string;
  content: string;
  created_at: Date;
};

/*
async는 비동기 처리할 때 사용하는 키워드
promise를 리턴한다.
*/
export const getArticle = async (): Promise<AxiosResponse<Article[]>> => {
  const res = await axiosInstance({
    method: 'GET',
    url: 'article',
  });
  return res;
};

// uploadArticle
export const uploadArticle = async (
  data: FormData
): Promise<AxiosResponse<Temp>> => {
  const res = await axiosInstance({
    url: 'article',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

// Delete Article
export const deleteArticle = async (
  id: number,
  accessToken: string
): Promise<AxiosResponse<Temp>> => {
  const res = await axiosInstance({
    url: `article/?id=${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });
  return res;
};
