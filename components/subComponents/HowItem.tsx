export interface Data {
    title:string;
    style:string;
    path:string;
    path2?:string;
    inverted?:boolean;
}

export const HowItem = ( {title, style, path, path2, inverted}:Data ) => {

    

  return (

    <div className={`flex md:flex-col bg-stone-700 relative h-20 md:h-full md:w-1/4 last:h-10
    sm:last:h-20 md:last:h-full ${inverted && " md:flex-col-reverse"}`}>
        <div className={`w-14 border-r border-dashed md:w-full md:h-1/2 md:border-r-0 md:border-dashed
        ${inverted
            ? " md:border-t"
            : " md:border-b"}`}
        >
            
        </div>

        <div className="w-full relative px-6 pt-6 md:h-1/2 md:px-2 md:pt-1">
            <h3 className="uppercase font-medium absolute top-0 bg-stone-700 md:my-1
            px-4 py-1 left-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:p-0 md:-translate-x-0
            md:-translate-y-0 md:left-0">
                {title}
            </h3>
            <p className="font-extralight text-sm hidden sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt
            </p>
        </div>

        {/* icon */}
        <div className={`w-10 h-10 rounded-full bg-orange-600 border border-orange-600 ease-in-out
        hover:bg-stone-700 flex justify-center items-center absolute -top-5 left-7 transition-colors
         ${inverted
            ? " md:left-0 md:top-full md:-translate-x-1/2 md:-translate-y-1/2"
            : " md:top-0 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2"}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${style}`} viewBox="0 0 16 16">
                <path d={`${path}`}/>
                <path d={`${path2}`}/>
            </svg>
        </div>

        {/* dot */}
        <div className="hidden md:inline-block h-3 w-3 rounded-full bg-white absolute top-1/2
        -translate-x-1/2 -translate-y-1/2">
        </div>
    </div>
  )
}


