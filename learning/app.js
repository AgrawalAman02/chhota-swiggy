import React from "react";
import ReactDOM from "react-dom/client";

// using JSX = Not HTML in JS but is HTML like syntax in JS

const jsxHeading = (<h1 id="heading" className="Head"> Hello From the jsx heading </h1>);  // if it is single line we dont need () but if it is multiline then we need to use ()
console.log(jsxHeading); // it is a object of js where props contains the attributes and type contains the type of element and key is null

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// REact component
// Class based component  - OLD way - nobody uses now
// functional component  - NEW - It is just a normal js function that returns JSX code - ALways name in capital letter 

const HeadingComponent = () =>{
    return <h1>Namaste React from component</h1>
};
// or we can use shorthand function if we are returning only  so we dont need to write return and {}

const HeadingComponent1 = () => <h1>Namaste React from component 1</h1>; 
// if it contains multiple line then we wrap it in () 
// we can even use shorthand for nested elements like above 

// now to render this react component we use </> so that babel can understand
root.render(<HeadingComponent/>);

// ! Component Composition - combining multiple components to create a new component
// we can use the component inside the component

// for eg
const ParentComponent = () => {
    return (
        <div>
            <HeadingComponent/>
            <HeadingComponent1/>
        </div>
    );
};

root.render(<ParentComponent/>);


// we can even write javasript inside component but with curly braces;
// let see 

const number = 1000;

const ParentComponent2 = () => {
    return (
        <div>
            {number}
            <h2>{number*3}{console.log(number)}</h2>
            <HeadingComponent/>
            <HeadingComponent1/>
            {HeadingComponent()}  // we can even call the function like this
        </div>
    );
};

root.render(<ParentComponent2/>);

// we can even insert react element like this - {react-element}
// we can even insert react element inside the react element or react component inside the react element
