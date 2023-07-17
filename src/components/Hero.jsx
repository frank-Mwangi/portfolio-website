import styled from "styled-components";
const Hero = () => {
  return (
    <Wrapper>
      <div className="center-container">
        <h2 className="Hero-title">
          <span> Francis </span> Mwangi, K.
        </h2>
        <div className="underline"></div>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          ipsam nesciunt fuga consectetur consequatur distinctio nostrum omnis
          deleniti, neque amet repellat ad perspiciatis adipisci? Voluptates
          adipisci voluptatum eius totam deserunt.
        </p> */}
      </div>
      <div className="hero-tagline">
        <h4>Everything is figure-outable!</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  background-color: var(--gray-200);
  background-image: url("/Hero3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .Hero-title {
    font-size: 2.5rem;
    color: var(--white);
    letter-spacing: 4px;
    margin: 0;
    span {
      color: #e8db7d;
    }
  }
  .hero-tagline {
    margin-top: auto;

    color: var(--white);

    letter-spacing: var(--letter-spacing);
    //text-transform: capitalize;
  }
  .center-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
