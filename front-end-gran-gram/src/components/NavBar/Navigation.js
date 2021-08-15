import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, useHistory } from 'react-router-dom'
import NewPost from '../Form/NewPost'
import Posts from '../Posts/Posts.js'

const Navigation = () => {
    const history = useHistory()
    const handleNewPost = (e) => {
        e.preventDefault()
        history.push('/post/new')
    }

    const handleHome = (e) => {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>GranGram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home" onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link href='/post/new' onClick={handleNewPost}>New Post</Nav.Link>
                    </Nav>
                    <Nav className="me-right">
                        <Nav.Link href="login" >Login</Nav.Link>
                        <Nav.Link href="signup" >Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>

                <Route path='/home' exact render={props => <Posts {...props} />} />
                <Route path='/post/new' exact render={props => <NewPost {...props} />} />
            </Switch>
        </div>
    )
}

export default Navigation
