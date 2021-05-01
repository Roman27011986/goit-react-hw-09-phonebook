import  Navigation  from '../Navigation/Navigation'
import { AuthNav } from '../AuthNav/AuthNav'
import  UserMenu  from '../UserMenu/UserMenu'
import { connect } from 'react-redux';
import {getIsOnline} from '../../redux/auth/auth-selectors'
import styles from './AppBar.module.css'

const AppBar = ({ isAutheticated }) => (
  
    <header className={styles.container}>
        <Navigation />
        {isAutheticated ? <UserMenu /> : <AuthNav />}
    </header>
);
    
const mapStateToProps = (state) => ({
    isAutheticated: getIsOnline(state)
});
export default connect(mapStateToProps)(AppBar);