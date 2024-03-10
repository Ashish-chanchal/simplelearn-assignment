import heart from '../../assets/heroSection/heart.png'
import bghero from '../../assets/heroSection/bghero.png'
import  dots from '../../assets/heroSection/dots.png'
import group from '../../assets/heroSection/group.png'
import Button from '../general/Button'
import greenbg from '../../assets/heroSection/greenbg.png'
import  arrow from '../../assets/heroSection/arrow.png'
import HeroCard from './HeroCard'
import drawing from '../../assets/heroCard/drawing.png'
import board from '../../assets/heroCard/board.png'
import topup from '../../assets/heroCard/topup.png'
import laptop from '../../assets/heroCard/laptop.png'

function HeroSection() {
  return (
    <>
    <div className='pt-7 md:px-24 px-2 max-w-[2465px] font-sansRoundedBold'>
    <div className="flex lg:flex-row flex-col  justify-between  font-bold text-blue-900">
      <div><div className='flex md:mt-20 mt-10 mr-5'>
        <h3 className='flex  justify-center md:text-3xl text-lxl items-center'>Hobbies <img src={heart} className='w-10'/> Happiness <img src={heart}className='w-10'  />  Home</h3>
        
        </div>
        <p className='md:w-3/4 mt-5 md:text-2xl text-lg font-sansRoundedSemiBold'>
        A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.
        </p>
        <div className='overflow-hidden border border-blue-900 flex mt-5  justify-between  rounded-full xl:w-4/5' >
         <input type="eamil" className='pl-2 w-full  '  name='email' placeholder='Enter your Email'/>
          <Button title="Start Exploring" classN="text-white bg-blue-900  min-w-fit"/>
        </div>
        <div className='absolute left-0 lg:top-[400px] top-[600px]' ><img src={greenbg} alt="" className='w-24 md:w-64' /></div>
        </div>
      <div >
        <div className='relative xl:w-[800px] xl:h-[550px] lg:w-[500px] lg:h-[550px] md:w-[600px] md:h-[500px] w-[250px] h-[200px] mt-10 md:mt-0 m-auto'>
          <img className='absolute z-1 top-0 left-5 xl:w-[800px] xl:h-[550px] lg:w-[500px] lg:h-[500px] ' src={bghero} alt="" />
          <img className='absolute z-2 top-0 left-5 xl:w-[800px] xl:h-[550px] lg:w-[500px] lg:h-[500px]'src={dots} alt="" />
          <img className='absolute z-10 xl:w-[800px] xl:h-[550px] lg:top-[30px] md:top-[100px] top-[50px] lg:w-[500px] lg:h-[450px] obj left-0 'src={group} alt="" />
          
        </div>
        
        
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center lg:w-1/3 w-1/2 m-auto'>
      
    <div className='m-auto h-[100%] md:mt-20 mt-40 '><img src={arrow} alt="" /></div>
    <h1 className='lg:text-3xl text-xl text-blue-900 font-sansRoundedBold'>Explore. Enroll. Have Fun. Repeat - 
here hobby meets happiness</h1>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 mt-10">
      <HeroCard imageUrl={drawing} title="Learn something new" description="Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography."/>
      <HeroCard imageUrl={board} title="Skilled & Passionate Teachers" description="We offers Interactive classes by experts who are qualified and trusted."/>
      <HeroCard imageUrl={topup} title="Take classes anytime, anywhere" description="Join sessions at your own convenience and pace, from the comforts of your home."/>
      <HeroCard imageUrl={laptop} title="Pay as you go" description="No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us."/>
      
    </div>
    </div>
    </>
  )
}

export default HeroSection