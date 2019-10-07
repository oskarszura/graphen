// @flow
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import TreeNode from "./TreeNode";

type Props = {
};

type State = {
};

function search(node, id, callback) {
  if (node.id === id) {
    callback();
    return;
  }

  if (node.children.length == 0) {
    return;
  }

  for(let i = 0; i < node.children.length; i++) {
    search(node.children[i], id, callback);
  }
};

class TreeView extends React.PureComponent<Props, State> {
  static onDragOver(event: SyntheticDragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  constructor(props) {
    super();
    const { node } = props;
    this.state = {
      node,
    };
  }

  handleChange(dragNode, dropNode) {
    const { node } = this.props;

    search(node, dragNode.id, () => {

    });
    search(node, dropNode.id, () => {
      dropNode.children.push(dragNode);
    });

    this.setState({

    })
  }

  render() {
    const { node } = this.state;
    const classes = "c-tree-view";

    return (
      <div
        className={classes}
      >
        <TreeNode
          level={0}
          node={node}
          onChange={_.bind(this.handleChange, this)}
        />
      </div>
    );
  }
}

export default TreeView;
