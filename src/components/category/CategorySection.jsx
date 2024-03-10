import Category from "./Category"
import language from "../../assets/category/language.png"
import cooking from "../../assets/category/cooking.png"
import music from "../../assets/category/music.png"
import arts from "../../assets/category/arts.png"
import yoga from "../../assets/category/yoga.png"
import academics from "../../assets/category/academics.png"
import roots from "../../assets/category/roots.png"
import funteresting from "../../assets/category/funteresting.png"
import yellow from "../../assets/reason/yellow.png";


function CategorySection() {
  return (
    <div className="pt-7 md:px-24 px-2 mt-20 text-blue-900 font-bold max-w-[2465px] font-sansRoundedBold">
        <h3 className="text-3xl text-blue-900">Browse by category</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 place-items-center">
            <Category title="Language" imgUrl={language}/>
            <Category title="Cooking" imgUrl={cooking}/>
            <Category title="Music" imgUrl={music}/>
            <Category title="Arts & Craft" imgUrl={arts}/>
            <Category title="Yoga" imgUrl={yoga}/>
            <Category title="Academics" imgUrl={academics}/>
            <Category title="Back to Roots" imgUrl={roots}/>
            <Category title="Funteresting" imgUrl={funteresting}/>

        </div>
        <img src={yellow} alt="" className="absolute right-0 z-40 sm:w-[5%] lg:w-[10%]"/>
    </div>
  )
}

export default CategorySection