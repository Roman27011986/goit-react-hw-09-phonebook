import { useSelector,useDispatch} from 'react-redux'
import {changeFilter} from '../../redux/contacts/contacts-action'
import styles from './Filter.module.css'
import { getFilter } from '../../redux/contacts/contacts-selectors'

import TextField from '@material-ui/core/TextField';

export default function Filter(){
     
   const value = useSelector((state)=>getFilter(state))
   const dispatch = useDispatch()

    return (
        <div className={styles.group}>
            <TextField
                placeholder="Contact name"
                id="outlined-basic"
                label="Filter"
                variant="outlined"
                required value={value}
                onChange={(event)=>dispatch(changeFilter(event.currentTarget.value))} />
        </div>
  
    
   
    );
   
};

