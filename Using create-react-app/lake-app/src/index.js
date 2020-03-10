import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LakeList = [
    {id: 1, name: "Lake Ontario", trailhead: "Lake Ontario"}, 
    {id: 2, name: "Echo Lake", trailhead: "Echo  Lake"}, 
    {id: 3, name: "Cascade Lake", trailhead: "Bayview"}, 
    {id: 4, name: "Maud Lake", trailhead: "Wright's Lake"}
];

ReactDOM.render(
    <App lakes={LakeList}/>,
document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
