import React from 'react';
import Header from '../../Components/Header/Header';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Content_With_Button from '../../Components/Content_With_Button/Content_With_Button';
import Choose from '../../Components/Choose/Choose';
import Footer from '../../Components/Footer/Footer';
import Choose1 from '../../Components/Choose1/Choose1';
import Empowercare from '../../Components/Empowercare/Empowercare';
import Userslider from '../../Components/Userslider/Userslider';

const Seamlesss = () => {
    return (
        <>
          <Header />
          <Banner1 />
          <Trusted />
          <Content_With_Button />
          <Choose
            meta="Why Choose Us"
            spantext = "Squads:"
            heading = "Dynamic"
            headingafter = "Your cpr dynamic solution"
            description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while making a meaningful impact in the lives of patients."
            description2 = ""
            boxHeading1="Convenient Staffing:"
            boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
            boxHeading2="Personable Approach:"
            boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
            boxHeading3="Supportive Community:"
            boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."
          />
          <Choose1 
            meta="Why Choose Us"
            spantext = "Pledge:"
            heading = "Seamless"
            headingafter = "Make an impact with every shift"
            description1 = "We believe that every shift is an opportunity to make a difference in people's lives. Our Seamless Pledge ensures that you can focus on what matters most - providing exceptional care and making a lasting impact."
          />
          <Empowercare />
          <Userslider />
          <Footer />
        </>
    )
}

export default Seamlesss