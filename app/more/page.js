'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { GoChevronDown, GoHeart, GoPlusCircle, GoNoEntry } from 'react-icons/go';
import card from '../../public/cardImage.png'
import review from '../../public/review.png'
import payment1 from '../../public/Razorpay.png'
import payment2 from '../../public/Phonepe.png'
import Link from 'next/link';



// objects

const cardData = [{
    title: 'Snow Forest',
    description: 'Taste the cold and beauty of the Russian forest in winter.',
    startDate: '04/17/24',
    duration: '4D/3N',
    price: '₹ 189.25',
    author: 'By Neelabh',
}]

const dropdownData = [
    { location: 'Goa', price: ' 135', time: '16 DEC 09:00 AM' },
    { location: 'Pune', price: ' 135', time: '16 DEC 09:00 AM' },
    { location: 'Jaipur', price: '835', time: '16 DEC 09:00 AM' },
    { location: 'Delhi', price: ' 135', time: '16 DEC 09:00 AM' },
    { location: 'Chennai', price: ' 135', time: '16 DEC 09:00 AM' },
    { location: 'Lucknow', price: ' 135', time: '16 DEC 09:00 AM' },
];



// main function

const More = () => {

    // toggle dropdown 
    const [openDropdown, setOpenDropdown] = useState(null);

    // initialising state for starting point
    const [selectedStartingPoint, setSelectedStartingPoint] = useState({
        location: 'Goa',
        price: '189 INR',
        time: 'December 16th 9:00 AM'
    });

    // count travellers
    const [count, setCount] = useState(1);

    // numbering travellers with words
    const numberToWords = (num) => {
        const words = [
            'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth',
            'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh',
            'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth',
            'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth',
            'Twentieth'
        ];
        return words[num - 1];
    };

    // adding 0.25 to the final price per person
    const pricePerPerson = parseFloat(selectedStartingPoint.price) + 0.25;

    // calculating total amount
    const totalPrice = pricePerPerson * count;

    // function to handle toggle with their index 
    const handleToggle = (dropdownIndex) => () => {
        setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
        console.log(`dropdown clicked index: ${dropdownIndex}`)
    };

    // selecting from options (starting point)
    const handleSelect = (item) => {
        setSelectedStartingPoint(item);
        setOpenDropdown(null);
        console.log('selected')
    };

    // add traveller function
    const handleIncrement = () => {
        // max count is 20
        if (count < 20) {
            setCount(prevCount => prevCount + 1);
            console.log(count + 1)
        }
    };

    // reduce traveller function
    const handleDecrement = () => {
        // min count 1
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
            console.log(count - 1)
        }
    };


    return (
        <div className='px-10 py-20 flex'>
            <div className='flex flex-col gap-20'>

                {/* card */}
                <div className="w-[960px] h-[305px] flex items-center rounded-lg shadow-[0px_8px_24px_3px_#1018281A]">
                    {cardData.map((cardItem, index) => (
                        <div key={index} className=' p-5 flex  items-center gap-5'>
                            <div className='relative'>
                                <Image src={card} alt='card' className='rounded-lg w-[280px]' />
                                <div className='rounded-full p-1.5 text-[#27272A] bg-white shadow-[0px_10px_40px_0px_#0000001F] absolute right-4 top-4 z-10'>
                                    <GoHeart className=' w-[18px] h-[18px]' />
                                </div>
                            </div>

                            {/* card details */}
                            <div className='flex flex-col gap-10'>
                                <div className='flex '>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[20px]  font-semibold text-left text-[#3F3F46]'>{cardItem.title}</p>
                                        <p className='text-[12px] text-left text-[#3F3F46]'>Start Date: {cardItem.startDate}</p>
                                        <p className='text-[16px] font-semibold text-left text-[#27272A] w-[300px]'>{cardItem.description}</p>
                                    </div>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-[12px] text-[#27272A] font-semibold'>{cardItem.author}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-[16px] text-left text-[#0077CC]'>Best Price Guarantee</p>
                                </div>
                            </div>

                            <div className='w-[225px] h-[263.75px] p-[0px_42px_0px_43px] border-l-2 flex items-center'>
                                <p className='text-[18px] text-center'>4 Days 3 Nights</p>
                            </div>

                        </div>
                    ))}
                </div>


                {/* Select from dropdown */}

                <div className='flex gap-20 items-center'>


                    <div className='w-[464px] h-[72px] p-[14.25px_19px_13.75px_19px] rounded-lg shadow-[0_8px_24px_-3px_rgba(16,24,40,0.1)] bg-white flex justify-between items-center relative'>

                        {/* first dropdown */}
                        <div className='flex flex-col font-inter text-[16px]'>
                            {openDropdown === 1 ? (
                                <div className='flex items-center justify-between cursor-pointer' onClick={handleToggle(1)}>
                                    <p className='text-[#3F3F44]'>Choose Starting Point</p>
                                    <GoChevronDown className='w-[20px] h-[20px] text-[#3F3F44]' />
                                    <div className="w-[464px] rounded-lg shadow-[0_20px_40px_-8px_rgba(16,24,40,0.1)] bg-white absolute -bottom-52 left-0 text-[14px] z-10">
                                        {dropdownData.map((item, index) => (
                                            <div key={index} className='flex justify-between items-center px-4 py-1 border-t-2 rounded-tl-lg rounded-tr-lg' onClick={() => handleSelect(item)}>
                                                <p className='w-[61px]'>{item.location}</p>
                                                <p>{item.price}</p>
                                                <p>{item.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-col cursor-pointer' onClick={handleToggle(1)}>
                                    <p className='text-[#3F3F44]'>Starting Point: {selectedStartingPoint.location} - INR {selectedStartingPoint.price}</p>
                                    <p className='text-[12px] text-left text-[#3F3F46]'>{selectedStartingPoint.time}</p>
                                </div>
                            )}
                        </div>

                        {/* second dropdown */}
                        <div className='flex flex-col font-inter text-[16px] '>
                            {openDropdown === 2 ? (
                                <>
                                    <div className='flex items-center justify-between cursor-pointer' onClick={handleToggle(2)}>
                                        <p className='text-[#3F3F44]'>Choose Ending Point</p>
                                        <GoChevronDown className='w-[20px] h-[20px] text-[#3F3F44]' />
                                    </div>
                                    <div className="w-[464px] rounded-lg border-2 bg-white absolute -bottom-10 left-0 text-[14px]">
                                        under construction
                                    </div>
                                </>

                            ) : (
                                <div className='flex flex-col cursor-pointer' onClick={handleToggle(2)}>
                                    <p className='text-[#3F3F44]'>End Point: Rishikesh</p>
                                    <p className='text-[12px] text-left text-[#3F3F46]'>December 21st 5:00 AM</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className='text-[18px]'>#8394617</p>
                    <p className='text-[18px]'>Camchatka, Russia</p>
                </div>


                {/* Travellers box */}

                <div className='flex flex-col gap-[32px]'>
                    <p className='font-inter text-xl font-semibold leading-6 tracking-tight text-left'>
                        Group Size: {count} {count === 1 ? 'Traveller' : 'Travellers'}
                    </p>
                    <div className='flex gap-5 items-center'>
                        Number of travellers
                        <GoNoEntry
                            className={`w-[24px] h-[24px] ${count <= 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            onClick={handleDecrement}
                            disabled={count <= 1}
                        />
                        <p className='text-[12px] font-semibold w-[10px] text-center'>{count}</p>
                        <GoPlusCircle
                            className={`w-[24px] h-[24px] ${count >= 20 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            onClick={handleIncrement}
                        />
                    </div>

                    {/* input fields */}
                    <div className='flex flex-col gap-[20px]'>
                        {[...Array(count)].map((_, index) => (
                            <div key={index} className='flex flex-col gap-[32px]'>
                                <p className='font-inter text-xl font-semibold leading-6 tracking-tight text-left'>
                                    {numberToWords(index + 1)} Traveller
                                </p>
                                <form className='flex flex-col gap-[32px]'>
                                    <div className='flex w-[626.67px] gap-[32px]'>
                                        <div className='w-[297.33px] flex flex-col gap-[32px]'>
                                            <label className='text-[16px] text-left text-[#3F3F46]'>Name</label>
                                            <input type='text' className='border-b border-[#3F3F46] focus:outline-none' />
                                        </div>
                                        <div className='w-[297.33px] flex flex-col gap-[32px]'>
                                            <label className='text-[16px] text-left text-[#3F3F46]'>Age</label>
                                            <input type='text' className='border-b border-[#3F3F46] focus:outline-none' />
                                        </div>
                                    </div>
                                    {index === 0 && (
                                        <div className='flex w-[626.67px] gap-[32px]'>
                                            <div className='w-[297.33px] flex flex-col gap-[32px]'>
                                                <label className='text-[16px] text-left text-[#3F3F46]'>Contact No.</label>
                                                <input type='text' className='border-b border-[#3F3F46] focus:outline-none' />
                                            </div>
                                            <div className='w-[297.33px] flex flex-col gap-[32px]'>
                                                <label className='text-[16px] text-left text-[#3F3F46]'>Email ID</label>
                                                <input type='text' className='border-b border-[#3F3F46] focus:outline-none' />
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <div className='flex flex-col items-center w-calc-full-minus-960 gap-10'>

                {/* review box */}

                <div className='w-[156px] h-[232px]'>
                    <Image src={review} alt='review' />
                </div>
                <div className='flex flex-col gap-5 w-[350px]'>
                    <p className='font-inter text-2xl font-semibold leading-7 tracking-tight text-center'>Message from Paras</p>
                    <p className='text-center'>Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdumNunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdumNunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...</p>
                </div>

                {/* payment box */}

                <div className='w-11/12 h-[662px] p-[32px_31px_40px_31px] rounded-lg shadow-[0_6px_15px_2px_rgba(16,24,40,0.08)] px-6 py-8 flex flex-col gap-6'>

                    <p className='font-inter text-xl font-semibold leading-6 tracking-tight text-left'>Payment Details</p>
                    <div className='flex flex-col gap-[16px]'>
                        {/* dynamically change details */}
                        <div className='flex '>
                            <p className='w-[200px]'>Trip price per person: </p>
                            <p className='text-[18px] text-left text-[#27272A] font-semibold'>₹ {parseFloat(selectedStartingPoint.price) + 0.25}
                            </p>

                        </div>
                        <div className='flex '>
                            <p className='w-[200px]'>Total No. of travellers:</p>
                            <p className='text-[18px] text-left text-[#27272A] font-semibold'>{count}</p>

                        </div>
                        <div className='flex '>
                            <p className='w-[200px]'>Total Discount:</p>
                            <p className='text-[18px] text-left text-[#27272A] font-semibold'>₹ 0</p>

                        </div>
                        <div className='flex '>
                            <p className='w-[200px]'>Total price: </p>
                            <p className='text-[18px] text-left text-[#27272A] font-semibold'>₹ {totalPrice.toFixed(2)}</p>

                        </div>
                    </div>

                    {/* payment mode */}
                    <p className='font-inter text-xl font-semibold leading-6 tracking-tight text-left'>Payment Via</p>
                    <div className='flex flex-col gap-2 border-b-2 pb-8'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            <Image src={payment1} alt='payment1' className='w-[68px]' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            <Image src={payment2} alt='payment1' className='w-[68px]' />
                        </div>
                    </div>
                    <div className='flex gap-[160px]'>
                        <p className='text-[18px] text-left text-[#27272A] font-semibold'>Grand Total:</p>
                        <p className='text-[18px] text-left text-[#27272A] font-semibold'>₹ {totalPrice.toFixed(2)}</p>
                    </div>

                    {/* booking confirm */}
                    <Link href='/success'>
                        <button className='w-[228px] h-[60px] p-[18px_64px] rounded-full shadow-[0_2px_4px_0_rgba(52,60,68,0.16)] bg-[#0077CC] text-xl font-semibold text-center text-[white]'>Book Now</button>
                    </Link>

                    <p className='text-lg font-normal leading-6 tracking-tight text-left text-[#3F3F46]'>By Clicking on Book Now you confirm that all the details provided by you are correct, and accepting our TnC & Cancellation Policy.</p>

                </div>
            </div>
        </div >
    )
}

export default More