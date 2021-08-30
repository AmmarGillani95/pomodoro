import { useState, useEffect } from "react";
import styled from "styled-components";
import Switch from "../Switch";
import { useGlobalState, useUpdateGlobalState } from "../../state/GlobalState";

import TimerSVG from "../TimerSVG";
import { breakList } from "prelude-ls";

const Timer = (props) => {
  const {
    startingMinutes,
    startingSeconds,
    pomodoro,
    shortBreak,
    longBreak,
    minutes,
    seconds,
    hasStarted,
    pause,
    mode,
    timerDidEnd,
  } = useGlobalState();

  const state = useGlobalState();
  const dispatch = useUpdateGlobalState();

  let interval;

  useEffect(() => {
    if (!pause && hasStarted) {
      interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes === 0) {
            dispatch({ type: "timerEnd" });
          } else {
            if (!pause && hasStarted) {
              dispatch({ type: "decrementMinute" });
            }
          }
        } else {
          if (!pause && hasStarted) {
            dispatch({ type: "decrementSeconds" });
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, pause, hasStarted]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleClick = (e) => {
    e.preventDefault;
    clearInterval(interval);
    dispatch({
      type: "pause",
    });
  };

  const handleRestart = (e) => {
    e.preventDefault;
    clearInterval(interval);
    dispatch({ type: "restart" });
  };

  const handleStart = (e) => {
    e.preventDefault;
    clearInterval(interval);
    dispatch({ type: "start" });
  };

  const strokeWidth = 3;
  const radius = (100 - strokeWidth) / 2;
  const dashArray = 2 * 3.1415 * radius;

  const secondsToEnd = state[mode] * 60 + 1;

  const animated = pause ? "paused" : "running";
  const buttonText = !hasStarted ? "start" : pause ? "resume" : "pause";

  return (
    <TimerWrapper {...props}>
      <TimerBackground>
        <Wrapper>
          <TimerSVG
            dashOffset={0}
            strokeWidth={strokeWidth}
            radius={radius}
            dashArray={dashArray}
            secondsToEnd={secondsToEnd}
            animated={animated}
            timerDidEnd={timerDidEnd}
            hasStarted={hasStarted}
          />

          <InteractiveWrapper>
            <Time>{`${timerMinutes}:${timerSeconds}`}</Time>

            {!hasStarted && <Button onClick={handleStart}>start</Button>}
            {hasStarted &&
              (!timerDidEnd ? (
                <Button onClick={handleClick}>{buttonText}</Button>
              ) : (
                <Button onClick={handleRestart}>restart</Button>
              ))}
          </InteractiveWrapper>
        </Wrapper>
      </TimerBackground>
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
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  font-size: ${80 / 16}rem;
  line-height: ${80 / 16}rem;
  text-align: center;
  letter-spacing: ${1 / 16}rem;
  z-index: 9;
`;

const Button = styled.button`
  font-family: var(--font-family);
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
