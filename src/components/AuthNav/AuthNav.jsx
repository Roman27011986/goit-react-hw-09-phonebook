import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'
import routes from '../routes';
export const AuthNav = () => (
  <ul className={styles.list}>
    <li className={styles.list__item}>
      <NavLink to={routes.register} exact activeClassName={styles.active} className={styles.link}>Sign up</NavLink>
    </li>
    <li className={styles.list__item}>
      <NavLink to={routes.login} activeClassName={styles.active} className={styles.link}>Log in</NavLink>
    </li>
  </ul>
);