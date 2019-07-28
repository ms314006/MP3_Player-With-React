import React from 'react';
import { IAlbum } from '../../../../../lib/interface/IAlbum';
import styles from './index.scss';

interface ListProps {
  index: number;
  album: IAlbum;
}

const List = (props: ListProps) => {
  return (
    <div className={styles.listBlock}>
      <div
        className={styles.albumListsImg}
        style={{ backgroundImage: `url(./image/musicList/${props.album.name}.jpg)`, }}
      />
      <div className={styles.albumInfo}>
        <span>{props.album.name}</span>
        <span className={styles.albumYear}>{props.album.year}</span>
      </div>
    </div>
  );
}

export default List;
