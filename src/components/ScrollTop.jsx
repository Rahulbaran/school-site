import { useState, useEffect } from "react";

function ScrollTop() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop > 100 ||
        document.body.scrollTop > 100
      ) {
        setStyle({ opacity: 1, translate: "0" });
      } else {
        setStyle({});
      }
    };
  }, []);

  const reachTop = () => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  };

  return (
    <div className="scroll-top-btn-wrapper">
      <button
        className="scroll-top-btn"
        style={style}
        onClick={reachTop}
        title="scroll to top"
      >
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </div>
  );
}

export default ScrollTop;
