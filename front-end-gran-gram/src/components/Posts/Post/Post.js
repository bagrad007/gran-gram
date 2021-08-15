import React from 'react'
import "../../../stylesheets/cardbox.css"
import Smile from "../../../images/yellow-smile.JPG"

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Post = (props) => {
    console.log(props)
    return (

        <Container className="post-container">
            <Row>
                <Col lg={6} className="shadow-lg bg-white offset-lg-3">
                    <div className="cardbox-heading">
                        <div className="dropdown float-right">
                            <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                                <em className="fa fa-ellipsis-h"></em>
                            </button>
                            <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu">
                                <a className="dropdown-item">Delete Post</a>
                            </div>
                        </div>
                        <div className="media m-0">
                            <div className="d-flex mr-3">
                                <a href=""><img className="img-fluid rounded-circle" src={`${Smile}`} alt="User" /></a>
                            </div>
                            <div className="media-body">
                                <p className="m-0">{props.post.creator} name</p>
                                <small><span><i className="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
                                <small><span><i className="icon ion-md-time"></i> {props.post.createdAt}</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="cardbox-image">
                        <Image src={`${props.post.selectedFile}`} fluid />
                    </div>
                    <div>
                        {props.post.text}
                    </div>
                    <Button variant="light"><i class="fas fa-cookie-bite"></i></Button>
                    <span>  {props.post.cookieCount}</span>
                    <div>
                    </div>


                    <div>
                        {props.post.tags.map((tag) => `#${tag} `)}
                    </div>
                </Col>
            </Row>
        </Container >

    )
}

export default Post
