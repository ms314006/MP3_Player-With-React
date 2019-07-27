import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../lib/interface/IMusic';
import AudioPlayer from '../../lib/AudioPlayer';
import * as actions from '../../actions/player';
import styles from './index.scss';

interface PlayerProps {
  sound: number;
  music: IMusic;
  playMusic(): void;
  stopMusic(): void;
  nextMusic(): void;
  previousMusic(): void;
  updateSound(sound: number): void;
}

const Player = (props: PlayerProps) => {
  return (
    <div>
      <button type="button" onClick={props.playMusic}>
        點我開始
      </button>
      <button type="button" onClick={props.stopMusic}>
        點我暫停
      </button>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={props.sound}
        onChange={(e) => { props.updateSound(Number(e.target.value)); }}
        className={styles.soundController}
      />
      <button type="button" onClick={props.previousMusic}>
        上一首
      </button>
      <button type="button" onClick={props.nextMusic}>
        下一首
      </button>
      <span>歌曲{props.music.name}</span>
    </div>
  );
};

const mapStateToProps = (state: { sound: number, music: IMusic }) => ({
  music: state.music,
  sound: state.sound,
});

const mapStateToDispatch = (dispatch: any) => ({
  playMusic: () => { dispatch(actions.playMusic()); },
  stopMusic: () => { dispatch(actions.stopMusic()); },
  nextMusic: () => { dispatch(actions.nextMusic()); },
  previousMusic: () => { dispatch(actions.priviousMusic()); },
  updateSound: (sound: number) => { dispatch(actions.updateSound(sound)); },
});

export default connect(mapStateToProps, mapStateToDispatch)(Player);
