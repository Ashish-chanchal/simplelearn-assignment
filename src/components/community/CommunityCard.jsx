import comas from '../../assets/community/comas.png'
import PropsTypes from 'prop-types'
function CommunityCard(props) {
  return (
    <div className={`relative p-6 ${props.classN}`}>
      <img src={comas}alt="" className='absolute' />
      <div className='text-center'>
         <img src={props.imgUrl} className=" m-auto"alt="" />
         <h3 className='font-bold text-xl mt-3 mb-3'>{props.name}</h3>
         <p className='font-sansRoundedSemiBold ' >{props.details}</p>
      </div>
    </div>
  )
}

CommunityCard.propTypes = {
  imgUrl: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  details: PropsTypes.string.isRequired,
  classN: PropsTypes.string.isRequired,
}
export default CommunityCard