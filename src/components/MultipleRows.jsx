import React, { useRef, useState } from "react";
import Slider from "react-slick";
import MultiRowSlider from "./multiRowSlider/MultiRowSlider";

const MultipleRows = () => {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="multiRows_slider position-relative">
      <div className="container">
        <Slider {...settings} ref={sliderRef}>
          <MultiRowSlider
            name={"Data Engineer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Faciliter l'accès à la data"}
            pointTwo={"• Co-construire des solutions"}
            pointThree={"• Orchestrer le flux de données"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead Legal Counsel"}
            des={"Team Finance"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Problem-solver"}
            pointTwo={"• Etre référent sur toute la partie légale"}
            pointThree={"• Responsable Propriété Intellectuelle et Données"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead People Acquisition"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Accompagner les peoples"}
            pointTwo={"• Denicher les meilleurs talents"}
            pointThree={"• Faire rayonner les valeurs de Pictarine"}
            pointFour={"• Faire vivre une expérience candidat incroyable"}
            link={"#"}
          />

          <MultiRowSlider
            name={"Talent Acquisition Partner"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Faire vivre une expérience candidat incroyable"}
            pointTwo={"• Denicher les meilleurs talents"}
            pointThree={"• Faire rayonner les valeurs de Pictarine"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Front Web Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Améliorer nos apps"}
            pointTwo={"• Développer vite et bien"}
            pointThree={"• Problem-solver"}
            pointFour={"• Tester des nouvelles technos"}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead People Development"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Career path"}
            pointTwo={"• Pictarine Academy"}
            pointThree={"• Accompagner les peoples"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead Product Designer"}
            des={"Team Produit"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Contribuer au design des produits"}
            pointTwo={"• Être créatif"}
            pointThree={"• Construire et superviser une équipe"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead iOS Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Développer vite et bien"}
            pointTwo={"• Encadrer des développeurs"}
            pointThree={"• Être responsable de la production"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Backend Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Concevoir des datas models"}
            pointTwo={"• Tester des nouvelles technos"}
            pointThree={"• Résoudre des problématiques"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Senior iOS Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Développer vite et bien"}
            pointTwo={"• Inspirer les autres développeurs"}
            pointThree={"• Superviser les apps de production"}
            pointFour={""}
            link={"#"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default MultipleRows;
