import React, { useState } from 'react'
import Input from './Input'
import '../../stylesheets/cardbox.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'

const Auth = () => {

    const isSignup = true

    const handleChange = () => {

    }

    return (
        <div>
            <Container>
                <Form>
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

                    <div className="center-element">

                        <Button type="submit">
                            {isSignup ? "Sign Up" : "LogIn"}
                        </Button>

                    </div>

                </Form>
            </Container>
        </div >
    )
}

export default Auth
