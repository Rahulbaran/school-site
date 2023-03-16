import { useState, useEffect } from "react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/keyboard";
import "swiper/css/a11y";

/* data */
import PhotosData from "./PhotosData";

export default function Photos() {
  const [swiperInfo, setSwiperInfo] = useState({
    swiperIndex: 0,
    swiper: false
  });

  useEffect(() => {
    document.body.style.position = swiperInfo.swiper ? "fixed" : "static";
  }, [swiperInfo]);

  const handleSlider = e => {
    e.preventDefault();
    const imgIndex = +e.currentTarget.id.split("-")[1];
    setSwiperInfo({ swiperIndex: imgIndex, swiper: true });
  };
  const closeSlider = () => {
    setSwiperInfo({ swiperIndex: 0, swiper: false });
  };

  return (
    <main className="container photos-container">
      <div className="photos-wrapper">
        {PhotosData.map(data => (
          <a
            href={data.orgSrc}
            id={`image-${data.id}`}
            key={data.id}
            onClick={handleSlider}
          >
            <img
              src={data.src}
              alt={data.alt}
              srcSet={data.srcSet}
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {swiperInfo.swiper && (
        <Swiper
          modules={[Pagination, Navigation, A11y, Keyboard]}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          centeredSlides={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false
          }}
        >
          {PhotosData.map(data => (
            <SwiperSlide key={data.id}>
              <img src={data.orgSrc} alt={data.alt} loading="lazy" />
            </SwiperSlide>
          ))}

          <button
            className="swiper-close-btn"
            aria-label="close slide"
            title="close the swiper"
            onClick={closeSlider}
          >
            <i className="ri-close-line"></i>
          </button>
        </Swiper>
      )}
    </main>
  );
}
