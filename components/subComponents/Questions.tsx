import { useState } from "react"

const questionsArr = [ {id: "q11", active: false}, {id: "q22", active: false}, {id: "q33", active: false}, {id: "q44", active: false} ];



export const Questions = () => {
  
  const [active, setActive] = useState(questionsArr);

  const handleActive = (e:any) => {

    const newArr = active.map( (item) => {
      
      if(e.currentTarget.id === item.id) {
        return {
          ...item,
          active: !item.active
        }
      } else {
        return {
          ...item,
          active: false
        }
      }
    })

    setActive(newArr);
  }

  return (
    <>
    {
      active.map( item => {

        return <div className="flex flex-col mb-4 cursor-pointer"
          onClick={handleActive}
          key={item.id}
          id={item.id}
        >
          <div className="flex items-center border-b border-white pb-3 mb-3 w-full">
            <div>
              <div className={"w-6 h-6 rounded-full flex justify-center items-center transition-colors ease-in-out md:h-4 md:w-4 "
                + (item.active
                  ? "bg-orange-600"
                  : "bg-gray-100")
                }
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                  className={"h-3 w-3 fill-stone-600 transition-transform ease-in-out md:h-2 md:w-2 " + (item.active
                    ? "rotate-45"
                    : "rotate-0") }
                  >
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                  </svg>
              </div>
            </div>
            <p className="ml-4 w-full text-left md:text-sm font-semibold ">
              At vero eos et accusamus et iusto odio dignissimos?
            </p>
          </div>
          <p className={"overflow-hidden text-sm text-left font-light transition-all ease-in-out "
          + (item.active
              ? "h-14"
              : "h-0")}
          >
              On the other hand, we denounce with <span className="text-orange-600">righteous </span>
              indignation and dislike men who are so beguiled and demoralized
          </p>
        </div>
    })

    }
    </>
  )
}


