const axios = require('./api');
// Outgoing


// Incoming
const SCHEDULED_STREAMS_UPDATE = 'SCHEDULED_STREAMS_UPDATE';


// Action Creators
export const updateViewerStreams = (scheduledStreams) => ({ type: SCHEDULED_STREAMS_UPDATE, payload: scheduledStreams  });

// STREAM REDUCER

export const streamsReducer = (state = { scheduledStreams: ['noStreams'] }, action) => {
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
      console.log('fetch result', res.data);
      // TODO refactor for how graphql structures response
      const scheduledStreams = Object.values(res.data)
      console.log(scheduledStreams)
      dispatch(updateViewerStreams(scheduledStreams))
    }).catch((err) => {
      console.error('Error:', err.data);
      return false
    });
  };
}