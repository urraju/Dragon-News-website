

import React from 'react'
import LeftSiteNav from './LeftSiteNav'
import RightSiteNav from './RightSiteNav'
import CenterNav from './CenterNav'

const Home3Card = () => {
    return (
        <div className='mt-10'>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>
          <div className='border'> <LeftSiteNav /> </div>
          <div className='grid col-span-2 border h-max'> <CenterNav /> </div>
          <div className='border h-max'> <RightSiteNav /> </div>
          </div>
        </div>
    )
}

export default Home3Card