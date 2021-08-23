import React from 'react'
import { useSelector } from 'react-redux'
import "../../stylesheets/cardbox.css"
import Post from './Post/Post.js'
import image from '../../images/elderly-lady-on-computer.jpeg'
import Search from '../../Search/Search.js'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

const Posts = (props) => {
    const posts = useSelector((state) => state.posts)

    if (!posts.length) {
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
