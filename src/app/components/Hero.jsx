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
              <h1>Just Peachy Marblehead Ohio Cottage<span>(Not in Lakeside)</span></h1>
              <h3>Located outside Lakeside Ohio, but close to all that vacationland has to offer, you and your family will enjoy our Marbleahead Peninsula home.</h3>
            </header>
          </div>
      </div>
    </>
  )
}
