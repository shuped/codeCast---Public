import { updateViewerStreams } from './streamsDuck.js';
const axios = require('./api');

export const postDeleteStream = (streamID) => {

  axios({
    method: 'delete',
    url: `/api/scheduledStreams?stream_id=${streamID}`
  }).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.error('Error:', err.data);
    throw err;
  });
}

export const fetchViewerStreams = (userID) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `/api/scheduledStreams?user_id=${userID}`
    }).then((res) => {
      // TODO format to graphQL output if neccessary
      const scheduledStreams = Object.values(res.data)
      dispatch(updateViewerStreams(scheduledStreams))
      return true
    }).catch((err) => {
      console.error('Error:', err.data);
      return false
    });
  };
}