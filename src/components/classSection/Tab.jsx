import { useState } from "react"

function Tab() {
    const [active, setActive] = useState('NOK');
 const handleOnClick = () => {
    if(active === 'NOK'){
        setActive('INR')}
    else{ setActive('NOK')}
 }
  return (
    <div className="flex ml-1 mt-2 md:mt-0">
        
        <button className={`rounded-l-lg p-2  ${active=='NOK'?' bg-blue-900 text-white':"bg-white text-blue-900"}`} onClick={handleOnClick}>NOK</button><button className={`rounded-r-lg p-2 ${active=='INR'?' bg-blue-900 text-white':"bg-white text-blue-900"}`} onClick={handleOnClick}>INR</button>
    </div>
  )
}

export default Tab