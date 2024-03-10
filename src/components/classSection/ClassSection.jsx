import ClassCard from "./ClassCard"
import Tab from "./Tab"


function ClassSection() {
  return (
    <div className="pt-7 md:px-24 px-2 mt-20 text-blue-900 max-w-[2465px] font-sansRoundedBold">
        <div >
            <div className='md:flex justify-between'>
            <div className="flex items-center"><h3 className="text-3xl font-bold">Discover classes</h3> <h4 className="mt-3 ml-2 underline cursor-pointer text-orange-600 font-sansRoundedSemiBold">Show More</h4></div>
            <div className="md:flex justify-center items-center md:mt-0 mt-2">Show Amount in :<Tab/> </div></div>
            <div><h3 className="text-xl mt-5">Choose from a variety of classes from around the world.</h3></div>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 place-items-center">
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>

        </div>
    </div>
  )
}

export default ClassSection