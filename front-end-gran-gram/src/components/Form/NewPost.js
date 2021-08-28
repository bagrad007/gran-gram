import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts.js'
import { useHistory } from 'react-router'

import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'

import FileBase from 'react-file-base64'

const NewPost = () => {

    const [validated, setValidated] = useState(false);

    const history = useHistory()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const [postData, setPostData] = useState({
        selectedFile: "",
        text: "",
        tags: "",
        creator: ""
    })


    const handleTagInput = (tags) => {
        let newTags = tags.replace('#', "")
        newTags.toLowerCase().split(',')
        console.log(newTags)
        return newTags
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            e.preventDefault()
            dispatch(createPost({ ...postData, name: user.result.name }))
            history.push('/')
        }
        setValidated(true);
    }

    if (user === null && !user.result.name) {
        return (
            <Container className="center.element">
                <Alert variant="warning">Please sign up if you want to make a post!</Alert>
            </Container>
        )
    }
    return (
        <Container className="form-container" fluid>

            <Row className="center-element">
                <Form onSubmit={handleSubmit} validated={validated} autoComplete="off" className="createPostForm needs-validation" noValidate>
                    {/* File selection */}
                    <Col>
                        <div className={"mb-3"}>
                            <Form.Group required>

                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                                />
                                <Form.Control.Feedback type="invalid">Please select a photo</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </Col>
                    {/* Text field */}
                    <Col>
                        <Form.Group className="mb-2" controlId="formTextField" value={postData.text} onChange={(e) => setPostData({ ...postData, text: e.target.value })}>
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                placeholder="Text for Post" />
                            <Form.Control.Feedback type="invalid">Please enter text</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    {/* Tag selection */}
                    <Col>
                        <Form.Group className="mb-3" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: handleTagInput(e.target.value) })}>
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
