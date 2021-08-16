import React, { useContext } from 'react';
import UserForm from '../components/UserForm';

import AppContext from '../context/AppContext';
import { useRegisterMutation } from '../containers/RegisterMutation';
// import { useLoginMutation } from '../containers/LoginMutation';

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);
    const [registerMutation, { data, loading: loadingRegister, error: errorRegister }] = useRegisterMutation();

    // const [login, { loading: loadingLogin, error: errorLogin }] = useLoginMutation();

    const onSubmitRegister = ({email, password}) => {
        const input = { email, password }
        const variable = { input }
        registerMutation({variables: variable})
        .then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
        });
    }

    // const onSubmitLogin = ({ email, password }) => {
    //     const input = { email, password };
    //     const variable = { input };
    //     login({ variables: variable })
    //     .then(({ data }) => {
    //         const { login } = data;
    //         activateAuth(login);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }

    const errorMsgRegister = errorRegister && `El usuario ya existe o hay algún problema`;
    // const errorMsgLogin = errorLogin && `El usuario no existe o hay algún problema`;
    return (
        <React.Fragment>
            <UserForm
                loading={loadingRegister}
                error={errorMsgRegister}
                onSubmit={onSubmitRegister}
                title='Registrarse'
                disabled={loadingRegister}
                path="/login"
                messageAlert="Ya estas registrado?"
            />
        </React.Fragment>
    );
}

export default NotRegisteredUser;