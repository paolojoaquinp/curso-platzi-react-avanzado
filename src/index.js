import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import App from './routes/App';

const httpLink = createHttpLink({
    uri: 'https://petgram-server-paolo.vercel.app/graphql'
})

const authLink = setContext((_, { headers })  => {
    const token = window.sessionStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: '',
        }
    };
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'));