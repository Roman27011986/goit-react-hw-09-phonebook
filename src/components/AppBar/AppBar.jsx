import  Navigation  from '../Navigation/Navigation'
import { AuthNav } from '../AuthNav/AuthNav'
import  UserMenu  from '../UserMenu/UserMenu'
import { useSelector } from 'react-redux';
import {getIsOnline} from '../../redux/auth/auth-selectors'
import styles from './AppBar.module.css'

export default function AppBar ()  {
  const isAutheticated = useSelector(state => getIsOnline(state));
    return(
        <header className={styles.container}>
        <Navigation />
        {isAutheticated ? <UserMenu /> : <AuthNav />}
        </header>
    )
};
    
