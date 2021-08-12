import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts.js'

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
        <div className="container">
            <Form onSubmit={handleSubmit} autoComplete="off">
                <div className={"mb-3"}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Form.Group className="mb-2" controlId="formTextField" value={postData.text} onChange={(e) => setPostData({ ...postData, text: e.target.value })}>
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Text for Post" />
                </Form.Group>

                <Form.Group className="mb-3" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>
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
