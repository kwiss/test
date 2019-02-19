import React, { Component } from "react";

import Tree from "react-tree-graph";
import "react-tree-graph/dist/style.css";
import "./tree.css";

class Level1 extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.objectives === nextProps.objectives) {
      return false;
    }
  }

  render() {
    const { objectives } = this.props;
    return (
      <div>
        <h2>Level 2</h2>
        <Tree
          data={objectives}
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
