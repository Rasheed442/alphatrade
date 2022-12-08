import React, { useState, useEffect } from 'react'
import style from '../styles/navbar.module.css'
import {AiOutlineSearch,AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const [open , setOpen] = useState(true)
  return (
   <>
    <div className={style.container}>
      <h2>AlphaT<span>rade</span></h2>

         <div className={style.search}>
          <AiOutlineSearch size={20} style={{color:"white"}}/>
           <input type='text' placeholder='explore'/>
      </div>

          <div className={style.navlink}>
           <Link href='/'><p>Explore</p></Link>  
           <Link href='/'><p>My Profile</p></Link>  
           <Link href='/'><p>Collections</p></Link>  
           <Link href='/'><p>Community</p></Link>  
          </div>
          {open ?"":<div className={style.navmenu} data-aos='slide-right'>
           <Link href='/' onClick={()=> setOpen(true)}><p>Explore</p></Link>  
           <Link href='/' onClick={()=> setOpen(true)}><p>My Profile</p></Link>  
           <Link href='/' onClick={()=> setOpen(true)}><p>Following</p></Link>  
           <Link href='/' onClick={()=> setOpen(true)}><p>Community</p></Link>  
          </div>}
           
           <div className={style.btn}>
              <button className={style.btn1}>Create</button>
              <button className={style.btn2}>Sign In</button>

              <div className={style.icon} onClick={()=>{
                setOpen(!open)
              }}>
             {open ?<AiOutlineMenu size={27}/>: <AiOutlineClose size={27} data-aos='zoom-in'/> }
             </div>
           </div>

            

    </div>
    </> 
  )
}

export default Navbar