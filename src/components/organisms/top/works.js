import React from 'react';
import { Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorksSection = styled.section`
  background-color: #fff;
  padding: 100px 0;
`;

const SectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 40px;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background-color: #0044cc;
  }
`;

const SliderContainer = styled.div`
  margin-bottom: 50px;

  .slick-dots {
    bottom: -40px;
    
    li button:before {
      font-size: 12px;
      color: #000;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 0.75;
      color: #000;
    }
  }
`;

const WorkCard = styled.div`
  padding: 0 15px;
  outline: none;

  .image-wrapper {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    margin-bottom: 15px;
    text-align: center;
    aspect-ratio: 16 / 9;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    text-align: center;
  }
`;

const MoreLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #333;
  border-bottom: 2px solid #ddd;
  padding-bottom: 2px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #0044cc;
    color: #0044cc;
    text-decoration: none;
  }
`;

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <WorksSection id='works'>
      <Container>
        <SectionTitle>Works</SectionTitle>
        <SliderContainer>
          <Slider {...settings}>
            <div>
              <WorkCard>
                <div className="image-wrapper">
                  <StaticImage
                    src='../../../images/1.png'
                    alt='MUROPYON 3D'
                    placeholder='blurred'
                    layout='constrained'
                    aspectRatio={16 / 9}
                    objectFit="cover"
                  />
                </div>
                <h4>MUROPYON 3D</h4>
              </WorkCard>
            </div>
            <div>
              <WorkCard>
                <div className="image-wrapper">
                  <StaticImage
                    src='../../../images/2.png'
                    alt='Zombie Survival'
                    placeholder='blurred'
                    layout='constrained'
                    aspectRatio={16 / 9}
                    objectFit="cover"
                  />
                </div>
                <h4>Zombie Survival</h4>
              </WorkCard>
            </div>
            <div>
              <WorkCard>
                <div className="image-wrapper">
                  <StaticImage
                    src='../../../images/3.png'
                    alt='MUROPYON GAME'
                    placeholder='blurred'
                    layout='constrained'
                    aspectRatio={16 / 9}
                    objectFit="cover"
                  />
                </div>
                <h4>MUROPYON GAME</h4>
              </WorkCard>
            </div>

          </Slider>
        </SliderContainer>
        <div className="text-center">
          <MoreLink to='/works'>Works</MoreLink>
        </div>
      </Container>
    </WorksSection>
  );
};

export default Works;

