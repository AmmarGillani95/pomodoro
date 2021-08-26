import { green, red } from "ansi-colors";
import styled from "styled-components";
import { QUERIES } from "../../constants";

function getHeight({ axis, size }) {
  return axis === "horizontal" ? "1px" : `${size / 16}rem`;
}
function getWidth({ axis, size }) {
  return axis === "vertical" ? "1px" : `${size / 16}rem`;
}

function mediaQueries({ axis, when }) {
  if (!when) {
    return;
  }
  let QueriesToReturn = "";
  for (const [breakpoint, size] of Object.entries(when)) {
    if (QUERIES[breakpoint]) {
      QueriesToReturn += ` @media ${QUERIES[breakpoint]}
      {
        width: ${getWidth({ axis, size })};
        height: ${getHeight({ axis, size })};
        min-width: ${getWidth({ axis, size })};
        min-height: ${getHeight({ axis, size })};

      }`;
    }
  }

  return QueriesToReturn;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth};
  height: ${getHeight};
  min-width: ${getWidth};
  min-height: ${getHeight};
  ${mediaQueries}
`;

export default Spacer;
