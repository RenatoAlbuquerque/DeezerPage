import React, { useContext } from 'react';
import * as C from '../../styleCards';
import { RiPlayListLine } from 'react-icons/ri';
import { GiMicrophone } from 'react-icons/gi';
import { ItensContext } from '../../../providers/itens';
import api from "../../../Services/api";

const CardAlbuns = ({ item }) => {
  const { setItens } = useContext(ItensContext)

  const getMusicByAlbum = async (id) => {
    try {
      const data = await api.get(`/album/${id}`)
      setItens(data.data.tracks.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <C.CardAlbumGlobal>
      <C.Position>
        {item.position ? `${item.position} º` : null}
      </C.Position>
      <C.AlbumCollumOne>
        <C.AlbumImage background={item.cover_medium} />
      </C.AlbumCollumOne>
      <C.AlbumCollumTwo>
        <C.AlbumName>
          {item.title}
        </C.AlbumName>
        <C.AlbumArtist>
          {item.artist.name}
        </C.AlbumArtist>
        <C.AlbumLinks>
          <C.AlbumLinkDeezer
            href={item.link}
            rel='noreferrer'
            target='_blank'
          >
            <GiMicrophone />
          </C.AlbumLinkDeezer>
          <C.AlbumTracklist>
            <RiPlayListLine onClick={() => getMusicByAlbum(item.id)} />
          </C.AlbumTracklist>
        </C.AlbumLinks>

      </C.AlbumCollumTwo>
    </C.CardAlbumGlobal>
  )
}

export default CardAlbuns;