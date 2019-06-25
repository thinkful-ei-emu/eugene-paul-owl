import React from 'react';
import ReactDOM from 'react-dom';
import PartList from './PartList';
import renderer from 'react-test-renderer';
import {chatEvents, participants} from './Store';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartList participants={participants} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders UI with default props', () => {
  const tree = renderer.create(<PartList participants={participants} />);
  expect(tree).toMatchSnapshot();
});