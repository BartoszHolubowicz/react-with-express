import React from 'react';
import './SidePanel.css';

class SidePanel extends React.Component {
  render() {
    const { posts } = this.props.posts;
    const renderPostLinks = posts.map(post => <li className="list-group-item" key={post._id}><a href={`./?postId=${post._id}`}>{`${post.createdAt}, ${post.title}`}</a></li>);
    return (
      <div className='SidePanel col-xs-0 col-lg-4'>
        <span className="h5">Archiwum</span>
        {posts.length > 0 ? <ul className="list-group list-group-flush">{renderPostLinks}</ul> : ""}
      </div>
    );
  }
}

export default SidePanel;