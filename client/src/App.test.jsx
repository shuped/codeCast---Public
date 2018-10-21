import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import store from './redux/store/index.js';

it('renders without crashing', () => {
  if (global.document) {
    document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    });
    document.body.createTextRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    });
  }
  const div = document.createElement('div');
  ReactDOM.render(<Root store={ store } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
