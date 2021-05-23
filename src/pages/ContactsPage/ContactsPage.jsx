import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from "react-loader-spinner";

import { getLoading } from '../../redux/contacts/contacts-selectors';
import { fetchContact } from '../../redux/contacts/contacts-operations';

import styles from './Container.module.css';

export default function ContactsPage()  {
    const dispatch= useDispatch();
    const isLoading = useSelector(getLoading);
    useEffect(() => {
        dispatch(fetchContact())
    }, [dispatch]);
     
    return (
        <div className={styles.container}>
            <ContactForm />
            <Filter />
            <ContactList />
            {isLoading && <Loader
                type="Rings"
                color="blue"
                height={100}
                width={100}
            />}
        </div>
    );
};
