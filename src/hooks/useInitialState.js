import { useState } from 'react';

const useInitialState = () => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token');
    });
    const activateAuth = (token) => {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
    }

    const removeAuth = () => {
        setIsAuth(false)
        window.sessionStorage.removeItem('token')
        __APOLLO_CLIENT__.resetStore()
    };

    return {
        isAuth,
        activateAuth,
        removeAuth
    }
}

export default useInitialState;