import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SubmitButton from '../components/SubmitButton';

const User = () => {
    const { removeAuth } = useContext(AppContext);
    return (
        <React.Fragment>
            <h1>User</h1>
            <SubmitButton onClick={() => removeAuth()}>Cerrar Sesión</SubmitButton>
        </React.Fragment>
    )
}

export default User;