import React, { StatelessComponent } from 'react';
import MusicList from './MusicList';
import styles from './index.scss';


const PlayerContent = () => {
  return (
      <div className={styles.playerContent}>
        <div className={styles.musicContent}>
          Top Song
          <MusicList />
        </div>
        <div className={styles.albumContent}>
          New Album
        </div>
      </div>
  );
};

export default PlayerContent;
