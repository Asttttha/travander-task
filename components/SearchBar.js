'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import location from '../public/icons/location.png'
import person from '../public/icons/person.png'
import date from '../public/icons/date.png'
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
    // dropdown state
    const [openDropdown, setOpenDropdown] = useState(null);

    // searchbar state
    const [isClicked, setIsClicked] = useState(false);


    // toggle dropdowns based on index
    const handleToggle = (dropdownIndex) => () => {
        setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
        console.log(`dropdown clicked index: ${dropdownIndex}`)
    };

    // Function to handle the search icon click
    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className='w-full flex justify-center  relative'>
            <div className='w-[885px] h-[130px] px-[20px] rounded-full shadow-[0px_10px_40px_0px_rgba(0,0,0,0.04)] flex items-center justify-between px-10'>
                <h1>select any one</h1>

                {/* first dropdown */}
                <div className='flex gap-[8px] p-[16px]'>
                    <Image src={location} alt='location' className='w-[18px] h-[22px] pt-1' />
                    <div className='flex flex-col justify-start font-inter text-[16px]'>
                        <p
                            className='font-semibold text-center'>
                            Select Location
                        </p>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={handleToggle(1)}
                        >
                            <p
                                className={`${openDropdown === 1 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}>
                                Location
                            </p>
                            <GoChevronDown
                                className={`w-[20px] h-[20px] ${openDropdown === 1 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}
                            />
                        </div>
                        {openDropdown === 1 && (
                            <div className='z-10'>
                                <p className='p-[8px] text-[10px] text-[red] cursor-pointer hover:bg-gray-100 absolute bottom-0'>
                                    under construction
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* second dropdown */}
                <div className='flex gap-[8px] p-[16px]'>
                    <Image src={person} alt='person' className='w-[20px] h-[24px] pt-1' />
                    <div className='flex flex-col justify-start font-inter text-[16px]'>
                        <p className='font-semibold text-center'>
                            Select Traveler
                        </p>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={handleToggle(2)}
                        >
                            <p className={`${openDropdown === 2 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}>
                                Neelabh
                            </p>
                            <GoChevronDown
                                className={`w-[20px] h-[20px] ${openDropdown === 2 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}
                            />
                        </div>
                        {openDropdown === 2 && (
                            <div className='z-10'>
                                <p className='p-[8px] text-[10px] text-[red] cursor-pointer hover:bg-gray-100 absolute bottom-0'>
                                    under construction
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* third dropdown */}
                <div className='flex gap-[8px] p-[16px]'>
                    <Image src={date} alt='date' className='w-[20px] h-[24px] pt-1' />
                    <div className='flex flex-col justify-start font-inter text-[16px]'>
                        <p className='font-semibold text-center'>Select Date</p>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={handleToggle(3)}
                        >
                            <p className={`${openDropdown === 3 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}>
                                Date
                            </p>
                            <GoChevronDown
                                className={`w-[20px] h-[20px] ${openDropdown === 3 ? 'text-[#0077CC]' : 'text-[#3F3F44]'}`}
                            />
                        </div>
                        {openDropdown === 3 && (
                            <div className='z-10'>
                                <p className='p-[8px] text-[10px] text-[red] cursor-pointer hover:bg-gray-100 absolute bottom-0'>
                                    under construction
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* search icon */}
                <div className='w-[80px] h-[80px] flex items-center'>
                    <CiSearch
                        className={`cursor-pointer w-[32px] h-[32px] ${isClicked ? 'text-blue-500' : 'text-gray-500'}`}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
