import request from '../index';

export async function getLrc(id: number) {
  return request({
    method: 'POST',
    url: '/api/lrc',
    data: { id },
  });
}

export async function getMusicInfo(id: number) {
  return request({
    method: 'POST',
    url: '/api/picture',
    data: { id },
  });
}
