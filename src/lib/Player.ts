import { IPlayer } from './reference/IPlayer';
import { IMusic } from './reference/IMusic';
import playType from './enum/playType';
import playStatus from './enum/playStatus';

class Player implements IPlayer {
  musics: IMusic[];

  currentPlayMusic: IMusic;

  sound: number;

  playType: playType;

  playStatus: playStatus;

  constructor(musics: IMusic[]) {
    this.musics = musics;
    this.currentPlayMusic = { ...musics[0], };
    this.sound = 20;
    this.playType = playType.loop;
    this.playStatus = playStatus.play;
  }

  private getMusicIndexWithId(musicId: string): number {
    const result: number = this.musics.findIndex((music: IMusic) => music.id === musicId);
    return result;
  }

  playMusic(): void {
    this.playStatus = playStatus.play;
  }

  stopMusic(): void {
    this.playStatus = playStatus.stop;
  }

  nextMusic(): void {
    const currentPlayerMusicIndex = this.getMusicIndexWithId(this.currentPlayMusic.id);
    const nextMusicIndex = currentPlayerMusicIndex === this.musics.length - 1 ? 0 : currentPlayerMusicIndex + 1;
    this.currentPlayMusic = this.musics[nextMusicIndex];
  }

  previousMusic(): void {
    const currentPlayerMusicIndex = this.getMusicIndexWithId(this.currentPlayMusic.id);
    const previousMusicIndex = currentPlayerMusicIndex === 0 ? this.musics.length - 1 : currentPlayerMusicIndex - 1;
    this.currentPlayMusic = this.musics[previousMusicIndex];
  }

  choiceMusic(musicId: string): void {
    this.currentPlayMusic = this.musics[this.getMusicIndexWithId(musicId)];
  }

  switchPlayType(): void {
    switch (this.playType) {
      case playType.loop:
        this.playType = playType.repeat;
        break;
      case playType.repeat:
        this.playType = playType.random;
        break;
      case playType.random:
        this.playType = playType.loop;
        break;
      default:
        throw new Error('No have playType');
    }
  }

  addSound(): void {
    const newSound = this.sound + 1;
    this.sound = newSound > 100 ? 100 : newSound;
  }

  subSound(): void {
    const newSound = this.sound - 1;
    this.sound = newSound < 0 ? 0 : newSound;
  }
}

export default Player;
