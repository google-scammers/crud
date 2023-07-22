import { AxiosResponse } from 'axios';

import { axiosInstance } from './config';

export type Article = {
  id: number;
  title: string;
  author: string;
  created_at: Date;
  content: string;
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
