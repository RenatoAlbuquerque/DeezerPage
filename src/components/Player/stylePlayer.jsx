import styled from 'styled-components'

export const InfoMusicOn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const InfoOne = styled.div`
  padding-right: 20px;
`
export const InfoTwo = styled.div`
  flex-direction: column;
`
export const PlayeImagePreview = styled.div`
  width: 100px;
  height: 100px;
`

export const PlayImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
export const PlayerInfo = styled.div`
  font-family: arial,sans-serif;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #FFF;
`