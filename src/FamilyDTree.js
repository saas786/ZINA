import React from "react";
import dTree from "d3-dtree";

export default class FamilyDTree extends React.Component {
  componentDidMount() {
    if (this.props.data !== undefined) {
      this.renderGraph(this.props.data, this.props.height, this.props.width);
    }
  }

  componentDidUpdate() {
    if (this.props.data !== undefined) {
      this.renderGraph(this.props.data, this.props.height, this.props.width);
    }
  }

  render() {
    return <div id="graph"/>;
  }

  renderGraph(data, height, width) {
    const options = {
      target: "#graph",
      debug: false,
      width: parseInt(height,10),
      height: parseInt(width,10),
      callbacks: {
        nodeClick: this.props.onNodeClick 
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      nodeWidth: 150,
      styles: {
        node: "node",
        linage: "linage",
        marriage: "marriage",
        text: "nodeText"
      }
    };

      document.getElementById("graph").innerHTML = "";
      dTree.init(data, options);
  }
}
