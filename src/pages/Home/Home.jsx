/** components */
import Slider from "./Slider";
import AboutUs from "./AboutUs";
import NoticeBoard from "./NoticeBoard";
import SchoolInfo from "./SchoolInfo";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Slider />
      <AboutUs />
      <NoticeBoard />
      <SchoolInfo />
    </div>
  );
}
