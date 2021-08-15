import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (e) {
            return initialValue;
        }
    });

    // Guardar En local Storage
    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key,JSON.stringify(value));
            setValue(value);
        } catch (e) {
            console.error(e);            
        }
    }

    return [storedValue, setLocalStorage];
};

export default useLocalStorage;