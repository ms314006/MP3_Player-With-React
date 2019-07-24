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
  nextMusic(): void;
  previousMusic(): void;
  choiceMusic(musicId: string): void;
  switchPlayType(): void;
  addSound(): void;
  subSound(): void;
}
