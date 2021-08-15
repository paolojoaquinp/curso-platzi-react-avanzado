import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';
import LayoutTemplate from '../components/LayoutTemplate';

const HomePage = (props) => {
    const { id } = props.match.params;
    return (
        <LayoutTemplate title="Tu app de fotos de mascotas" subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos">
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id}/>
        </LayoutTemplate>
    );
};

const Home = React.memo(HomePage, (prevProps, nextProps) => {
    return prevProps.match.params.id === nextProps.match.params.id;
});
export default Home;