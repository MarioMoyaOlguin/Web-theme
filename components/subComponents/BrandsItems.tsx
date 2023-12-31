import Image from "next/image"

interface Brands {
    imgName:string;
    style:string;
    path:string;
    path2?:string;
    width:number;
    height:number;
}

export const BrandsItems = ( { imgName, style, path, path2, width, height }:Brands ) => {
  return (
        <div className="flex w-full h-56 relative">
            <Image
                src={`${imgName}`}
                layout='fill'
                sizes='50vw'
                objectFit="cover"
                className="-z-0"
                width={width}
                height={height}
            />

            <div className="flex flex-col h-full w-full items-center justify-center group z-0 p-2
            bg-black/60 hover:bg-orange-600/80 transition-all ease-in-out">

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className={style} viewBox="0 0 16 16">
                    <path d={path}/>
                    <path d={path2}/>
                </svg>
                <p className="h-px opacity-0 group-hover:h-20 group-hover:opacity-100 text-sm font-light text-center transition-all
                max-w-[220px] ease-in-out group-hover:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
            </div>

        </div>
  )
}




