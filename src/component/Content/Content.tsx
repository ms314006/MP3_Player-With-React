import React, { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import PlayerContent from './PlayerContent';
import * as actions from '../../actions/player';
import styles from './index.scss';

interface ContentProps {
  playNextMusic(): void;
  playPreviousMusic(): void;
}

const Content = (props: ContentProps) => {
  return (
    <div className={styles.contentBlock}>
      <div
        className={styles.bannerImage}
        style={{ backgroundImage: `url(./image/main.jpg)`, }}
      >
        <div className={styles.bannerTopBlock}>
            <div className={styles.bannerPlayerController}>
                <img
                  src={`./icon/arrow-left.svg`}
                  className={styles.arrowControllerLeft}
                  onClick={props.playPreviousMusic}
                />
                <img
                  src={`./icon/arrow-right.svg`}
                  className={styles.arrowControllerRight}
                  onClick={props.playNextMusic}
                />
            </div>
            <div className={styles.bannerSeachInput}>
                <input placeholder="Seach" />
                <img
                  src={`./icon/search.svg`}
                  className={styles.searchIcon}
                />
            </div>
        </div>
        <div className={styles.bannerbottomBlock}>
          <div className={styles.bannerTitle}>
            Enjoy life enjoy coding.
          </div>
        </div>
      </div>
      <PlayerContent />
    </div>
  );
};

const mapStateToDispatch = (dispatch: any) => ({
  playNextMusic: () => { dispatch(actions.playNextMusic()); },
  playPreviousMusic: () => { dispatch(actions.playPreviousMusic()); },
});

export default connect(null, mapStateToDispatch)(Content);
