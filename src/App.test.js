import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import {chatEvents, participants} from './Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App chatEvents={chatEvents} participants={participants}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders UI with default props', () => {
  const tree = renderer.create(<App chatEvents={chatEvents} participants={participants}/>);
  expect(tree).toMatchSnapshot();
});