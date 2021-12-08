import React, { useContext } from 'react';
import * as S from '../style';
import { FaUserAlt } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FavContext } from '../../providers/favMusic';

const Header = () => {
  const favList = useContext(FavContext)
  const itemsCount = Object.keys(favList.favList).length

  return (
    <S.Header>
      <Link to='/'>
        <S.Logo
          src="https://rollingstone.uol.com.br/media/_versions/legacy/2013/img-1015746-deezer-logo_widelg.jpg"
          alt="logo deezer" />
      </Link>
      <S.UserOptions>
        <S.PageMusicFavs>
          <BsHeartHalf />
          {itemsCount > 0 && <span>{itemsCount}</span>}
        </S.PageMusicFavs>
        <S.Login>
          <Link to='/user'>
            <FaUserAlt style={{ color: '#FFF' }} />
          </Link>
        </S.Login>
      </S.UserOptions>
    </S.Header>
  )
}
export default Header