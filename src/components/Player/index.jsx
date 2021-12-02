import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MusicContext } from '../../providers/musicPreview';
import { PausePlayContext } from '../../providers/pausePlayMusic';
import React, { useContext, useRef } from 'react';
import * as P from './stylePlayer';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PausePlayProvider from '../../providers/pausePlayMusic.js';

const Player = () => {
  const { musicPreview } = useContext(MusicContext)
  const { setPausePlayMusic } = useContext(PausePlayContext)

  const infoMusicOn = (music) => {
    return <P.InfoMusicOn>
      <P.InfoOne>
        {music.album ?
          <P.PlayeImagePreview>
            <P.PlayImage background={music.album.cover} />
          </P.PlayeImagePreview>
          : null}
      </P.InfoOne>
      <P.InfoTwo>
        {music.artist && music.album ?
          <P.PlayerInfo>
            <p>{music.title}</p>
            <p>{music.artist.name}</p>
          </P.PlayerInfo>
          : null}
      </P.InfoTwo>
      <AiOutlineCloseCircle
        style={{ fontSize: '2rem', cursor: 'pointer' }}
      />
    </P.InfoMusicOn>
  }

  const player = useRef(false)
  setPausePlayMusic(player)

  return (
    <PausePlayProvider>
      <AudioPlayer
        ref={player}
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
        style={{
          width: '50%',
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#000000',
          color: 'lightgrey'
        }}
        header={infoMusicOn(musicPreview)}
      />
    </PausePlayProvider>
  )
}
export default Player;