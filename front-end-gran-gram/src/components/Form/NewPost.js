import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts.js'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import FileBase from 'react-file-base64'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'

const NewPost = () => {

    const [postData, setPostData] = useState({
        selectedFile: "",
        text: "",
        tags: "",
        creator: ""
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(createPost(postData))
    }

    return (
        <Container className="form-container" fluid>

            <Row className="center-element">
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Col>
                        <div className={"mb-3"}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                            />
                        </div>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formTextField" value={postData.text} onChange={(e) => setPostData({ ...postData, text: e.target.value })}>
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Text for Post" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="text" placeholder="Tags" />
                        </Form.Group>
                    </Col>


                    <Col className="center-element">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>


                </Form>
            </Row>
        </Container>
    )
}

export default NewPost
