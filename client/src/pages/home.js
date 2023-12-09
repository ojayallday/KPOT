import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

// Styled components
const HomePageContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #333; /* Dark gray background color */
  color: #fff; /* Text color */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
`;

const SlideshowContainer = styled.div`
  flex: 1;
  max-width: 70%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Slide = styled.div`
  img {
    width: 100%;
    height: 700px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  
`;

const ButtonsContainer = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
`;

// Sample images for the slideshow
const slideImages = [
 'https://img.freepik.com/free-photo/young-business-man-standing-front-stickers-glass-wall-looking-futures-plans-his-office-place_231208-2277.jpg?w=2000&t=st=1702103893~exp=1702104493~hmac=70ac020e5cfffadaa4ee671f6c25a0ad86e3473cf1198b997472e497c84a7453',
 'https://img.freepik.com/free-vector/project-management-concept_23-2147782954.jpg?w=1480&t=st=1702104000~exp=1702104600~hmac=30af7eea866329b3abf2dd606d1ccc66ea169ceaae307a3aea46b904d4f9fb90',
 'https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3718.jpg?w=1480&t=st=1702104042~exp=1702104642~hmac=bc3ebc41f58c6d3685e1a306b9630ab114c4c9239ac86f2d311b2c10d52401a2',
 
];

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      // Navigate to /login when the "Login" button is clicked
      navigate('/login');
    };
    const handleRegisterClick = () => {
        // Navigate to /login when the "Login" button is clicked
        navigate('/register');
      };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 3,
  };

  return (
    <HomePageContainer>
      <SlideshowContainer>
        <Header>
          <WelcomeMessage>Welcome to KPOT - Keep Projects on Track!</WelcomeMessage>
        </Header>
        <Slider {...sliderSettings}>
          {slideImages.map((image, index) => (
            <Slide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </Slider>
      </SlideshowContainer>
      <ButtonsContainer>
        <Button onClick={handleLoginClick}>Login</Button>
        <Button onClick={handleRegisterClick}>Register</Button>
      </ButtonsContainer>
    </HomePageContainer>
  );
};

export default Home;
