import styled from "styled-components";

import { useGlobalState, useUpdateGlobalState } from "../../state/GlobalState";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, FAMILIES, QUERIES } from "../../constants";

import Increment from "../Increment";

const Modal = ({ isOpen, onDismiss }) => {
  const { font, color, pomodoro, shortBreak, longBreak } = useGlobalState();
  const dispatch = useUpdateGlobalState();

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content style={{ "--font-family": font }} aria-label="Settings">
        <HeadingWrapper>
          <Heading>Settings</Heading>
          <Close onClick={onDismiss}>
            <SVG xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                fill="#1E213F"
                fillRule="evenodd"
                d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                opacity=".5"
              />
            </SVG>
          </Close>
        </HeadingWrapper>

        <Line />

        <Wrapper>
          <TimeSection>
            <SubHeading>Time (Minutes)</SubHeading>
            <SubSection>
              <InputWrapper>
                <Mode>pomodoro</Mode>
                <Increment
                  amount={pomodoro}
                  type="pomodoro"
                  dispatch={dispatch}
                />
              </InputWrapper>
              <InputWrapper>
                <Mode>short break</Mode>
                <Increment
                  amount={shortBreak}
                  type="shortBreak"
                  dispatch={dispatch}
                />
              </InputWrapper>
              <InputWrapper>
                <Mode>long break</Mode>
                <Increment
                  amount={longBreak}
                  type="longBreak"
                  dispatch={dispatch}
                />
              </InputWrapper>
            </SubSection>
          </TimeSection>
          <Section>
            <SubHeading>Font</SubHeading>
            <CircleWrapper
              onChange={(e) => {
                dispatch({ type: "changeFont", payload: e.target.id });
              }}
            >
              <CircleRadio
                type="radio"
                name="font"
                id="Kumbh sans"
                checked={font.includes("Kumbh sans")}
                onChange={() => {}}
              />
              <CircleLabel
                htmlFor="Kumbh sans"
                style={{ "--font-family": FAMILIES.sansSerif }}
              >
                Aa
              </CircleLabel>

              <CircleRadio
                type="radio"
                name="font"
                id="Roboto Slab"
                checked={font.includes("Roboto Slab")}
                onChange={() => {}}
              />
              <CircleLabel
                htmlFor="Roboto Slab"
                style={{
                  "--font-family": FAMILIES.serif,
                  "--font-weight": 400,
                }}
              >
                Aa
              </CircleLabel>

              <CircleRadio
                type="radio"
                name="font"
                id="Space Mono"
                checked={font.includes("Space Mono")}
                onChange={() => {}}
              />
              <CircleLabel
                htmlFor="Space Mono"
                style={{ "--font-family": FAMILIES.mono }}
              >
                Aa
              </CircleLabel>
            </CircleWrapper>
          </Section>
          <Section>
            <SubHeading>Color</SubHeading>
            <CircleWrapper
              onChange={(e) => {
                dispatch({ type: "changeColor", payload: e.target.id });
              }}
            >
              <CircleRadio
                type="radio"
                name="color"
                id="red"
                checked={color === "hsl(0deg 91% 71%)"}
                onChange={() => {}}
              />
              <CircleColorLabel
                htmlFor="red"
                style={{ "--color-highlight": COLORS.red }}
              ></CircleColorLabel>

              <CircleRadio
                type="radio"
                name="color"
                id="blue"
                checked={color === "hsl(182deg 91% 71%)"}
                onChange={() => {}}
              />
              <CircleColorLabel
                htmlFor="blue"
                style={{
                  "--color-highlight": COLORS.blue,
                }}
              ></CircleColorLabel>

              <CircleRadio
                type="radio"
                name="color"
                id="purple"
                checked={color === "hsl(284deg 89% 74%)"}
                onChange={() => {}}
              />
              <CircleColorLabel
                htmlFor="purple"
                style={{ "--color-highlight": COLORS.purple }}
              ></CircleColorLabel>
            </CircleWrapper>
          </Section>
        </Wrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: hsl(234deg 47% 8% / 0.5);
`;

const Content = styled(DialogContent)`
  background-color: white;
  color: black;
  /* width: clamp(327px, 100%, 540px); */
  width: clamp(
    20.4375rem,
    calc(
      20.4375rem + (33.75 - 20.4375) * ((100vw - 23.4375rem) / (48 - 23.4375))
    ),
    33.75rem
  );
  border-radius: ${15 / 16}rem;
`;

const HeadingWrapper = styled.div`
  padding: ${24 / 16}rem
    clamp(
      1.5rem,
      calc(1.5rem + (2.5 - 1.5) * ((100vw - 23.4375rem) / (48 - 23.4375))),
      2.5rem
    );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: hsl(0deg 2% 89% / 1);
`;

const Wrapper = styled.div`
  padding: 0
    clamp(
      1.5rem,
      calc(1.5rem + (2.5 - 1.5) * ((100vw - 23.4375rem) / (48 - 23.4375))),
      2.5rem
    );
  padding-top: ${0 / 16}rem;
  padding-bottom: ${59 / 16}rem;
`;

const Heading = styled.h2`
  color: var(--color-primary);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${20 / 16}rem;
  line-height: ${20 / 16}rem;
`;

const Close = styled.button`
  line-height: 0;
`;

const SVG = styled.svg``;

const TimeSection = styled.div`
  padding-top: ${24 / 16}rem;
  display: flex;
  flex-direction: column;
  gap: ${18 / 16}rem;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: solid 1px hsl(0deg 2% 89% / 1);
    padding: ${24 / 16}rem 0px;
  }
`;

const Section = styled(TimeSection)`
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SubHeading = styled.h3`
  color: var(--color-primary);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${11 / 16}rem;
  line-height: ${11 / 16}rem;
  letter-spacing: ${4.23077 / 16}rem;
  text-transform: uppercase;
  text-align: center;
`;

const SubSection = styled.div`
  align-self: stretch;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Mode = styled.p`
  color: var(--color-primary);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${12 / 16}rem;
  line-height: ${12 / 16}rem;
  opacity: 0.4;
`;

const CircleWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: ${16 / 16}rem;
`;

const CircleLabel = styled.label`
  width: ${40 / 16}rem;
  height: ${40 / 16}rem;
  border-radius: 50%;
  background-color: var(--color-offWhite);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: ${15 / 16}rem;
  line-height: ${15 / 16}rem;
  opacity: 0.73;
  cursor: pointer;
`;

const CircleColorLabel = styled(CircleLabel)`
  background-color: var(--color-highlight);
  opacity: 1;
`;

const CircleRadio = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  &:checked + ${CircleLabel} {
    opacity: 1;
    color: white;
    background-color: var(--color-primaryDark);
  }
  &:checked + ${CircleColorLabel} {
    background-color: var(--color-highlight);
    position: relative;
    &:after {
      content: "";
      display: block;
      transform: rotate(45deg);
      height: 18px;
      width: 10px;
      border-bottom: 3px solid var(--color-primary);
      border-right: 3px solid var(--color-primary);
      transform: translateY(-2px) rotate(45deg);
    }
  }
`;

const Apply = styled.button``;

export default Modal;
