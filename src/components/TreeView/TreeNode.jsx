import _ from 'lodash';
import React from 'react';
import ReactDOM from "react-dom";

const NODE_HEIGHT = 20;

class TreeNode extends React.PureComponent<Props, State> {
  onDragOver(event: SyntheticDragEvent<Element>) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  onDrop(event, node, onChange) {
    event.preventDefault();
    event.stopPropagation();
    const dragNode = event.dataTransfer.getData("dragNode");
    onChange(JSON.parse(dragNode), node);
    return false;
  }

  onDragStart(event, node) {
    event.stopPropagation();
    event.dataTransfer.setData("dragNode", JSON.stringify(node))
    return false;
  }

  render() {
    const { node, level, onChange } = this.props;
    const classes = `c-tree-view__node`;

    return (
      <div
        className={classes}
        draggable
        onDragOver={(event: SyntheticDragEvent<HTMLDivElement>) => {
          this.onDragOver(event);
        }}
        onDrop={(event: SyntheticDragEvent<HTMLDivElement>) => {
          this.onDrop(event, node, onChange);
        }}
        onDragStart={(event: SyntheticDragEvent<HTMLDivElement>) => {
          this.onDragStart(event, node);
        }}
      >
        <div>
          { level !== 0 && <div className='c-tree-view__link' /> }
          {node.name}
        </div>
        {_.map(node.children, (child) => (
          <TreeNode
            level={level + 1}
            node={child}
            onChange={onChange}
          />
        ))}
      </div>
    );
  }
}

export default TreeNode;
