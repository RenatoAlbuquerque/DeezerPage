import React from 'react';
import * as C from '../../styleCards';
import { GiMicrophone } from 'react-icons/gi';

const CardPodcast = ({ item }) => {

  const formatDescriptionPodcast = (descript) => {
    const format = descript.substring(0, 250)
    if (format.length >= 250) {
      return `${format}....`
    } else {
      return format
    }
  }

  return (
    <C.CardPodcastGlobal>
      <C.PodcastCollumOne>
        <C.ArtistImage background={item.picture_medium} />
      </C.PodcastCollumOne>
      <C.PodcastCollumTwo>
        <C.PodcastName>
          {item.title}
        </C.PodcastName>
        <C.PodcastLinks>
          <C.PodcastLinkDeezer
            href={item.link}
            rel='noreferrer'
            target='_blank'
          >
            <GiMicrophone />
          </C.PodcastLinkDeezer>
          <C.PodcastDescript>
            {formatDescriptionPodcast(item.description)}
          </C.PodcastDescript>
        </C.PodcastLinks>

      </C.PodcastCollumTwo>
    </C.CardPodcastGlobal>
  )
}

export default CardPodcast;