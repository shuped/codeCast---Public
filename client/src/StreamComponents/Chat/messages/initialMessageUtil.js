import uuid from 'uuid/v1';

// State init. utility
export default function randomMessage() {
  const messageBank = [
    {
      type: 'messages',
      id: uuid(),
      timestamp: new Date(),
      user: { username: 'Joel@LHL', userColor: '#101010' },
      content: 'A monad is just a monoid in the category of endofunctors, what\'s the problem?'
    }
  ]
  return messageBank[Math.floor(Math.random() * messageBank.length)]
}