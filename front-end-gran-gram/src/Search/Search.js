import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { searchPosts } from '../actions/posts'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const Search = () => {
    const history = useHistory()

    const [searchData, setSearchData] = useState("")

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()

        dispatch(searchPosts(searchData))
    }

    const posts = useSelector((state) => state.posts)
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
