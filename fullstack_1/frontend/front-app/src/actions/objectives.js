import * as actions from "../constants/actionTypes";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const incrementObjective = () => action(actions.INCREMENT_OBJECTIVE);
