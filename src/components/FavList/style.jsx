import styled from 'styled-components';

export const GlobalFavList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`

export const GridListFav = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media(max-width: 1300px){
    width: 90%;
  }
  @media(max-width: 700px){
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 400px){
    width: 95%;
    grid-template-columns: repeat(1, 1fr);
  } 
`

export const SettingsFavList = styled.div`
  padding-top: 30px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 1300px){
    width: 90%;
  }
  @media(max-width: 700px){
    width: 95%;
  }
  @media(max-width: 470px){
    padding-top: 0px;
    flex-direction: column;
    gap: 20px;
    font-size: .8rem;
  }
`

export const GridListEmpty = styled.div`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  padding-top: 50px;
  margin-bottom: 56vh;
`
