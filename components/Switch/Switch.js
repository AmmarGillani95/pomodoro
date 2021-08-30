import styled from "styled-components";
import { useGlobalState, useUpdateGlobalState } from "../../state/GlobalState";
const Switch = (props) => {
  const { mode } = useGlobalState();
  const dispatch = useUpdateGlobalState();

  return (
    <ToggleWrapper
      {...props}
      onChange={(e) => {
        dispatch({ type: "mode", payload: e.target.id });
      }}
    >
      <ToggleInput type="radio" name="mode" id="pomodoro" defaultChecked />
      <ToggleLabel htmlFor="pomodoro">Pomodoro</ToggleLabel>

      <ToggleInput type="radio" name="mode" id="shortBreak" />
      <ToggleLabel htmlFor="shortBreak">Short Break</ToggleLabel>

      <ToggleInput type="radio" name="mode" id="longBreak" />
      <ToggleLabel htmlFor="longBreak">Long Break</ToggleLabel>
      <ToggleBackground />
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  max-width: ${373 / 16}rem;
  margin: 0 auto;
  background-color: var(--color-primaryDark);
  isolation: isolate;
  padding: ${8 / 16}rem ${6 / 16}rem;
  border-radius: ${31.5 / 16}rem;
`;

const ToggleLabel = styled.label`
  display: block;
  width: 33.33333%;
  height: ${48 / 16}rem;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${12 / 16}rem;
  line-height: ${12 / 16}rem;
  text-transform: lowercase;
  text-align: center;
  color: var(--color-primary);
  opacity: 1;
  border-radius: ${26.5 / 16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: color 200ms ease-in-out, opacity 200ms ease-in-out;
  cursor: pointer;
`;

const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:not(:checked) + ${ToggleLabel} {
    color: var(--color-secondary);
    opacity: 0.4;
  }

  &:nth-of-type(2):checked ~ span {
    transform: translateX(100%);
  }

  &:nth-of-type(3):checked ~ span {
    transform: translateX(200%);
  }
`;

const ToggleBackground = styled.span`
  display: block;
  position: absolute;
  width: calc(33.33333% - 4px);
  background-color: var(--color-highlight);
  height: ${48 / 16}rem;
  border-radius: ${26.5 / 16}rem;
  transition: transform 200ms ease-in-out;
`;

const Button = styled.button`
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${12 / 16}rem;
  line-height: ${12 / 16}rem;
  text-transform: lowercase;
  background-color: var(--color-highlight);
  color: var(--color-primary);
  padding: ${18 / 16}rem ${23 / 16}rem;
  border-radius: ${26.5 / 16}rem;
`;

export default Switch;
