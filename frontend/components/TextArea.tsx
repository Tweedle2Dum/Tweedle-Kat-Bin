import React from "react";
import styles from "../styles/Pastebin.module.css"


export default function TextArea() {
    return (
        <div className="text-container">
            <textarea className="textarea" placeholder="Enter your ideas here!!!"></textarea>
        </div>

    );
}