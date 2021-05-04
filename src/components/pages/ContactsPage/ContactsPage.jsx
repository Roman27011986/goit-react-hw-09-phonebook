import React,{useEffect} from 'react';
import {  useSelector,useDispatch } from 'react-redux';
import ContactForm from '../../ContactForm';
import ContactList from '../../ContactList';
import Filter from '../../Filter';
import Loader from "react-loader-spinner";
import {getLoading} from '../../../redux/contacts/contacts-selectors'
import styles from './Container.module.css';
import { fetchContact } from '../../../redux/contacts/contacts-operations'

export default function ContactsPage()  {
    const dispatch= useDispatch();
    const isLoading = useSelector((state)=>getLoading(state))
    
    useEffect(()=>{
        dispatch(fetchContact())
    },[])
     
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
        )
};
