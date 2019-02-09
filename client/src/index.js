import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './component/topbar.jsx';
import Directions from './component/directions.jsx';
// import Direction from './component/direction.jsx';

ReactDOM.render(
  <div>
    <TopBar />
    <Directions />
  </div>,
  document.getElementById("app")

);