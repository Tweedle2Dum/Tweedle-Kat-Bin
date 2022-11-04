import { detectContentType } from "next/dist/server/image-optimizer";
import React from "react";
import { useState } from "react";
import styles from "./styles/Textarea.module.css"


export default function TextArea(props) {

    if(props.text==""){
        return (
            <div className={styles.textcontainer}>
                <textarea  name="content" className={styles.textarea} placeholder="Enter your ideas here!!!"></textarea>
            </div>
    
        );
    }
    return (
        <div className={styles.textcontainer}>
                            <textarea  name="content" className={styles.textarea} placeholder="Enter your ideas here!!!" value={props.txt}></textarea>

        </div>

    );
   
    
}