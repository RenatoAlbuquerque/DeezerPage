import React, { useContext } from 'react';

import { ItensContext } from '../../providers/itens';
import { MusicContext } from '../../providers/musicPreview'
import { ModalContext } from '../../providers/modal';

import * as F from './style';
import { FaDeezer } from 'react-icons/fa';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const FavList = () => {
    const { favList, removeFavMusic, clearCart, handlePages } = useContext(ItensContext);
    const { setMusicPreview } = useContext(MusicContext);
    const { setModal } = useContext(ModalContext);

    const openModal = () => {
        setModal(true)
    }

    const playMusic = (musicOn) => {
        setMusicPreview(musicOn)
        openModal()
    }

    return (
        <F.GlobalFavList>
            <F.SettingsFavList>
                <Button
                    style={{ color: 'black', borderColor: 'black' }}
                    variant="outlined"
                    onClick={() => handlePages(false)}
                >
                    retornar a página inicial
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => clearCart(favList)}
                    style={{ color: 'black', borderColor: 'black' }}
                >
                    Limpar Músicas
                </Button>
            </F.SettingsFavList>
            {favList.length ?
                <F.GridListFav>
                    {
                        favList.length ? favList.map((item, id) =>
                            <Card key={id} sx={{ maxWidth: 300 }}>
                                <CardActionArea
                                    onClick={() =>
                                        playMusic(item)}
                                >
                                    {item.album ?
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={item.album.cover_big}
                                            alt={item.title_short}
                                        />
                                        : <p>IMAGEM INDÍSPONIVEL</p>
                                    }
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title_short}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.artist.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href={item.link}
                                        rel='noreferrer'
                                        target='_blank'>
                                        <FaDeezer
                                            style={{ fontSize: '1.5rem', color: '#000' }}
                                        />
                                    </Button>
                                    <Button
                                        size="small"
                                        color="primary"
                                        style={{ color: 'lightgrey' }}
                                        onClick={() => removeFavMusic(item)}
                                    >
                                        REMOVER
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                            :
                            null
                    }
                </F.GridListFav>
                :
                <F.GridListEmpty>
                    <p>ADICIONE ITENS A SUA LISTA</p>
                </F.GridListEmpty>
            }

        </F.GlobalFavList>
    );
}

export default FavList;





