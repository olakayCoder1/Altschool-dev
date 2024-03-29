import React from 'react'
import MainContentPopularCard from './MainContentPopularCard'

function MainContentPopular() {
  return (
    <div className=' w-full my-3'>
      <div className=' w-full my-3 '>
          <h2 className=' text-lg font-normal text-gray-700 py-3'>Popular & Trending</h2>
          <div className='overflow-x-scroll  flex  gap-3'>
              <MainContentPopularCard />
              <MainContentPopularCard />
              <MainContentPopularCard />
              <MainContentPopularCard />
          </div>
      </div>
    </div>
  )
}

export default MainContentPopular
