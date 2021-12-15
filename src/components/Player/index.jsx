import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MusicContext } from '../../providers/musicPreview';
import { ModalContext } from '../../providers/modal';
import React, { useContext } from 'react';
import * as P from './stylePlayer';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Player = () => {
  const { musicPreview } = useContext(MusicContext)
  const { modal, setModal } = useContext(ModalContext)

  const infoMusicOn = (music) => {
    return (
      <P.InfoMusicOn>
        <P.InfoOne>
          {music.album ?
            <P.PlayeImagePreview>
              <P.PlayImage background={music.album.cover} />
            </P.PlayeImagePreview>
            : <><p>IMAGEM</p><p>INDÍSPONIVEL</p></>}
        </P.InfoOne>
        <P.InfoTwo>
          {music.artist || music.album ?
            <P.PlayerInfo>
              <p>{music.title}</p>
              <p>{music.artist.name}</p>
            </P.PlayerInfo>
            : null}
        </P.InfoTwo>
        <AiOutlineCloseCircle
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          onClick={() => setModal(prev => !prev)}
        />
      </P.InfoMusicOn>
    )
  }

  const style = {
    width: '50%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#000000ce',
    color: 'lightgrey',
  }

  return (
    <>
      {modal ?
        < AudioPlayer
          autoPlay
          src={musicPreview.preview}
          customAdditionalControls={[]}
          layout="horizontal"
          customProgressBarSection={
            [
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_LEFT_TIME,
            ]
          }
          style={style}
          header={infoMusicOn(musicPreview)}
        />
        : null}
    </>
  )
}
export default Player;