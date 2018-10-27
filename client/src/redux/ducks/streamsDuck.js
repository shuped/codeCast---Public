import { fetchBroadcasterStreams } from './ajaxDuck'

// Outgoing


// Incoming
const VIEWER_STREAMS_UPDATE = 'UPDATE_USER_STREAMS'

// Action Creators
export const updateViewerStreams = (scheduledStreams) => ({ type: BROADCASTER_STREAMS_UPDATE, payload: scheduledStreams  });

// STREAM REDUCER

export const streamsReducer = (state = {}, action) => {
  switch(action.type) {
    case VIEWER_STREAMS_UPDATE:
      console.log('userstreams update', action.payload);
      return { ...state, scheduledStreams: action.payload }

    default:
      return state;
  }
};

