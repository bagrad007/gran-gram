import React from 'react'
import { useHistory } from 'react-router-dom'

import BrandLogo from '../../images/GranGram.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navigation = () => {

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

    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><img src={BrandLogo} alt='Brand' height="50" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link href='/post/new' onClick={handleNewPost}>Create Post</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" onClick={handleLogin} >Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Navigation
