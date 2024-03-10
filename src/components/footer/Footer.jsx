import footer from '../../assets/footer/footer.png'
import fb from '../../assets/footer/fb.png'
import insta from '../../assets/footer/insta.png'
import linkedin from '../../assets/footer/linkedin.png'
import twitter from '../../assets/footer/twitter.png'
import youtube from '../../assets/footer/youtube.png'



function Footer() {
  return (
    <div className="pt-7  md:px-24 px-2 mt-20 mb-5 text-blue-900 max-w-[2465px] font-sansRoundedBold">
      <div className='flex justify-around'>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-10 gap-x-5 col-span-4">
          
          <ul>
            <li className=" text-xl mb-2 font-bold" >Class categories</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium" >Cooking</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Music</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Arts & Crafts</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Yoga</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Academic</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Back to Roots</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Futeresting</li>
          </ul>
          <ul>
          <li className=" text-xl mb-2 font-bold" >Company</li>
            <li className="cursor-pointer hover:text-orange-400">About</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Careers</li>
            <li className=" hover:text-orange-400 font-sansRoundedMedium">Blog</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Contact</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Privacy Policy</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Refund Policy</li>
          </ul>
          <ul>
          <li className=" text-xl mb-2 font-bold" >Learn</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">All classes</li>

          </ul>
          <ul>
          <li className=" text-xl mb-2 font-bold" >Teach</li>
            <li className="cursor-pointer hover:text-orange-400 font-sansRoundedMedium">Become a teacher</li>

          </ul>
        </div>
        <div className='border-b-2 rounded-md hidden sm:block'>
            <img src={footer} alt="" />
            <h3 className='p-2 text-center'>Sell your products with us</h3>
        </div>
      </div>
      <hr className='bg-black'/>
      <div className='flex justify-between mt-5 flex-col md:flex-row'>
        <div>&#169; Project 2021. All rights reserved.</div>
        <div>Made with &#10083; by SimplePlan</div>
        <div className='flex  gap-y-2'>
<img src={fb}  className="h-3 md:m-2 m-1"alt="" /> 
<img src={insta}  className="h-3 md:m-2 m-1"alt="" />
<img src={linkedin} className="h-3 md:m-2 m-1" alt="" />
<img src={twitter}  className="h-3 md:m-2 m-1"alt="" />
<img src={youtube} className="h-3 md:m-2 m-1" alt="" />

        </div>
      </div>
    </div>
  );
}

export default Footer;
