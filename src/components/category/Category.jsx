function Category(props) {
  return (
    <div className=" border-b-4 hover:border-blue-900 rounded-md" >
        <div className="h-[200px] rounded-xl ">
        <img src={props.imgUrl} className="hover:shadow-2xl object-cover h-full" alt="" />
        </div>
        <div className="text-center mt-5 pl-5 pr-5">
            <h3 className="text-2xl  pb-5 ">{props.title}</h3>
        </div>
    </div>
  )
}

export default Category