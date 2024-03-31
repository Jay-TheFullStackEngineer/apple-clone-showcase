import React, { useEffect } from 'react';
import gsap from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from 'react';

const Hero = () => {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSourceSet = () => {
    if (window.innerWidth < 760) {
      setVideoSource(smallHeroVideo);
    } else {
      setVideoSource(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSourceSet);

    return () => {
      window.removeEventListener('rezie', handleVideoSourceSet);
    };
  });
  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 2 });
    gsap.to('.hero-subtitle-top', { opacity: 1, delay: 1 });
    gsap.to('.hero-subtitle-bottom', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-subtitle-top'>Precision Perfected: The New </p>
        <p className='hero-title'>iPhone 15 Pro</p>
        <p className='hero-subtitle-bottom'>Engineered to Inspire.</p>
        <div className='md:w-10/12 w0/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSource}
          >
            <source src={videoSource} type='video/mp4' />
          </video>
        </div>
      </div>
      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a id='highlights' className='btn'>
        Step into the Future
        </a>
        <p className='font-normal text-xl'>From $1000.00 or $99.00 Monthly</p>
      </div>
    </section>
  );
};

export default Hero;
