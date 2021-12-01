import React, { useContext } from 'react';
import * as C from '../../styleCards';
import { RiPlayListLine } from 'react-icons/ri'
import { GiMicrophone } from 'react-icons/gi'
import { ItensContext } from '../../../providers/itens';
import api from "../../../Services/api";



const CardArtist = ({ item }) => {
  const { setItens } = useContext(ItensContext)

  const getMusicByArtist = async (id) => {
    try {
      const data = await api.get(`artist/${id}/top?limit=25"`)
      setItens(data.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  const RankingArtist = (pos) => {
    switch (pos) {
      case 1: return pos
      default: return pos
    }
  }

  return (
    <C.CardArtistGlobal>
      <C.Position>
        {RankingArtist(item.position)}º
      </C.Position>
      <C.ArtistCollumOne>
        <C.ArtistImage background={item.picture_medium} />
      </C.ArtistCollumOne>
      <C.ArtistCollumTwo>
        <C.ArtistName>
          {item.name}
        </C.ArtistName>
        <C.ArtistLinks>
          <C.ArtistLinkDeezer
            href={item.link}
            rel='noreferrer'
            target='_blank'
          >
            <GiMicrophone />
          </C.ArtistLinkDeezer>
          <C.ArtistTracklist>
            <RiPlayListLine onClick={() => getMusicByArtist(item.id)} />
          </C.ArtistTracklist>
        </C.ArtistLinks>

      </C.ArtistCollumTwo>
    </C.CardArtistGlobal>
  )
}

export default CardArtist;