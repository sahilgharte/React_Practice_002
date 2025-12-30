        // // Created an h1 element and added it to the root div
        //  const heading = document.createElement('h1');
        //  heading.innerHTML = 'Hello, World from JavaScript !';
        // //  Append the heading to the root div
        //  const root = document.getElementById('root');
        //  root.appendChild(heading);

        // Created element requires three arguments -> type(tag name), props (identifier), children/inner text 
        // const heading  = React.createElement('h1', 
        //     {id: 'title'}, 
        //     'Hello, World from React !'
        // );

        const nestedParent = React.createElement('div', {id : 'parent'},
            [React.createElement('div', {id: 'child'},
                [React.createElement('h1', {id: 'nested-child-1'}, 'I am h1 tag inside child div'),
                 React.createElement('h2', {id: 'nested-child-2'}, 'I am h2 tag inside child div')]
            ), "Parent Div Text"]
        );

        console.log(nestedParent)

// heading --> React Onject
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(nestedParent)

        // render -- takes the react object and converts it into the HTML element and adds it to the DOM