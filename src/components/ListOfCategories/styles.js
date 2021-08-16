import styled, {css} from 'styled-components';
import { bounceDown } from '../../styles/animation'; 

export const List = styled.ul`
    overflow: scroll;
    overflow-y: hidden;
    margin: 10px 0;
    padding: 5px 0;
    width: 100%;
    display: flex;
    ${(props) => {
        if(props.fixed) {
            return css`
                {
                    ${bounceDown()}
                    background:#fff;
                    border-radius: 60px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    left: 0;
                    margin: 0 auto;
                    max-width: 400px;
                    overflow-x:hidden;
                    padding: 5px;
                    position: fixed;
                    right: 0;
                    top: -20px;
                    transform: scale(.5);
                    z-index: 1;
                }
            `;
        }
    } }
    /* width */
    &::-webkit-scrollbar {
        width: 1px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #ccc; 
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: grey; 
    }

    /* &::-webkit-scrollbar {
        display: none;
    } */
`;

export const Item = styled.li`
    padding: 0 8px;
`;