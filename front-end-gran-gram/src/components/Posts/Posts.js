import React from 'react'
import { useSelector } from 'react-redux'
import "../../stylesheets/cardbox.css"
import Post from './Post/Post.js'
import image from '../../images/elderly-lady-on-computer.jpeg'
// import { getPosts } from '../../actions/posts.js'
// import { useDispatch } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
// import { fetchPosts } from '../../api'

const Posts = () => {

    // const [allPosts, setPosts] = useState([])


    // useEffect(() => {
    //     getAllPosts = async () => {
    //         let data = await fetchPosts()
    //         setPosts(data)
    //     }
    //     getAllPosts()
    // })

    const posts = useSelector((state) => state.posts)

    console.log(posts)
    if (!posts.length) {
        return (

            <Container>
                <Row>
                    <Col className="offset-lg-4">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img src={`${image}`} />
                        </Card>
                        <Spinner animation="border" className='offset-md-3' />
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <div className="">
                {
                    posts.map((post) => (
                        <div className="cardbox-item">
                            <Post post={post} />
                        </div>
                    ))
                }
            </div>
        )
    }


}

export default Posts
