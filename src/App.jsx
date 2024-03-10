import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import ClassSection from "./components/classSection/ClassSection";
import CategorySection from "./components/category/CategorySection";
import ReasonSection from "./components/reasonSection/ReasonSection";
import CommunitySection from "./components/community/CommunitySection";
import Certifiied from "./components/certified/Certifiied";
import BlogSection from "./components/blog/BlogSection";
import Learning from "./components/learning/Learning";
import Footer from "./components/footer/Footer";

import TeacherSection from "./components/teacher/TeacherSection";
import FloatingBtn from "./components/floatingbtn/FloatingBtn";

export default function App() {
  return (
    <div className="">
      <div className="w-full m-auto">
    <Navbar />
    <HeroSection />
    
    <ClassSection/>
    <FloatingBtn/>
    <CategorySection/>
    <ReasonSection/>
    <CommunitySection/>
    <TeacherSection/>
    <Certifiied/>
    <BlogSection/>
    <Learning/>
    <Footer/>
    </div>
    </div>
  )
}