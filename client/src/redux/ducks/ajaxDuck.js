import { updateViewerStreams } from './streamsDuck.js';
const axios = require('./api');



export const fetchViewerStreams = (userID) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `/api/scheduledStreams?user_id=${userID}`
    }).then((res) => {
      console.log(res);
      const scheduledStreams = Object.entries(JSON.parse(res))
        .map(([streamID, stream]) => [streamID, ...stream]);
      
      dispatch(updateViewerStreams(scheduledStreams))
      return true
    }).catch((err) => {
      console.error('Error:', err.data);
      return false
    });
  };
}

// export const fetchViewerStreams = (userID) => {
//   return function (dispatch) {
//     axios({
//       method: 'get',
//       url: `/api/scheduledStreams?user_id=${userID}`
//     }).then((res) => {
//       console.log(res);
//       const scheduledStreams = Object.entries(JSON.parse(res))
//         .map(([streamID, stream]) => [streamID, ...stream]);
      
//       dispatch(updateViewerStreams(scheduledStreams))
//       return true
//     }).catch((err) => {
//       console.error('Error:', err.data);
//       return false
//     });
//   };
// }