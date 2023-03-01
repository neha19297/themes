// import {useForm} from 'react-hook-form';
// import {useState} from "react";
// import './App.css';
// import Login from "./Login"

// function App() {
//   const {register,handleSubmit,errors} =useForm();
// const [userInfo,setUserInfo]=useState();
//   const onSubmit =(data)=>{
//     setUserInfo(data);
//     console.log(data);
//   }
// console.log(userInfo);
  // return (
    // <div className='container'>
    //    <pre>{JSON.stringify(userInfo,undefined,2)}</pre>   
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <h1>Registration form</h1>
    //     <div className='ui divider'>
    //       <div className='ui form'>
    //         <div className='field'>
    //           <label>Username</label>
    //           <input type="text" name="username" placeholder='Username' ref={register({required:"username is required"})}></input>
    //         </div>
    //         {(errors===undefined)?null:(<p>{errors.username.message}</p>)}
    //         <div className='field'>
    //           <label>Email</label>
    //           <input type="email" name="email" placeholder='email' ref={register({required:" email is required"})}></input>
    //         </div>
    //         {/* <p>{errors.email.message}</p> */}
    //         <div className='field'>
    //           <label>Password</label>
    //           <input type="password" name="password" placeholder='password' ref={register({required:"password is required"})}></input>
    //         </div>
    //         {/* <p>{errors.password.message}</p> */}
    //         <button className="fluid ui button blue">Login</button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
//     <div className='ui container'>  
//       <Login/> 
//     </div>
//   );
// }

// export default App;






import { useState } from "react";
import "./App.css";
import Login from "./component/Login";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });








  const [img64 , setImg64] = useState('');
  const pic =async (e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const image64 =   await base64(file);
    setImg64(image64);
  }
  const base64 = (file)=>{
    return new Promise((resolve , reject)=>{

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
            resolve(fileReader.result);
        } 

        fileReader.onerror = (error)=> {
            reject(error);
        }

    })
}









  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <Login
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}





<div className="App" style={{backgroundImage : `url(${img64})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height : '40vh',
    width: '70%',
    backgroundSize: '50% 50%'}}>
    <input type="file" onChange={(e)=>pic(e)}/>
    <div style={{fontSize:'50px'}}></div>
    </div>


        <button>Submit</button>
      </form>
    </div>


  );
};

export default App;