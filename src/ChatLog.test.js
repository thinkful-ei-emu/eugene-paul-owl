import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';
import renderer from 'react-test-renderer';
import {chatEvents, participants} from './Store';

console.log(chatEvents);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog chatEvents={chatEvents} participants={participants}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders UI with default props', () => {
  const tree = renderer.create(<ChatLog chatEvents={chatEvents} participants={participants}/>);
  expect(tree).toMatchSnapshot();
});