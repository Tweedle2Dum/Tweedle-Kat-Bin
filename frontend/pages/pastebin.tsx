import type { NextPage } from 'next'
import TextArea from '../components/TextArea'
import axios from 'axios'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Pastebin() {
    const [text, setText] = useState('');
    const [link,setLink]=useState("");
    const router=useRouter();
    const {id}=router.query;
    console.log(id)
    if(id!="")
    {
        axios({
            method:"get",
            url:`http://localhost:8080/data/${id}`,
            
        })
        .then((response)=>{
            console.log(response.data.result.txt);
            setText(response.data.result.txt)
        })
    }
    
    function handleChange(e) {
        setText(e.target.value);
    }
    

    function submitText(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/data/', {
            txt: `${text}`

        })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                setLink(`http://localhost:3000/pastebin?id=${response.data.entry.Id}`)
            })
            .catch(function (error) {
                console.log(error);
            });
        
        
        

    }

    

    return (


        <>
            <div className='header'>
                <div className='left-header'>TWEEDLE-CAT-BIN</div>
                <div className='right-header'><button type='submit' form='form'>SAVE</button></div>
            </div>
            <div className="link">Your Paste ID:{link}</div>
            <div className="link">You can use this id to access the paste..</div>

            <div className='container'>
                
                <form id='form' onChange={handleChange} onSubmit={submitText}>
                    <TextArea txt={text}></TextArea>
                </form>


            </div>
            <div className='footer'>Link to repository:<a href='https://github.com/Tweedle2Dum/Tweedle-Kat-Bin.git'>Here</a></div>
        </>
    );
};

export default Pastebin