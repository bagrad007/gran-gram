import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label'

const Search = () => {

    const dispatch = useDispatch()

    const [searchData, setSearchData] = useState({
        query: ""
    })

    const handleSearch = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        dispatch(search(e.target.value))
        console.log("Submitted search")
    }


    return (
        <Container>
            <Row>
                <Col md>
                    <Form onSubmit={handleSearch}>
                        <Form.Group>
                            <FloatingLabel label="Search by a Single Tag" />

                        </Form.Group>
                        <Button variant="success">Go</Button>
                    </Form>
                </Col>

            </Row>

        </Container>
    )
}

export default Search
