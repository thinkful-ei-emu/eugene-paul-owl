import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {chatEvents, participants} from './Store';

ReactDOM.render(<App chatEvents={chatEvents} participants={participants} />, document.getElementById('root'));

