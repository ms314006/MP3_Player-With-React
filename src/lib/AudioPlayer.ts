import { IPlayer } from './interface/IPlayer';
import { IMusic } from './interface/IMusic';
import playType from './enum/playType';
import playStatus from './enum/playStatus';

class AudioPlayer implements IPlayer {
  audioPlayer: any;

  musics: IMusic[];

  currentPlayMusic: IMusic;

  sound: number = 20;

  playType: playType;

  playStatus: playStatus;

  constructor(musics: IMusic[]) {
    this.audioPlayer = new Audio();
    this.musics = musics;
    this.currentPlayMusic = { ...musics[0], };
    this.playType = playType.loop;
    this.playStatus = playStatus.play;
  }

  static convertSecondToString = (second: number): string => {
    // 除 60 + 冒號 + 除 60 的餘數
    const fillTwoLength = (target: (string | number), fillStr: string) => {
      let result = String(target);
      while (result.length < 2) {
        result = `${fillStr}${result}`;
      }
      return result;
    };
    return `${fillTwoLength(Math.floor(second / 60), '0')}:${fillTwoLength(Math.floor(second) % 60, '0')}`;
  }

  private getMusicIndexWithId(musicId: string): number {
    const result: number = this.musics.findIndex((music: IMusic) => music.id === musicId);
    return result;
  }

  initPlayer = (): void => {
    this.audioPlayer.src = `./music/${this.currentPlayMusic.name}.mp3`;
    this.audioPlayer.currentTime = 0;
    this.audioPlayer.addEventListener('ended', this.nextMusic, false);
    const playPromise = this.audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.audioPlayer.play();
      }).catch(() => {
        this.audioPlayer.play();
      });
    }
  }

  playMusic = (): void => {
    this.playStatus = playStatus.play;
    this.audioPlayer.play();
  }

  stopMusic = (): void => {
    this.playStatus = playStatus.stop;
    this.audioPlayer.pause();
  }

  nextMusic = (): void => {
    const currentPlayerMusicIndex = this.getMusicIndexWithId(this.currentPlayMusic.id);
    const nextMusicIndex = currentPlayerMusicIndex === this.musics.length - 1 ? 0 : currentPlayerMusicIndex + 1;
    this.currentPlayMusic = this.musics[nextMusicIndex];
    this.initPlayer();
  }

  previousMusic = (): void => {
    const currentPlayerMusicIndex = this.getMusicIndexWithId(this.currentPlayMusic.id);
    const previousMusicIndex = currentPlayerMusicIndex === 0 ? this.musics.length - 1 : currentPlayerMusicIndex - 1;
    this.currentPlayMusic = this.musics[previousMusicIndex];
    this.initPlayer();
  }

  choiceMusic = (musicId: string): void => {
    this.currentPlayMusic = this.musics[this.getMusicIndexWithId(musicId)];
    this.initPlayer();
  }

  getCurrentPlayTime = (): number => this.audioPlayer.currentTime;

  changeCurrentPlayTime = (time: number): void => {
    this.audioPlayer.currentTime = time;
  }

  changePlayType = (): void => {
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

  updateSound = (sound: number): void => {
    this.sound = sound;
    this.audioPlayer.volume = this.sound / 100;
  }
}

export default AudioPlayer;
