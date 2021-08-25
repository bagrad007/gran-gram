import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import BrandLogo from '../../images/GranGram.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navigation = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        if (user === null) {
            return
        }

        const token = user.token

        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const history = useHistory()

    const handleNewPost = (e) => {
        e.preventDefault()
        history.push('/post/new')
    }

    const handleHome = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const handleLogin = (e) => {
        e.preventDefault()
        history.push('/login')
    }

    const handleLogout = (e) => {
        dispatch({ type: "LOGOUT" })
        history.push('/')

        setUser(null)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><img src={BrandLogo} alt='Brand' height="50" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {user !== null ? (
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
                            <Nav.Link href='/post/new' onClick={handleNewPost}>Create Post</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="/logout" onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                ) : (
                    <Navbar.Collapse>
                        <Nav className="me-auto">

                            <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="/login" onClick={handleLogin} >Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                )}
            </Navbar>

        </div>
    )
}

export default Navigation
