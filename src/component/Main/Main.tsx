import React, { StatelessComponent } from 'react';
import Player from '../Player';
import Menu from '../Menu';
import Content from '../Content';
import styles from './index.scss';

const Main = () => {
  return (
    <div
      className={styles.mainBlock}
      data-testid="mainBlock"
    >
      <Menu />
      <Content />
      <div style={{ backgroundColor: '#ffa', }} />
      <div className={styles.playerControllerBlock}>
        <Player />
      </div>
    </div>
  );
};

export default Main;
