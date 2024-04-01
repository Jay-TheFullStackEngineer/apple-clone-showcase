import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo, watchdogsVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full my-20'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            A17 Pro chip.
            <br /> The new way to game, create and much more.
          </h2>

          <p className='hiw-subtitle'>
            Our most powerful chip ever made. With the biggest redesign in the history of our GPUs.
          </p>
        </div>

        <div className='mt-10 md:mt-20 mb-14'>
          <div className='relative h-full flex-center'>
            <div className='overflow-hidden'>
              <img 
                src={frameImg}
                alt='frame'
                className='bg-transparent relative z-10'
              />
            </div>
            <div className='hiw-video'>
                <video className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                  <source src={watchdogsVideo} type='video/mp4' />
                </video>
              </div>
          </div>
          <p className='text-gray font-semibold text-center mt-3'>Watchdogs 2</p>
          </div>

          <div className='hiw-text-container'>
                <div className='flex flex-1 justify-center flex-col'>
                  <p className='hiw-text g_fadeIn'>
                    A17 Pro is an entirely new class of chip that delivers our {' '}
                    <span className='text-white'>
                      best graphic performance by far
                    </span>.
                  </p> <br />
                  <p className='hiw-text g_fadeIn'>
                   Mobile {' '}
                    <span className='text-white'>
                      games have never seemed so real
                    </span>,
                     with incredibly detailed environments and characters.
                     </p> 
                     <br/>
                     <p className='hiw-text g_fadeIn'>
                     Create and design with beauty built in, {''}
                    <span className='text-white'>
                        every pixel is design to be flawless. 
                    </span>
                    </p>
                    <br/>
                    <p className='hiw-text g_fadeIn'>
                    Do even more with the A17 chip, everything is {''}
                    <span className='text-white'>
                        effortlessly powerful.
                    </span>
                  </p>
                </div>
              

              <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                <p className='hiw-text'>Our New</p>
                <p className='hiw-bigtext'>Pro-class GPU</p>
                <p className='hiw-text'>with 6 cores.</p>
                <p className='hiw-text'>Constantly cooled by</p>
                <p className='hiw-text'>the body its wrapped in</p>
              </div>
              </div>
            </div>
            <br/>
    </section>
  )
}

export default HowItWorks