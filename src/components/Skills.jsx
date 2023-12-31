import React from "react";
import styled from "styled-components";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Skills = () => {
  return (
    <Wrapper>
      <div className="center-container">
        <h2 className="title">
          <span>Skills </span> & Tech Stack
        </h2>
        <div className="underline"></div>
        <div className="btn-container">
          <div>
            <FaReact />
            <span>React</span>
          </div>
          <div>
            <SiJavascript />
            <span>JavaScript</span>
          </div>
          <div>
            <FaPython />
            <span>Python</span>
          </div>
          <div>
            <FaHtml5 />
            <span>HTML</span>
          </div>
          <div>
            <FaCss3Alt />
            <span>CSS</span>
          </div>
          <div>
            <DiMysql />
            <span>Mysql</span>
          </div>
          <div>
            <FaGit />
            <span>Git</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--gray-200);
  padding: 3rem 2rem;
  .center-container {
    h2 {
      text-transform: capitalize;
      text-align: center;
      letter-spacing: var(--letter-spacing);
      margin-bottom: 0.5rem;
      span {
        color: var(--gray-500);
      }
    }
    .title {
      margin-bottom: 1rem;
    }
    .underline {
      width: 5rem;
      height: 0.25rem;
      background: #222222;
      margin: 0 auto;
    }
    p {
      color: var(--gray-700);
      letter-spacing: var(--letter-spacing);
      line-height: 1.6;
    }
  }
  .btn-container {
    margin-top: 2rem;  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    div {
      span {
        margin: 1rem;
      }
    }
  }
  .btn {
    background: white;
    text-transform: capitalize;
    letter-spacing: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    width: 200px;
    height: 40px;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 2px;
    border-radius: 5px;
    gap: 5px;
    
    }
  }
`;
export default Skills;
