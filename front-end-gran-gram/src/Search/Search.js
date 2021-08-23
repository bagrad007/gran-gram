import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label'

const Search = () => {

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Submitted search")
    }


    return (
        <Container>
            <Row>


                <Col >
                    <Form onSubmit={handleSearch}>
                        <FloatingLabel label="Search by Tag" id="search-bar" />
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default Search
