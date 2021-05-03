import React from 'react';
import { connect } from 'react-redux';
import { getEmail ,getName} from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import avatar from '../../images/bussiness-man.png';
import Button from '@material-ui/core/Button';
import styles from './UserMenu.module.css';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';




const btnLogOut = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 28,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%, 0)'
};

const UserMenu = ({ avatar, email, name, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <img className={styles.user__logo} src={avatar} width='32' alt="" />
      </Button>
      <Menu
       
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
      >
     
        <MenuItem >name: {name}</MenuItem>
        <MenuItem >email: {email}</MenuItem>
        <Button
          style={btnLogOut}
          variant="contained"
          type='button'
          onClick={onLogout}
          >
          <PowerSettingsNewIcon />
        </Button>
            
        
        </Menu>
        
    </div>
  );
};

const mapStateToProps = (state) => ({
    name:getName(state),
    email: getEmail(state),
    avatar:avatar
});
    
const mapDispatchToProps ={
    onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
