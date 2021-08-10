import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, useHistory } from 'react-router-dom'

const Navbar = () => {
    const history = useHistory()


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home" onClick={handleHome}>Watch Next</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/favorites" onClick={handleList}>Favorites</Nav.Link>
                        <Nav.Link href="/search" onClick={handleSearch}>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path='/home' exact render={props => <Home {...props} />} />
                <Route path='/favorites' exact render={props => <Favorites {...props} />} />
                <Route path='/search' exact render={props => <Search {...props} />} />
            </Switch>
        </div>
    )
}

export default Navbar
