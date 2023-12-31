
import { ImageCard } from "./subComponents/ImageCard"




export const MeetOurTeam = () => {


  return (
    
    <div className="bg-stone-800 text-white sm:p-9 pb-9" id="meet-our-team">
        <h2 className="uppercase ml-3 mt-14 border-l-2 border-orange-600 text-3xl pl-3 mb-3">
            meet our team
        </h2>
        <p className="hidden sm:block mb-16 sourceSerif">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
        </p>
        <div className="grid place-content-center grid-cols-[repeat(auto-fit,_minmax(160px,_160px))]
        md:grid-cols-4">

            <ImageCard
                bg = "/images/bond.png"
                firstName="Bondrewd"
                lastName="The Novel"
                height={671}
                width={587}
            />

            <ImageCard
                bg = "/images/pcell.png"
                firstName="Pcell"
                lastName="Gen 1"
                height={187}
                width={165}
            />

            <ImageCard
                bg = "/images/gg.png"
                firstName="Cat"
                lastName="gg"
                height={198}
                width={200}
            />

            <ImageCard
                bg = "/images/roy.png"
                firstName="Roy"
                lastName="ma'boy"
                height={358}
                width={305}
            />

            
        </div>
    </div>
  )
}
