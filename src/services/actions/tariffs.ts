import type { AppDispatch } from "../../utils/additional-storage-typing";
import { URL_GET_TARIFFS } from "../../utils/consts";
import { doRequest } from "../../utils/do-request";
import type { TTariff } from "../../utils/types";

export const GET_TARIFFS_REQUEST: "GET_TARIFFS_REQUEST" = "GET_TARIFFS_REQUEST";
export const GET_TARIFFS_REQUEST_SUCCESS: "GET_TARIFFS_REQUEST_SUCCESS" =
  "GET_TARIFFS_REQUEST_SUCCESS";
export const GET_TARIFFS_REQUEST_ERROR: "GET_TARIFFS_REQUEST_ERROR" =
  "GET_TARIFFS_REQUEST_ERROR";

export interface IGetTariffsRequestAction {
  readonly type: typeof GET_TARIFFS_REQUEST;
}
export interface IGetTariffsRequestErrorAction {
  readonly type: typeof GET_TARIFFS_REQUEST_ERROR;
}
export interface IGetTariffsRequestSuccessAction {
  readonly type: typeof GET_TARIFFS_REQUEST_SUCCESS;
  readonly tariffs: TTariff[];
}

export type TGetTariffsActions =
  | IGetTariffsRequestAction
  | IGetTariffsRequestErrorAction
  | IGetTariffsRequestSuccessAction;

export const getTariffs = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_TARIFFS_REQUEST,
    });

    doRequest(URL_GET_TARIFFS)
      .then((data: TTariff[]) => {
        dispatch({
          type: GET_TARIFFS_REQUEST_SUCCESS,
          tariffs: data,
        });
      })
      .catch(() =>
        dispatch({
          type: GET_TARIFFS_REQUEST_ERROR,
        }),
      );
  };
};
