import styled from "styled-components";

const Logo = (props) => {
  return <Heading {...props}>Pomodoro</Heading>;
};

const Heading = styled.h1`
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  font-size: ${24 / 16}rem;
  line-height: ${24 / 16}rem;
  text-align: center;
  text-transform: lowercase;
`;

export default Logo;
