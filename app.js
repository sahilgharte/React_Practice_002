import React from 'react';
import ReactDOM from 'react-dom/client';

const nestedParent = React.createElement('div', {id : 'parent'},
    [
        React.createElement('div', {id: 'child', key: 'child-1'}, // Optional key here if this array grows
        [
            // ⬇️ FIXED: Added unique keys here
            React.createElement('h1', {id: 'nested-child-1', key: 'h1-tag'}, 'I am h1 tag inside child div'),
            React.createElement('h2', {id: 'nested-child-2', key: 'h2-tag'}, 'I am h2 tag inside child div')
        ]
    ), "Parent Div Text"]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedParent);