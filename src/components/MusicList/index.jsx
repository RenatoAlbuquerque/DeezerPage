import React, { useEffect, useContext } from 'react';
import * as S from '../style';
import api from "../../Services/api";
import { ItensContext } from '../../providers/itens';
import CardMusic from '../Cards/CardMusic';
import CardAlbuns from '../Cards/CardAlbuns';
import CardArtist from '../Cards/CardArtist';
import CardPlaylist from '../Cards/CardPlaylist';
import CardPodcast from '../Cards/CardPodcast';
import Search from '../Search';
import Header from '../Header';
import Player from '../Player';
import FavList from '../FavList';
import Footer from '../Footer';

const MusicList = () => {
  const { itens, setItens, pages, loadMusicsInitial } = useContext(ItensContext)

  useEffect(() => {
    loadMusicsInitial()
  }, [])

  const loadAlbunsInitial = async () => {
    try {
      const data = await api.get(`editorial/0/charts`)
      setItens(data.data.albums.data)

    } catch (error) {
      console.log(error)
    }
  }

  const loadArtistsInitial = async () => {
    try {
      const data = await api.get(`editorial/0/charts`)
      setItens(data.data.artists.data)

    } catch (error) {
      console.log(error)
    }
  }

  const loadPlaylistsInitial = async () => {
    try {
      const data = await api.get(`editorial/0/charts`)
      setItens(data.data.playlists.data)

    } catch (error) {
      console.log(error)
    }
  }

  const loadPodCastsInitial = async () => {
    try {
      const data = await api.get(`editorial/0/charts`)
      setItens(data.data.podcasts.data)

    } catch (error) {
      console.log(error)
    }
  }

  const componentType = (item) => {
    switch (item.type) {
      case 'track': return <CardMusic item={item} />
      case 'album': return <CardAlbuns item={item} />
      case 'artist': return <CardArtist item={item} />
      case 'playlist': return <CardPlaylist item={item} />
      case 'podcast': return <CardPodcast item={item} />
      default: return null
    }
  }

  return (
    <S.GlobalMusicList>
      <Header />
      <Search />
      {pages === false ?
        <S.LocalTrending>
          <S.TrendingTypes>
            <S.ButtonsTrending onClick={loadMusicsInitial}>Top 10 Músicas</S.ButtonsTrending>
            <S.ButtonsTrending onClick={loadAlbunsInitial}>Top 10 Albuns</S.ButtonsTrending>
            <S.ButtonsTrending onClick={loadArtistsInitial}>Top 10 Artistas</S.ButtonsTrending>
            <S.ButtonsTrending onClick={loadPlaylistsInitial}>Top 10 Playlists</S.ButtonsTrending>
            <S.ButtonsTrending onClick={loadPodCastsInitial}>Top 10 Podcasts</S.ButtonsTrending>
          </S.TrendingTypes>
        </S.LocalTrending>
        : null}
      {pages === false ?
        itens.length ?
          itens.map((item, id) =>
            <S.cardTypes key={id}>
              {componentType(item)}
            </S.cardTypes>
          )
          :
          <S.CardLoading src={"https://cdn.dribbble.com/users/1638555/screenshots/4172113/logo-deezer-animation.gif"} alt="deezer-gif" />
        : <FavList />}
      <Footer />
      <Player />
    </S.GlobalMusicList >
  )
}
export default MusicList