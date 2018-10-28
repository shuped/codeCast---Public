import React from 'react';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { updateFile } from '../../redux/ducks/DirectoryDuck';

const TreeNode = Tree.TreeNode;

class FileDirectory extends React.Component {

  constructor() {
    super();
    this.state = {
      fileDir: {key: 'whoops'}
    };
  }


  //tree click handler
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    // if treeNode is a leaf, handle call render function
    if (info.node.isLeaf() === true) {

      console.log(info.selectedNodes[0].key);
      this.props.sendFileID(info.selectedNodes[0].key);
      // need script to disable click event on currently active file
    }
  }
  // take in file object and create nested Tree nodes
  buildTree = (treeFrom) => {
   
    let result = [];
    const fileDir = treeFrom;
    // for each item in the file state, build node based of if object or string
    for (let file in fileDir) {
      if (typeof fileDir[file] === 'string') {
        result.push(<TreeNode 
          title={ file } 
          key={ fileDir[file] } 
        />)

      } else if (typeof fileDir[file] === 'object') {
        result.push(<TreeNode title={ file } key={ file + ((Math.random()*10).toString().slice(2,6)) }>
          { this.buildTree(fileDir[file]) }
        </TreeNode>)
      }
    }
    return result;
  }
  
  render() {
    const fileDir = this.props.fileDir;
    return (
      <Tree
        showLine
        // defaultExpandedKeys={[0-0-0']}
        onSelect={this.onSelect}
      >
        {this.buildTree(fileDir)}
      </Tree>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fileDir: state.directory.directoryStructure
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendFileID: (fileID) => dispatch(updateFile(fileID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileDirectory);


