import React from "react";
import TreeBuilder from "./TreeBuilder.js";

export default class FamilyTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      familyRelations: this.props.family,
      showFullscreen: true
    };
    this.handleNodeClick = this.handleNodeClick.bind(this);
  }

  handleNodeClick(name, extras) {
  };

  render() {
    var hGraph = (
      <div className="center-text fullscreen">
        <TreeBuilder
          data={this.state.familyRelations}
          onNodeClick={this.handleNodeClick}
          height={window.innerHeight+210}
          width="600"
        />
      </div>
    );

    return (
      <div>
        {hGraph}
      </div>
    );
  }
}