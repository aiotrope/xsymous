import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import moment from 'moment'
import Image from 'react-bootstrap/Image'
//import { FaHourglassStart } from 'react-icons/fa6'
//import { FaEdit } from 'react-icons/fa'

const List = ({ post }) => {
  //console.log(post)
  return (
    <>
      <Row>
        <Col>
          <Link to={`/snippet/${post?.id}`} className="post-title">
            {post?.title}
          </Link>
          <br />
          <small>{post?.description}</small>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {post?.tags.map((tag, indx) => (
            <Badge key={indx} bg="info">
              {tag}
            </Badge>
          ))}
        </Col>
      </Row>
      <Row className="justify-content-md-end">
        <Col sm={5} className="align-self-end">
          <Link to={`/user/${post?.user?.id}`}>{post?.user?.username}</Link>{' '}
          <Link to={`/user/${post?.user?.id}`}>
            <Image
              src={post?.user?.avatar}
              alt={`Profile photo of ${post?.user?.username}`}
              rounded
              height={20}
              width={20}
            />
          </Link>{' '}
          <small>snippet {moment(post?.createdAt, 'YYYYMMDD').fromNow()}</small>
        </Col>
      </Row>
      <Row>
        <Col>
        <small><Link to="/">Add a comment</Link></small>
        </Col>
      </Row>
    </>
  )
}

export default List
