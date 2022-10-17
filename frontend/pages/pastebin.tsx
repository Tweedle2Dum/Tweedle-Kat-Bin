import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { text } from 'stream/consumers'
import TextArea from '../components/TextArea'
import styles from '../styles/Pastebin.module.css'


function Pastebin() {

    let jsonData = {
        {
        "id": "1",
        ""
    
    },
}
function submitText(e) {



}
return (


    <>
        <div className='header'>
            <div className='left-header'>TWEEDLE-CAT-BIN</div>
            <div className='right-header'><button type='submit' form='form'>SAVE</button></div>
        </div>
        <div className='container'>

            <form id='form' onSubmit={submitText} method='POST'>
                <TextArea></TextArea>
            </form>


        </div>
        <div className='footer'>Link to repository:<a href='https://github.com/Tweedle2Dum/Tweedle-Kat-Bin.git'>Here</a></div>
    </>
);
};

export default Pastebin