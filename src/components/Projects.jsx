import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper id="Projects">
      <div className="center-container">
        <h2 className="title">
          <span>My</span> Projects
        </h2>
        <div className="underline"></div>
        <div>
          <h4 className="project-title">
            {" "}
            <span>eCommerce</span> website
          </h4>
          <img />
          <p className="project-description">
            This is a mock eCommerce website for A2Z, a leading computer store
            in Nairobi, Kenya. Find your dream laptop, filter by price, color,
            or brand. A2Z - Digitally yours!
            <div className="btn-container">
              <a
                href="https://a2zlandingpage.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Go to site</button>
              </a>
              <a
                href="https://github.com/Njaaga-Gakure/A2Z-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Project repo</button>
              </a>
            </div>
          </p>
        </div>
        <div>
          <h4 className="project-title">
            <span>Wozaa</span> App
          </h4>
          <img />
          <p className="project-description">
            Wozaa is a microblogging social media site, akin to Twitter (Well, X
            now). It is a purely frontend application, built to utilize data
            from the JSON Placeholder API. Anonymous and non-premium users are
            limited to 20 posts daily. Users can log in using their username or
            email and zipcode as password. Authenticated users can follow other
            users and view their friends' posts in a dedicated "following"
            section. Authenticated users can also pay for premium membership,
            which grants them access to all posts.
            <div className="btn-container">
              <a
                href="https://wozaa.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Go to site</button>
              </a>
              <a
                href="https://github.com/frank-Mwangi/Wozaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Project repo</button>
              </a>
            </div>
          </p>
        </div>
        <div>
          <h4 className="project-title">
            <span>Quote</span> Generator
          </h4>
          <img />
          <p className="project-description">
            This is a simplistic website that generates quotes at random, as its
            nomenclature suggests. If you're stuck and looking for inspiration,
            click the link below.
            <div className="btn-container">
              <a
                href="https://sporadicquotegenerator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Go to site</button>
              </a>
              <a
                href="https://github.com/frank-Mwangi/quote_generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Project repo</button>
              </a>
            </div>
          </p>
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
    .project-title {
      font-weight: 600;
      font-style: italic;
      span {
        color: var(--gray--500);
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
    .project-description {
      color: var(--gray-700);
      letter-spacing: var(--letter-spacing);
      line-height: 1.6;
    }
  }
  .btn-container {
    display: flex;
    justify-content: left;
    gap: 1rem;
    margin: 10px;
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
export default Projects;
