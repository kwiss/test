import React, { Component } from "react";

import Tree from "react-tree-graph";
import "react-tree-graph/dist/style.css";
import "./tree.css";

class Level1 extends Component {
  removeItem(items, i) {
    items.slice(0, i - 1).concat(items.slice(i, items.length));
  }

  transformToD3Hierarchy(objectives) {
    objectives.map(currObjective => {
      if (currObjective.hasOwnProperty("parent_id")) {
        const parent = objectives.find(
          obj => obj.id === currObjective.parent_id
        );
        if (!parent.hasOwnProperty("children")) {
          parent.children = [];
        }
        return parent.children.push(currObjective);
      }
      return objectives;
    });

    return objectives.find(newObjective => !newObjective.parentId);
  }

  render() {
    const { objectives } = this.props;
    const formatedObjectives = this.transformToD3Hierarchy(objectives);
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
