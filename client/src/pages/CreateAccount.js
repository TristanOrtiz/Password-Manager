import { Navbar } from "../components/Navbar"
import React from "react"
import logo from '../image/logo-no-background.png'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
    return(
        <>
            <div class="split left">
                <div class="centered">
                    <img src={logo} alt='logo'/>
                </div>
            </div>

            <div class="split right">
                <div class="centered">
                    <div class="login-container">
                        <h1 class="h1-login">Register</h1>
                        <form>
                            <label for="name">Name</label>
                            <input autoComplete="off" type="text" id="name" name="name" placeholder="Enter your full name" required /> 

                            <label for="email">Email</label>
                            <input autoComplete="off" type="text" id="email" name="email" placeholder="Enter your email" required /> 

                            <label for="password">Password</label>
                            <input autoComplete="off" type="password" id="password" name="password" placeholder="Enter your password" required />

                            <label for="password1">Re-enter Password</label>
                            <input autoComplete="off" type="password" id="password1" name="password1" placeholder="Re-enter your password" required />

                            <Link class="button"> Register </Link>
                        </form>

                        <h3 class="h3-login"> Already have an account? </h3>
                        <Link class="not-reg" to="/home"> Login here </Link>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    )
}