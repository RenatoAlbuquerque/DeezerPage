import React, { useContext } from 'react';
import * as C from '../../styleCards';
import { RiPlayListLine } from 'react-icons/ri';
import { GiMicrophone } from 'react-icons/gi';
import { ItensContext } from '../../../providers/itens';
import api from "../../../Services/api";

const CardPlaylist = ({ item }) => {
  const { setItens } = useContext(ItensContext)

  const getMusicByPlaylist = async (id) => {
    try {
      const data = await api.get(`/playlist/${id}`)
      setItens(data.data.tracks.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <C.CardPlaylistGlobal>
      <C.Position>
        {item.position ? `${item.position} º` : null}
      </C.Position>
      <C.PlaylistCollumOne>
        <C.PlaylistImage background={item.picture_medium} />
      </C.PlaylistCollumOne>
      <C.PlaylistCollumTwo>
        <C.PlaylistName>
          {item.title}
        </C.PlaylistName>
        <C.PlaylistCreator>
          Por: {item.user.name}
        </C.PlaylistCreator>
        <C.PlaylistLinks>
          <C.PlaylistLinkDeezer
            href={item.link}
            rel='noreferrer'
            target='_blank'
          >
            <GiMicrophone />
          </C.PlaylistLinkDeezer>
          <C.PlaylistTracklist>
            <RiPlayListLine onClick={() => getMusicByPlaylist(item.id)} />
          </C.PlaylistTracklist>
        </C.PlaylistLinks>

      </C.PlaylistCollumTwo>
    </C.CardPlaylistGlobal>
  )
}

export default CardPlaylist;