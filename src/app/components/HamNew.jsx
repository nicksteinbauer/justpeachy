
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Link as LinkScroll } from 'react-scroll'

import {useEffect} from 'react'

import { useClickAway } from "@uidotdev/usehooks";




export default function HamNew() {

    const [MobileMenu, setMobileMenu] = useState(false);
    const { pathname } = useRouter();

    const ref = useClickAway(() => {
        setMobileMenu(false);
    });
    
    useEffect(() => {
        setMobileMenu(false); // close menu if path changes!
        if (MobileMenu === false) {
            setMobileMenu(false);
          }
    }, [ pathname ]);



  return (
    
    <nav className="hamOver">
        {!MobileMenu && (
        <button onClick={()=>setMobileMenu(!MobileMenu)} className="hamburger flex-vertical">
            
            <div className="hamContainer">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            
        </button>
        )}
        {MobileMenu && (
        <button className="hamburger flex-vertical active">
            <div className="closeContainer">
                <div className="close close1"></div>
                <div className="close close2"></div>
            </div>
        </button>
        )}
        {MobileMenu && (
            <nav ref={ref} className="navigation flex-vertical">
                
                <ul>
                    <li>
                        <LinkScroll to='section1' className="link" spy={true} smooth={true} duration={1000} onClick={()=>setMobileMenu(!MobileMenu)}>Home</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='section2' className="link" spy={true} smooth={true} duration={1000} onClick={()=>setMobileMenu(!MobileMenu)}>Obrien</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='section3' className="link" spy={true} smooth={true} duration={1000} onClick={()=>setMobileMenu(!MobileMenu)}>The Boathouse</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='section4' className="link" spy={true} smooth={true} duration={1000} onClick={()=>setMobileMenu(!MobileMenu)}>McFadden Design</LinkScroll>
                    </li>
                   
                </ul>

                

            </nav>
        )}
    </nav>




  )
}
