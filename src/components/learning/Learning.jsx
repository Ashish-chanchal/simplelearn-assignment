import Button from "../general/Button"
import goToTop from '../../assets/footer/gototop.png'
import { Link} from "react-scroll"
function Learning() {
 
  return (
    <div className="pt-7  md:mx-24 mx-2 mt-20 mb-20 max-w-[2465px] ">
      <div className=" text-white pb-7    bg-[#FB7356] flex flex-row justify-center items-center md:rounded-full rounded-3xl">
        <div className="w-[80%] md:w-[60%] text-center">
            <h3 className="md:text-4xl text-lg   font-sansRoundedBold">Start learning new skills today and pursue your passion </h3>
            <p className="mt-5 text-center text-xs md:text-lg font-sansRoundedSemiBold">Join the community of global learners and start exploring today.</p>
            <div className="mt-5  flex md:flex-row flex-col justify-center">
               <input type="email" name="email" id="email"  placeholder="Enter your Email " className="bg-transparent text-white border border-white rounded-full hover:border-white p-2   md:w-3/5 placeholder-white"/>
               <Button title="Start teaching" classN="text-[#FB7356] bg-white  md:ml-3 md:mt-0 mt-5"/>
            </div>
        </div>
        <div></div>
       
        </div>
         <div className="flex justify-end mt-5">
          <Link  to={"navbar"}
        spy={true}
        smooth={true}
        offset={-70} 
        duration={500} className="border rounded-full p-6 border-black"><img src={goToTop} alt="" /></Link>
          
         </div>
    </div>
  )
}

export default Learning