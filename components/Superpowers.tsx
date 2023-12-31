export const Superpowers = () => {



  return (

    <div className='sm:bg-[url("https://drive.google.com/uc?id=1rFuCNVjGBxBaK-V0IlGrqJgU8MKNKHBv")] h-screen bg-contain bg-right
      bg-no-repeat text-white bg-stone-800'>

        <div className='flex flex-col pl-3 sm:pl-9 h-full justify-center w-11/12 sm:w-8/12'>
          <h2 className='uppercase text-lg sm:text-4xl mb-8'>
            intuitive design is how we give the user new superpowers
          </h2>
          <p className="sourceSerif text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit...
          </p>
          <hr className='border-orange-600 w-2/5 border-t-2 my-7' />
          <p className="text-sm font-extralight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-center sm:justify-start">
            <div className='mt-7 flex items-center px-7 py-5 w-fit bg-stone-600/70 backdrop-blur-sm rounded transition-all ease-in-out hover:bg-orange-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
              <p className='uppercase ml-3'>see how we work</p>
            </div>
          </div>
        </div>
    </div>
  )
}
