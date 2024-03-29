import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Trusted from '../../Components/Trusted/Trusted';
import Approach from '../../Components/Approach/Approach';
import Choose from '../../Components/Choose/Choose';
import Opportunity from '../../Components/Opportunity/Opportunity';
import Nextstep from '../../Components/Nextstep/Nextstep';
import Stories from '../../Components/Stories/Stories';
import Healthcare from '../../Components/Healthcare/Healthcare';
import Empowercare from '../../Components/Empowercare/Empowercare';
import Contractjob from '../../Components/Contractjobs/Contractjob';
import Impact from '../../Components/Impact/Impact';
import HCareer from '../../Components/HCareer/HCareer';
import Priemer from '../../Components/PremierHealthcare/Priemer';
import Caregivers from '../../Components/Caregivers/Caregivers';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Network from '../../Components/ExtensiveNetwork/Network';
import './Home.scss';

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <Trusted />
        <Healthcare />
        <Approach />
        <Choose 
          meta="Dynamic Squads"
          spantext = "Squads:"
          heading = "Why"
          headingafter = "professionals choose empowercare"
          description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while balancing your lifestyle."
          description2 = "Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your career journey." 
        />
        <Impact />
        <Opportunity />
        <Contractjob />
        <Empowercare />
        <Network />
        <Caregivers />
        <HCareer />
        <Priemer />
        <Stories />
        <Nextstep />
        <CareerSlider />
        <Blog />
        <Userslider />
        <Footer />
    </>
  )
}

export default Home