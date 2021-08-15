import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import LayoutTemplate from '../components/LayoutTemplate';

const Detail = (props) => {
    const { detailId } = props.match.params;
    return (
        <LayoutTemplate title={`Fotografia ${detailId}`}>
            <PhotoCardWithQuery id={detailId}/>
        </LayoutTemplate>
    )
};

export default Detail;