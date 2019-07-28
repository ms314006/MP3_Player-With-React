import React, { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { IMusic } from '../../lib/interface/IMusic';
import styles from './index.scss';

interface MenuProps {
  music: IMusic;
}

const Menu = (props: MenuProps) => {
  const menuList = ['Home', 'Discover', 'Radio'];
  const musicLibrary = ['Recently played', 'Liked music', 'Albums', 'Singer'];
  return (
    <div className={styles.menuBlock}>
      <div className={styles.menuTopBlock} >
        <div className={styles.logoBlock}>
          <img src="./icon/LOGO.svg" className={styles.logoImg} />
          <span className={styles.title}>Music Box</span>
        </div>
        <div className={styles.menuListBlock}>
          {
            menuList.map((aList) => (
              <div key={aList} className={styles.listBlock}>
                <img src={`./icon/${aList.toLowerCase()}.svg`} className={styles.listIcon} />
                <span className={styles.listTitle}>{aList}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.menuCenterBlock}>
        <div className={styles.centerTitleBlock}>
          <span>Your Music Library</span>
        </div>
        <div>
          {
            musicLibrary.map((aList) => (
              <div
                key={aList}
                className={styles.listBlock}
                style={{
                  borderLeft: `4px solid ${aList === 'Albums' ? '#6AC8D0' : '#FFFFFF'}`
                }}
              >
                <span className={styles.listTitle}>{aList}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.menuBottomBlock}>
        <div
          className={styles.menuImg}
          style={{ backgroundImage: `url(./image/${props.music.name}.jpg)`, }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: { music: IMusic }) => ({
  music: state.music,
});

export default connect(mapStateToProps)(Menu);
