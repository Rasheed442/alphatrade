import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import style from '../styles/Home.module.css'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Hot from '../component/Hot'
import {AiFillCaretDown} from "react-icons/ai"
import Discover from '../component/Discover'
export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className={style.container}>
      <Head>
        <title>NFTrade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

    <div className={style.bg} > 
            <h4>DISCOVER AND COLLECT SUPER RARE NFTs.</h4>
            <p><span style={{color:"goldenrod"}}>AlPHATrade</span> is a shared liquidity NFT market, smart contract is used by multiple website to provide the users
              the latest multiple experiences.
            </p>
    </div>

    <div className={style.main}>
          <div className={style.header} > 
            <h1>GC Ball</h1>
              <video height={500} autoPlay loop muted playsInline>
              <source src="/hand.mp4"/>
            </video>
          </div>
<div className={style.grid} >
          <div className={style.header}> 
            <h1>GC Rifle</h1>
              <video  width={400} autoPlay loop muted playsInline>
              <source src="/gun.mp4"/>
            </video>
          </div >
          <div className={style.header}> 
    
            <Image
            priority
            src='/nft1.jpeg'
            width={400}
            height={250}
            />
          </div>
          <div className={style.header}> 
          
            <Image
            priority
            src='/nft.avif'
            width={400}
            height={250}
            />
          </div>
          <div className={style.header}> 
        
            <Image
            priority
            src='/nft2.jpeg'
            width={400}
            height={250}
            />
          </div>
      </div>
</div>
    
    <h2 style={{margin:"20px", marginLeft:"80px"}}>Top Sellers <span style={{color:"goldenrod"}}>this week<AiFillCaretDown/></span></h2>

<div className={style.creator}>
        <div className={style.flex}>
          1
          <Image
          src='/nft1.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          2
          <Image
          src='/nft2.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          3
          <Image
          src='/nft8.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          4
          <Image
          src='/nft4.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          5
          <Image
          src='/nft5.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          6
          <Image
          src='/nft6.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          7
          <Image
          src='/nft7.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          8
          <Image
          src='/nft3.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          9
          <Image
          src='/nft10.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
        <div className={style.flex}>
          10
          <Image
          src='/nft9.jpeg'
          priority
          width={40}
          height={40}
          />
          <div>
            <p>Brainz</p>
            <span>$350,000</span>
          </div>
        </div>
</div>
<Hot/>
<Discover/>
    </div>
  )
}
