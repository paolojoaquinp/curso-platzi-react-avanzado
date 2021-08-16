import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SubmitButton from '../components/SubmitButton';
import LayoutTemplate from '../components/LayoutTemplate';
const User = () => {
    const { removeAuth } = useContext(AppContext);
    return (
        <React.Fragment>
            <LayoutTemplate title="Usuario" subtitle="">
                <SubmitButton onClick={() => removeAuth()}>Cerrar Sesión</SubmitButton>
            </LayoutTemplate>
        </React.Fragment>
    )
}

export default User;