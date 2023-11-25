import React from "react";
import pp1 from "../assets/Img/pp1.jfif";
import pp2 from "../assets/Img/pp2.jfif";
import pp3 from "../assets/Img/pp3.jfif";
import pp4 from "../assets/Img/pp4.jfif";
import pp5 from "../assets/Img/pp5.jfif";
import pp6 from "../assets/Img/pp6.jfif";
import pp7 from "../assets/Img/pp7.jfif";
import pp8 from "../assets/Img/pp8.jfif";
import pp9 from "../assets/Img/pp9.jfif";
import pp10 from "../assets/Img/pp10.jfif";
import pp11 from "../assets/Img/pp11.jfif";
import pp12 from "../assets/Img/pp12.jfif";
import pp13 from "../assets/Img/pp13.jfif";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Multislider = () => {
  const {t} = useTranslation()
  const pictures = [pp1, pp3, pp2, pp4, pp5, pp13, pp6, pp7, pp8, pp11, pp9, pp10, pp12];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function CustomPrevArrow(props) {
    const { currentslide } = props;
    if (currentslide === 0) {
      return null;
    }
    return (
      <button {...props} className="slick-arrow custom-prev-arrow border-0">
        <FaChevronLeft />
      </button>
    );
  }

  return (
    <div className="multi_slider position-relative">
      <div className="container">
        <Slider {...settings}>
          <div className="position-absolute top-50">
            <h2>
              {t("multiSliderTitle")} <br />
              {t("multiSliderTitleTwo")}
            </h2>
            <p>
              {t("multiSliderDes")} <br /> {t("multiSliderDesTwo")} <br /> {t("multiSliderDesThree")} <br /> {t("multiSliderDesFour")}
            </p>
          </div>
          {pictures.map((data, index) => (
            <div className={index % 2 === 0 ? "top" : "bottom"} key={index}>
              <img className="img-fluid" src={data} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Multislider;
