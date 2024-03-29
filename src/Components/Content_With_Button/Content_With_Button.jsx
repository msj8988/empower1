import React from 'react';
import './Content_With_Button.scss';
import winnerImg from '../../Assets/winnerimg.png';
import hc1 from '../../Assets/hc1.png';
import hc2 from '../../Assets/hc2.png';
import hc3 from '../../Assets/hc3.png';
import googleImg from '../../Assets/google-img.png';

const Content_With_Button = () => {
    return (
        <>
        <div className="content_with_button">
            <div className="trusted-sec">
                <div className="container">
                    <div className="trusted-wrapper">
                        <div className="top-content">
                            <span className="meta">Join Us Now</span>
                            <h2 className="heading">
                                Join the 
                                <span> movement: </span>
                                Make a difference with every shift
                            </h2>
                        </div>
                        <div className="content">
                            <p>Over 500,000 shifts filled by healthcare professionals and facilities partnering with
EmpowerCare to transform lives and elevate care.</p>
                        </div>
                        <div className='btn_gradient'>
                            <a href='/' className="btn quick-btn">Sign Up</a>
                        </div>
                        {/* <div className="trusted-row">
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
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Content_With_Button