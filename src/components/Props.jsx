// import React from 'react'

// export default function Props(props) {
//   return (
//     <div>My name is {props.name} and my phone number is {props.phone}</div>
//   )
// }



// for other ways
// import React from 'react'

// export default function Props(props) {
//   return (
//     <div>My name is {props.person.name} and my phone number is {props.person.home}</div>
//   )
// }



//using destructuring 

import React from 'react'
import './com.css';
export default function Props(props) {
    let {name,home}=props.person;
  return (
    <div className='pro'>My name is {name} and my phone number is {home}</div>
  )
}


