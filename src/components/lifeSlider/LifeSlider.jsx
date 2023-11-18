import React from 'react'
import './LifeSlider.css'

const LifeSlider = ({ sliderImg, h3, p }) => {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6 text-white">
                <div className="slider_img">
                    <img src={sliderImg} alt="slider-img" />
                </div>

            </div>
            <div className="col-lg-6 text-white">
                <div className="slider_text">
                    <h3>
                        {h3}
                    </h3>
                    <p>
                        {p}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LifeSlider