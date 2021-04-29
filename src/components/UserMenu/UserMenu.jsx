import { connect } from 'react-redux';
import { getEmail } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import avatar from '../../images/bussiness-man.png';
import Button from '@material-ui/core/Button';
import styles from './UserMenu.module.css'
const UserMenu = ({ avatar, email, onLogout }) => (
    <div className={styles.container}>
        <img className={styles.user__logo} src={avatar} width='32' alt="" />
        <span>Welcome, {email}</span>
        <Button color="secondary" variant="contained" type='button'  onClick={onLogout}>Logout</Button>
   </div>
)

const mapStateToProps = (state) => ({
    email: getEmail(state),
    avatar:avatar
});
    
const mapDispatchToProps ={
    onLogout: logOut,
};

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)
