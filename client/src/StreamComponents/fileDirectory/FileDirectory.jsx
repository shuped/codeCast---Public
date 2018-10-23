import React from 'react';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import compareHashToServer from '../../redux/actions/index.js'

const TreeNode = Tree.TreeNodcompareHashToServere;


class FileDirectory extends React.Component {


  constructor() {
    super();
    // this.state = { fileDir: this.props.files };
    this.state = {
      fileDir: {"projectRoot": {
  
        "firstDir": {
          "test": "hashRef1",
          "file2": "hashRef2",
          "file3": "hashRef3",
    
          "firstSubDir": {
            "file1":"hashRef",
            "file2":"hashRef",
            "file3":"hashRef",
    
            "firstNestedSubDir": {
              "file1":"hashRef",
              "file2":"hashRef",
              "file3":"hashRef"
            },
    
            "secondNestedSubDir": {
              "file1":"hashRef",
              "file2":"hashRef",
              "file3":"hashRef"
            }
          },
          "secondSubDir": {
            "file1":"hashRef",
            "file2":"hashRef",
            "file3":"hashRef",
    
            "firstNestedSubDir": {
              "file1":"hashRef",
              "file2":"hashRef",
              "file3":"hashRef"
            }
          }
        },
        "secondDir": {
          "file1":"hashRef",
          "file2":"hashRef",
          "file3":"hashRef"
        },
        "thirdDir": {
          "file1":"hashRef",
          "file2":"hashRef",
          "file3":"hashRef"
        }
      }
    }
      
    };
  }





  // componentDidMount() {
  //   this.props.alertConnection();
  //   console.log(store.getState());
  // }
  
  //tree click handler
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    // if treeNode is a leaf, handle call render function
    if (info.node.isLeaf() === true) {
      this.props.sendHash(info.selectedNodes[0].key);
    }
  }



  // take in file object and create nested Tree nodes
  buildTree = (treeFrom) => {
   
    let result = [];
    const fileDir = treeFrom;
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
  };
  
    render() {
      const fileDir = this.state.fileDir;
      return (
        <Tree
          showLine
          // defaultExpandedKeys={[0-0-0']}
          onSelect={this.onSelect}
        >
          {this.buildTree(fileDir)}
        </Tree>
      )
    }
}


// const mapStateToProps = (state) => ({
//   fileDir: state.directoryStucture
// });

const mapDispathToProps = (dispatch) => {
  return {
    sendHash: (hash) => dispatch(compareHashToServer(hash))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FileDirectory);


