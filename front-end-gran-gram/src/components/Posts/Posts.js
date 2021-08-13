import React from 'react'
import { useSelector } from 'react-redux'
import "../../stylesheets/cardbox.css"
import Post from './Post/Post.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        !posts.length ? <Spinner /> : (
            <Container>
                <Row>
                    <Col lg={6} className="shadow-lg bg-white offset-lg-3">
                        {posts.map((post) => (
                            <div className="cardbox-item">
                                <Post post={post} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    )
}

export default Posts
