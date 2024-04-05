//import React from 'react'
'use client'

import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


export default function Hero() {
  let backScroll = useRef(null);
  //let stickyFingaz = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(backScroll, {
      scrollTrigger: {
        trigger: '.theVideo',
        start: 'top top',
        scrub: 1,
      },
      duration: 2,
      x: '0',
      y: '160',
      ease: 'linear',
    });
  }, []);
  return (
    <>
      <div className='videoContain'>
          <video 
            autoPlay='autoplay' 
            muted 
            loop='loop' 
            className='theVideo'
            ref={(el) => {
              backScroll = el;
            }}
          >
              <source src={require('../../../public/JustPeachyNew.mp4')} type='video/mp4' />
          </video>
          <div className="videoOverlay flex-vertical">
            <header className="heroHeader inside-md">
              <h1>Marblehead Ohio Cottage Rental</h1>
              <h3>Just Peachy Cottage - Escape to our charming Marblehead Peninsula home, conveniently situated near Lakeside and surrounded by the allure of vacationland.</h3>
            </header>
          </div>
      </div>
    </>
  )
}
