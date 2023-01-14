import { useState, useEffect } from "react";

import SliderData from "./SliderData";

function Slider() {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setCurIndex(index => (index >= SliderData.length - 1 ? 0 : (index += 1)));
    }, 5000);

    return () => clearInterval(intervalIndex);
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

export default Slider;
