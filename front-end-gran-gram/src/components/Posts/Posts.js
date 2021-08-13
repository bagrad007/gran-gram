import React from 'react'
import { useSelector } from 'react-redux'
import "../../stylesheets/cardbox.css"
import Post from './Post/Post.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    if (!posts.length) {
        return (
            <Container>
                <Row>
                    <Col className="offset-lg-4">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img src="https://c8.alamy.com/comp/A5YY44/elderly-lady-isolating-covid-19-computer-internet-senior-old-age-lady-A5YY44.jpg" />
                        </Card>
                        <Spinner animation="border" className='offset-sm-3' />
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
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
    }


}

export default Posts
