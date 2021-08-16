import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

import Home from '../pages/Home';
// import Detail from '../pages/Detail';
// import Favs from '../pages/Favs';
// import User from '../pages/User';
// import NotRegisteredUser from '../pages/NotRegisteredUser';
import NotFound from '../pages/NotFound';
// import PrivateRoutes from './PrivateRoutes';

import Layout from '../components/Layout';
import useInitialState from '../hooks/useInitialState';

const Favs = lazy(() => import('../pages/Favs'));
const User = lazy(() => import('../pages/User'));
const Detail = lazy(() => import('../pages/Detail'));
const NotRegisteredUser = lazy(() => import('../pages/NotRegisteredUser'));
const Register = lazy(() => import('../pages/Registrarse'));

const App = () => {
    const initialState = useInitialState();
    const { isAuth } = initialState;
    return (
        <AppContext.Provider value={initialState}>
            <Router>
                <Layout>
                    <Suspense fallback={<h1>Loading aca....</h1>} >
                        <Switch>
                            <Route exact path='/'render={(props) =><Home {...props} />} />
                            <Route exact path='/pet/:id'render={(props) =><Home {...props} />} />
                            <Route exact path='/detail/:detailId' component={Detail}/>

                            {!isAuth && <Route exact component={NotRegisteredUser} path="/login" />}
                            {!isAuth && <Route exact component={Register} path="/sign-up"/>}
                            {!isAuth && <Redirect from="/favs" to="/login" />}
                            {!isAuth && <Redirect from="/user" to="/login" />}
                            {isAuth && <Redirect from="/login" to="/" />}

                            <Route exact path='/favs' component={Favs} />
                            <Route exact path='/user' component={User} />
                            <Route component={NotFound} key="Error 404"/>

                            {/* <PrivateRoutes isAuth={isAuth} /> */}
                        </Switch>
                    </Suspense>
                </Layout>
            </Router>
        </AppContext.Provider>
    );
};

export default App;