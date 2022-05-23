import React from "react";
import styled from "styled-components";

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;
  line-height: 1.5;
  color: var(--white);

  position: relative;

  @media only Screen and (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  /* z-index: 1; */
`;


const Title = styled.div`
  font-size: calc(1rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  @media only Screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
  }
`;

const SubText = styled.div`
  font-size: calc(0.5rem + 0.5vw);
  color:#ffff;
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`;

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <Lb id="leftBlock">
 
      <Title>{title}</Title>
      <SubText>{subText}</SubText>
      {children}
    </Lb>
  );
};

export default TextBlock;
