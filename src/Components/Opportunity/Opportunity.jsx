import React from 'react';
import './Opportunity.scss';
import opportunityimg from '../../Assets/opportunity-img.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Opportunity = () => {
    return (
        <div className="opportunity-sec">
            <div className="opportunity-container">
                <div className="opportunity-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">Dynamic Squads</span>
                                    <h2 className="heading">
                                        Finding 
                                        <span> The Right </span> <br />
                                        Opportunities For <br />
                                        You, Confidently
                                    </h2>
                                    <p className="description">With 18+ years of experience, EmpowerCare's mission is empowering healthcare institutions and professionals through top-tier staffing solutions that transform lives, elevate care, and promote societal well-being. </p>
                                    <p className="description">Celebrating over 1,000,000 shifts served, our vision is doubling the impact to 2 million by 2031 - ensuring seamless operations for institutions and fulfilling opportunities for every healthcare professional</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Lets promote well-being</span>
                                            <img src={downarrow} alt="downarrow" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={opportunityimg} alt="opportunityimg" />
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

export default Opportunity