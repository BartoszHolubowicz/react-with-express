import React from 'react';
import Post from './Post';
import './Posts.css';

class Posts extends React.Component {
  
  render() {
    const { posts } = this.props.posts;
    return (
      <div className="Posts col-lg-8">
        {posts.map(post => <Post createdAt={post.createdAt} title={post.title} message={post.message} key={post._id} />)}
      </div>
    );
  }
}

export default Posts;