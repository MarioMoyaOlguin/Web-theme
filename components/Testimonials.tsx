
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TestimonialsArr } from "../data";


const Testimonials = () => {

    const sliderRef = useRef(null);
    console.log(sliderRef.current);

    const settings = {
        dots: false,
        vertical: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

  return (
    <div className="text-white bg-stone-700 rotate botto">

        <Slider {...settings} ref={sliderRef} >
            {
                TestimonialsArr.map( item => {
                    return <div key={item.id}
                    className=" w-full h-auto">
                        <div className="text-center max-w-xl flex flex-col items-center justify-center mx-auto
                        px-4 pt-16">
                            <p className="text-lg font-light sourceSerif sm:text-xl">{item.text}</p>
                            <img src={`https://drive.google.com/uc?id=${item.picPath}`} alt={item.name}
                                className="w-10 h-10 rounded-full mx-auto my-6 sm:w-14 sm:h-14"
                            />
                            <p className="font-light">{item.name}</p>
                        </div>
                    </div>
                })
            }
        </Slider>

        {/* buttons */}
        <div className="w-full flex justify-center items-center mt-6 mb-16">
          <div className="bg-slate-300 p-1 hover:bg-orange-600 transition-all ease-in-out"
          onClick={ () => sliderRef.current!.slickPrev() }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-white">
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
            </svg>
          </div>
          <div className="bg-slate-300 p-1 hover:bg-orange-600 transition-all ease-in-out"
          onClick={ () => sliderRef.current!.slickNext() }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-white">
              <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/>
            </svg>
          </div>
        </div>
    </div>
  )
}
export default Testimonials