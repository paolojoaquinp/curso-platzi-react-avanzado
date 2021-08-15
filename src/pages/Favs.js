import React from 'react';
import { RenderProp } from '../containers/GetFavorites';
import LayoutTemplate from '../components/LayoutTemplate';

const Favs = () => {
    return (
        <LayoutTemplate title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
            <h1>Favs</h1>
            <RenderProp />
        </LayoutTemplate>
    );
};

export { Favs as default };