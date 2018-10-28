
const axios = require('./api');

// Outgoing


// Incoming
const SCHEDULED_STREAMS_UPDATE = 'SCHEDULED_STREAMS_UPDATE';


// Action Creators
export const updateViewerStreams = (scheduledStreams) => ({ type: SCHEDULED_STREAMS_UPDATE, payload: scheduledStreams  });

// STREAM REDUCER

export const streamsReducer = (state = {}, action) => {
  switch(action.type) {
    case SCHEDULED_STREAMS_UPDATE:
      console.log('userstreams update', action.payload);
      return { ...state, scheduledStreams: action.payload }

    default:
      return state;
  }
};

// AJAX ACTIONS

export const fetchScheduledStreams = () => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `/api/scheduledStreams/`
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