import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Title, Subtitle } from './styles';

const LayoutTemplate = ({ children, title, subtitle, home = false }) => {
    return (
        <React.Fragment>
            <Helmet>
                {title && <title>{title} | Petgram 🐶</title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            <Div>
                {(!home && title) && <Title>{title}</Title>}
                {(!home && subtitle) && <Subtitle>{subtitle}</Subtitle>}
                { children }
            </Div>
        </React.Fragment>
    )
};

export default LayoutTemplate;