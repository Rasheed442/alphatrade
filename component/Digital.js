import React from 'react'
import style from '../styles/digital.module.css'
import {BsLightning, BsFillPhoneFill,BsHeadphones } from "react-icons/bs"
import {GiGoblinHead} from "react-icons/gi"
import Link from 'next/link'
function Digital() {
  return (
    <>
       <div className={style.container}>
            <div className={style.head}>
                <BsLightning size={45} style={{color:"blue"}}/>
                <h1>Fast Performance</h1>
                <p>Optimized for a smaller build size, faster<br/> dev compilation and dozens of other<br/> improvements.</p>
            </div>
            <div className={style.head}>
                <BsFillPhoneFill size={45} style={{color:"blue"}}/>
                <h1>Eligible Devices</h1>
                <p>Our Template is full Perfect for all device.<br/> You can visit our template all device easily..</p>
            </div>
            <div className={style.head}>
                <BsHeadphones size={45} style={{color:"blue"}}/>
                <h1>Fast & Friendly Support</h1>
                <p>We are provide 24 hours support for all<br/> clients.You can purchase without<br/> hesitation..</p>
            </div>
       </div>
  
       <div className={style.headline}>
            <p>Our Fantastic Envato Customers Reviews</p>
            <h1>Our Customers Feedbacks.</h1>
       </div>


<div className={style.grid}>

       <div className={style.main}>
           <div className={style.leave}>
             <GiGoblinHead size={35} style={{color:"red"}}/>
            <div className={style.mail}>
                <p>Abdulruaf Rasheed</p>
                <Link href='' style={{color:"gray"}}><p>abdulraufrasheed15@gmail.com</p></Link>
            </div>
           </div>
           <h1>Customer Support</h1>
        <p>Theme is really amazing, I Love it because i<br/> can customize how i want and my shop <br/>looks amazing with the templates
            for this <br/>price is totally worth buying, fast loading<br/> speed and support is really nice thank <br/>you for creating this 
            powerful template<br/> and keep it up rash.
        </p>
           {/* star */}
       </div>


       <div className={style.main}>
           <div className={style.leave}>
             <GiGoblinHead size={35} style={{color:"red"}}/>
            <div className={style.mail}>
                <p>Abdulruaf Rasheed</p>
                <Link href='' style={{color:"gray"}}><p>abdulraufrasheed15@gmail.com</p></Link>
            </div>
           </div>
           <h1>Design Quality</h1>
        <p>Theme is really amazing, I Love it because i<br/> can customize how i want and my shop <br/>looks amazing with the templates
            for this <br/>price is totally worth buying, fast loading<br/> speed and support is really nice thank <br/>you for creating this 
            powerful template<br/> and keep it up rash.
        </p>
           {/* star */}
       </div>


       <div className={style.main}>
           <div className={style.leave}>
             <GiGoblinHead size={35} style={{color:"red"}}/>
            <div className={style.mail}>
                <p>Abdulruaf Rasheed</p>
                <Link href='' style={{color:"gray"}}><p>abdulraufrasheed15@gmail.com</p></Link>
            </div>
           </div>
           <h1>Customizability</h1>
        <p>Theme is really amazing, I Love it because i<br/> can customize how i want and my shop <br/>looks amazing with the templates
            for this <br/>price is totally worth buying, fast loading<br/> speed and support is really nice thank <br/>you for creating this 
            powerful template<br/> and keep it up rash.
        </p>
           {/* star */}
       </div>
       

</div>

      <div className={style.purchase}>
         <p>PURCHASE THE NFTs AND MAKE YOUR ART SUPER FASTER AND EASY </p>
         <h1>Let&apos;s go Purchase</h1>
         <button>PURCHASE NOW</button>
      </div>

    </>
  )
}

export default Digital