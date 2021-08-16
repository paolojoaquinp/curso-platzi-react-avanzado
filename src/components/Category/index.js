import React from 'react'; 
import { Link, Image, Border } from './styles';


const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';

export const Category = ({cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => (
    <Link to={path}>
        <Border>
            <Image src={cover} />
        </Border>
        {emoji}
    </Link>
);