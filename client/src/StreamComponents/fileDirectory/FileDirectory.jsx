import React from 'react';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import store from '../../redux/store/index.js';

const TreeNode = Tree.TreeNode;

//set directory state
const mapStateToProps = (state) => ({
  requestedFile: state.activeFileContents,
  fileDir: state.directoryStucture
});

class FileDirectory extends React.Component {


  constructor() {
    super();
    // this.state = { fileDir: this.props.files };
    this.state = {
      fileDir: {"projectRoot": {
  
        "firstDir": {
          "file1": "hashRef",
          "file2": "hashRef",
          "file3": "hashRef",
    
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

  componentDidMount() {

    this.props.alertConnection();
    console.log(store.getState());
 
  }
  
  
  // take in file object and create nested Tree nodes
  buildTree = (treeFrom) => {
  
    let result = [];
    const fileDir = treeFrom;
    for (let file in fileDir) {
      if (typeof fileDir[file] === 'string') {
        result.push(<TreeNode title={file} key={file + ((Math.random()*10).toString().slice(2,6))} />)

      } else if (typeof fileDir[file] === 'object') {
        result.push(<TreeNode title={file} key={file + ((Math.random()*10).toString().slice(2,6))}>
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
          defaultExpandedKeys={['kfgkaj-0']}
          onSelect={this.onSelect}
        >
          {this.buildTree(fileDir)}
        </Tree>
      )
    }
   
}

export default connect(mapStateToProps)(FileDirectory);

// export default FileDirectory;