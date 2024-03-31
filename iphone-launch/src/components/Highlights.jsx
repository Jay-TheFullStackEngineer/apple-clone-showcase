import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap/gsap-core';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1.5, stagger: 0.35 });
  }, []);
  return (
    <section
      id='highlights'
      className='w-screen overflow-hidden h-full common-padding bg-zinc'
    >
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>
            Standout Elements
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Preview
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>
          </div>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              The Release
              <img src={rightImg} alt='right' className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
