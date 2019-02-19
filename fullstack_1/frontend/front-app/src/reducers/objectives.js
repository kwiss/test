import Immutable from "seamless-immutable";
import * as ActionsTypes from "../constants/actionTypes";
import objectives from "../constants/data.json";
import mergers from "seamless-immutable-mergers";

const initialState = Immutable({ datas: objectives });

const mergeConfig = {
  merger: mergers.updatingByIdArrayMerger,
  mergerObjectIdentifier: "id"
};

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Level4Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.INCREMENT_OBJECTIVE:
      const objectiveToIncrease = getRandomInt(state.datas.length);
      const randomObjective = state.datas[objectiveToIncrease].merge(
        {
          ...state.datas[objectiveToIncrease],
          current: state.datas[objectiveToIncrease].current + 1
        },
        mergeConfig
      );
      const newState = { datas: [randomObjective] };

      return state.merge(
        {
          ...state,
          ...newState
        },
        mergeConfig
      );

    default:
      return state;
  }
};

export default Level4Reducer;
