import React, { useState } from 'react'
import Input from './Input'
import { useHistory } from 'react-router'
import '../../stylesheets/cardbox.css'
import { GoogleLogin } from 'react-google-login'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Auth = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [isSignup, setIsSignup] = useState(false)
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }


    const handleChange = () => {

    }

    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokenId;

        try {
            dispatch({ type: "AUTH", data: { result, token } })

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google login unsuccessful")
    }

    return (
        <div>
            <Container>
                <Form>
                    <div className="center-element google-login-button">
                        <GoogleLogin
                            clientId="811704621961-u81qgk35tl1sljagc8apa3g1jt6hvm45.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <GoogleButton
                                    onClick={renderProps.onClick}
                                />
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                    {
                        isSignup && (
                            <div>
                                <Input name="firstname" label="First Name" handleChange={handleChange} placeholder="First Name" autoFocus xs={6} />
                                <Input name="lastname" label="Last Name" handleChange={handleChange} placeholder="Last Name" xs={6} />
                            </div>
                        )
                    }
                    <Input name='email' label="Email Address" handleChange={handleChange} placeholder="Email" type="email" />
                    <Input name='password' label="Password" handleChange={handleChange} type="password" placeholder="Password" />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" placeholder="Confirm Password" />}

                    <div className="center-element d-grid gap-2">
                        <Button type="submit">
                            {isSignup ? "Sign Up" : "Login"}
                        </Button>
                    </div>

                    <div className="d-grid gap-2 center-element">
                        <Button variant="light" className="switch-button-for-signup-login" width="30px" onClick={switchMode}>
                            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
                        </Button>
                    </div>

                </Form>
            </Container>
        </div >
    )
}

export default Auth
