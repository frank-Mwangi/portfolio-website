import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <h2 className="title">
        <span>Contact</span> me
      </h2>
      <div className="underline"></div>
      <div className="center-container">
        <ul>
          <a href="#" rel="noreferrer">
            <AiOutlineMail />
          </a>
          kungofrank@gmail.com
        </ul>
        <div>
          <ul>
            <a
              href="https://www.linkedin.com/in/francis-mwangi-053745220/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </ul>
          <ul>
            <a
              href="https://medium.com/@kungofrank"
              target="_blank"
              rel="noreferrer"
            >
              <FaMedium />
            </a>
          </ul>
          <ul>
            <a
              href="https://github.com/frank-Mwangi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--gray-200);
  padding: 3rem 2rem;
  h2 {
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--letter-spacing);
    margin-bottom: 0.5rem;
    span {
      color: var(--gray-500);
    }
  }
  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  .btn-container {
    display: flex;
    justify-content: center;
  }
  .btn {
    background: #222222;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: flex;
    width: 200px;
    height: 40px;
    align-items: center;
    border-radius: 5px;
    gap: 5px;
    transition: var(--transition);
    &:hover {
      background: var(--gray-700);
      transform: scale(1.1);
    }
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;

export default Footer;
