const newConnection = () => ({ type: 'server/new_connection', payload: { content: 'New connection established from React' } });

const message = () => ({ type: 'server/message', payload: { username: 'Bob Saget', messageContent: 'Woooo look at me I\'m Bob Saget' } });

export default { newConnection, message };