import React, { useContext } from 'react';
import * as C from '../../styleCards';
import { MdOutlineExplicit } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiMicrophone } from 'react-icons/gi';
import { ItensContext } from '../../../providers/itens';
import api from "../../../Services/api";

const CardMusic = ({ item }) => {
  const { setItens } = useContext(ItensContext)

  const formatMusicDuration = (time) => {
    let mins = Math.floor((time % 3600) / 60);
    let secs = Math.floor(time % 60);
    let result = "";
    result += (mins < 10 ? '0' : '') + mins + ":" + (secs < 10 ? "0" : "");
    result += "" + secs;
    return result;
  }

  const getMusicByArtist = async (id) => {
    try {
      const data = await api.get(`artist/${id}/top?limit=25"`)
      setItens(data.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  const getMusicByAlbum = async (id) => {
    try {
      const data = await api.get(`/album/${id}`)
      setItens([data.data])

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <C.MusicStats>
      <C.Position>
        {item.position ?
          `${item.position} º`
          : null}
      </C.Position>

      {item.album ?
        <C.ImagePreview>
          <C.ImageMusic background={item.album.cover}>
            <AiOutlineHeart />
          </C.ImageMusic >
        </C.ImagePreview>
        :
        <C.ImagePreview>
          <C.ImageMusic>
            <SiYoutubemusic
              style={{
                fontSize: '2rem',
                color: 'grey'
              }} />
          </C.ImageMusic >
        </C.ImagePreview>
      }

      {item.title_short ?
        <C.MusicName>
          {item.title_short}
          <C.MusicExplicit>
            {item.explicit_lyrics === 'true' ?
              <MdOutlineExplicit />
              :
              null}
          </C.MusicExplicit>
        </C.MusicName>
        :
        <C.MusicName>
          {item.title}
          <C.MusicExplicit>
            {item.explicit_lyrics === 'true' ?
              <MdOutlineExplicit />
              :
              null}
          </C.MusicExplicit>
        </C.MusicName>
      }

      <C.FavMusic>
        <AiOutlineHeart />
      </C.FavMusic>
      <C.MusicComplete
        href={item.link}
        rel='noreferrer'
        target='_blank'>
        <GiMicrophone />
      </C.MusicComplete>

      <C.MusicArtist onClick={() => getMusicByArtist(item.artist.id)}>
        {item.artist.name}
      </C.MusicArtist>

      {item.album ?
        <C.MusicAlbum onClick={() => getMusicByAlbum(item.album.id)}>
          {item.album.title}
        </C.MusicAlbum>
        : null}

      <C.MusicDuration>
        {formatMusicDuration(item.duration)}
      </C.MusicDuration>
    </C.MusicStats>
  )
}

export default CardMusic;