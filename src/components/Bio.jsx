import styled from "styled-components";

const Bio = () => {
  return (
    <Wrapper id="Bio">
      <div className="center-container">
        <h2>
          <span>About </span> me
        </h2>
        <div className="underline"></div>
        <p>
          Francis is a passionate web developer specializing in creating
          exceptional online experiences. He thrives in creating user-friendly
          interfaces and seamless functionality that captivates users. If you're
          looking for a skilled developer to transform your ideas into
          compelling online experieces, let's connect.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
      margin-bottom: 2rem;
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

export default Bio;
