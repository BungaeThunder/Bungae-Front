import axios from 'axios';

import PathEnum from 'paths';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const Api = axios.create({
  baseURL: PathEnum.API_URL + '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// TODO: 토큰 구현시 아래 코드 추가
// if (
//     typeof window !== 'undefined' &&
//     window.localStorage.getItem('cakey-login-token')
// ) {
//     Api.defaults.headers.common[
//         'Authorization'
//         ] = `Bearer ${window.localStorage.getItem('cakey-login-token')}`;
// }

export default Api;
