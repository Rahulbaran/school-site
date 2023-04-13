import { Navigation, Pagination, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

export default function PhotosSwiper({ swiperData, closeSlider }) {
  return (
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
      {swiperData.map(data => (
        <SwiperSlide key={data.id}>
          <img
            src={data.orgSrc}
            alt={data.alt}
            loading="lazy"
            decoding="async"
          />
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
  );
}
