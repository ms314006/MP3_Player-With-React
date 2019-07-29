import { IMusic } from './IMusic';
import playType from '../enum/playType';
import playStatus from '../enum/playStatus';

export interface IPlayer {
  audioPlayer: any;
  musics: IMusic[];
  currentPlayMusic: IMusic;
  sound: number;
  playType: playType;
  playStatus: playStatus;
  playMusic(): void;
  stopMusic(): void;
  playNextMusic(): void;
  playPreviousMusic(): void;
  playChoiceMusic(musicId: string): void;
  getCurrentPlayTime(): number;
  changeCurrentPlayTime(time: number): void;
  changePlayType(): void;
  updateSound(sound: number): void;
}
