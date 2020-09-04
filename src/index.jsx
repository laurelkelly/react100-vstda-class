import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
    // { 
    //     id: 'todo-0',
    //     name: 'Eat',
    //     completed: true,
    //     priority: 2
    // },
    // { 
    //     id: 'todo-1',
    //     name: 'Sleep',
    //     completed: false,
    //     priority: 3
    // },
    // { 
    //     id: 'todo-2',
    //     name: 'Repeat',
    //     completed: false,
    //     priority: 4
    // }
]

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));
