import React, { StatelessComponent } from 'react';
import Player from '../Player';
import styles from './index.scss';

const Main = () => {
  return (
    <div
      className={styles.title}
      data-testid="title"
    >
      <Player />
    </div>
  );
};

export default Main;
