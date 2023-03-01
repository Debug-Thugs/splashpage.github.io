import React from 'react';

const Login=(props)=>{

    const {email,setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError}=props;

    return(
        <section className='login'>
            <div className='loginContainer'>
                <h1><center>Welcome to BMTC</center></h1><br/><br/>
                <h2>Kindly enter your details</h2>
                <label>Username</label>
                <input type="text" 
                //outoFocus 
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" 
                //outoFocus 
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>New here? We got you covered!!<span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                        
                    )}
                </div>
            </div>   
        </section>
    )
}

export default Login;