import React from 'react'
import success from '../../public/icons/success.png'
import Image from 'next/image'

const page = () => {

    
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-white'>
            <Image src={success} alt='success' />
        </div>
    )
}

export default page