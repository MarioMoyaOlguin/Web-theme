import Menu from "./subComponents/Menu"



export const SalemIntro = () => {


  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg')] bg-cover relative">
      
      <span className='text-xl font-semibold text-white'>WEB THEME</span>
      <Menu />

      <div className="flex flex-col w-full sm:px-12 sm:py-8 px-2 bg-black/20
        text-white items-center justify-between bg-center">

          

          <div className='flex flex-col items-center sm:w-3/4 mt-36'>
            <h2 className='sm:text-5xl text-xl border-bold pr-2 text-center'>
              WE <span className='text-white font-bold'>LOVE</span> TO WRITE CODE
            </h2>

            <hr className='border-orange-600 w-1/5 border-t-2 my-7' />

            <p className='text-center mb-7 text-sm px-4 sourceSerif lg:text-lg'>
              Salem is a new and modern one page Wordpress theme, designed and aimed at creative
              teams that wants to showcase your products and services in a new and creative way
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </div>
        </div>
      </div>
  )
}
