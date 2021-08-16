import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`;

export const Image = styled.img`
    border: 1px solid transparent;
    box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
    border-radius: 50%;
    height: auto;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    background: white;
    height: 75px;
    width: 75px;
    padding: 2px;
    margin: 2px;
    `;

export const Border = styled.div`
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-clip: padding-box;
    border: 0px solid transparent;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(to right, rgb(191, 59, 153), rgb(241, 134, 59));
    }
`;