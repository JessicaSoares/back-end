import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves1.svg";

import compiuter from "../../assets/comp2.png";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  background: src(../../assets/comp1.png);

  img,svg{
    width:100%;
    height:auto;
}
`;
const Waves = styled.img`

display: flex;
justify-content: center;
flex-direction: column;
img,svg{
  width:100%;
  height:auto;
}

@media only screen and (max-width: 375px) {
  align-items: center;
  margin-top: -15rem;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  align-items: center;
  margin-top: -7rem;
}

@media only screen and (min-width: 768px) and (max-width: 1200x) {
  align-items: center;
  margin-top: -8rem;
}

@media only screen and (min-width: 1200px) and (max-width: 2000px) {
  align-items: center;
  margin-top: -18rem;
}

@media only screen and (min-width: 1020px) and (max-width: 2000px) {
  align-items: center;
  margin-top: -15rem;
}


@media only screen and (min-width: 2000px) {
  align-items: center;
  margin-top: -26rem;
}


`;

const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
  img,svg{
    width:100%;
    height:auto;
}
`;

const Main = styled.div`
  margin: 0 9rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img,svg{
    width:100%;
    height:auto;
}
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 0.5rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 0.5rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: center;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: rgb(55, 109, 43) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
  img,svg{
    width:100%;
    height:auto;
}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img,svg{
    width:100%;
    height:auto;
}
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
img,svg{
  width:80%;
  height:auto;
}
  display: flex;
  justify-content: center;
  align-content: center;
  width: 35%;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  @media only screen and (max-width: 375px) {
  align-items: center;
  margin-top: -15rem;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  align-items: center;
  margin-top: -4rem;
}

@media only screen and (min-width: 768px) and (max-width: 1020px) {
  align-items: center;
  margin-top: -8rem;
}

@media only screen and (min-width: 1020px) and (max-width: 1400px) {
  align-items: center;
  margin-top: -15rem;
}

@media only screen and (min-width: 1400px) {
  align-items: center;
  margin-top: -26rem;
}
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
  img,svg{
    width:100%;
    height:auto;
}
`;
const Text = styled.h4`
  font-size: calc(0.6rem + 0.5vw);
  line-height: 1.4;
  color: var(--nav2);
  margin-top: 20px;
  margin-bottom: 80px;
  font-family:Roboto;


`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
  img,svg{
    width:100%;
    height:auto;
}
  
`;
const AboutText = styled.div`
  width: 60%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 125%;
  }
  @media only screen and (min-width: 375px) and (max-width: 768px) {
    align-items: center;
    margin-top: -1rem;
    margin-bottom: -8rem;
  }
  
  @media only screen and (min-width: 768px) and (max-width: 1020px) {
    align-items: center;
    margin-top: -8rem;
  }
`;

const About = () => {
  return (

   
    <AboutSection id="about">
       
      
      <Waves src={wave}/>

      <Main>
    
        <div>
    
   
        </div>
        <Content>
       
          <Rocket>
            <img src={compiuter} />
          </Rocket>
          <AboutText>
        
          <Title>Sobre Nós</Title>
            <Text>
            Atualmente em fase de teste, o Portal consiste em um Repositório único de dados para exposição de informações que visam subsidiar e oferecer ao Governo do Município, suporte ao planejamento de políticas públicas, investimentos, tomada de decisões e análise dos principais fatores que afetam a competitividade e desempenho econômico do Município em diversos segmentos tais como: saúde, educação, agronegócios, indústria, segurança, infra-estrutura, turismo e economia.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "#FFFF" }} />
              <Circle style={{ backgroundColor: "#FFFF" }} />
              <Circle style={{ backgroundColor: "#FFFF" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
