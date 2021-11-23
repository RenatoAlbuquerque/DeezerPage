import React from 'react';
import * as Style from '../style';
import MusicCard from '../MusicCard';

export default function MusicList() {

  return (
    <Style.MusicListGlobal>
      <Style.GridMusicList >
        <MusicCard />
      </Style.GridMusicList>
    </Style.MusicListGlobal>
  )
}