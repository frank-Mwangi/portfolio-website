import styled from "styled-components";
const Hero = () => {
  return (
    <Wrapper>
      <div className="center-container">
        <h2 className="Hero-title">
          <span> Francis </span> Mwangi, K.
        </h2>
        <div className="underline"></div>
        <h4>Everything is figure-outable!</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          ipsam nesciunt fuga consectetur consequatur distinctio nostrum omnis
          deleniti, neque amet repellat ad perspiciatis adipisci? Voluptates
          adipisci voluptatum eius totam deserunt.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--gray-200);
  background-image: url("/hero-img-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;

  .Hero-title {
    font-size: 2.5rem;
    color: var(--white);
    letter-spacing: 4px;
    margin: 0;
    span {
      color: var(--gray-400);
    }
  }
  .hero-tagline {
    margin: 0;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .center-container {
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #222222;
    margin: 0 auto;
  }

  .btn {
    display: inline-block;
    margin-top: 2rem;
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
    &:hover {
      background: var(--white);
      color: var(--gray-900);
    }
  }
`;

export default Hero;
