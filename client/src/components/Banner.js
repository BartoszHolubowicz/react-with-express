import React from 'react';
import BannerImage from '../images/banner.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div className="Banner col-12">
        <img className="img-fluid" src={BannerImage} alt="BartoBlog Banner" style={{backgroundSize: 'cover'}} />
      </div>
    );
  }
}

export default Banner;