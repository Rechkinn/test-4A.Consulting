import {
  TIMER_START,
  TIMER_STOP,
  type TBurgerConstructorActions,
} from "../actions/timer";

type TTimerState = {
  isRunning: boolean;
};

const initialState: TTimerState = {
  isRunning: true,
};

export const timerReducer = (
  state = initialState,
  action: TBurgerConstructorActions,
): TTimerState => {
  switch (action.type) {
    case TIMER_START:
      return { ...state, isRunning: true };
    case TIMER_STOP:
      return { ...state, isRunning: false };
    default:
      return state;
  }
};
