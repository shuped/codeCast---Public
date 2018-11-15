// import { streamConstants } from '../_constants';
// const axios = require('./api');
// Outgoing


// Incoming
// const SCHEDULED_STREAMS_UPDATE = 'SCHEDULED_STREAMS_UPDATE';
// const ACTIVE_STREAMS_UPDATE = 'ACTIVE_STREAMS_UPDATE';
// const ARCHIVED_STREAMS_UPDATE = 'ARCHIVED_STREAMS_UPDATE';

// Action Creators
// export const updateScheduledStreams = (scheduledStreams) => ({ type: streamConstants.SCHEDULED_STREAMS_UPDATE, payload: scheduledStreams  });

// export const updateActiveStreams = (activeStreams) => ({ type: streamConstants.ACTIVE_STREAMS_UPDATE, payload: activeStreams  });

// export const updateArchivedStreams = (archivedStreams) => ({ type: streamConstants.ARCHIVED_STREAMS_UPDATE, payload: archivedStreams  });

// // STREAM REDUCER

// export const streamsReducer = (state = { activeStreams: ['noStreams'], scheduledStreams: ['noStreams'], archivedStreams: ['noStreams'] }, action) => {
//   switch(action.type) {
//     case streamConstants.SCHEDULED_STREAMS_UPDATE:
//       console.log('userstreams update', action.payload);
//       return { ...state, scheduledStreams: action.payload }

//     case streamConstants.ACTIVE_STREAMS_UPDATE:
//     console.log('userstreams update', action.payload);
//     return { ...state, activeStreams: action.payload }

//     case streamConstants.ARCHIVED_STREAMS_UPDATE:
//     console.log('userstreams update', action.payload);
//     return { ...state, archivedStreams: action.payload }

//     default:
//       return state;
//   }
// };

// // AJAX ACTIONS
// export const fetchScheduledStreams = () => {
//   return function (dispatch) {
//     axios({
//       method: 'get',
//       url: `/api/scheduledStreams/`
//     }).then((res) => {
//       console.log('fetch result', res.data);
//       // TODO refactor for how graphql structures response
//       const scheduledStreams = Object.values(res.data)
//       dispatch(updateScheduledStreams(scheduledStreams))
//     }).catch((err) => {
//       console.error('Error:', err.data);
//       return false
//     });
//   };
// }

// export const fetchActiveStreams = () => {
//   return function (dispatch) {
//     axios({
//       method: 'get',
//       url: `/api/activeStreams/`
//     }).then((res) => {
//       console.log('fetch result', res.data);
//       // TODO refactor for how graphql structures response
//       const activeStreams = Object.values(res.data);
//       console.log(activeStreams);
//       dispatch(updateActiveStreams(activeStreams));
//     }).catch((err) => {
//       console.error('Error:', err.data);
//       return false
//     });
//   };
// }

// export const fetchArchivedStreams = () => {
//   return function (dispatch) {
//     axios({
//       method: 'get',
//       url: `/api/archivedStreams/`
//     }).then((res) => {
//       console.log('fetch result', res.data);
//       // TODO refactor for how graphql structures response
//       const archivedStreams = Object.values(res.data);
//       console.log(archivedStreams);
//       dispatch(updateArchivedStreams(archivedStreams));
//     }).catch((err) => {
//       console.error('Error:', err.data);
//       return false
//     });
//   };
// }