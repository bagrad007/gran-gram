import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post.js'
import Search from '../../Search/Search.js'

import image from '../../images/elderly-lady-on-computer.jpeg'


import "../../stylesheets/cardbox.css"
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap'



const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)


    if (posts === null) {
        return (

            <Container className='center-element'>
                <Row>
                    <Col>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img src={`${image}`} />
                        </Card>
                        <Spinner animation="border" className='' />
                    </Col>
                </Row>
            </Container>
        )
    } else if (posts.length === 0) {
        return (
            <div>
                <br />
                <Search className='center-element' />
                <Container className='center-element'>
                    <Row>
                        <Col>
                            <h2>Sorry dear, no posts to be found</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div>
                <br />
                <Search className='center-element' />
                {
                    posts.map((post) => (
                        <div className="cardbox-item" key={post._id}>
                            <Post post={post} />
                        </div>
                    ))
                }

            </div>
        )
    }


}

export default Posts
