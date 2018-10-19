const increment = (number) => ({ type: 'increment', payload: number });

const message = () => ({ type: 'ADD_MESSAGE', payload: {username: "Bob Saget", messageContent: "Woooo look at me I'm Bob Saget"}});

export default {increment, message};