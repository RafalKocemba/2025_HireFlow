import {
  LOCAL_STORAGE_CANDIDATES_KEY,
  LOCAL_STORAGE_CONFIG_KEY,
  LOCAL_STORAGE_NOTES_KEY,
} from "../constants/constants";

import { handleLocalStorage } from "../utils/handleLocalStorage";

export type CandidateStateType = {
  [key: number]: object;
};

type ActionType = {
  type: "ADD" | "FILL_SAMPLE_DATA";
  payload: object;
};
type ModificationActionType = {
  type: "DELETE" | "EDIT";
  payload: {
    id: number;
  };
};
type ResetActionType = {
  type: "RESET";
  payload?: object;
};

export type CandidateActionType =
  | ActionType
  | ModificationActionType
  | ResetActionType;

const { setLocalItem, removeLocalStorage: removeCandidates } =
  handleLocalStorage(LOCAL_STORAGE_CANDIDATES_KEY);
const { removeLocalStorage: removeConfig } = handleLocalStorage(
  LOCAL_STORAGE_CONFIG_KEY,
);
const { removeLocalStorage: removeNotes } = handleLocalStorage(
  LOCAL_STORAGE_NOTES_KEY,
);

export function candidateReducer(
  state: CandidateStateType = {},
  action: CandidateActionType,
): CandidateStateType {
  let newState: CandidateStateType;

  switch (action.type) {
    case "ADD": {
      const uniqueId = Date.now();
      const newCandidate = {
        [uniqueId]: { ...action.payload, id: uniqueId },
      };
      newState = { ...newCandidate, ...state };
      break;
    }
    case "EDIT": {
      const { id } = action.payload;
      newState = { ...state };
      newState[id] = { ...action.payload };
      break;
    }
    case "DELETE": {
      const { id } = action.payload;
      newState = { ...state };
      delete newState[id];
      break;
    }
    case "FILL_SAMPLE_DATA": {
      newState = { ...action.payload };
      break;
    }
    case "RESET": {
      newState = {};
      removeCandidates();
      removeConfig();
      removeNotes();
      return newState;
    }
    default:
      return state;
  }

  const isSuccess = setLocalItem(newState);
  return isSuccess ? newState : state;
}
