import BlogCard from "./BlogCard"


function BlogSection() {
  return (
    <div className="pt-7 md:px-24 px-2 mt-20 max-w-[2465px] font-sansRoundedBold">
                <div className="flex "><h3 className="text-3xl font-bold text-blue-900">Our blogs</h3> <h4 className="mt-3 ml-2 underline cursor-pointer text-orange-600">Show More</h4></div>
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
<BlogCard />
<BlogCard />
<BlogCard />
    </div>
    </div>
  )
}

export default BlogSection