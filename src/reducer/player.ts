import {
  PLAY_MUSIC,
  STOP_MUSIC,
  PLAY_NEXT_MUSIC,
  PLAY_PREVIOUS_MUSIC,
  UPDATE_CURRENT_PLAY_TIME,
  CHANGE_CURRENT_PLAY_TIME,
  UPDATE_SOUND,
  PLAY_CHOICE_MUSIC
} from '../actions/player';
import AudioPlayer from '../lib/AudioPlayer';
import { IMusic } from '../lib/interface/IMusic';
import { IMusicList } from '../lib/interface/IMusicList';
import { IAlbum } from '../lib/interface/IAlbum';
import playStatus from '../lib/enum/playStatus';
import albumLists from '../asset/albumLists';
import musicLists from '../asset/musicLists';
import musics from '../asset/musics';

// create player
const player = new AudioPlayer(musics);
player.initPlayer();

interface IState {
  sound: number;
  music: IMusic;
  playStatus: playStatus;
  currentPlayTime: number;
  musics: IMusic[];
  musicLists: IMusicList[];
  albumLists: IAlbum[];
}

export const initState = {
  sound: player.sound,
  music: player.currentPlayMusic,
  playStatus: player.playStatus,
  currentPlayTime: 0,
  musics: player.musics,
  musicLists,
  albumLists,
};

const playerReducer = (state: IState = initState, action: any) => {
  const updatePlayerInformation = () => ({
    ...state,
    music: player.currentPlayMusic,
    playStatus: player.playStatus,
    currentPlayTime: player.getCurrentPlayTime(),
  });
  switch (action.type) {
    case PLAY_MUSIC:
      player.playMusic();
      return updatePlayerInformation();
    case STOP_MUSIC:
      player.stopMusic();
      return updatePlayerInformation();
    case PLAY_NEXT_MUSIC:
      player.playNextMusic();
      return updatePlayerInformation();
    case PLAY_PREVIOUS_MUSIC:
      player.playPreviousMusic();
      return updatePlayerInformation();
    case UPDATE_CURRENT_PLAY_TIME:
      return updatePlayerInformation();
    case CHANGE_CURRENT_PLAY_TIME:
      player.changeCurrentPlayTime(action.payload.second);
      return updatePlayerInformation();
    case PLAY_CHOICE_MUSIC:
      player.playChoiceMusic(action.payload.musicId);
      return updatePlayerInformation();
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
