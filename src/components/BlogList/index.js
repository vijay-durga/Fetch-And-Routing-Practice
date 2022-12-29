import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getDetailsOfBlogList()
  }

  getDetailsOfBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachBlogListItem => ({
      id: eachBlogListItem.id,
      title: eachBlogListItem.title,
      author: eachBlogListItem.author,
      avatarUrl: eachBlogListItem.avatar_url,
      imageUrl: eachBlogListItem.image_url,
      topic: eachBlogListItem.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return isLoading ? (
      <div testid="Loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))
    )
  }
}

export default BlogList
