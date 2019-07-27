import {
  PLAY_MUSIC,
  STOP_MUSIC,
  NEXT_MUSIC,
  PRIVIOUS_MUSIC,
  UPDATE_SOUND
} from '../actions/player';
import AudioPlayer from '../lib/AudioPlayer';
import { IMusic } from '../lib/interface/IMusic';
import musics from '../asset/musics';

// create player
const player = new AudioPlayer(musics);
player.initPlayer();

export const initState: { sound: number, music: IMusic, musicList: IMusic[]} = {
  sound: player.sound,
  music: player.currentPlayMusic,
  musicList: player.musics,
};

const playerReducer = (state = initState, action: any) => {
  const updateCurrentMusic = () => ({
    ...state,
    music: player.currentPlayMusic,
  });
  switch (action.type) {
    case PLAY_MUSIC:
      player.playMusic();
      return updateCurrentMusic();
    case STOP_MUSIC:
      player.stopMusic();
      return { ...state, };
    case NEXT_MUSIC:
      player.nextMusic();
      return updateCurrentMusic();
    case PRIVIOUS_MUSIC:
      player.previousMusic();
      return updateCurrentMusic();
    case UPDATE_SOUND: {
      player.updateSound(action.payload.sound);
      return {
        ...state,
        sound: player.sound,
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
