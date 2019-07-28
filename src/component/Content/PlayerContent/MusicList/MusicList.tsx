import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { IMusic } from '../../../../lib/interface/IMusic';
import styles from './index.scss';

interface MusicListProps {
  musics: IMusic[];
}

const MusicList = (props: MusicListProps) => {
  return (
      <div className={styles.musicListBlock}>
        {
          props.musics.map(
            (music, index) => (
              <List key={music.id} music={music} index={index} />
            )
          )
        }
      </div>
  );
};

const mapStateToProps = (state: { musics: IMusic[] }) => ({
  musics: state.musics,
});

export default connect(mapStateToProps)(MusicList);
