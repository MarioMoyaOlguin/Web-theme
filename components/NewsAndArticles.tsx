import React from 'react'
import Articles from './subComponents/Articles'

const NewsAndArticles = () => {
  return (
    <div className='text-white flex flex-col items-center' id='news-articles'>
        <div className='p-4 md:p-9'>
            <h2 className="uppercase border-l-2 border-orange-600 text-3xl pl-3 mb-5 mt-10">
                news & articles
            </h2>
            <p className='text-sm sourceSerif'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <Articles />


          <p className='uppercase text-center my-6 sm:text-sm p-1 w-fit hover:text-orange-600 transition-all ease-in-out cursor-pointer'>
            view all articles & news
          </p>

        
    </div>
  )
}

export default NewsAndArticles