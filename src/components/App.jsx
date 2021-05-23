import { lazy, Suspense,useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Battary from './Battary/Battary';
import routes from './routes';

import { getCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import { ToastContainer } from "react-toastify";
import { useBattery } from "react-use";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
const ContactsPage = lazy(() => import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage' /* webpackChunkName: "SignUpPage" */));
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage' /* webpackChunkName: "LogInPage" */));

export default function App() {
  const { isSupported } = useBattery()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);

    return (
      <>
        {isSupported && <Battary />}
        
        <AppBar />

        <ToastContainer autoClose={2000} />

        <Suspense fallback={<p>Загружаем...</p>}>

          <Switch>

            <Route exact path={routes.home} component={HomePage} />

            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
            >

              <ContactsPage />
              
            </PrivateRoute>
            
            <PublicRoute
              path={routes.register}
              redirectTo={routes.contacts}
              restricted >
              
              <SignUpPage />

            </PublicRoute>

            <PublicRoute
              path={routes.login}
              redirectTo={routes.contacts}
              restricted >
              
              <LogInPage />

            </PublicRoute>

          </Switch>
          
        </Suspense>
      </>
    );
};
    



