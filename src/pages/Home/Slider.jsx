import { useState, useEffect } from "react";

/* slider images data */
import SliderData from "./data/SliderData";

export default function Slider() {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex(index => (index >= SliderData.length - 1 ? 0 : (index += 1)));
    }, 7000);

    return () => clearInterval(interval);
  });

  const prevImgIndex = function () {
    setCurIndex(index => (index <= 0 ? SliderData.length - 1 : (index -= 1)));
  };
  const nextImgIndex = function () {
    setCurIndex(index => (index >= SliderData.length - 1 ? 0 : (index += 1)));
  };

  return (
    <div className="slider-container">
      <img
        src={SliderData[curIndex].img.src}
        alt={SliderData[curIndex].img.alt}
        srcSet={SliderData[curIndex].img.srcset}
        loading="eager"
        decoding="sync"
      />
      <button
        className="left-arrow-btn"
        title="previous"
        onClick={prevImgIndex}
      >
        <span>&laquo;</span>
      </button>
      <button className="right-arrow-btn" title="next" onClick={nextImgIndex}>
        <span>&raquo;</span>
      </button>
    </div>
  );
}

