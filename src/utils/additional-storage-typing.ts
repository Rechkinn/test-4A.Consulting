import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  type TypedUseSelectorHook,
} from "react-redux";
import type { TGetTariffsActions } from "../services/actions/tariffs";
import type { TBurgerConstructorActions } from "../services/actions/timer";
import type { ActionCreator } from "redux";
import type { ThunkAction, ThunkDispatch } from "redux-thunk";
import type { store } from "../main";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TGetTariffsActions
  | TBurgerConstructorActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TApplicationActions>
>;

export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>();
