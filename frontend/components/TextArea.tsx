import { detectContentType } from "next/dist/server/image-optimizer";
import React from "react";
import { useState } from "react";
import styles from "../styles/Pastebin.module.css"


export default function TextArea() {
   
    return (
        <div className="text-container">
            <textarea  name="content" className="textarea" placeholder="Enter your ideas here!!!"></textarea>
        </div>

    );
}