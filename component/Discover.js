import React from 'react'
import style from'../styles/discover.module.css'
import {FaDiscord} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
function Discover() {
  return (
    <>
       <div className={style.header}>

           <div className={style.icon}>
               <FaDiscord size={50}/>
               <AiFillLinkedin size={50}/>
               <BsTwitter size={50}/>
           </div>
      

       <div className={style.discover}>
           <h1>DISCOVER<br/>THE BEST NFT ARTS</h1>
           <p>A Unique and innovative collections To Discover NFT</p>
           <p>Art Starts Now And Discover NFTs</p> 
                    <button>Discover</button>
       </div> 

   </div>
    </>
  )
}

export default Discover