import message from '../../assets/heroSection/message.png'

function FloatingBtn() {
  return (
    <div className="md:mx-24 mx-2 flex justify-end relative"><div className=" top-[70%] z-50 bg-blue-900 p-3 cursor-pointer rounded-full fixed"> 
    <img src={message} alt="" />
    </div></div>
  )
}

export default FloatingBtn