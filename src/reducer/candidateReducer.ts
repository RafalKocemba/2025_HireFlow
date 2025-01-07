import { STORAGE_NAME } from "../constants/constants";
import { handleLocalStorage } from "./../../utils/handleLocalStorage";

type CandidateStateType = {
  [key: number]: object;
};

type AddActionType = {
  type: "ADD";
  payload: object;
};
type DeleteActionType = {
  type: "DELETE";
  payload: {
    id: number;
  };
};
type ResetActionType = {
  type: "RESET";
  payload?: object;
};

export type CandidateActionType =
  | AddActionType
  | DeleteActionType
  | ResetActionType;

export function candidateReducer(
  state: CandidateStateType = {},
  { type, payload }: CandidateActionType,
) {
  const { setLocalItem, removeLocalStorage } = handleLocalStorage(STORAGE_NAME);

  switch (type) {
    case "ADD": {
      const uniqueId = Date.now();
      const newCandidate = { [uniqueId]: payload };
      const newCandidateList = { ...state, ...newCandidate };
      const isSuccess = setLocalItem(newCandidateList);
      return isSuccess ? newCandidateList : state;
    }
    case "DELETE": {
      const newCandidateList = { ...state };
      const idCandidateForRemoval = payload.id;
      delete newCandidateList[idCandidateForRemoval];
      const isSuccess = setLocalItem(newCandidateList);
      return isSuccess ? newCandidateList : state;
    }
    case "RESET": {
      removeLocalStorage();
      return {};
    }
    default:
      return state;
  }
}
