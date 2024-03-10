import Button from "../general/Button"
import Dropdown from "./DropDown"
import { useState, useEffect, useRef } from 'react';
import dropdownbtn from '../../assets/navbar/dropdown.svg';
import dropupbtn from "../../assets/navbar/dropup.svg";
import rightarrow from "../../assets/navbar/rightarr.png"
import navpng from "../../assets/navbar/nav.png"
function Navbar() {
    const[show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
   const [img, setImg] = useState(dropdownbtn);
    const toggleDropdown = () => {
        setImg(isOpen?dropdownbtn:dropupbtn);
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  const hideShow = () => {
    setShow(!show)
  }
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  return (
    <>
    <nav  id="navbar" className="font-sansRoundedBold ">
    <div className="flex py-3 md:px-24 px-2  justify-between  box-border font-bold max-w-[2465px]">
        <div className="flex">
            <h3 className="mx-2 text-blue-900">Logo</h3>
            <div className="mx-2 text-blue-900 relative">
                <Dropdown img={img} toggleDropdown={toggleDropdown} dropdownRef={dropdownRef}/>
            </div>
        </div>
        <div className="flex   ">
           <h3 className="mx-2 text-blue-900">Teach </h3>|
            <div className="flex">
                <Button key='login' title="Login" classN="border text-blue-900 mx-2"/>
                <Button key="signup" title="Signup" classN="text-white bg-blue-900 mx-2"/>
         
               
            </div>
        </div>
        
    </div>{isOpen && (
        <div className="max-w-[2465px] md:px-24 p-5 dropdown-menu text-blue-900 font-bold absolute z-50 bg-white w-screen  ">
          <div className="flex justify-between"><div className='grid md:grid-cols-6 grid-cols-3 gap-8 mt-5  leading-9'>
          <ul>
            <li className="flex hover:text-orange-400" onMouseOver={hideShow} onMouseOut={hideShow} >Language {show&&(<img src={rightarrow} className="h-3 mt-4 ml-5" alt="" />)}</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium" >Cooking</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Music</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Arts & Crafts</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Yoga</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Academic</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Back to Roots</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Futeresting</li>
          </ul>
          <ul>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">All</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Indian</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Norergion</li>
            <li className="flex hover:text-orange-400 font-sansRoundedMedium">Category</li>
          </ul>
          </div>
          <div className="relative sm:block hidden">
            
            <img src={navpng} alt="" />
            <div className="absolute lg:top-1/3 top-1/4 text-center text-white "><h3 className="lg:text-3xl text-xl text-white leading-10">“Do anything, but let it produce joy.” <br /></h3><h4 className="mt-10 text-center">-Walt Whitman </h4></div>
          </div>
          <div>
            
          </div></div>
          

        </div>
        
      )}</nav>
    </>
  )
}

export default Navbar