// import logo from './logo.svg';
// import './App.css';

// import { useState } from "react"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// 1. BASIC REACT Written using "rf"

// export default function App() {
//   let name="sudhir";
//   return (
//     <div>My name is {name} </div>
//   )
// }

// 2. applying inline css 
// export default function App() {
//   let name="sudhir";
//   return (
//     <div style={{color:'red',fontSize:'78px'}}>My name is {name} </div>
//   )
// }

// 3.Importing other components

// import Header from "./components/Header"
// export default function App() {
//   return (
//     <>
//     <div>MY NAME IS RITESH</div>
//     <Header />
//     </>
//   )
// }

// 4. applying css directly into the components

// import Header from "./components/Header"
// export default function App() {
//   return (
//     <>
//     <div>MY NAME IS RITESH</div>
//     <Header style={{color:'green'}}/>
//     </>
//   )
// }

// to achiving this apply style in Header.jsx like
// export default function Header({style}) {
//   return (
//     <div style={style}>
//         I AM HEADER
//     </div>
//   )
// }


// 5. PROPS: stands for properties and it is used for passing data into different components

// import React from 'react'
// import Props from './components/Props'
// export default function App() {
//   return (
//     <div>
//       <Props name="ritesh" phone="1234"/>
//     </div>
//   )
// }

// other ways for this

// import React from 'react'
// import Props from './components/Props'
// export default function App() {
//   let person={
//     name:"ritesh",
//     home:'Lucknow'
//   }
//   return (
//     <div>
//       <Props person={person}/>
//     </div>
//   )
// }


// using destructuring 
// import React from 'react'
// import Props from './components/Props'
// export default function App() {
//   let person={
//     name:"ritesh",
//     home:'Lucknow'
//   }
//   return (
//     <div>
//       <Props person={person}/>
//     </div>
//   )
// }

// 6. HOW TO APPLY CHILDREN IN REACT 

// import React from 'react'
// import Children from './components/Children'
// export default function App() {
//   return (
//     <React.Fragment>
//       <div>I am from app.js</div>
//       <Children><span>JIO RITESH SIR</span></Children>
//     </React.Fragment>
//   )
// }


// 7. Importing fontawesome in React
// INSTALL THESE
// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/react-fontawesome

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// export default function App() {
//   return (
//     <div>App <FontAwesomeIcon icon={faFacebook} /></div>
//   )
// }

// 8. EVENT HANDLING IN REACT

// import React from 'react';

// export default function App() {
//   let name = 'Ritesh';

//   function display() {
//     alert("HOW ARE YOU RITESH");
//     window.confirm(`Are you fine, ${name}?`);
//   }

//   return (
//     <>
//       <div>Please click the button</div>
//       <button onClick={display}>Click ME</button>
//     </>
//   );
// }


// 9. HOW TO USE BOOTSTRAP IN REACT JS

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function App() {
//   return (
//     <Button className='danger'>CLICK HERE</Button>
//   )
// }



// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// export default function App() {
//   return (    
//   <Container className="bg-danger text-secondary p-3 fluid">

//       sdfhkj</Container>
//   )
// }


// 10. HOW TO USE useState IN REACT
// import React,{useState} from 'react'

// export default function App() {
//   let[val,setVal]=useState(1);
//   function num(){
//     setVal(45);
//   }
//   return (
//     <>
//     <div>{val}</div>
//     <button onClick={num}>CLIK ME</button>
//     </>
//   )
// }


import React,{useState} from 'react'

export default function App() {
  let[val,setVal]=useState(1);
  function num(){
    setVal(val+1);
    // a++;
  }
  return (
    <>
    <div>{val}</div>
    <button onClick={()=>{
      num();
    }}>CLIK ME</button>
    </>
  )
}





