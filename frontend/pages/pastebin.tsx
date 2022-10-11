import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TextArea from '../components/TextArea'
import styles from '../styles/Pastebin.module.css'


function Pastebin() {
    return (
        <>
            <div className='header'>
                <div className='left-header'>TWEEDLE-CAT-BIN</div>
                <div className='right-header'><button>SAVE</button></div>
            </div>
            <div className='container'>
                
                    <TextArea></TextArea>
                

            </div>
            <div className='footer'>Link to repository:<a href='https://github.com/Tweedle2Dum/Tweedle-Kat-Bin.git'>Here</a></div>
        </>
    );
}

export default Pastebin