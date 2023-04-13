import { useState, useEffect, lazy, Suspense } from "react";

/* data */
import PhotosData from "../data/PhotosData";

/* components */
const PhotosWrapper = lazy(() => import("./PhotosWrapper"));
import PhotosSwiper from "./PhotosSwiper";

export default function Photos() {
  const [swiperData, setSwiperData] = useState([]);

  useEffect(() => {
    document.body.style.position = swiperData.length > 0 ? "fixed" : "static";
  }, [swiperData]);

  const handleSlider = e => {
    e.preventDefault();
    const imgIndex = +e.currentTarget.id.split("-")[1];
    setSwiperData([
      ...PhotosData.slice(imgIndex),
      ...PhotosData.slice(0, imgIndex)
    ]);
  };

  const closeSlider = () => setSwiperData([]);

  return (
    <main className="container photos-container">
      <Suspense fallback={<div>Loading...</div>}>
        <PhotosWrapper PhotosData={PhotosData} handleSlider={handleSlider} />
      </Suspense>

      {swiperData.length > 0 && (
        <PhotosSwiper swiperData={swiperData} closeSlider={closeSlider} />
      )}
    </main>
  );
}
