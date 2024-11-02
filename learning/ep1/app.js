// const heading = React.createElement("h1",{},"Hello From the React!");    // {} in curly brace we give attributes
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello From the React!"
);

// console.log(heading); // so what is this heading? it is a object of js where props contains the attributes and type contains the type of element and key is null

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* 
if we want to create a nested html element then let see how can we do that]

<div class="parent">
    <div class="child">
        <h1>Hii from nested element </h1>
        <h2>Hii from nested element </h2>
    </div>
</div>

*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "Hii from the nested h1"), React.createElement("h2", {}, "Hii from the nested h2")]
    )
);

// if we are going to code like this then it will become very complex so we can use JSX for this
console.log(parent);
root.render(parent);