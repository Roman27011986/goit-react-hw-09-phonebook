import React,{useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-action';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
        borderRadius: 4,
        borderColor:'blue',
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
}))(InputBase);
  
export default function Filter(){
     
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChange = useCallback((event)=>dispatch(changeFilter(event.currentTarget.value)),[dispatch])
    return (
        <div className={styles.group}>
            <BootstrapInput 
                placeholder="filter by name"
                id="outlined-basic"
                label="Filter"
                variant="outlined"
                required value={value}
                onChange={onChange} />
        </div>
    );
};

