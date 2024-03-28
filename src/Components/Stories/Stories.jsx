import React from 'react';
import './Stories.scss';
import storiesimg from '../../Assets/storiesimg.png';
import playbtn from '../../Assets/play.svg';

const Stories = () => {
    return (
        <div className="stories-sec">
            <div className="container">
                <div className="stories-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Real 
                                    <span> Stories, </span> <br />
                                    Real Impact
                                </h2>
                                <p className="description">"EmpowerCare has been instrumental in helping me achieve my career goals. Their dedicated team and comprehensive solutions have opened up opportunities for growth and professional fulfillment."</p>
                                <p className="main-description">- Sarah, Registered Nurse</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={storiesimg} alt="storiesimg" />
                                    <img src={playbtn} alt="playbtn" className='play-btn' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories