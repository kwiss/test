import React, { Component } from "react";

class ObjectiveHeader extends Component {
  render() {
    const { objectives } = this.props;
    const objectivesAbove = objectives.filter(
      objective => objective.current > objective.target
    );

    return (
      <p>
        {objectivesAbove.length} objectives have their current value over their
        target
      </p>
    );
  }
}

export default ObjectiveHeader;
