import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { Highlighter } from '../misc/highlighter'

export const Created = ({ post }) => {
  console.log(post)
  return (
    <div>
      <h3>Latest snippet post created</h3>
      <Row className="my-3">
        <Col>
          <p>
            Title:{' '}
            <Link to={`/snippet/${post?.id}`} className="post-title">
              {post?.title}
            </Link>
          </p>
          <p>Description: {post?.description}</p>
          <p>
            Tags:{' '}
            {post?.tags?.map((tag, indx) => (
              <Badge key={indx} className="mx-1">
                {tag}
              </Badge>
            ))}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Posted by:{' '}
            <Link to={`/user/${post?.user?.id}`} className="text-primary">
              {post?.user?.username}
            </Link>
          </p>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} components={Highlighter}>
            {post?.entry}
          </ReactMarkdown>
        </Col>
      </Row>
    </div>
  )
}
