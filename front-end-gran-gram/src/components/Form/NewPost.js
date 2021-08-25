import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts.js'
import { useHistory } from 'react-router'


import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'

import FileBase from 'react-file-base64'

const NewPost = () => {


    const handleTagInput = (tags) => {
        let newTags = tags.replace('#', "")
        newTags.toLowerCase().split(',')

        return newTags
    }

    const history = useHistory()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const [postData, setPostData] = useState({
        selectedFile: "",
        text: "",
        tags: "",
        creator: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({ ...postData, name: user.result.name }))
        history.push('/')
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
                <Form onSubmit={handleSubmit} autoComplete="off" className="createPostForm needs-validation" novalidate>
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
