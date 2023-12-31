import Image from "next/image"


export const MobileDesign = () => {
  return (
    <div className="text-white relative flex h-[400px] overflow-hidden">
        <Image
          src="/images/Meeting.webp"
          layout="fill"
          sizes='50vw'
          objectFit="cover"
          className="-z-0"
          priority
          width={840}
          height={519}
        />

        <div className="z-0 bg-black/40 h-full w-full p-6 sm:p-9 flex justify-between">
          <div className="flex flex-col justify-center h-full sm:w-3/4 lg:w-7/12">
            
            <p className="uppercase sm:text-xl">clean & modern design</p>
            <hr className="w-1/4 border-orange-600 border my-4" />
            <h2 className="uppercase text-5xl mb-6 md:text-6xl">
                looks great on mobile devices
            </h2>

            <div className="flex gap-x-3 justify-between max-w-[505px]">
              <button className="w-1/2 bg-stone-700 px-4 py-2 hover:bg-orange-600 transition-all ease-in-out sm:py-3">
                <p className="uppercase">contact us</p>
              </button>

              <button className="w-1/2 bg-stone-700 px-4 py-2 hover:bg-orange-600 transition-all ease-in-out sm:py-3">
                <p className="uppercase">learn more</p>
              </button>
            </div>

          </div>

          <div className="relative hidden sm:flex justify-end sm:w-1/4 -z-10">
            <div className=" md:flex absolute -bottom-10">
                <Image
                    src={'/images/uc.png'}
                    layout="fixed"
                    height={720*0.5}
                    width={660*0.5}
                />
            </div>
          </div>

        </div>
    </div>
  )
}
