import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(0);
    useEffect(
        async () => {
            try {
                const res = await axios.get('https://petgram-server-paolo.vercel.app/categories');
                setLoading(loading + 40);
                const { data } = await res;
                setLoading(loading + 40);
                setCategories(data);
            } catch (err) {
                console.error(err);
            }
            setLoading(100);
        }
    ,[]);
    return { categories, loading, setLoading };
};

export default useCategoriesData;