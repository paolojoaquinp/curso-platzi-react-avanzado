import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';

import Layout from './components/Layout';

// import NavBar from './components/NavBar';
// import { GlobalStyle } from './styles/GlobalStyles';
// import Logo from './components/Logo';

// import ListOfCategories from './components/ListOfCategories';
// import ListOfPhotoCards from './components/ListOfPhotoCards';
// import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

const UserLogged = ({ children }) => {
    return children({ isAuth: false });
}

const App = () => {
    // Temporal, para vanilla js
    // const urlParams = new window.URLSearchParams(window.location.search);
    // const detailId = urlParams.get('detail');
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/'render={(props) =><Home {...props} />} />
                    <Route exact path='/pet/:id'render={(props) =><Home {...props} />} />
                    <Route exact path='/detail/:detailId' component={Detail}/>
                    <UserLogged>
                        {
                            ({ isAuth }) =>
                                isAuth
                                ? <>
                                    <Route exact path='/favs' component={Favs} />
                                    <Route exact path='/user' component={User} />
                                </>
                                : <>
                                    <Route component={NotRegisteredUser} />
                                    {/* <Route exact path='/favs' component={NotRegisteredUser} />
                                    <Route exact path='/user' component={NotRegisteredUser} /> */}
                                </>
                        }
                    </UserLogged>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;