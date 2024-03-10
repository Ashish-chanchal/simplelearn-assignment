import Button from '../general/Button'
import bghero from '../../assets/heroSection/bghero.png'
import  dots from '../../assets/heroSection/dots.png'
import group1 from '../../assets/heroSection/Group1.png'
import rectangle from '../../assets/heroSection/rectangle.png'

function Certifiied() {
    
  return (
    <div className="mt-10 md:mt-20 md:px-24 px-2 max-w-[2465px] font-sansRoundedBold">
<div className="flex lg:flex-row flex-col  justify-between  font-bold text-blue-900">
     
      <div >
        <div className='relative 2xl:w-[800px] 2xl:h-[650px] lg:w-[550px] lg:h-[600px] md:w-[600px] md:h-[500px] w-[250px] h-[200px] mt-10 md:mt-0 m-auto'>
          <img className='absolute z-1 top-0 left-5 2xl:w-[700px] 2xl:h-[600px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px]' src={bghero} alt="" />
          <img className='absolute z-2 top-0 left-5 2xl:w-[700px] 2xl:h-[600px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px]' src={dots} alt="" />
         
          <img className='absolute z-10 lg:top-[30px] 2xl:w-[700px] 2xl:h-[600px] md:top-[60px] top-[50px]  left-0 lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] 'src={group1} alt="" />
        </div>
        </div>
        <div className='md:my-auto mt-20'>
        <h3 className='text-4xl' >Become a certified teacher</h3>
        
        
        <p className='md:w-3/4 mt-5 font-sansRoundedMedium'>
        We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.
        </p>
       <div className='p-8'>
       <ul >
            <li className='flex'> <img src={rectangle} className='h-2 mt-3 mr-1' alt="" />Make your own schedule</li>
            <li className='flex'><img src={rectangle} className='h-2 mt-3 mr-1'alt="" />Teach students on an international platform</li>
            <li className='flex'><img src={rectangle} className='h-2 mt-3 mr-1'alt="" />Become part of an international community of passionate educators</li>

        </ul>
       </div>
          <Button title="Start teaching" classN="text-white bg-blue-900  "/>
        
        
        </div>
        
     
    </div>
    </div>
  )
}

export default Certifiied