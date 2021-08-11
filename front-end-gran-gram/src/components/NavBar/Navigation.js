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
        history.push('/newpost')
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
                        <Nav.Link href='/newpost' onClick={handleNewPost}>New Post</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>

                <Route path='/home' exact render={props => <Posts {...props} />} />
                <Route path='/newpost' exact render={props => <NewPost {...props} />} />
            </Switch>
        </div>
    )
}

export default Navigation
