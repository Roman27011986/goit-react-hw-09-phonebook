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

const UserMenu = ({ avatar, email, name, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.container}>
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
          
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
            
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
         
      >
        <MenuItem onClick={handleClose}>{name}</MenuItem>
        <MenuItem onClick={handleClose}> {email}</MenuItem>
            
        <Button
          style={{ marginLeft: '30px' }}
          color="secondary"
          variant="contained"
          type='button'
          onClick={onLogout}>
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
