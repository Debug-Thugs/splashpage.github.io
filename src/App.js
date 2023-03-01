import React, {useState, useEffect} from "react";
import {fire,db} from './fire';
import Login from './Login';
import Hero from './Hero';
import Fetch from './Fetch';
// import { db } from './fire';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import './App.css';

function App() {
const [user,setUser]=useState('');
const [email,setEmail]=useState('');
const [password, setPassword]=useState('');
const [emailError, setEmailError]=useState('');
const [passwordError, setPasswordError]=useState('');
const [hasAccount, setHasAccount]=useState(false);
const [isAdmin, setIsAdmin]=useState(false);
// const navigate = useNavigate();


const clearInputs=()=>{
  setEmail('');
  setPassword('');
}

const clearErrors=()=>{
  setEmailError('');
  setPasswordError('');
}

const handleLogin=()=>{
  clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(err =>{
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
          setEmailError(err.message);
          break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
    }
  });
};

const handleSignUp=()=>{
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err =>{
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
          setEmailError(err.message);
          break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;
    }
  });
};

const handleLogout=()=>{
  fire.auth().signOut();
};

const authListener=()=>{
  fire.auth().onAuthStateChanged(user =>{
    if(user){
      clearInputs();
      setUser(user);
      // const isAdmin = user && user.email === 'srishti@gmail.com';
      setIsAdmin(user && user.email === 'srishti@gmail.com');

      // If the user is an admin, redirect them to the admin dashboard
      // if (isAdmin) {
      //   navigate.push('/Fetch');
      // } else {
      //   alert('You are not authorized to access this page');
      // }
    } 
  

    else{
      setUser('');
    }
  });
};

useEffect(()=>{
  authListener();
},[]);


  return (
    <div className="App">
      {user ? (
        <Router>
        {/* <div>
        <button onClick={() => navigate(-1)}>go back</button>
          <nav>
            <ul>
              <li>
                <Link to="/Fetch">Fetch</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
            {/* <Route path="/Fetch" element={<Fetch isAdmin={isAdmin}/>}>
              
            </Route> */}
            <Route path="/" element={<Fetch isAdmin={isAdmin}/>}>
            
            </Route>
          </Routes>
        {/* </div> */}
      </Router>
      ) :(
        <Login email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
      )
      }
      
        
    </div>
  );
};

export default App;
