import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function bruh() {
  
}


const Home: NextPage = () => {
  let [quote,setQuote]=useState(null)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setQuote(res.data.title)
    console.log(res.data.title)
  })
  })
  return (
    <div>
      {quote}
    </div>
  )
}

export default Home
