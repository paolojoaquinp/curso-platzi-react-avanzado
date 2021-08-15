import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Error, Form, Input, Button, Title, Spinner } from './styles';
import SubmitButton from '../SubmitButton';

// la prop disabled es true si esta cargando porque le estamos enviando "loading"
const UserForm = ({error, loading, disabled, onSubmit, title }) => {
    const [form, setForm] = useState({email: '',password: ''});

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: form.email, password: form.password });
    }
    const notify = (e) => {
        toast.error(e);
    }

    return (
        <React.Fragment>
            {error && notify(error)}
            <ToastContainer position="top-center"/>
            
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input placeholder="Email" disabled={disabled} name="email" value={form.email} onChange={handleForm} />
                <Input placeholder="Password" disabled={disabled} name="password" type="password" value={form.password} onChange={handleForm} />

                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {loading && 
                <Spinner />
            }
        </React.Fragment>
    );
}

export default UserForm;