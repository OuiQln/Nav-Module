import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './component/topbar';
import Directions from './component/directions';
import Block from './component/Block';

ReactDOM.render(
  <div>
    <TopBar />
    <Directions />
    <Block />
  </div>,
  document.getElementById('app'),

);
