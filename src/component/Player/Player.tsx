import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../lib/interface/IMusic';
import playStatus from '../../lib/enum/playStatus';
import AudioPlayer from '../../lib/AudioPlayer';
import * as actions from '../../actions/player';
import styles from './index.scss';

interface PlayerProps {
  sound: number;
  music: IMusic;
  playStatus: playStatus;
  currentPlayTime: number;
  playMusic(): void;
  stopMusic(): void;
  playNextMusic(): void;
  playPreviousMusic(): void;
  updateCurrentPlayTime(): void;
  changeCurrentPlayTime(second: number): void;
  updateSound(sound: number): void;
}

let intervalIng: boolean = false;

const Player = (props: PlayerProps) => {
  const isPlay = () => props.playStatus === playStatus.play;
  if (!intervalIng) {
    intervalIng = true;
    const interval = setInterval(() => {
      props.updateCurrentPlayTime();
    }, 1000)
  }
  return (
    <div className={styles.playerBlock}>
      <div className={styles.musicBlock}>
        <div className={styles.topBlock}>
          <span className={styles.musicName}>{props.music.name}</span>
          <img src="./icon/heart.svg" className={styles.icon}/>
          <img src="./icon/replay.svg" className={styles.icon}/>
        </div>
        <div className={styles.bottomBlock}>
          {props.music.author}
        </div>
      </div>
      <div className={styles.playerControllerBlock}>
        <div className={styles.topBlock}>
          <img src="./icon/random.svg" className={styles.icon}/>
          <img
            src="./icon/previous.svg"
            className={styles.icon}
            onClick={props.playPreviousMusic}
          />
          <div className={styles.playStatusIcon}>
            <img
              src={`./icon/${isPlay() ? 'pause' : 'play'}.svg`}
              onClick={isPlay() ? props.stopMusic : props.playMusic}
            />
          </div>
          <img
            src="./icon/next.svg"
            className={styles.icon}
            onClick={props.playNextMusic}
          />
          <img src="./icon/cycle.svg" className={styles.icon}/>
        </div>
        <div className={styles.bottomBlock}>
          <span>
            {AudioPlayer.convertSecondToString(
              props.currentPlayTime
            )}
          </span>
          <input
            type="range"
            min="0"
            max={props.music.playTimeLength}
            step="1"
            style={{ width: '100%', }}
            value={props.currentPlayTime}
            onChange={(e) => {
              props.changeCurrentPlayTime(Number(e.target.value));
            }}
          />
          <span>
            {AudioPlayer.convertSecondToString(
              props.music.playTimeLength
            )}
          </span>
        </div>
      </div>
      <div className={styles.soundBlock}>
        <img src="./icon/list.svg" className={styles.icon}/>
        <img src="./icon/volume.svg" className={styles.icon}/>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={props.sound}
          onChange={(e) => { props.updateSound(Number(e.target.value)); }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state:
  {
    sound: number,
    music: IMusic,
    playStatus: playStatus,
    currentPlayTime: number,
  }
) => ({
  music: state.music,
  sound: state.sound,
  playStatus: state.playStatus,
  currentPlayTime: state.currentPlayTime,
});

const mapStateToDispatch = (dispatch: any) => ({
  playMusic: () => { dispatch(actions.playMusic()); },
  stopMusic: () => { dispatch(actions.stopMusic()); },
  playNextMusic: () => { dispatch(actions.playNextMusic()); },
  playPreviousMusic: () => { dispatch(actions.playPreviousMusic()); },
  updateCurrentPlayTime: () => { dispatch(actions.updateCurrentPlayTime()) },
  changeCurrentPlayTime: (second: number) => { dispatch(actions.changeCurrentPlayTime(second)) },
  updateSound: (sound: number) => { dispatch(actions.updateSound(sound)); },
});

export default connect(mapStateToProps, mapStateToDispatch)(Player);
