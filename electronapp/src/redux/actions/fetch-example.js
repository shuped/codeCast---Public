function setFile(hash) {
  return {
    type: 'SET_FILE',
    hash
  }
}

function addFile(contents) {
  return {
    type: 'ADD_FILE',
    contents
  }
}

function fetchFile(hash) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.files[hash]) {
      dispatch(setFile(hash));
      return;
    }
    fetch('/' + hash)
      .then(response => response.json)
      .then(data => {
        dispatch(addFile(data));
        dispatch(setFile(hash));
      })
      .catch(error => dispatch(handleFileError(error)));
    }
    
}

  dispatch(fetchFile('abc'));

  store => next => action => {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
      return;
    }
    next(action);
  }