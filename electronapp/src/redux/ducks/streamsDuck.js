const axios = require('./api');

// Outgoing
// async -> fetchBroadcasterStreams, postDeleteStream

// Incoming
const BROADCASTER_STREAMS_UPDATE = 'UPDATE_USER_STREAMS'

// Action Creator
export const updateBroadcasterStreams = (scheduledStreams) => ({ type: BROADCASTER_STREAMS_UPDATE, payload: scheduledStreams  });

// STREAM REDUCER
export const streamsReducer = (state = {}, action) => {
  switch(action.type) {
    case BROADCASTER_STREAMS_UPDATE:
      console.log('message recieved', action.payload);
      return { ...state, scheduledStreams: action.payload }

    default:
      return state;
  }
};

// Async Actions
export const fetchBroadcasterStreams = (userID) => {
  return function (dispatch) {
    return axios({
      method: 'get',
      url: `/api/scheduledStreams?user_id=${userID}`
    }).then((streamsJSON) => {
      console.log(streamsJSON); 
      // make array so we can map over for jsx elements
      const scheduledStreams = Object.entries(JSON.parse(streamsJSON))
        .map(([streamID, stream]) => [streamID, ...stream]);
      dispatch(updateBroadcasterStreams(scheduledStreams))
    }).catch((err) => {
      console.error('Error:', err.data);
      throw err
    });
  };
}

export const postDeleteStream = (streamID) => {
  // refactor as above
  axios({
    method: 'delete',
    url: `/api/scheduledStreams?stream_id=${streamID}`
  }).then((streamsJSON) => {
    console.log(streamsJSON.data);
  }).catch((err) => {
    console.error('Error:', err.data);
    throw err;
  });
}
