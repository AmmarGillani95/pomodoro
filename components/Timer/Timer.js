import { useState, useEffect } from "react";
import styled from "styled-components";
import Switch from "../Switch";

import TimerSVG from "../TimerSVG";

const MODES = {
  POMODORO: "pomodoro",
  SHORTBREAK: "shortBreak",
  LONGBREAK: "longBreak",
};

const Timer = (props) => {
  const startingMinutes = 1;
  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(true);
  const [mode, setMode] = useState(MODES.POMODORO);
  const [timerEnd, setTimerEnd] = useState(false);

  let interval;
  useEffect(() => {
    if (!pause) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes === 0) {
            setTimerEnd(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, pause]);

  useEffect(() => {
    if (timerEnd) {
      switch (mode) {
        case MODES.POMODORO:
          setMode(MODES.SHORTBREAK);
          break;
        case MODES.SHORTBREAK:
          setMode(MODES.POMODORO);
          break;
        default:
          setMode(MODES.POMODORO);
      }
    }
  }, [timerEnd]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleClick = (e) => {
    e.preventDefault;
    clearInterval(interval);
    setPause(!pause);
  };

  const strokeWidth = 3;
  const radius = (100 - strokeWidth) / 2;
  const dashArray = 2 * 3.1415 * radius;
  const dashOffset = 0;
  const secondsToEnd = startingMinutes * 60;
  const animated = pause ? "paused" : "running";

  return (
    <TimerWrapper {...props}>
      <TimerBackground>
        <Wrapper>
          <TimerSVG
            dashOffset={dashOffset}
            strokeWidth={strokeWidth}
            radius={radius}
            dashArray={dashArray}
            secondsToEnd={secondsToEnd}
            animated={animated}
          />
          <InteractiveWrapper>
            <Time>{`${timerMinutes}:${timerSeconds}`}</Time>
            <Button onClick={handleClick}>{pause ? "Start" : "Pause"}</Button>
          </InteractiveWrapper>
        </Wrapper>
      </TimerBackground>
      <h2>{mode}</h2>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${410 / 16}rem;
  padding: 0 ${13.5 / 16}rem;
  isolation: isolate;
`;

const TimerBackground = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(89.5%);
  height: calc(89.5%);
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--color-primaryDark);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InteractiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${12 / 16}rem;
`;

const Time = styled.h2`
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  font-size: ${80 / 16}rem;
  line-height: ${80 / 16}rem;
  text-align: center;
  letter-spacing: ${1 / 16}rem;
  z-index: 9;
`;

const Button = styled.button`
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  font-size: ${14 / 16}rem;
  line-height: ${14 / 16}rem;
  letter-spacing: ${13.125 / 16}rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  z-index: 10;
`;

export default Timer;
