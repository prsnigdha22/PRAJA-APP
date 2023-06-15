import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-family:Georgia, 'Times New Roman', Times, serif;
  letter-spacing:1px;
  text-shadow: 2px 2px 4px black;
  font-size: 75px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size: 25px;
  letter-spacing:1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 10, .8);
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 2em;
  color: #fff;
  font-size: 15px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  line-height: 1.5;
  letter-spacing:1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 10, .8);
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color:black
  color: #fff;
  font-size: 16px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  letter-spacing:1px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent ;
    border: 2px solid white;
    color:white
  }
`;


  
export function TopSection() {
  const navigate=useNavigate();
  const submit=()=>{
    navigate('/prajaapp')
  }
  return (
    <TopSectionContainer>
      <Logo>PRAJA APP</Logo>
      <Paragraph>
      PRAJA APP is an interactive country map where we can interact with states and districts in it, also one can get all the major information of the particular district.
      </Paragraph>
      <Button type='submit' onClick={submit}>CLICK TO ENTER</Button>
    </TopSectionContainer>
  );
}
