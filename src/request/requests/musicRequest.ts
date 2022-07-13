import request from '../index';

export async function getLrc(id: number) {
  return request({
    method: 'POST',
    url: 'http://localhost:8050/api/lrc',
    data: { id },
  });
}

export async function getMusic() {
  console.log('test');
}
