import React from 'react'
import './MultiRowSlider.css'
import { BsFileText } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const MultiRowSlider = ({ name, des, location, cdi, pointsTitle, pointOne, pointTwo, pointThree, pointFour, link }) => {
    return (
        <div className='multi_row_slider_wrapper me-4 mb-4'>
            <div className='equal_height'>
                <div className="mrs_content">
                    <div className="name_des mb-2">
                        <h3 className='name'>
                            {name}
                        </h3>
                        <p className='m-0'>
                            {des}
                        </p>
                    </div>

                    <div className="address d-flex align-items-center gap-3 mb-2">
                        <div className="location d-flex align-items-center gap-2">
                            <span>
                                <svg width={"10"} className="styles_svg__n2GjX" fill='#6d7c88' viewBox="0 0 14 18"><path d="M6.58816 17.9089C6.73793 17.9837 6.81275 17.9837 6.96252 17.9837C7.1123 17.9837 7.18712 17.9089 7.33689 17.8339C7.63631 17.6093 14 12.5184 14 6.97857C13.9251 3.16045 10.8555 0.0161133 6.96246 0.0161133C3.06939 0.0161133 0 3.16045 0 7.05333C0 12.5187 6.36343 17.6844 6.58803 17.909L6.58816 17.9089ZM6.96252 1.13896C10.1816 1.13896 12.802 3.75929 12.802 6.97845C12.802 11.2458 8.23534 15.5131 6.96252 16.6361C5.61495 15.5131 1.12304 11.2458 1.12304 6.97845C1.12304 3.75935 3.74336 1.13896 6.96252 1.13896Z"></path><path d="M10.3316 7.12845C10.3316 5.25674 8.83427 3.75952 6.96268 3.75952C5.0911 3.75952 3.59375 5.25674 3.59375 7.12845C3.59375 9.00004 5.0911 10.4974 6.96268 10.4974C8.83427 10.4974 10.3316 9.00004 10.3316 7.12845ZM4.71673 7.12845C4.71673 5.8557 5.68993 4.8825 6.96268 4.8825C8.23543 4.8825 9.20864 5.8557 9.20864 7.12845C9.20864 8.4012 8.23543 9.37441 6.96268 9.37441C5.68993 9.37441 4.71673 8.40108 4.71673 7.12845Z"></path></svg>
                            </span>
                            <p className='m-0' style={{ color: '#6d7c88' }}>
                                {location}
                            </p>
                        </div>

                        <div className="location d-flex align-items-center gap-2">
                            <span>
                                <BsFileText style={{ fontSize: '15px', color: '#6d7c88' }} />
                            </span>
                            <p className='m-0' style={{ color: '#6d7c88' }}>
                                {cdi}
                            </p>
                        </div>
                    </div>

                    <div className="points">
                        <h6 className='fst-italic'>
                            {pointsTitle}
                        </h6>
                        <ul className='list-unstyled'>
                            <li>
                                {pointOne}
                            </li>
                            <li>
                                {pointTwo}
                            </li>
                            <li>
                                {pointThree}
                            </li>
                            <li>
                                {pointFour}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="link">
                <a href={link} className=''>
                    Lire Plus
                    <FiExternalLink />
                </a>
            </div>
        </div>
    )
}

export default MultiRowSlider