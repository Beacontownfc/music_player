import { CHNAGEMUSICSTATE } from './music_constant';

const initState = { currentTime: 0 };

function MusicReducer(preState = initState, action: { type: any; data: any }) {
  const { type, data } = action;
  if (preState === undefined) return initState;
  switch (type) {
    case CHNAGEMUSICSTATE:
      preState.currentTime = data;
      return { ...preState };
    default:
      return initState;
  }
}

export default MusicReducer;
