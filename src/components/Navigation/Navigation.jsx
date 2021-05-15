import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsOnline } from '../../redux/auth/auth-selectors';
import {getAllContacts} from '../../redux/contacts/contacts-selectors'
import styles from './Navigation.module.css'
import routes from '../routes';
import { Home ,Person} from '@material-ui/icons';

import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';


export default function Navigation () {

const isAuthenticated = useSelector(getIsOnline);
const isBageValue = useSelector((state)=>getAllContacts(state).length)

  return (
    <>
      <nav className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Tooltip title="Home">
              <NavLink to={routes.home} exact activeClassName={styles.active} className={styles.link}>
                <Home fontSize="large"/>
              </NavLink>
            </Tooltip>
          </li>
            
          <li className={styles.list__item}>
          
            {isAuthenticated &&
              <Tooltip title="Contacts">
                <Badge color="secondary" badgeContent={isBageValue}>
                  <NavLink to={routes.contacts} activeClassName={styles.active} className={styles.link}>
                    <Person fontSize="large" />
                  </NavLink>
                </Badge>
              </Tooltip>}
              
          </li>
        </ul>
        
      </nav>
      
    </>
  );
};


 