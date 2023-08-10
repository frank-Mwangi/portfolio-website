import styled from "styled-components";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Nav>
      <div className="center-container">
        <ul>
          <li>
            <a href="#Hero">Home</a>
          </li>
          <li>
            <a href="#Bio">Bio</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          {/* <li>
            <a href="#TechnicalWriting">Technical Writing</a>
          </li> */}
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #222222;
  .center-container {
    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      li {
        cursor: pointer;
        color: var(--gray-100);
        transition: var(--transition);
        &:hover {
          // color: var(--gray-400);
          border-bottom: 1px solid var(--white);
        }
      }
    }
  }
`;
export default Navbar;
