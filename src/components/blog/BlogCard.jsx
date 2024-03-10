import classimg from "../../assets/blog/blog1.png";
import comment from "../../assets/blog/comments.png";

function BlogCard() {

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

            </div>
          </div>
        </div>
        <div className="w-2/3 md:w-full " >
          <div>
            <h4 className="text-xl text-gray-600 font-semibold mt-2">Class name - Lorem ipsum sit elit varsit </h4>
           
            <p className="text-gray-400  font-sansRoundedSemiBold">Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
          </div>
          <div className="mt-2 flex justify-between w-[260px] p-2 text-blue-900 font-bold rounded-b-lg" >
            <div>Publisher Name</div>
            <div className="flex text-gray-400 "><img src={comment} className="h-3 mt-2" alt="" />0</div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default BlogCard