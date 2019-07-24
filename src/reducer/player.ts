import { CHANGE_MUSIC, UPDATE_SOUND } from '../actions/player';
import { IMusic } from '../lib/interface/IMusic';

export const initState: { sound: number, music: IMusic } = {
  sound: 0,
  music: {
    id: '',
    name: '讀取中...',
  },
};

const player = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MUSIC:
      return {
        ...state,
        music: action.payload.music,
      };
    case UPDATE_SOUND: {
      return {
        ...state,
        sound: action.payload.sound,
      };
    }
    default:
      return state;
  }
};

export default player;
