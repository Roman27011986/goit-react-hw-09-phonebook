import {useSelector,useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContact } from '../../redux/contacts/contacts-selectors'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import backImg from "../../images/memphis-colorful.png";
import styles from './ContactList.module.css';


export default function ContactList()  {

    const contacts = useSelector((state)=>getVisibleContact(state));
    const dispatch = useDispatch();

    
    return(
        <ul className={styles.list}>
        {
            contacts.map(({ id, name, number }) => (
                <li key={id} id={styles.cardWrapper} >
                    <div id={styles.cardFront} className={styles.card} style={{ backgroundImage: backImg }}>
                        <div id={styles.cube}>
                            <div className={styles.face || styles.cubeTop} > <p>{name}</p></div>
                            <div className={styles.face || styles.cubeLeft}><p>{name}</p></div>
                            <div className={styles.face || styles.cubeRight}><p>{name}</p></div>
                        </div>
                    </div>
                    <div id={styles.cardBack} className={styles.card}>
                        <div className={styles.details}>
                            <h3>{number}</h3>
                        </div>
                        <button className={styles.btnRemove} type="button" onClick={() => dispatch(deleteContact(id))}>
                        <DeleteForeverIcon/>
                        </button>
                    </div>
                </li>

            ))}
    </ul>
    )
    
};
