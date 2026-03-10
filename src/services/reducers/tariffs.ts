import type { TTariff } from "../../utils/types";
import {
  GET_TARIFFS_REQUEST,
  GET_TARIFFS_REQUEST_ERROR,
  GET_TARIFFS_REQUEST_SUCCESS,
  type TGetTariffsActions,
} from "../actions/tariffs";

type TTariffsState = {
  tariffs: TTariff[];
  getTariffsRequest: boolean;
  getTariffsRequestError: boolean;
};

const initialState: TTariffsState = {
  tariffs: [],
  getTariffsRequest: false,
  getTariffsRequestError: false,
};

export const tariffsReducer = (
  state = initialState,
  action: TGetTariffsActions,
): TTariffsState => {
  switch (action.type) {
    case GET_TARIFFS_REQUEST:
      return {
        ...state,
        getTariffsRequest: true,
        getTariffsRequestError: false,
      };
    case GET_TARIFFS_REQUEST_ERROR:
      return {
        ...state,
        getTariffsRequest: false,
        getTariffsRequestError: true,
      };
    case GET_TARIFFS_REQUEST_SUCCESS:
      return {
        ...state,
        tariffs: [
          ...action.tariffs
            .filter((tariff) => tariff.is_best)
            .map((tariff) => ({ ...tariff, id: tariff.id.slice(0, -1) + "3" })),
          ...action.tariffs.filter((tariff) => !tariff.is_best),
        ],
        getTariffsRequest: false,
        getTariffsRequestError: false,
      };
    default:
      return state;
  }
};
