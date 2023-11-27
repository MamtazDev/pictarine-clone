import React, { useRef, useState } from "react";
import Slider from "react-slick";
import MultiRowSlider from "./multiRowSlider/MultiRowSlider";
import { useTranslation } from "react-i18next";

const MultipleRows = () => {
  const { t } = useTranslation()
  const [currentslide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesPerRow: 2,
    initialSlide: 0,
    appendDots: dots => (
      <div
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <div className="multiRows_slider position-relative">
      <div className="container">
        <Slider {...settings} ref={sliderRef}>
          {
            t("multipaleRowSlider", { returnObjects: true }).map((data, index) => (
              <MultiRowSlider
                key={index}
                name={data.name}
                des={data.des}
                location={data.location}
                cdi={data.cdi}
                pointsTitle={data.pointsTitle}
                pointOne={data.pointOne}
                pointTwo={data.pointTwo}
                pointThree={data.pointThree}
                pointFour={data.pointFour}
                link={data.link}
              />
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default MultipleRows;
