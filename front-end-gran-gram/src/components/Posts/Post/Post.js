import React, { useState } from 'react'
import { likePost, deletePost } from '../../../actions/posts'
import { useDispatch } from 'react-redux'

import Smile from "../../../images/yellow-smile.JPG"

import "../../../stylesheets/cardbox.css"
import { Image, Button, Container, Row, Col } from 'react-bootstrap'

// import Dropdown from 'react-bootstrap/Dropdown'


const Post = (props) => {

    let [cookieIcon, setCookieIcon] = ''
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch()

    if (props.post.cookieCount.includes(user.result._id)) {
        [cookieIcon, setCookieIcon] = useState('fas fa-cookie-bite')
    } else {
        [cookieIcon, setCookieIcon] = useState('fas fa-cookie')
    }

    const handleCookie = () => {

        if (props.post.cookieCount.includes(user.result._id)) {
            setCookieIcon('fas fa-cookie')
        } else {
            setCookieIcon('fas fa-cookie-bite')
        }
    }



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
                    <Button variant="light" disabled={user === null || !user.result} onClick={() => {
                        handleCookie()
                        dispatch(likePost(props.post._id))
                    }}><i className={cookieIcon}></i></Button>
                    <span>  {props.post.cookieCount.length}</span>

                    {(user !== null) && (user.result.googleId === props.post.creator || user.result._id === props.post.creator) && (
                        <div className="delete-button">
                            <Button variant="danger" size="md" onClick={() => dispatch(deletePost(props.post._id))}>Delete</Button>
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
