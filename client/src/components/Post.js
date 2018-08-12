import React from 'react';
import getMonthName from '../utils/getMonthName';
import ReactHTMLParser from 'react-html-parser';
import './Post.css';

class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }
  render() {
    const { title, message, createdAt } = this.props;
    const { isHidden } = this.state;
    const date = {
      year: createdAt.split('/')[0],
      month: createdAt.split('/')[1],
      day: createdAt.split('/')[2]
    };
    return (
      <div className="Post p-2 col-12 border border-light" style={{display: isHidden ? 'none' : 'inherit'}}>
        <div className="col-12">
          <h3>
            {title} <small className="text-muted">{`- ${getMonthName(date.month)} ${date.day}, ${date.year}`}</small>
          </h3>
        </div>
        <hr className="col-xs-12" />
        <div className="col-12">
          <span className="Post-message">{ReactHTMLParser(message)}</span>
        </div>
      </div>
    );
  }
}

export default Post;