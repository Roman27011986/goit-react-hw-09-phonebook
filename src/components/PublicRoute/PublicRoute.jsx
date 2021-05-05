import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getIsOnline} from '../../redux/auth/auth-selectors'


export default function PublicRoute  ({
  redirectTo,
  children,
  ...routeProps
}){
    const isAuthenticated = useSelector(getIsOnline)
  return(
    
  <Route
    {...routeProps}
    >
      {
        isAuthenticated
        &&
        routeProps.restricted
        ?
        <Redirect to={redirectTo} />
        :
        children
      }
  </Route>
);
  
};

