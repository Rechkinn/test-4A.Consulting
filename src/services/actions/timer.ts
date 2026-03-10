export const TIMER_START: "START_TIMER" = "START_TIMER";
export const TIMER_STOP: "TIMER_STOP" = "TIMER_STOP";

export interface ITimerStartAction {
  readonly type: typeof TIMER_START;
}
export interface ITimerStopAction {
  readonly type: typeof TIMER_STOP;
}

export type TBurgerConstructorActions = ITimerStartAction | ITimerStopAction;
