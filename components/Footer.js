import Image from 'next/image'
import React from 'react'
import footerLogo from '../public/footerLogo.png'
import { PiFacebookLogoFill, PiInstagramLogoFill, PiYoutubeLogoFill, PiXLogoFill } from "react-icons/pi";



const Footer = () => {
    return (
        <div className='bg-[#0077CC] w-full h-[434.13px] '>
            <div className='flex pt-[62px] px-[160px] h-[385px] justify-between'>

                <div className='w-[151px] h-[32px]'>
                    <Image src={footerLogo} alt='logo' />
                </div>
                <div className='flex w-7/12 justify-between text-white'>

                    <div className='flex flex-col gap-[32px]'>
                        <p className='text-[20px] font-semibold leading-[29.05px] tracking-[0.015em] text-left'>Company</p>
                        <ul className='flex flex-col gap-[16px] text-[16px] '>
                            <li>Home</li>
                            <li>Community</li>
                            <li>About Us</li>
                            <li>Login</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-[32px]'>
                        <p className='text-[20px] font-semibold leading-[29.05px] tracking-[0.015em] text-left'>Support</p>
                        <ul className='flex flex-col gap-[16px] text-[16px]'>
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Cancellation Policy</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-[32px]'>
                        <p className='text-[20px] font-semibold leading-[29.05px] tracking-[0.015em] text-left'>Contact</p>
                        <ul className='flex flex-col gap-[16px] text-[16px] '>
                            <li>+91 9876619283</li>
                            <li>hello@travander.com</li>
                            <div className='flex text-[white] text-[32px] gap-[15px]'>
                                <PiFacebookLogoFill />
                                <PiInstagramLogoFill />
                                <PiXLogoFill />
                                <PiYoutubeLogoFill />
                            </div>
                        </ul>
                    </div>

                </div>
            </div>

            <p className='text-[white] text-center'>2021 (c) — Mochilero Travel Ventures Pvt. Ltd. All Rights Reserved- by Astha</p>



        </div>
    )
}

export default Footer