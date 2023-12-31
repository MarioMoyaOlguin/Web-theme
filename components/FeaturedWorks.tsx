import { useCallback, useState } from 'react';
import ImageViewer from "react-simple-image-viewer";

import { filterByCat } from '../hooks/useFilterByCat';
import { buttons, FeaturedWorksItems } from "../data";
import Image from 'next/image';




export const FeaturedWorks = () => {
    
    const handleFilter = (e:any) => {

        //Creates a new array of buttons with inverted pressed button active value
        const newArr = filterButtons.map( (item) => {
            if(item.title === e.target.innerHTML) {
                return {
                    ...item,
                    active: !item.active
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        })

        // Checks if all the buttons are inactive, sets them to default values if so and
        // filters featuredWorks array by selected category
        newArr.map( (item) => {
            if(item.title === e.target.innerHTML) {
                if(item.active === false) {
                    setFilterButtons(buttons);
                    setItems(FeaturedWorksItems);
                } else {
                    setFilterButtons(newArr);
                    const arr = filterByCat(e.target.innerHTML);
                    setItems(arr);
                }
            }
            //Case "all" tag activates
            if(e.target.innerHTML === "all") {
                setItems(FeaturedWorksItems);
            }
        })
    }

    //Filter buttons array
    const [filterButtons, setFilterButtons] = useState(buttons);

    //Array of images
    const [items, setItems] = useState(FeaturedWorksItems);
    const pathsArr = items.map( item => {
        return item.picPath
    })

    //Image viewer component states
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    //Image viewer
    const openImageViewer = useCallback((index:any) => {
        const ind = index.target.parentElement.parentElement.parentElement.children[0].childNodes[0]["data-loaded-src"]
        console.log(ind);
        console.log(pathsArr.indexOf(ind))
        setCurrentImage(pathsArr.indexOf(ind));
        setIsViewerOpen(true);
    }, [items]);
    
    const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    };

    const anchorHandler = (e:any) => {
        window.open(`${items[0].url}`, "_blank")
    }



  return (

    <div className="text-white bg-stone-700" id='works'>
        <div className="">
            <h2 className="uppercase border-l-2 border-orange-600 text-3xl pl-3 mb-5 ml-4 mt-20 md:ml-9">
                featured works
            </h2>
            <p className="font-light text-sm mx-4 md:mx-9 sourceSerif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <div className='flex flex-wrap gap-2 p-4 md:p-9 justify-center'>
            {
                filterButtons.map( (button) => {

                    return <button
                        className={"border rounded-full px-3 py-1 text-sm "
                        + (button.active
                            ? "bg-orange-600 border-orange-600"
                            : "border-gray-400")}
                        key={button.title}
                        onClick={handleFilter}
                    >
                        <p className='uppercase'>{button.title}</p>
                    </button>
                })
            }
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
            {
                items.map( (item) => {
                    
                    return <div 
                    className='flex relative h-48 justify-center items-center group sm:h-48 lg:h-64'
                    key={item.picPath}
                    >
                        <Image
                            src={item.picPath}
                            layout='fill'
                            sizes='50vw'
                            objectFit="cover"
                            className='-z-0'
                            width={1930}
                            height={1086}
                        />

                        <div className='z-0 h-full invisible w-full flex flex-col gap-2 bg-stone-800/60
                        justify-center hover:visible opacity-0 group-hover:opacity-100 group-hover:visible
                        transition-all ease-in-out'>
                            <div className='flex justify-center gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrows-angle-expand bg-stone-700 rounded-full hover:bg-orange-600 transition-all ease-in-out" viewBox="-10 -10 36 36"
                                    onClick={openImageViewer}>
                                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                </svg>

                                <div className='bg-stone-700 rounded-full p-3 hover:bg-orange-600
                                transition-all ease-in-out'
                                onClick={anchorHandler}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-eye-fill h-full" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-center'>Web App</p>
                        </div>
                    </div>
                })
            }
        </div>

        {
            isViewerOpen && (
                <ImageViewer
                    src={pathsArr}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )
        }
    </div>
  )
}
