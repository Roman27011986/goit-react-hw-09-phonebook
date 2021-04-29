import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsOnline } from '../../redux/auth/auth-selectors';
import {getAllContacts} from '../../redux/contacts/contacts-selectors'
import styles from './Navigation.module.css'
import routes from '../routes';

import { Home ,Call} from '@material-ui/icons';

import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

 const Navigation = ({isAuthenticated,isBageValue}) => {
  return (
      <>
        <nav className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Tooltip title="Home">
              <NavLink to={routes.home} exact activeClassName={styles.active} className={styles.link}>
                <Home fontSize="large" />
              </NavLink>
            </Tooltip>
          </li>
            
          <li className={styles.list__item}>
          
            {isAuthenticated &&
              <Tooltip title="Contacts">
              <Badge color="secondary" badgeContent={isBageValue}>
                <NavLink to={routes.contacts} activeClassName={styles.active} className={styles.link}>
                  <Call fontSize="large" />
                </NavLink>
              </Badge>
              </Tooltip>}
              
          </li>
        </ul>
        
      </nav>
      
      </>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: getIsOnline(state),
  isBageValue:getAllContacts(state).length
});

export default connect(mapStateToProps)(Navigation)
 