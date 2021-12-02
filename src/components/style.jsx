import styled from "styled-components";

/*-------------------------------------------
------------------HEADER---------------------
-------------------------------------------*/

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #000000;
`

export const Logo = styled.img`
  margin-left: 50px;
  width: 150px;
`

export const UserOptions = styled.div`
  margin-right: 50px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`

export const PageMusicFavs = styled.div`

`

export const Login = styled.div`

`


/*-------------------------------------------
------------------MUSIC-LIST-----------------
-------------------------------------------*/


export const GlobalMusicList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const LocalTrending = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  background-color: #EFEFEF;
  margin-bottom: 50px;
  padding: 20px 0;
`
export const TrendingTypes = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  width: 70%;
  @media(max-width: 1500px) {
    width: 90%;
  }
`

export const ButtonsTrending = styled.button`
  color: grey;
  padding: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  opacity: 1;
  transition: all ease .02s;
  font-weight: 600;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  width: 100%;
  
  &:hover{
    opacity: 0.7;
    border: 2px solid grey;
  }
`

export const cardTypes = styled.div`
  width: 70%;
  @media(max-width: 1500px) {
    width: 90%;
  }
`

/*-------------------------------------------
------------------SEARCH---------------------
-------------------------------------------*/

export const BackSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #000000;
  padding-bottom: 20px;
  
`
export const GlobalSearch = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  
`

export const Search = styled.input.attrs({ type: 'Search' })`
  width: 50%;
  display: flex;
  background: transparent;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #F0f0f0;
  border-right: none;
  color: #F0f0f0;
  outline:none;
`

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 7px;
  border: 1px solid lightgrey;
  background: transparent;
  color: #F0f0f0;
  border-left: none;
  cursor: pointer;
`
