import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, useHistory } from 'react-router-dom'

const Navigation = () => {
    const history = useHistory()
    const handleNewPost = (e) => {
        e.preventDefault()
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
                        <Nav.Link href='/post' onClick={handleNewPost}>New Post</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>

                {/* <Route path='/home' exact render={props => <Home {...props} />} />
                <Route path='/new-post' exact render={props => <Search {...props} />} /> */}
            </Switch>
        </div>
    )
}

export default Navigation
