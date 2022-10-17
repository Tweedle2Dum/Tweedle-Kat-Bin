import { detectContentType } from "next/dist/server/image-optimizer";
import React from "react";
import { useState } from "react";
import styles from "../styles/Pastebin.module.css"


export default function TextArea() {
    const [text,setText]=useState('');

    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <div className="text-container">
            <textarea  name="content" className="textarea" onChange={handleChange} placeholder="Enter your ideas here!!!"></textarea>
        </div>

    );
}