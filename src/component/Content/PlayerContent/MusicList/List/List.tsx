import React from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../../../../lib/interface/IMusic';
import * as actions from '../../../../../actions/player';
import styles from './index.scss';

interface ListProps {
  index: number;
  music: IMusic;
  currentPlayMusic: IMusic;
  choiceMusic(musicId: string): void;
}

const List = (props: ListProps) => {
  const isCurrentPlayMusic = () => props.currentPlayMusic.name === props.music.name;
  return (
    <div
      className={`${styles.listBlock} ${isCurrentPlayMusic() ? styles.shadow : ''}`}
      onClick={() => { props.choiceMusic(props.music.id) }}
    >
      <div className={styles.listLeftBlock}>
        <div
          className={styles.musicListImg}
          style={{ backgroundImage: `url(./image/${props.music.name}.jpg)`, }}
        />
        <span className={styles.musicListIndex}>{props.index + 1}</span>
        <img
          src="./icon/heart.svg"
          className={styles.listIcon}
        />
        <span>{props.music.name}</span>
      </div>
      <div className={styles.listRightBlock}>
        {
          isCurrentPlayMusic() ?
          <img
            src="./icon/arrow-right-circle.png"
            className={`${styles.listIcon} ${styles.currentPlatIcon}`}
          /> : null
        }
        <img
          src="./icon/keyboard.png"
          className={styles.listIcon}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: { music: IMusic }) => ({
  currentPlayMusic: state.music,
});

const mapStateToDispatch = (dispatch: any) => ({
  choiceMusic: (musicId: string) => { dispatch(actions.choiceMusic(musicId)); },
});

export default connect(mapStateToProps, mapStateToDispatch)(List);
