import styled from "styled-components";

/*-------------------------------------------
------------------CARD-MUSIC-----------------
-------------------------------------------*/


export const GlobalMusicList = styled.div`
`

export const MusicStats = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: .9rem;
  align-items: center;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover{
    background: lightgrey;
  }
`

export const ImagePreview = styled.div`
  width: 60px;
  height: 60px;
  border: none;
  padding: 0 20px;
`

export const ImageMusic = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:pink;
`

export const MusicName = styled.div`
  width: 280px;
  display: flex;
  gap: 10px;
`

export const MusicExplicit = styled.div``

export const FavMusic = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

export const MusicComplete = styled.a`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  padding: 5px;
  margin: 0 20px;

  &:hover{
    border-radius: 50%;
    background: #FFF;
  }
`

export const MusicArtist = styled.div`
  width: 180px;
  padding-right: 20px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export const MusicAlbum = styled.div`
  width: 220px;
  padding-right: 20px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export const MusicDuration = styled.div`
  text-align: center;
  width: 60px;
  padding-right: 30px;
`

/*-------------------------------------------
------------------CARD-ARTIST-----------------
-------------------------------------------*/

export const GridList = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`
export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  margin-right: 20px;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`

export const CardArtistGlobal = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const ArtistCollumOne = styled.div`
  display: flex;
`
export const ArtistImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
export const ArtistCollumTwo = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const ArtistName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`

export const ArtistLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  padding-top: 10px;
`
export const ArtistLinkDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
`

export const ArtistTracklist = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
`

/*-------------------------------------------
------------------CARD-ALBUM-----------------
-------------------------------------------*/

export const CardAlbumGlobal = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const AlbumCollumOne = styled.div`
  display: flex;
`
export const AlbumImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
`
export const AlbumCollumTwo = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const AlbumName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`

export const AlbumArtist = styled.div`
  font-size: .8rem;
  color: #929292;
`

export const AlbumLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  padding-top: 10px;
`
export const AlbumLinkDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
`

export const AlbumTracklist = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
  `

/*-------------------------------------------
------------------CARD-PLAYLIST-----------------
-------------------------------------------*/

export const CardPlaylistGlobal = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const PlaylistCollumOne = styled.div`
  display: flex;
`
export const PlaylistImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
export const PlaylistCollumTwo = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const PlaylistName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`

export const PlaylistCreator = styled.div`
  font-size: .8rem;
  color: #929292;
`

export const PlaylistLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  padding-top: 10px;
`
export const PlaylistLinkDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
`

export const PlaylistTracklist = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
  `

/*-------------------------------------------
------------------CARD-PODCAST-----------------
-------------------------------------------*/

export const CardPodcastGlobal = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const PodcastCollumOne = styled.div`
  display: flex;
  align-items: center;
`
export const PodcastImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
export const PodcastCollumTwo = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const PodcastName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`

export const PodcastLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  padding-top: 10px;
`
export const PodcastLinkDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: #929292;
  &:hover{
    background-color: grey;
    color: #FFF;
  }
`
export const PodcastDescript = styled.p`
  font-size: 1rem;
  color: #929292;
`
