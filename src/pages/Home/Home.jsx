/** components */
import Slider from "./Slider";
import AboutUs from "./AboutUs";
import NoticeBoard from "./NoticeBoard";

function Home() {
  return (
    <div className="home-wrapper">
      <Slider />
      <AboutUs />
      <NoticeBoard />
    </div>
  );
}

export default Home;
