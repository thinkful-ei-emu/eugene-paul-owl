import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
const chatEvents = [
  {
      participantId: 3,
      type: 'message',
      message: 'Hello world',
      time: 1548852646559,
      timestamp: 1548852484247
  },
  {
      participantId: 2,
      type: 'thumbs-up',
      timestamp: 1548852484247
  },
  {
      participantId: 4,
      type: 'thumbs-down',
      timestamp: 1548852484247
  },
  {
      participantId: 1,
      type: 'raise-hand',
      timestamp: 1548852544247
  },
  {
      participantId: 1,
      type: 'clap',
      timestamp: 1548852544247
  },
  {
      participantId: 1,
      type: 'join',
      timestamp: 1548852544247
  },
  {
      participantId: 5,
      type: 'leave',
      timestamp: 1548852604247
  },
  {
      participantId: 3,
      type: 'join-stage',
      timestamp: 1548852664247
  },
  {
      participantId: 3,
      type: 'leave-stage',
      timestamp: 1548852724247
  }
];

const participants = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App chatEvents={chatEvents} participants={participants}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders UI with default props', () => {
  const tree = renderer.create(<App chatEvents={chatEvents} participants={participants}/>);
  expect(tree).toMatchSnapshot();
});