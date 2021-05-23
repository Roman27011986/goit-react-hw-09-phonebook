import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContact } from '../../redux/contacts/contacts-selectors'

import backImg from "../../images/memphis-colorful.png";
import styles from './ContactList.module.css';

//material-ui import

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default function ContactList()  {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();
    
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) => (
                    <li key={id} id={styles.listItem} >
                        <div id={styles.cardFront} className={styles.card} style={{ backgroundImage: backImg }}>
                            <div >
                                <div className={styles.face || styles.cubeTop} ><p>{name}</p></div>
                            </div>
                        </div>
                        <div id={styles.cardBack} className={styles.card}>
                            <div className={styles.details}>
                                <p>phone: {number}</p>
                            </div>
                            <button className={styles.btnRemove} type="button" onClick={() => dispatch(deleteContact(id))}>
                                <DeleteForeverIcon />
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
};
