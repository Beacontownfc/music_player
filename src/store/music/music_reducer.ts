import {
  CHNAGEMUSICSTATE,
  CHANGEMUSIC,
  CHNAGEAUDIOREF,
  PLAYMUSIC,
} from './music_constant';

const initState = { currentTime: 0, musicInfo: {}, audioRef: {} };

function MusicReducer(preState = initState, action: { type: any; data: any }) {
  const { type, data } = action;
  if (preState === undefined) return initState;
  switch (type) {
    case CHNAGEMUSICSTATE:
      preState.currentTime = data;
      return { ...preState };
    case CHANGEMUSIC:
      preState.musicInfo = data;
      return { ...preState };
    case CHNAGEAUDIOREF:
      preState.audioRef = data;
      return { ...preState };
    case PLAYMUSIC:
      // preState.audioRef.audioRef.current.play();
      preState.audioRef.clickToPlay(true);
      return preState;
    default:
      return initState;
  }
}

export default MusicReducer;
