import type { NextPage } from 'next'
import TextArea from '../components/TextArea'
import axios from 'axios'
import { useState } from 'react';

function Pastebin() {
    const [text, setText] = useState('');
    const [id,setId]=useState(1);

    function handleChange(e) {
        setText(e.target.value);
    }

    function submitText(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/data/', {
            id: `${id}`,
            txt: `${text}`

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setId(id+1);

    }

    return (


        <>
            <div className='header'>
                <div className='left-header'>TWEEDLE-CAT-BIN</div>
                <div className='right-header'><button type='submit' form='form'>SAVE</button></div>
            </div>
            <div className='container'>

                <form id='form' onChange={handleChange} onSubmit={submitText}>
                    <TextArea></TextArea>
                </form>


            </div>
            <div className='footer'>Link to repository:<a href='https://github.com/Tweedle2Dum/Tweedle-Kat-Bin.git'>Here</a></div>
        </>
    );
};

export default Pastebin