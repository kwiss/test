import { connect } from "react-redux";
import { incrementObjective } from "../actions/objectives";

import Level4 from "../components/level4";

const mapStateToProps = state => ({
  objectives: state.objectives.datas
});

const mapDispatchToProps = dispatch => ({
  incrementObjective: () => {
    dispatch(incrementObjective());
  }
});

const Level4Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Level4);

export default Level4Container;
