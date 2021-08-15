import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Favs from '../pages/Favs'
import NotRegisteredUser from '../pages/NotRegisteredUser'
import User from '../pages/User'

import AppContext from '../context/AppContext';

const PrivateRoutes = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <>
    {
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
    </>
  )
}

export default PrivateRoutes;