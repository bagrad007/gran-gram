import React from 'react'
import { likePost, deletePost } from '../../../actions/posts'
import { useDispatch } from 'react-redux'

import Smile from "../../../images/yellow-smile.JPG"

import "../../../stylesheets/cardbox.css"
import { Image, Button, Container, Row, Col } from 'react-bootstrap'

// import Dropdown from 'react-bootstrap/Dropdown'


const Post = (props) => {
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('profile'));

    return (

        <Container className="post-container">
            <Row>
                <Col lg={6} className="shadow-lg bg-white offset-lg-3 cardbox-column">
                    <div className="cardbox-heading">
                        <div className="dropdown float-right">
                            <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                                <em className="fa fa-ellipsis-h"></em>
                            </button>

                        </div>
                        <div className="media m-0">
                            <div className="d-flex mr-3">
                                <a href=""><img className="img-fluid rounded-circle" src={`${Smile}`} alt="User" /></a>
                            </div>
                            <div className="media-body">
                                <p className="m-0">{props.post.name}</p>
                                <small><span><i className="icon ion-md-time"></i> {props.post.createdAt}</span></small>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox-image">
                        <Image src={`${props.post.selectedFile}`} fluid />
                    </div>
                    <div >
                        {props.post.text}
                    </div>
                    <Button variant="light" disabled={user === null || !user.result} onClick={() => dispatch(likePost(props.post._id))}><i className="fas fa-cookie-bite"></i></Button>
                    <span>  {props.post.cookieCount.length}</span>

                    {(user !== null) && (user.result.googleId === props.post.creator || user.result._id === props.post.creator) && (
                        <div className="delete-button">
                            <Button variant="danger" size="sm" onClick={() => dispatch(deletePost(props.post._id))}>Delete</Button>
                        </div>
                    )}


                    <div>
                        {props.post.tags.map((tag) => `#${tag} `)}
                    </div>
                </Col>
            </Row>
        </Container >

    )
}

export default Post
