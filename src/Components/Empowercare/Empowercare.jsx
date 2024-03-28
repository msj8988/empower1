import React from 'react';
import './Empowercare.scss';
import empowercareimg from '../../Assets/empowercareimg.png';
import activearrow from '../../Assets/active-arrow.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Empowercare = () => {
    return (
        <div className="empowercare-sec">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Tailored
                                    <span> EmpowerCare </span> <br />
                                    Career Paths
                                </h2>
                                <p className="description">At EmpowerCare, we offer a wide range of staffing options to meet your unique needs. Our extensive network of pre-screened healthcare opportunities includes:</p>
                                <ul>
                                    <li>
                                       <span>Travel Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                       <span>Per Diem Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                       <span>Temporary-to-Permanent Positions ➔</span>
                                    </li>
                                    <li>
                                       <span>Permanent Placement ➔</span>
                                    </li>
                                    <li>
                                       <span>Local Contract Jobs ➔</span>
                                    </li>
                                </ul>
                            
                                <div className="sec-btns">
                                    <button className="learn-btn">
                                        <span>Explore Career Path Options</span>
                                        <img src={downarrow} alt="downarrow" />
                                    </button>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empowercare