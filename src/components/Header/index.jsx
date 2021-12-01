import * as S from '../style';
import { FaUserAlt } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';

const Header = () => {
  return (
    <S.Header>
      <S.Logo src="https://rollingstone.uol.com.br/media/_versions/legacy/2013/img-1015746-deezer-logo_widelg.jpg" alt="logo deezer" />
      <S.UserOptions>
        <S.PageMusicFavs>
          <BsHeartHalf />
        </S.PageMusicFavs>
        <S.Login>
          <FaUserAlt />
        </S.Login>
      </S.UserOptions>
    </S.Header>
  )
}
export default Header