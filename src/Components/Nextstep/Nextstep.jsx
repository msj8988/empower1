import React from 'react';
import './Nextstep.scss';
import nextstepimg from '../../Assets/nextstep-img.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Nextstep = () => {
    return (
        <div className="nextstep-sec">
            <div className="nextstep-container">
                <div className="nextstep-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={nextstepimg} alt="nextstepimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">Who We Are</span>
                                    <h2 className="heading">
                                        Take the
                                        <span> Next </span> 
                                        Step
                                    </h2>
                                    <p className="description">Join forces with EmpowerCare to embark on a transformative healthcare career journey. With our brand promise to help you "Unleash Your Professional Potential, Make a Meaningful Impact," we are committed to your success.</p>
                                    <p className="main-description">Explore Career Opportunities</p>
                                    <p className="description">EmpowerCare Can Assist You in Finding Your Dream Healthcare Career, Whether Short-Term or Long-Term.</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Search Job Openings</span>
                                            <img src={downarrow} alt="downarrow" />
                                        </button>
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

export default Nextstep