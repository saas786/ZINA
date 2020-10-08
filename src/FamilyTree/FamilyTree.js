import React from "react";
import FamilyDTree from "./FamilyDTree.js";
import Sidebar from "./Sidebar.js";


export default class App extends React.Component {
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
        <FamilyDTree
          data={this.state.familyRelations}
          onNodeClick={this.handleNodeClick}
          height={window.innerHeight}
          width="600"
        />
      </div>
    );

    return (
      <div>
        <Sidebar list={this.props.list}/>
        {hGraph}
      </div>
    );
  }
}