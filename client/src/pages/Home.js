import { Navbar } from "../components/Navbar"
import { Link } from 'react-router-dom'
import '../components/Main.css'
import '../components/LoginForm.css'
import logo from '../image/logo-no-background.png'


export default function Home() {
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
                        <h1 class="h1-login">Welcome</h1>
                        <form>
                            <label for="email">Email</label>
                            <input autoComplete="off" type="text" id="email" name="email" placeholder="Enter your email" required /> 

                            <label for="password">Password</label>
                            <input autoComplete="off" type="password" id="password" name="password" placeholder="Enter your password" required />

                            <Link class="button" to="/userHomepage"> Login </Link>
                        </form>

                        <h3 class="h3-login">Not a registered user?</h3>
                        <Link class="not-reg" to="/createAccount"> Create an Account </Link>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    )
}