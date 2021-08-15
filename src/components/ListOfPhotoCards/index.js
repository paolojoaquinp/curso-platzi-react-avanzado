import React from 'react';
import PhotoCard from '../PhotoCard';
import { useQuery } from '@apollo/client'; 
import GET_PHOTOS from '../../hoc/withPhotos';


// OLD
const ListOfPhotoCards = ({ categoryId = 2 }) => {
    const { loading, error, data } = useQuery(GET_PHOTOS, {
        variables: { categoryId: categoryId }
      });
    if (error) {
        return <h2>Internal Server Error</h2>;
      }
      if (loading) {
        return <h2>Loading...</h2>;
    }
    const { photos } = data;  
    return (
        <ul>
            {photos.map(item => (
                <PhotoCard key={item.id} {...item}/>
            ))}
        </ul>
    )
};

export default ListOfPhotoCards;