import React, { Component } from "react";
import ObjectiveHeader from "./ObjectiveHeader";
import ObjectiveChart from "./ObjectiveChart";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: row
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

class Level1 extends Component {
  render() {
    const { objectives, today } = this.props;
    return (
      <div>
        <ObjectiveHeader objectives={objectives} />
        <List>
          {objectives.map((objective, index) => {
            return (
              <ObjectiveChart
                objective={objective}
                key={objective.id}
                today={today}
              />
            );
          })}
        </List>
      </div>
    );
  }
}
export default Level1;
