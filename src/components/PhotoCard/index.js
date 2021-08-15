import React, { useState, useEffect, useRef } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Article, ImgWrapper, Img } from './styles';  
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen();
    // const key = `like-${id}`;
    // const [liked, setLiked] = useLocalStorage(key, false);
    // console.log(liked);
    
    //Ternaria para icono cliqueado, corazon con relleno/solo con  bordes
    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    
    
    return (
        <Article ref={element}>
            {
                show && 
                <React.Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="imagen"/>
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    toggleLike({ variables: {
                                        input: { id }
                                    }});
                                }
                                
                                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                            }
                        }
                    </ToggleLikeMutation>
                    {/* <Button onClick={() => setLiked(!liked)}>
                        <Icon size='32px'/>{likes} likes!
                    </Button> */}
                </React.Fragment>
            }
        </Article>
    )
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function(props, propName, componentName) {
        const propValue = props[propName];
        if(propValue === undefined) {
            return new Error(`${propName} value must be defined`)
        }

        if(propValue < 0) {
            return new Error(`${propName} value must be greater than 0`)
        }
    }
}

export default PhotoCard;