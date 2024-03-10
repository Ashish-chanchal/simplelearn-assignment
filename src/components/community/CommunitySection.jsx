import CommunityCard from './CommunityCard'
import img1 from '../../assets/community/karandeep.png'
import img2 from '../../assets/community/kaplana.png'
import img3 from '../../assets/community/kriti.png'
function CommunitySection() {
  return (
    <div className="pt-7 md:px-24 px-2 mt-20 max-w-[2465px] font-sansRoundedBold">
    <h3 className="text-3xl text-blue-900 font-bold">Love from community</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
        <CommunityCard imgUrl={img1} name="karandeep" details="It is nice to be on an international platform where there are teachers from around the world." classN="text-gray-600 "/>
        <CommunityCard imgUrl={img2} name="kaplana" details="The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well." classN="bg-blue-900 text-white"/>
        <CommunityCard imgUrl={img3} name="kriti" details="As a student, I get to explore and learn about the different cultural specialties of another country with native teachers."classN="text-gray-600"/>
       

        </div>
        </div>
  )
}

export default CommunitySection