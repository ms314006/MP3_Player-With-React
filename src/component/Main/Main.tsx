import React, { StatelessComponent } from 'react';
import styles from './index.scss';

interface MainProps {
  title?: string
}

const Main: StatelessComponent<MainProps> = (props) => {
  return (
    <div
      className={styles.title}
      data-testid="title"
    >
      {props.title}
    </div>
  );
};

Main.defaultProps = {
  title: 'default',
};

export default Main;
