import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Category } from '../Category';
import { List, Item } from './styles';
import useCategoriesData from '../../hooks/useCategoriesData';
// import initialState from '../../initialState'; 
import LoadingBar from 'react-top-loading-bar';

const ListOfCategoriesComponent = () => {
    // const [categories, setCategories] = useState([]);
    const { categories, loading, setLoading } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            if (showFixed !== newShowFixed) {
                setShowFixed(newShowFixed);
            }
        }
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {loading ?
                <Item key='loading'><Category /></Item>
                : categories.map(category => (
                <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                </Item>
            ))}
        </List>
    )

    // const { categories } = initialState; 
    // if (loading) {
    //     return 'Cargando...';
    // }
    return (
        <>
            <LoadingBar 
                color="#f11946"
                progress={loading}
                onLoaderFinished={() => setLoading(0)}
            />
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
};

const ListOfCategories = React.memo(ListOfCategoriesComponent);

export default ListOfCategories;