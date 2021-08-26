import styled from "styled-components";

const Container = styled.main`
  position: relative;
  max-width: min(100%, calc(540px + 24px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: ${24 / 16}rem;
  padding-right: ${24 / 16}rem;
`;

export default Container;
