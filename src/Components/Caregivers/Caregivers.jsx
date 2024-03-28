import React from 'react';
import { Link } from 'react-router-dom';
import './Caregivers.scss';
import linkarrow from '../../Assets/linkarrow.svg';

const Caregivers = () => {
    return (
        <div className="caregivers-sec">
            <div className="caregivers-sec-bg">
                <div className="container">
                    <div className="caregivers-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                Who Is This For:
                                <span> Passionately </span>
                                Curious Caregivers 
                            </h2>
                            <p className="description">Over 500K purpose-driven shifts performed by compassionate professionals from nurses to
                                recreation therapists, all united in uplifting possibilities within healthcare.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="link-items">
                                    <Link className="link-item" to="/">
                                        <span>Compassionate Healers: Driven to alleviate suffering, uplift spirits - a calling beyond profession.</span>
                                        <img src={linkarrow} alt="linkarrow" />
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>Burnout Fighters: Relentless work leaves you emotionally, physically exhausted, impacting care and work-life balance.</span>
                                        <img src={linkarrow} alt="linkarrow" />
                                    </Link>
                                    <Link className="link-item" to="/">
                                    <span>Unsung Heroes: Tireless dedication unnoticed, yearning for recognition of exceptional contributions.</span>
                                        <img src={linkarrow} alt="linkarrow" />
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>Difference Makers: Innate desire to impact communities, transcending paychecks</span>
                                        <img src={linkarrow} alt="linkarrow" />
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>Autonomy Seekers: Dedicated to patient-centered care, but autonomy limited, hindering personalized care delivery</span>
                                        <img src={linkarrow} alt="linkarrow" />
                                    </Link>
                                </div>
                                <div className="bottom-text">
                                    <p className="meta">With a goal of 2M transformative shifts, join our diverse community driven by care and inspired by healthcare's boundless potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caregivers