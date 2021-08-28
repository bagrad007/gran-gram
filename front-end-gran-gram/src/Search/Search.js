import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { searchPosts } from '../actions/posts'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const Search = (query) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [hasMore, setHasMore] = useState(false)
    const [searchData, setSearchData] = useState("")
    const [pageNumber, setPageNumber] = useState(1)

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        setPageNumber(1)
        dispatch(searchPosts(searchData))
    }


    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'http://localhost:5000/search/:tag',
            params: { tag: query },
        }).then(res => {
            res.data
        }).catch(e => {
            if (axios.isCancel(e)) return
        })

    }, [query])


    return (
        <Container>
            <Row>
                <Col >
                    <Form onSubmit={handleSearch} >

                        <Form.Control placeholder="Search by a Single Tag" onChange={(e) => setSearchData(e.target.value)} />

                        <Button type="submit" variant="success">Go</Button>
                    </Form>
                </Col>

            </Row>

        </Container>
    )
}

export default Search
