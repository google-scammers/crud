import { AxiosResponse } from 'axios';

import { axiosInstance } from './config';

export type Article = {
  title: string;
  author: string;
};

/* 
async는 비동기 처리할 때 사용하는 키워드
promise를 리턴한다.
*/
export const getArticle = async (): Promise<AxiosResponse<Article[]>> => {
  const res = await axiosInstance({
    method: 'GET',
    url: 'articles',
  });
  return res;
};

