test = {"projectRoot": {
  
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


function buildTree(treeFrom) {
  
  let result = [];
  const fileDir = treeFrom;
  for (let file of fileDir) {
    if (typeof fileDir[file] === 'string') {
      result.push(<TreeNode title={file} key={file + ((Math.random()*10).slice(2,6))} />)
    } else if (typeof fileDir[file] === 'object') {
      result.push(<TreeNode title={file} key={file + ((Math.random()*10).slice(2,6))}>
        { buildTree(fileDir[file]) }
      </TreeNode>)
    }
  }
  return result;
}


console.log(buildTree(test));


{/* <TreeNode title="parent 1" key="0-0" />
<TreeNode title="parent 1" key="0-0-0">
<TreeNode title="leaf" key="0-0-0-0" /> */}