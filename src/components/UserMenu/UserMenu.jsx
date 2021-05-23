import React,{useState,useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getEmail ,getName} from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

//material-ui import

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

//styles
import { withStyles } from '@material-ui/core/styles';
import styles from './UserMenu.module.css';
import avatar from '../../images/bussiness-man.png';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: 'rgb(135,206,250)',
    boxShadow:'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
})((props) => (
  <Menu
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
    {...props}
  />
));


export default function UserMenu()  {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => dispatch(logOut()),[dispatch]) ;

  const name = useSelector(getName);
  const email = useSelector(getEmail);

  return (
    <div className={styles.userMenuContainer}>
      <Tooltip title='User menu'>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <img  src={avatar} width='32' alt="" />
        </Button>
        </Tooltip>
      <StyledMenu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
      >
        <MenuItem >name: {name}</MenuItem>
        <MenuItem >email: {email}</MenuItem>
        <Button
          className={styles.btnLogOut}
          variant="contained"
          type='button'
          onClick={onLogOut}
          >
          <PowerSettingsNewIcon />
        </Button>
        </StyledMenu>
    </div>
  );
};


