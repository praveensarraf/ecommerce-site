import React from 'react'
import '../styles/login.css'

export default function Login() {
  return (
    <>

        <div className="containerBox">
            <input type="checkbox" id="check"/>

            <div className="login form">
                <header>Login</header>

                <form action="/login">
                    <input type="text" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <a href="/forgetPassword">Forgot password?</a>
                    <button className="button">Login</button>
                </form>

                <div className="signup">
                    <span className="signup">Don't have an account?<br/>
                        <label for="check">Signup</label>
                    </span>
                </div>
            </div>


            <div className="registration form">
                <header>Signup</header>

                <form action="/signup">
                    <input type="text" placeholder="Enter your email"/>
                    <input type="password" placeholder="Create a password"/>
                    <input type="password" placeholder="Confirm your password"/>
                    <button className="button">Signup</button>
                </form>

                <div className="signup">
                    <span className="signup">Already have an account?<br/>
                    <label for="check">Login</label>
                    </span>
                </div>
            </div>
        </div>
      
    </>
  )
}
