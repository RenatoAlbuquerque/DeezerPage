import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  justify-content: center;
`

//------------------------------------------
//------------------SEARCH------------------
//------------------------------------------

export const SearchGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

export const SearchBar = styled.div`
  width: 45%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const SearchIcon = styled.div`
  font-size: 1.3rem;
  color: #72727D;
  display: flex;
  align-items: center;
  border: 1px solid #72727d4e;
  border-left: none;
  padding: 7px 6px;
  cursor: pointer;
`

export const SearchInput = styled.input.attrs({ type: 'search' })`
  color: #72727D;
  padding: 10px 0px 10px 10px;
  width: 100%;
  border: 1px solid #72727d4e;
  border-right: none;
  &:active{
    border: none;
  }
`
export const ListGenres = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 10px; 
  justify-content: space-between;
  align-items: center;
`

export const ButtonGenres = styled.button`
  padding: 5px 10px;
  border-radius: 50px;
  border: none;
  &:hover{
    opacity: .5;
  }
`

//----------------------------------------------
//------------------MUSIC LIST------------------
//----------------------------------------------

export const MusicListGlobal = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const GridMusicList = styled.div`
  width: 60%;
`
//----------------------------------------------
//------------------ARTIST INFO------------------
//----------------------------------------------

export const InfoArtist = styled.div`
  display:flex ;
  align-items: center ;
  gap: 50px ;
  font-family: Arial, Helvetica, sans-serif;
`
export const ArtistDescript = styled.div`
  flex-direction: column;
  align-items: center ;
  
`
export const ArtistImage = styled.img`
  width: 250px ;
  border-radius: 50%;
  -webkit-box-shadow: -2px 3px 9px 6px rgba(0,0,0,0.25);
  box-shadow: -2px 3px 9px 6px rgba(0,0,0,0.25);
  `

//----------------------------------------------
//------------------CARD MUSIC------------------
//----------------------------------------------

export const MusicCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: OpenSans,Arial,sans-serif;
  color: #72727dac;
  &:hover{
    opacity: .7;
    background-color: #8080802d;
  }
`


export const ImgPreview = styled.div`  
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50px;
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PlayPreview = styled.button`
  color: #fbfbfb;
  opacity: 0;
  width: 70%;
  height: 70%;
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  &:hover{
    opacity: .8;
  }
`

export const MusicName = styled.p`
  text-align: left;
  padding-left: 10px;
  width: 350px;
  cursor: pointer;
  &:hover{
    text-decoration: underline
  }
`

export const MusicComplete = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1px 4px;
  color: #72727D;
  &:hover{
    background-color: #fbfbfb;
    border-radius: 50%;
    padding: 1px 4px;
  }
`


export const SpanExplicit = styled.span`
  font-size: 18px;
  padding-left: 10px;
`

export const FavoriteMusic = styled.div`
  font-size: 23px;
  cursor: pointer;
  padding: 0 20px;
`

export const ArtistName = styled.p`
  cursor: pointer;
  width: 150px;
  text-decoration:none;
  color: #72727D;
  padding: 0 20px;
  &:hover{
    text-decoration: underline;
  }
`

export const ArtistAlbum = styled.a`
  cursor: pointer;
  width: 150px;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`

export const MusicDuration = styled.p`
  width: 65px;
  text-align: center;
  padding-right: 10px;
`


export const ModalPlayerAudio = styled.div`
  display:flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: grey;
`
