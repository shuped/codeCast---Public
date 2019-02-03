import uuid from 'uuid/v1';

// State init. utility
export default [
  {
    type: 'messages',
    id: uuid(),
    timestamp: new Date(),
    user: { username: 'System', userColor: '#FF00FF' },
    content: '/bold(Welcome!) This is the chat application to talk to connected viewers and the broadcaster.'
  },
  {
    type: 'messages',
    id: uuid(),
    timestamp: new Date(),
    user: { username: 'System', userColor: '#FF00FF' },
    content: 'It supports /bold(commands preceded by a forward slash) like ital() and bold() to decorate text between the parentheses.'
  },
  {
    type: 'messages',
    id: uuid(),
    timestamp: new Date(),
    user: { username: 'System', userColor: '#FF00FF' },
    content: 'To send a /bold(link or image), use img(your_link) or link(your_link) commands, again preceded by a "/".'
  },
  {
    type: 'messages',
    id: uuid(),
    timestamp: new Date(),
    user: { username: 'System', userColor: '#FF00FF' },
    content: 'To /bold(notify the broadcaster) about a message, use the @broadcaster command.'
  }
];