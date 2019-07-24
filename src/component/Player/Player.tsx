import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../lib/interface/IMusic';
import AudioPlayer from '../../lib/AudioPlayer';
import musics from '../../asset/musics';
import * as actions from '../../actions/player';

interface PlayerProps {
  sound: number;
  music: IMusic;
  updateSound(sound: number): void;
}

// create player
const player = new AudioPlayer(musics);
player.initPlayer();

const Player = (props: PlayerProps) => {
  props.updateSound(player.sound);
  return (
    <div>
      <button type="button" onClick={player.playMusic}>
        點我開始
      </button>
      <button type="button" onClick={player.stopMusic}>
        點我暫停
      </button>
      <button
        type="button"
        onClick={
          () => {
            player.addSound();
            props.updateSound(player.sound);
          }
        }
      >
        大聲
      </button>
      <button
        type="button"
        onClick={
          () => {
            player.subSound();
            props.updateSound(player.sound);
          }
        }
      >
        小聲
      </button>
      <span>音量{props.sound}</span>
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
