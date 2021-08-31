import styled from "styled-components";
import { useState } from "react";

const Increment = ({ amount, dispatch, type }) => {
  const [value, setValue] = useState(amount);
  const [error, setError] = useState(false);

  return (
    <Wrapper error={error}>
      <Input
        type="number"
        // min={1}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);

          if (e.target.value >= 5) {
            setError(false);
            dispatch({
              type: "changeMinutes",
              payload: { minutes: e.target.value, type: type },
            });
            dispatch({ type: "reset" });
          } else {
            setError(true);
          }
        }}
      />

      <ButtonWrapper>
        <Button
          onClick={() => {
            let newValue = Number(value) + 1;
            setValue(newValue);

            setError(false);
            dispatch({
              type: "changeMinutes",
              payload: { minutes: newValue, type: type },
            });
            dispatch({ type: "reset" });
          }}
        >
          <SVG xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path
              fill="none"
              stroke="#1E213F"
              strokeOpacity=".25"
              strokeWidth="2"
              d="M1 6l6-4 6 4"
            />
          </SVG>
        </Button>
        <Spacer></Spacer>
        <Button
          onClick={() => {
            if (value > 5) {
              let newValue = Number(value) - 1;
              setValue(newValue);
              setError(false);
              dispatch({
                type: "changeMinutes",
                payload: { minutes: newValue, type: type },
              });
              dispatch({ type: "reset" });
            }
          }}
        >
          <SVG xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path
              fill="none"
              stroke="#1E213F"
              strokeOpacity=".25"
              strokeWidth="2"
              d="M1 1l6 4 6-4"
            />
          </SVG>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-offWhite);
  width: max-content;
  padding: ${7 / 16}rem ${16 / 16}rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${16 / 16}rem;
  max-width: 140px;
  border-radius: ${10 / 16}rem;
  border: ${(p) => (p.error ? "solid 1px red" : "revert")};
`;

const Input = styled.input`
  background-color: inherit;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  border: none;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: ${14 / 16}rem;
  line-height: ${14 / 16}rem;
  padding: ${4 / 16}rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: ${9 / 16}rem; */
`;

const Spacer = styled.div`
  height: ${9 / 16}rem;
`;

const Button = styled.button`
  display: block;
  height: max-content;
  width: max-content;
  line-height: 0;
`;

const SVG = styled.svg``;

export default Increment;
