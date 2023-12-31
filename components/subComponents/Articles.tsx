import Image from 'next/image'
import React from 'react'
import { FeaturedWorksItems } from '../../data'

interface imagesData {
    date:string;
    category:string;
    title:string;
    key:string;
    source:string;
}

const images:imagesData[] = [
    {
        date: "April 12, 2015", category: "Plugins, WordPress",
        title: "7 Ways To Improve Your Online Search Results", key: "111",
        source: "https://cdn.pixabay.com/photo/2020/07/23/01/29/books-5430104_1280.jpg"
    },
    {
        date: "April 10, 2015", category: "Social Marketing, SEO",
        title: "Dont't Rule Out The Importance Of Local Citations", key: "222",
        source: "https://cdn.pixabay.com/photo/2018/05/09/17/05/tunnel-3385624_1280.jpg"
    },
    {
        date: "April 07, 2015", category: "CSS, PHP, HTML5",
        title: "How To Communicate With Your Target Audience", key: "333",
        source: "https://cdn.pixabay.com/photo/2016/03/27/17/59/city-1283300_1280.jpg"
    },
    {
        date: "April 05, 2015", category: "CSS, PHP, HTML5",
        title: "10 Ways To Protect Yourself Online", key: "444",
        source: "https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg"
    }
]

const Articles = () => {


  return (
    <div className='grid sm:grid-cols-2 gap-px w-full'>
        {
            images.map( item => {
                return <div className='w-full h-48 md:h-80 relative overflow-hidden group'
                key={item.key}>

                    <div className='absolute w-full h-full overflow-hidden -z-10'>
                        <Image
                            src={`${item.source}`}
                            layout='fill'
                            sizes='50vw'
                            objectFit="cover"
                            width={1930}
                            height={1086}
                            className="group-hover:scale-105 transition-all ease-in-out"
                        />
                    </div>

                    <div className='w-full h-full flex flex-col justify-end bg-black/40 p-3 sm:py-0 md:px-7 transition-all ease-in-out
                    group-hover:bg-black/50'>
                        <div className='sm:h-1/2 md:h-1/3'>
                            <p className='text-sm md:font-light'>
                                <span className='text-orange-600'>{item.date}</span> / Jonathan Ivy / 16 Comments / {item.category}
                            </p>
                            <p className='font-medium'>{item.title}</p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Articles