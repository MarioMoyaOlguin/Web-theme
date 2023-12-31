interface Data {
    viewBox:string;
    path:string;
    numb:string;
    text:string;
}

export const StatisticsItem = ( {viewBox, path, numb, text}:Data ) => {



  return (

    <div className="flex flex-col sm:flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${viewBox}`}
        className="w-8 h-8 fill-orange-600 mb-2 ml-1 sm:w-10 sm:h-10">
            <path d={`${path}`} />
        </svg>
        <div className="flex flex-col sm:ml-2">
            <span className="text-2xl font-semibold leading-[1rem] sm:text-4xl sm:leading-[1.5rem]">{numb}</span>
            <span className="mt-1">{text}</span>
        </div>
    </div>
  )
}

