import React from 'react';
import ReactDOM from 'react-dom';

// const element = (
//     <div>
//         <h1>welcome to react....</h1>
//         <h2>welcome to react....</h2>
//     </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

// const element = React.createElement("h1", null, 'Hello World');
// ReactDOM.render(element, document.getElementById("root"));
// function Employee(data) {
//     return <div><p>Name : {data.name}</p>
//         <p>Salary : {data.salary}</p></div>;
// }
// const element = <Employee name="Sara" salary="12345" />;
// const Employee = (data) => {
//     return <div><p>Name : {data.name}</p>
//         <p>Salary : {data.salary}</p></div>;
// }
//const element = <Employee name="Sara" salary="12345" />
const Employee = (data) => {
    return (<div><p>Name : {data.name}</p>
        <p>Salary : {data.salary}</p>
        <Department dept={data.dept} head={data.head} />
    </div>);
}

const Department = (deptInfo) => {
    return <div><p>Dept Name is : <b>{deptInfo.dept}</b></p>
        <p>Dept Head is : <b>{deptInfo.head}</b></p>
    </div>;
}

const element = <Employee name="Sara" salary="12345" dept="Test" head="Head" />;
ReactDOM.render(element, document.getElementById("root"));