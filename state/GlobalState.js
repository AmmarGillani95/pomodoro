import { FAMILIES, COLORS } from "../constants";
import { createContext, useContext, useReducer } from "react";

const GlobalStateContext = createContext();
const GlobalStateUpdateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}
export function useUpdateGlobalState() {
  return useContext(GlobalStateUpdateContext);
}

const INITIAL_STATE = {
  minutes: 25,
  seconds: 0,
  hasStarted: false,
  pause: true,
  mode: "pomodoro",
  timerDidEnd: false,
  startingMinutes: 25,
  startingSeconds: 0,
  font: FAMILIES.sansSerif,
  color: COLORS.red,
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrementSeconds":
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case "decrementMinute":
      return {
        ...state,
        minutes: state.minutes - 1,
        seconds: 59,
      };
    case "timerEnd":
      return {
        ...state,
        timerDidEnd: true,
        pause: true,
      };
    case "start":
      return {
        ...state,
        hasStarted: true,
        pause: false,
      };
    case "pause":
      return {
        ...state,
        pause: !state.pause,
      };
    case "restart":
      return {
        ...state,
        seconds: 0,
        minutes: state[state.mode],
        timerDidEnd: false,
        pause: false,
        hasStarted: true,
      };
    case "reset":
      return {
        ...state,
        seconds: 0,
        minutes: state[state.mode],
        timerDidEnd: false,
        pause: true,
        hasStarted: false,
      };
    case "mode":
      return {
        ...state,
        mode: action.payload,
        seconds: 0,
        minutes: state[action.payload],
        timerDidEnd: false,
        pause: true,
        hasStarted: false,
      };
    case "changeFont":
      return {
        ...state,
        font: action.payload,
      };
    case "changeColor":
      return {
        ...state,
        color: COLORS[action.payload],
      };
    case "changeMinutes":
      return {
        ...state,
        [action.payload.type]: action.payload.minutes,
      };

    default:
      return state;
  }
};

export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateUpdateContext.Provider value={dispatch}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
}
