import React, { useState } from "react";
import { injectIntl, IntlShape } from 'react-intl'
// import { Button, FormGroup, FormControl } from "react-bootstrap";


// function Login(props) {
    
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function  handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <label>Email</label>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}/>
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large"> 
//           <label>Password</label>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"/>
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }

class LogIn extends React.Component{
  
  render(){
    const lenguaje = navigator.language
    const intl = this.props.intl
    const Saludos = intl.formatMessage({
      id: 'Saludos',
      defaultMessage: 'eh ta mal'
    })
    return(
      <div className= "App">
        <h1>{Saludos}</h1>
        <h1>{lenguaje}</h1>
      </div>
    )
  }
}

LogIn = injectIntl(LogIn)

export default LogIn