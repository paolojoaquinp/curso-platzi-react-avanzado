import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Error, Form, Input, Button, Title, Spinner, Div } from './styles';
import SubmitButton from '../SubmitButton';

import PetLogo from '../PetLogo';

// la prop disabled es true si esta cargando porque le estamos enviando "loading"
const UserForm = ({error,
                   loading,
                   disabled,
                   onSubmit,
                   title,
                   path,
                   messageAlert    }) => {
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
                <PetLogo />
                <Input placeholder="Email" disabled={disabled} name="email" value={form.email} onChange={handleForm} />
                <Input placeholder="Password" disabled={disabled} name="password" type="password" value={form.password} onChange={handleForm} />
                {title !== 'Registrarse' &&
                    <Div>
                        <div>
                            <input id="remember-me" type="checkbox" />
                            <label htmlFor="remember-me">Recuerdame</label>
                        </div>
                        <a href="#">Olvidaste tu contraseña?</a>
                    </Div>
                }
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
                <p>{messageAlert}<span><Link to={path}>{title}</Link></span></p>
            </Form>
            {loading && 
                <Spinner />
            }
        </React.Fragment>
    );
}

export default UserForm;