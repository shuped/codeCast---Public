export const newConnection = () => ({ 
  type: 'server/new_connection', 
  payload: { content: 'New connection established from React' } 
});

export const newMessage = (msg) => ({ 
  type: 'server/message', 
  payload: { msg }
});
