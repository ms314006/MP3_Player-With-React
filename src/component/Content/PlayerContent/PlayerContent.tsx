import React, { StatelessComponent } from 'react';
import MusicList from './MusicList';
import AlbumList from './AlbumList';
import styles from './index.scss';


const PlayerContent = () => {
  return (
      <div className={styles.playerContent}>
        <div className={styles.musicContent}>
          <span className={styles.contentListTitle}>Top Song</span>
          <MusicList />
        </div>
        <div>
          <span className={styles.contentListTitle}>New Album</span>
          <AlbumList />
        </div>
      </div>
  );
};

export default PlayerContent;
