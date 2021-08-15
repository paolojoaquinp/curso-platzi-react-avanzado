import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Title, Subtitle } from './styles';

const LayoutTemplate = ({ children, title, subtitle }) => {
    return (
        <React.Fragment>
            <Helmet>
                {title && <title>{title} | Petgram 🐶</title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                { children }
            </Div>
        </React.Fragment>
    )
};

export default LayoutTemplate;