import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop: {' '}
            <span className='underline text-blue'>
                <a href="https://www.apple.com/iphone-15-pro/">
                    Find an Apple Store {' '}
                </a>
            </span>
            or {' '}
            <span className='underline text-blue'>
                <a href="https://www.apple.com/iphone-15-pro/">
                    other retailer
                </a>
            </span>{' '}
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className='bg-neutral-700 my-5 h-[1px] w-full' />

        <div className='flex md:flex-row flex-col md:items-center justify-between'>
          <p className='font-semibold text-gray text-xs'>This website is purely made as a showcase and is not an offical Apple page.</p><br/>
          <p className='font-semibold text-gray text-xs'>&copy;2024 Created by <a href="https://thefullstackengineer.tech">The FullStack Engineer : Jay Thompson </a></p><br/>
          <div className='flex'>
            {footerLinks.map((link, i) => (
              <p key={link} className='font-semibold text-gray text-xs'>
                <a href="https://www.apple.com/iphone-15-pro/">{link}</a>{' '}
                {i !== footerLinks.length - 1 && (
                  <span className='mx-2'> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer