import styled, { keyframes } from "styled-components";

const TimerSVG = ({
  dashOffset,
  strokeWidth,
  radius,
  dashArray,
  secondsToEnd,
  animated,
}) => {
  console.log(secondsToEnd);
  return (
    <Wrapper
      style={{
        "--strokeWidth": strokeWidth,
        "--radius": radius,
        "--dasharray": dashArray,
        "--dashOffset": dashOffset,
        "--secondsToEnd": `${secondsToEnd}s`,
        "--animated": animated,
      }}
    >
      <SVG viewBox="0 0 100 100">
        <Circle cx="50%" cy="50%" r={`${radius}px`} />
      </SVG>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 92.38%;
  height: 92.38%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.svg`
  transform: rotate(270deg);
  width: 100%;
  height: 100%;
`;

const progress = keyframes`
from {
  stroke-dashoffset: 0;
}

to {
  stroke-dashoffset: var(--dasharray);
}
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: var(--strokeWidth);
  stroke: var(--color-highlight);
  stroke-linecap: round;
  stroke-dasharray: var(--dasharray);
  stroke-dashoffset: var(--dashOffset);
  animation: ${progress} var(--secondsToEnd) linear;
  animation-play-state: var(--animated);
`;

export default TimerSVG;
