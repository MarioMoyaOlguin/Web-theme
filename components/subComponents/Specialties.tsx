

export interface SpecialtyCard {
  styles:string;
  path:string;
  extraPath?:string;
  title:string;
}

export const Specialties = ( {styles, path, title, extraPath }: SpecialtyCard ) => {


  return (

    <button className="h-32 md:h-60 bg-stone-700 flex flex-col group hover:bg-stone-800">
      <div className='flex flex-col items-center justify-center h-full w-full p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            className={ `${styles} text-orange-600 mb-4 group-hover:scale-125 transition-transform`}
            viewBox="0 0 16 16"
          >
            <path d={path} />
            { extraPath && <path d={extraPath} /> }
          </svg>
          <h2 className="uppercase sm:mb-2">{title}</h2>
          <p className='hidden md:group-hover:block text-xs font-extralight'>
            Every website needs the right enviroment if it plans to be succesfull
          </p>
      </div>
      <div className="bg-orange-600 hidden md:group-hover:flex justify-center py-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
        </svg>
      </div>
  </button>

  )
}

