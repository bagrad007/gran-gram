import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../actions/search'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const Search = () => {

    const [searchData, setSearchData] = useState("")

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchData)
        dispatch(search(searchData))
    }


    return (
        <Container>
            <Row>
                <Col >
                    <Form onSubmit={handleSearch}>


                        <Form.Control placeholder="Search by a Single Tag" onChange={(e) => setSearchData(e.target.value)} />

                        <Button type="submit" variant="success">Go</Button>
                    </Form>
                </Col>

            </Row>

        </Container>
    )
}

export default Search
