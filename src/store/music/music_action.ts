import { CHNAGEMUSICSTATE } from './music_constant';

export default function createChangeMusicStateAction(data: any) {
  return { type: CHNAGEMUSICSTATE, data };
}
