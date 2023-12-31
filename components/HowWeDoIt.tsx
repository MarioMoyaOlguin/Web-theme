import { HowItem } from "./subComponents/HowItem"


export const HowWeDoIt = () => {


  return (

    <div className="sm:p-9 bg-stone-700 text-white py-14 md:pb-28 z-0" id="how-we-doit">

        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="sm:w-8/12">
                    <h2 className="uppercase border-l-2 border-orange-600 text-3xl pl-3 mb-5 ml-4">
                        how we do it
                    </h2>
                    <p className="hidden md:block sourceSerif mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="sm:w-4/12 flex items-center sm:justify-center ml-4">
                    <div className="px-6 py-4 flex items-center bg-stone-800 w-fit transition-all ease-in-out hover:bg-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16">
                            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                        </svg>
                        <p className="uppercase text-xs">learn more about us</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row divide-y divide-white mt-8 px-4 md:h-[280px] lg:h-56 xl:h-60
            md:divide-y-0 md:divide-x">
                
                <div className="h-10 flex md:flex-col md:w-5 md:h-full">
                    <div className="w-14 h-full border-r border-dashed md:border-r-0 md:h-1/2
                    md:w-full md:border-b">

                    </div>
                    <div className="w-full h-full md:h-1/2">

                    </div>
                </div>

                <div className="divide-y divide-white md:w-full md:flex md:divide-y-0 md:divide-x">
                    <HowItem
                        title="discover"
                        style="bi bi-eye-fill"
                        path="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                        path2="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />

                    <HowItem
                        title="design"
                        style="bi bi-palette-fill"
                        path="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        path2=""
                        inverted={true}
                    />

                    <HowItem
                        title="develop"
                        style="bi bi-gear-fill"
                        path="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                        path2=""
                    />

                    <HowItem
                        title="deploy"
                        style="bi bi-cloud-arrow-up-fill"
                        path="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                        path2=""
                        inverted={true}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
