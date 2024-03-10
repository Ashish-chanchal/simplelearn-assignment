

function HeroCard(props) {
  const {imageUrl, title, description} = props
  return (
    <div className="flex justify-center flex-col items-center text-blue-900 ">
      <img src={imageUrl} className='w-20' alt="" />
      <h1 className='text-xl mt-5 font-sansRoundedBold '>{title}</h1>
      <p className='text-center mt-5 font-sansRoundedMedium'>{description}</p>
    </div>
  )
}

export default HeroCard