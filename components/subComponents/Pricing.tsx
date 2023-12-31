import { tables } from "../../data";



export const Pricing = ({title}:any) => {

  return (

    <div className=" text-stone-600 grid place-content-center grid-cols-[repeat(auto-fit,_minmax(296px,_320px))]
    gap-y-9 justify-around md:flex md:justify-center md:gap-x-5 my-5 md:grid-cols-3 mb-8">
        {
            tables.map( item => {

                if(item.plan === title) {
                    return <div className="bg-white flex flex-col group rounded overflow-hidden
                    max-w-xs md:w-[240px] mx-1 hover:scale-105 transition-all ease-in-out"
                    key={item.id}
                    >
                        <div className="flex md:flex-col">
                            <div className="flex group-hover:text-orange-600 flex-col p-4 items-center
                            justify-center w-1/2 border-r border-slate-100 transition-all ease-in-out
                            md:w-full">
                                <p className="uppercase font-medium">{item.type}</p>
                                <div className="flex text-stone-400 group-hover:text-orange-600 transition-all ease-in-out">
                                    <div className="flex items-start">
                                        <span className="mt-2 text-2xl">$</span>
                                    </div>
                                    <div className="flex items-end">
                                        <span className="x text-6xl text-stone-700 group-hover:text-orange-600 transition-all ease-in-out">
                                            {item.cost}
                                        </span>
                                        <span>{title === "Monthly" && "/MO"}</span>
                                        <span>{title === "Yearly" && "/YR"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col bg-slate-100 md:w-full">
                                <div className="flex justify-center">
                                    <p className="my-[2px] pl-1">{item.users}</p>
                                    <p className="my-[2px] pl-1">Users</p>
                                </div>
                                <div className="flex justify-center bg-white">
                                    <p className="my-[2px] pl-1">{item.projects}</p>
                                    <p className="my-[2px] pl-1">Projects</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="my-[2px] pl-1">99%</p>
                                    <p className="my-[2px] pl-1">Uptime</p>
                                </div>
                                <div className="flex justify-center bg-white">
                                    <p className="my-[2px] pl-1">{item.bandwidth}</p>
                                    <p className="my-[2px] pl-1">Bandwidth</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="my-[2px] pl-1">{item.storage}</p>
                                    <p className="my-[2px] pl-1">Storage</p>
                                </div>
                                <div className="flex justify-center bg-white">
                                    <p className="my-[2px] pl-1">24/7</p>
                                    <p className="my-[2px] pl-1">Support</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-white bg-black group-hover:bg-orange-600 transition-all ease-in-out">
                            <p className="uppercase text-center py-2">select</p>
                        </div>
                    </div>
                }
            })
        }
    </div>
  )
}
