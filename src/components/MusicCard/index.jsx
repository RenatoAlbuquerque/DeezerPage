import { ItensContext } from '../../providers/itens';
import React, { useContext, useState } from 'react';
import * as Style from '../style';
import { MdOutlineExplicit } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart, AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { getItensByArtist } from '../requestfunctions';


function MusicCard() {
  const context = useContext(ItensContext)
  const musics = ''

  console.log(musics)
  const [playerMusic, setPlayerMusic] = useState({});
  const [playerState, setPlayerState] = useState({
    playing: false,
  });
  const [modalOn, setModalOn] = useState(false);

  const formatDurationMusic = (time) => {
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return minutes + ":" + seconds;
  }

  const showPlayer = (infoMusic) => {
    setPlayerMusic(infoMusic)
    setModalOn(true);
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    })
  }

  const handleGetByArtist = async (id) => {
    const artistMusic = await getItensByArtist(id)
    console.log(artistMusic, 'artista')
  }


  return (
    <div>
      {musics ?
        musics.map((music, id) => (
          <Style.MusicCard key={id}>
            <Style.ImgPreview
              src={music.album.cover}
              alt={music.artist.title}
            >
              <Style.PlayPreview
                onClick={() => {
                  showPlayer(music)
                }} >
                {playerState.playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
              </Style.PlayPreview>
            </Style.ImgPreview>

            <Style.MusicName>
              {music.title_short}
              {music.explicit_lyrics === true
                ?
                <Style.SpanExplicit>
                  <MdOutlineExplicit />
                </Style.SpanExplicit>
                :
                null}
            </Style.MusicName>

            <Style.MusicComplete
              href={music.link}
              rel="noreferrer"
              target="_blank"
              style={{ color: '#72727dac' }}
            >
              <GiMicrophone />
            </Style.MusicComplete>

            <Style.FavoriteMusic >
              <AiOutlineHeart />
            </Style.FavoriteMusic>

            <Style.ArtistName onClick={() => handleGetByArtist(music.artist.id)}
            >
              {music.artist.name}
            </Style.ArtistName>

            <Style.ArtistAlbum
              href={`https://www.deezer.com/br/album/${music.album.id}`}
              rel="noreferrer"
              target="_blank"
              style={{ color: '#72727dac' }}
            >
              {music.album.title}
            </Style.ArtistAlbum>

            <Style.MusicDuration>
              {formatDurationMusic(music.duration)}
            </Style.MusicDuration>

          </Style.MusicCard>
        )) : 'Pesquise Algo'}

      {modalOn ?
        <Style.ModalPlayerAudio
          onClose={() =>
            setModalOn(false)}
        >
          <AudioPlayer
            autoPlay
            src={playerMusic.preview}
          />
        </Style.ModalPlayerAudio>
        :
        null}
    </div>
  )
}
export default MusicCard
