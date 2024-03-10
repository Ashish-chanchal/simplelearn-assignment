

function ReasonCard(props) {
  return (
    <div className=" " >
        <img src={props.imgUrl} className="hover:shadow-2xl object-cover" alt="" />
        <div className=" mt-5 pl-5 pr-5">
            <h3 className="text-lg  pb-5 font-sansRoundedMedium ">{props.details}</h3>
        </div>
    </div>
  )
}

export default ReasonCard