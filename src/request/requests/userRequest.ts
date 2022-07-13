import request from '../index';

export async function login(userName: any, password: any) {
  return request({
    method: 'POST',
    url: 'http://localhost:8050/api/login',
    data: { userName, password },
  });
}

export async function logout() {
  console.log('test');
}
