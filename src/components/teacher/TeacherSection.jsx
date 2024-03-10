import  { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import teacher1 from '../../assets/teacher/teacher1.png'
import teacher2 from '../../assets/teacher/teacher2.png'
import teacher3 from '../../assets/teacher/teacher3.png'
import left from '../../assets/teacher/left.svg'
import right from '../../assets/teacher/right.svg'


function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1
  };
  return (
   <div className="mt-10 md:mt-20 md:px-24 px-2 max-w-[2465px] font-sansRoundedBold">
    <h3 className="text-blue-900 text-3xl my-10 font-bold">Meet our teachers</h3>
     <div className="slider-container md:flex justify-around">
        <div className="md:my-auto text-center my-4">
        <button className="button mx-4  hover:text-blue-900" onClick={previous}>
          <img src={left}  className="h-5 md:h-10"alt="" />
        </button>
        <button className="button"  onClick={next}>
        <img src={right} className="h-5 md:h-10" alt="" />
        </button>
      </div>
      <Slider className="md:w-[70%]"
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        
        <div className="px-2"key={1}>
          <img src={teacher1}  alt="" />
        </div>
        <div className="px-2"key={2}>
        <img src={teacher2} alt="" />
        </div>
        <div className="px-2"key={3}>
        <img src={teacher3} alt="" />
        </div>
        <div className="px-2"key={4}>
        <img src={teacher1} alt="" />
        </div>
        <div className="px-2"key={5}>
        <img src={teacher2} alt="" />
        </div>
        <div className="px-2"key={6}>
        <img src={teacher3} alt="" />
        </div>
      </Slider>
      
    </div>
   </div>
  );
}

export default PreviousNextMethods;
