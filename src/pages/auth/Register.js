// import React from 'react';
// import { useState } from 'react';
// import Header from '../../components/header';
// import { auth } from "../../components/firebase";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [userName, setUserName]= useState('')
//   const [email, setEmail] = useState("");
//   const [pasword, setPassword] = useState("")

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const config = {
//       url: 'http://localhost:3000/register/complete',
//       handleCodeInApp: true,
//     };

//     await auth.sendSignInLinkToEmail(email, config);
//     toast.success(
//       `Email is sent to ${email}. Click the link to complete your registration.`
//     );
//     // save user email in local storage
//     window.localStorage.setItem("emailForRegistration", email);
//     // clear state
//     setEmail("");
//   };

//   const registerForm = () => (
//     <form onSubmit={handleSubmit}>

// {/* <label>UserName</label>
// <input type='text' placeholder='enter your Name' /> */}

//       <input
//         type="email"
//         className="form-control"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         autoFocus
//       />

//       <button type="submit" className="btn btn-raised">
//         Register
//       </button>
//     </form>
//   );

//   return (
//     <>
  
//     <Header/>
//     <div className="container p-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <h4>Register</h4>
//           {registerForm()}
//         </div>
//       </div>
//     </div>
  
//     </>
    
//   );
// };

// export default Register;
// ------------------------------------------------------------------------------------------------
import React from 'react'
import './Register.css'
import Header from '../../components/header'




const Register = () => {
  return (
<div>
<Header/>
<div className='register-container'>
<div className='register-container-header'>
  <h4>Register</h4>
  </div>

<label>UserName</label>
<input placeholder='Enter your name' required />
<label>Email Id</label>
<input  placeholder='Enter Your Email id'/>
<label>Password</label>
<input placeholder='Password '/>
<p>Agree Terms & conditions</p>
<button>Submit</button>
    </div>
</div>
  )
}

export default Register










