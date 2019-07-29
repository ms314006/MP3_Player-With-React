import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { IAlbum } from '../../../../lib/interface/IAlbum';

interface MusicListProps {
  albumLists: IAlbum[];
}

const AlbumList = (props: MusicListProps) => {
  return (
      <div>
        {
          props.albumLists.map(
            (album, index) => (
              <List key={album.id} album={album} index={index} />
            )
          )
        }
      </div>
  );
};

const mapStateToProps = (state: { albumLists: IAlbum[] }) => ({
  albumLists: state.albumLists,
});

export default connect(mapStateToProps)(AlbumList);
