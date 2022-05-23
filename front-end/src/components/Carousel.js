import React, { useState } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from 'react-grid-system';
import { data, sliderSettings } from './data/carouselData';
import mapa from "../assets/mapasite.png";
import './cardSlide.css';
import {
  ReviewSlider,
  ImageWrapper,
} from './CarouselStyles';
	  {/* Slide com cards da pagina inicial*/}

const HomeSection = styled.section` 
  width: 100%;
  height: 25vw;
  background-color:#ededed;
  display: flex;
  justify-content: center;
  position: relative;
  background-image: src("../assets/graphpeoples.png");
  background-color: #cccccc;
  top: -50px;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
  img,svg{
    width:40%;
    height:auto;
}
`;	  {/* Homesection estiliza o fundo dos slides*/}

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (

    <HomeSection style={{ backgroundImage: `url(${mapa})` }} padding="50px 90px" height="390px" justify-content="center"
      position="relative" inverse>
      <Container>
        <Row>
          <Col sm={12}>
            <ReviewSlider {...sliderSettings} ref={setSliderRef}> 	  {/* Slide de cards que recebe as configurações do CarouselData e por props recebe imagem, dados e titulo do card*/}
              {data.map((el, index) => (
                <ImageWrapper key={index}>
                  <div class="card">
                    <div class="container">
                      <p className='cardimg' >
                        <img className='imagem' src={el.src} />
                        {el.title} </p>
                      <div ><div><div
                        className="numero"
                        dangerouslySetInnerHTML={{ __html: el.description }}
                      /></div></div>{" "}
                      <h4 class="ano"><b>	{el.url}</b></h4>
                    </div>
                  </div>
                </ImageWrapper>
              ))}
            </ReviewSlider>
            <Row justify="center" margin="0.1rem" wrap="wrap">
            </Row>
          </Col>
        </Row>
      </Container>
    </HomeSection>

  );
};

export default Carousel;
