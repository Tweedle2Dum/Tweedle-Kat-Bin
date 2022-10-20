import React from "react"
import styles from '../styles/Collection.module.css'
import axios from 'axios'
export default function collection(){
    let data;
    axios.get('http://localhost:8080/collection/')
     .then((response)=>{
        console.log(response);
        data = JSON.parse(response.data);
     })
     .catch((error)=>{
        console.log(error);
     })   

    
    return (
        <>
        <div className={styles.header}>ALL THE PASTE'S ARE DISPLAYED HERE!!</div>
        <div className={styles.contentcard}>{data}</div>
        </>
    );



}