import React from 'react'
import MainContentPopular from './MainContentPopular'
import MainContentTrending from './MainContentTrending'

function MainContent() {
  return (
    <div className='w-full overflow-y-scroll main-container lg:w-5/12 mt-16 min-w-[600px]'>
        <MainContentPopular />
        <MainContentTrending />
        <MainContentTrending />
        <MainContentTrending />
    </div>
  )
}

export default MainContent
