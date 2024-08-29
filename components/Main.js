import Image from 'next/image'
import React from 'react'
import card from '../public/cardImage.png'
import { GoHeart } from "react-icons/go";
import Link from 'next/link';



// 8 cards
const cardData = new Array(8).fill({
    title: 'Snow Forest',
    description: 'Taste the cold and beauty of the Russian forest in winter.',
    startDate: '04/17/24',
    duration: '4D/3N',
    price: '₹ 189.25',
    author: 'By Neelabh',
});



const Main = () => {
    return (
        <div className='py-24'>
            <div className='w-[1,326px] flex flex-wrap gap-[42px] text-Inter justify-center'>
                {cardData.map((cardItem, index) => (
                    <Link href='/more' key={index}>
                        <div className='w-[300px] h-[388.31px] rounded-lg shadow-[0px_6px_15px_2px_#10182814] p-3 flex flex-col items-center gap-2'>
                            <div className='relative'>
                                <Image src={card} alt='card' className='rounded-lg h-[200px]' />
                                <div className='rounded-full p-1.5 text-[#27272A] bg-white shadow-[0px_10px_40px_0px_#0000001F] absolute right-2 -bottom-4 z-10'>
                                    <GoHeart className=' w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 p-2'>
                                <p className='text-[12px] text-left text-[#3F3F46]'>{cardItem.title}</p>
                                <p className='text-[16px] font-semibold text-left text-[#27272A]'>{cardItem.description}</p>
                                <div className='flex justify-between items-center border-b-2 pb-4'>
                                    <p className='text-[12px] text-left text-[#3F3F46]'>Start Date: {cardItem.startDate}</p>
                                    <p className='text-[12px] text-left text-[#27272A] font-semibold'>{cardItem.author}</p>
                                </div>
                                <div className='flex justify-between items-center pt-1'>
                                    <p className='text-[12px] text-left text-[#27272A]'>{cardItem.duration}</p>
                                    <p className='text-[14px] text-left text-[#27272A] font-semibold'>{cardItem.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Main
