import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {getIsOnline} from '../../redux/auth/auth-selectors'

export default function PrivateRoute  ({
  redirectTo,
  children,
    ...routeProps
  }) {
    const isAuthenticated = useSelector((state)=>getIsOnline(state))
  return(
      
    <Route
      {...routeProps}
       >
        {
        isAuthenticated
          ?
          children
          :
          <Redirect to={redirectTo} />
      }
    </Route>
  );
    
};
  
 