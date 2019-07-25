import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../lib/interface/IMusic';
import AudioPlayer from '../../lib/AudioPlayer';
import musics from '../../asset/musics';
import * as actions from '../../actions/player';
import styles from './index.scss';

interface PlayerProps {
  sound: number;
  music: IMusic;
  updateSound(sound: number): void;
  chageMusic(music: IMusic): void;
}

// create player
const player = new AudioPlayer(musics);
player.initPlayer();

const Player = (props: PlayerProps) => {
  useEffect(() => {
    props.updateSound(player.sound);
  }, []);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          player.playMusic();
          props.chageMusic(player.currentPlayMusic);
        }}
      >
        點我開始
      </button>
      <button type="button" onClick={player.stopMusic}>
        點我暫停
      </button>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={player.sound}
        onChange={(e) => {
          player.updateSound(Number(e.target.value));
          props.updateSound(player.sound);
        }}
        className={styles.soundController}
      />
      <button
        type="button"
        onClick={
          () => {
            player.previousMusic();
            props.chageMusic(player.currentPlayMusic);
          }
        }
      >
        上一首
      </button>
      <button
        type="button"
        onClick={
          () => {
            player.nextMusic();
            props.chageMusic(player.currentPlayMusic);
          }
        }
      >
        下一首
      </button>
      <span>歌曲{player.currentPlayMusic.name}</span>
    </div>
  );
};

const mapStateToProps = (state: { sound: number, music: IMusic }) => ({
  music: state.music,
  sound: state.sound,
});

const mapStateToDispatch = (dispatch: any) => ({
  chageMusic: (music: IMusic) => { dispatch(actions.chageMusic(music)); },
  updateSound: (sound: number) => { dispatch(actions.updateSound(sound)); },
});

export default connect(mapStateToProps, mapStateToDispatch)(Player);
