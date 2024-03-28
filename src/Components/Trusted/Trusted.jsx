import React from 'react';
import './Trusted.scss';
import winnerImg from '../../Assets/winnerimg.png';
import hc1 from '../../Assets/hc1.png';
import hc2 from '../../Assets/hc2.png';
import hc3 from '../../Assets/hc3.png';
import googleImg from '../../Assets/google-img.png';

const Trusted = () => {
    return (
        <>
            <div className="trusted-sec">
                <div className="container">
                    <div className="trusted-wrapper">
                        <div className="top-content">
                            <span className="meta">Our Achievments</span>
                            <h2 className="heading">
                                Trusted by 
                                <span> Healthcare </span>
                                Professionals
                            </h2>
                        </div>
                        <div className="trusted-row">
                            <div className="trusted-box">
                                <div className="content-sec"> 
                                    <div className="top-img">
                                        <img src={hc1} alt="hc1" />
                                    </div>
                                    <div className="bottom-img">
                                        <div className="left-img">
                                            <img src={hc2} alt="hc2" />
                                        </div>
                                        <div className="right-img">
                                            <img src={hc3} alt="hc3" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="trusted-box">
                                <div className="content-sec">
                                    <div className="google-img">
                                        <img src={googleImg} alt="googleImg" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="trusted-box">
                                <div className="content-sec">
                                    <h3 className="heading">AWARD WINNER!</h3>
                                    <p className="description">Best of Staffing Award</p>
                                    <div className="awards-imgs">
                                        <img src={winnerImg} alt="winnerImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trusted