import React, { useState } from 'react'


const Menu = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

  return (

    <div className={'top-0 right-0 flex justify-end text-white z-50 '
        + (open
            ? "fixed w-screen h-screen bg-black/40"
            : "absolute w-52" ) }
        onClick={handleOpen}
    >

        <div className='relative'>

            <div className={'absolute top-0 right-0 flex flex-col items-end transition-all ease-in-out duration-300 '
                    + (open
                        ? "bg-black w-52"
                        : "w-0") }
            >
                <button
                    className={'h-8 w-8 p-0 transition-all ease-in-out appearance-none ' + (open && "bg-orange-600")}
                    onClick={handleOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className={'top-[40px] overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-start p-4 uppercase font-semibold gap-y-2 h-[248px] '
                + (open
                    ? "w-52 opacity-100"
                    : "w-0 opacity-0" ) }
                >
                    <a className='w-[176px]' href='#our-specialty'>our specialty</a>
                    <a className='w-[176px]' href='#meet-our-team'>meet our team</a>
                    <a className='w-[176px]' href='#how-we-doit'>how we do it</a>
                    <a className='w-[176px]' href='#brands-clients'>brands & clients</a>
                    <a className='w-[176px]' href='#works'>works</a>
                    <a className='w-[176px]' href='#news-articles'>news & articles</a>
                    <a className='w-[176px]' href='#contact'>contact</a>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Menu