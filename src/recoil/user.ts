import { atom } from 'recoil';

import { User } from '../apis/user';

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
