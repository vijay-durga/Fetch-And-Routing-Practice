import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, avatarUrl, title, topic, author} = eachBlog

  return (
    <Link to={`/blogs/${id}`} className="link-cont">
      <div className="bg-cont">
        <div>
          <img src={imageUrl} alt="imageUrl" className="image" />
        </div>

        <div>
          <p className="para">{topic}</p>
          <h1 className="head">{title}</h1>
          <div className="aut-img-cont">
            <img src={avatarUrl} alt="avatar" className="avatarUrl" />
            <p className="para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
