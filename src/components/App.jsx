import React, { lazy, Suspense,Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import routes from './routes';
import { getCurrentUser } from '../redux/auth/auth-operations'
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
const ContactsPage = lazy(() => import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage' /* webpackChunkName: "SignUpPage" */));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage' /* webpackChunkName: "LogInPage" */));



class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser()
  };
  render() {
    return (
      <>
    
        <AppBar />
        <ToastContainer autoClose={2000} />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.login}
            />
          
            <PublicRoute
              path={routes.register}
              component={SignUpPage}
              redirectTo={routes.contacts}
              restricted />
          
            <PublicRoute
              path={routes.login}
              component={LogInPage}
              redirectTo={routes.contacts}
              restricted />
          </Switch>
        </Suspense>
      </>
    );
  };
  
  
};
    
const mapDispatchToProps ={
  onGetCurrentUser: getCurrentUser,
};

export default connect(null,mapDispatchToProps)(App) ;
