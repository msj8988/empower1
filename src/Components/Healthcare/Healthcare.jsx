import React from 'react';
import './Healthcare.scss';
import healthcareimg from '../../Assets/healthcareimg.png';
import activearrow from '../../Assets/active-arrow.png';

const Healthcare = () => {
    return (
        <div className="healthcare-sec">
            <div className="container">
                <div className="healthcare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={healthcareimg} alt="healthcareimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Join 
                                    <span> EmpowerCare </span> <br />
                                     & Make a Difference <br />
                                    in Healthcare
                                </h2>
                                <ul>
                                    <li>
                                       <span>➔ Opportunities for nurses, therapists, counselors, and healthcare professionals</span>
                                    </li>
                                    <li>
                                       <span>➔ Contract, travel, and per diem positions available </span>
                                    </li>
                                    <li>
                                       <span>➔ Your contributions directly impact healthcare outcomes</span>
                                    </li>
                                    <li>
                                       <span>➔ Work in preferred settings like hospitals, urgent care, schools, and more</span>
                                    </li>
                                    <li>
                                       <span>➔ Supportive network for your professional journey</span>
                                    </li>
                                </ul>
                            
                                <div className="sec-btns">
                                    <button className="learn-btn">
                                        <span>Sign up</span>
                                    </button>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Healthcare