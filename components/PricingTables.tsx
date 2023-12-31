import { useState } from "react"
import { Pricing } from "./subComponents/Pricing"


export const PricingTables = () => {

    const buttons = [
        { title: "Monthly", active: true },
        { title: "Yearly", active: false }
    ]

    const [filterButtons, setFilterButtons] = useState(buttons);

    const handleFilter = () => {
        const newArr = filterButtons.map( item => {
            return {
                ...item,
                active: !item.active
            }
        })
        setFilterButtons(newArr);
    }

  return (

    <div className="text-white bg-stone-700 p-3 md:p-9">
        <h2 className="uppercase border-l-2 border-orange-600 text-3xl pl-3 mb-5 mt-10">
            pricing tables
        </h2>
        <p className="s text-sm sourceSerif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center my-5 lg:my-9">
            <div className="border border-stone-600 rounded-full">
                {
                    filterButtons.map( item => {
                        
                        return <button
                            className={"px-3 py-1 transition-all ease-in-out rounded-full "
                                + (item.active && "bg-orange-600")}
                            onClick={handleFilter}
                            key={item.title}
                        >
                            {item.title}
                        </button>    
                    })
                }
            </div>
        </div>

        <div>
            {
                filterButtons.map( item => {
                    if(item.active) {
                        return <Pricing
                            title={item.title}
                            key={item.title}
                        />
                    }
                })
            }
        </div>

    </div>
  )
}
