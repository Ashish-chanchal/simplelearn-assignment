import ReasonCard from "./ReasonCard";


import laptop from "../../assets/reason/laptop.png";
import Learning from "../../assets/reason/Learning.png";
import sharing from "../../assets/reason/sharing.png";
import Age from "../../assets/reason/Age.png";
import cash from "../../assets/reason/cash.png";
import revival from "../../assets/reason/revival.png";

function ReasonSection() {
  return (
    <div className="pt-7 md:px-24 px-2 mt-20 text-blue-900 font-bold relative max-w-[2465px] font-sansRoundedBold z-50">
        
      <h3 className="text-3xl text-blue-900">Six reasons to choose our class</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
        <ReasonCard imgUrl={laptop} details="Interactive live online classes at your convenient time slots"/>
        <ReasonCard imgUrl={Learning} details="Learning from passionate, talented and trusted teachers"/>
        <ReasonCard imgUrl={sharing} details="Cross country sharing of interesting and unique hobbies from across the world"/>
        <ReasonCard imgUrl={Age} details="Age no bar for enroling into your cherished hobby or activity classes"/>
        <ReasonCard imgUrl={cash} details="Transparent and structured fee payment options"/>
        <ReasonCard imgUrl={revival} details="Contributing to the revival and nurturing of traditional art forms"/>
      </div>
    </div>
  );
}

export default ReasonSection;
