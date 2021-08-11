import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewPost = () => {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Granny Photo</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" placeholder="Text for Post" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control type="text" placeholder="Tags" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewPost
