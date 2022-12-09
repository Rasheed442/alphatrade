import React from 'react'
import style from'../styles/discover.module.css'
import {FaDiscord} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import Image from 'next/image'
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

      <div className={style.journey}>
        <div  className={style.j1}>
          <Image
          src='/nft2.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>HATE ELOVES NFTs</p>
         
        </div>

        <div  className={style.j2}>
          <Image
          src='/nft3.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>BLUEFACE NFTs</p>
        </div>

        <div  className={style.j3}>
          <Image
          src='/nft4.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>JACUEMOS APE COINs</p>
        </div>
  
      </div>

      <div className={style.journey1}>
        <div  className={style.j1}>
          <Image
          src='/nft6.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>HATE ELOVES NFTs</p>
         
        </div>

        <div  className={style.j2}>
          <Image
          src='/nft5.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>BLUEFACE NFTs</p>
        </div>

        <div  className={style.j3}>
          <Image
          src='/nft7.jpeg'
          width={300}
          height={300}
          priority
          />
          <p>JACUEMOS APE COINs</p>
        </div>
  
      </div>


      <div>
         <h1>All In One <br/>NFT Marketplace For<br/><span className='type'></span></h1>
      </div>
    </>
  )
}

export default Discover