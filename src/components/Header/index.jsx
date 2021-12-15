import React, { useContext } from 'react';
import * as S from '../style';
import { FaUserAlt } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';
import { ItensContext } from '../../providers/itens';

const Header = () => {
  const { favList, handlePages } = useContext(ItensContext)

  const favListCount = (quant) => {
    if (quant === 0) {
      return null
    } else {
      return quant
    }
  }

  return (
    <S.Header>
      <S.Logo
        src="https://rollingstone.uol.com.br/media/_versions/legacy/2013/img-1015746-deezer-logo_widelg.jpg"
        alt="logo deezer" />
      <S.UserOptions>
        <S.PageMusicFavs>
          <BsHeartHalf />
          <S.FavlistCount>
            {favListCount(favList.length)}
          </S.FavlistCount>
        </S.PageMusicFavs>
        <S.Login>
          <FaUserAlt
            style={{ color: '#FFF', cursor: 'pointer' }}
            onClick={() =>
              handlePages(true)} />
        </S.Login>
      </S.UserOptions>
    </S.Header>
  )
}
export default Header