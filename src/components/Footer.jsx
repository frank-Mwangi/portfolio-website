import styled from "styled-components";
import { AiOutlineMail, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <h2 className="title">
        <span>Contact</span> me
      </h2>
      <div className="underline"></div>
      <ul>
        <a href="#" rel="noreferrer">
          <AiOutlineMail />
        </a>
        kungofrank@gmail.com
      </ul>
      <ul>
        LinkedIn
        <a
          href="https://www.linkedin.com/in/francis-mwangi-053745220/"
          target="_blank"
          rel="noreferrer"
        ></a>
      </ul>
      <ul>
        Medium
        <a
          href="https://medium.com/@kungofrank"
          target="_blank"
          rel="noreferrer"
        ></a>
      </ul>
      <ul>
        <a
          href="https://github.com/frank-Mwangi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        Github
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border: 1px solid black;
  background: var(--gray-50);
  padding: 3rem 2rem;
  h2 {
    border: 2px solid black;
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
`;

export default Footer;
