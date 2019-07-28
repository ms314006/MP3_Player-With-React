import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { IMusicList } from '../../lib/interface/IMusicList';
import styles from './index.scss';

interface MusicListsProps {
  musicLists: IMusicList[];
}

const MusicLists = (props: MusicListsProps) => {
  return (
      <div className={styles.musicListBlock}>
        <div className={styles.memberBlock}>
          <div className={styles.memberIcon}>
            <img src="./icon/head.svg" />
          </div>
          <span className={styles.memberName}>神 Q 超人</span>
        </div>
        <div className={styles.musicListTitle}>Your Music List</div>
        <div className={styles.musicLists}>
        {
          props.musicLists.map((musicList, index) => (
            <div
              key={musicList.id}
              className={styles.musicList}
            >
              {musicList.name}
            </div>
          ))
        }
        </div>
      </div>
  );
};

const mapStateToProps = (state: { musicLists: IMusicList[] }) => ({
    musicLists: state.musicLists,
});

export default connect(mapStateToProps)(MusicLists);
