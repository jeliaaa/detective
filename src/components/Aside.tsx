import React from 'react'
import settingsIcon from '../assets/settings.png'
import arrowIcon from '../assets/arrow.png'
import UpcomingCases from './UpcomingCases'

const Aside = () => {
    return (
        <div className='h-full flex flex-col min-w-[300px] bg-[#F6F1E6]/40  max-w-[350px]' >
            <div className='w-full flex justify-center items-center h-1/5' style={{ backgroundImage: `url("https://picsum.photos/300/150")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <img src='https://picsum.photos/100' alt='...' className='rounded-full border-red-500 border-2 w-[150px] h-[150px]' />
            </div>
            <div className='relative flex flex-col w-full  pt-2 pb-4'>
                <img src={settingsIcon} alt='...' className='absolute top-3 left-3 w-[35px] h-[35px]' />
                <h1 className='text-3xl'>John Anderson</h1>
                <p>Junior Investigator</p>
                <div className='flex flex-col mt-2 w-full items-center'>
                    <div className='w-full flex items-end justify-center'>
                        <span className='uppercase'>level</span>
                        <span className='text-3xl text-red-500'>16</span>
                        <span>XP</span>
                    </div>
                    <p>40000/1000320</p>
                </div>
            </div>
            <div className='w-full px-5 flex flex-col py-3 border-y-4'>
                <p className='text-start pl-4 my-3'>Navigation</p>
                {[0, 1, 2, 3, 4].map((id) => (
                    <div key={id} className='flex p-4 w-full rounded-full hover:bg-red-500 hover:text-white hover:cursor-pointer'>
                        <img src={arrowIcon} className='w-[5%]' alt='...' />
                        <p className='w-[90%] text-start pl-4'>Home</p>
                        <span className='w-[5%]'>24</span>
                    </div>
                ))}

            </div>
            <div className='w-full h-1/4 pt-2'>
                <UpcomingCases />
            </div>
        </div>
    )
}

export default Aside