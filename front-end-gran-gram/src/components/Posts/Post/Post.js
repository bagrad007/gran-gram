import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Post = (props) => {
    console.log(props)
    return (
        <div>
            <div className="cardbox-heading">
                <div className="media m-0">
                    <div className="d-flex mr-3">
                        <a href=""><img className="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User" /></a>
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
            <div>
                <Button variant="light"><i class="fas fa-cookie-bite"></i></Button>
                <span>  {props.post.cookieCount}</span>
            </div>


            <div>
                {props.post.tags.map((tag) => `#${tag} `)}
            </div>


        </div>

    )
}

export default Post
