import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { IMusic } from '../../../../lib/interface/IMusic';
import styles from './index.scss';

interface MusicListProps {
  musicList: IMusic[];
}

const MusicList = (props: MusicListProps) => {
  return (
      <div className={styles.musicListBlock}>
        {
          props.musicList.map(
            (music, index) => (
              <List key={music.id} music={music} index={index} />
            )
          )
        }
      </div>
  );
};

const mapStateToProps = (state: { musicList: IMusic[] }) => ({
  musicList: state.musicList,
});

export default connect(mapStateToProps)(MusicList);
