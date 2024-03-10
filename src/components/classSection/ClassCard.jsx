import classimg from "../../assets/classSection/classimg.png";
import saveicon from "../../assets/classSection/save.png";
function ClassCard() {
  return (
    <div className="m-auto  items-center w-[300px]">
      <div>
        <div className="relative ">
          <img src={classimg} alt="" />
          <div className="absolute top-0 m-2 w-2/3 md:w-full">
            <div className="flex   justify-between md:w-4/5">
             <div>
                <h4 className="bg-white p-1">60% OFF</h4>
                </div>
              <div className="bg-white p-1 cursor-pointer" >
                <img src={saveicon} className="h-4 mt-1 " alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 md:w-full " >
          <div>
            <h4 className="text-xl text-blue-900 font-semibold mt-2">Language</h4>
            <h2 className="text-sm text-gray-500 mt-2">Class name - Lorem ipsum sit elit varsit </h2>
            <div className="flex mt-2">by by John Doe &#11088; <h3 className=" text-yellow-400 font-bold"> 4.7</h3></div>
            <p>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
          </div>
          <div className="mt-2 flex justify-between w-[260px] p-2 bg-blue-900 text-white font-bold rounded-b-lg" >
            <div>kr1000 <s>kr2000</s></div>
            <div><h3>Enroll Now</h3></div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default ClassCard;
