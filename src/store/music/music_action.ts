import {
  CHNAGEMUSICSTATE,
  CHANGEMUSIC,
  CHNAGEAUDIOREF,
  PLAYMUSIC,
} from './music_constant';

export function createChangeMusicStateAction(data: any) {
  return { type: CHNAGEMUSICSTATE, data };
}

export function createChangeMusicAction(data: any) {
  return { type: CHANGEMUSIC, data };
}

export function createChangeMusic(data: any) {
  return { type: CHNAGEAUDIOREF, data };
}

export function createPlayMusicAction() {
  return { type: PLAYMUSIC };
}
