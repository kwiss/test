import React, { Component } from "react";

import Tree from "react-tree-graph";
import "react-tree-graph/dist/style.css";
import "./tree.css";

const transformToD3Hierarchy = objectives => {
  objectives.forEach(currObjective => {
    delete currObjective.children;
    if (currObjective.hasOwnProperty("parent_id")) {
      const parent = objectives.find(obj => obj.id === currObjective.parent_id);
      if (!parent.hasOwnProperty("children")) {
        parent.children = [];
      }
      parent.children.push(currObjective);
    }
  });
  return objectives.find(objective => !objective.parentId);
};

class Level1 extends Component {
  render() {
    const { objectives } = this.props;
    const formatedObjectives = transformToD3Hierarchy(objectives);
    return (
      <div>
        <h2>Level 2</h2>
        <Tree
          data={formatedObjectives}
          height={800}
          width={1280}
          keyProp="id"
          labelProp="title"
          animated
          duration={400}
          svgProps={{
            className: "custom"
          }}
        />
      </div>
    );
  }
}
export default Level1;
