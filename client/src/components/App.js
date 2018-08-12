import React, { Component } from 'react';
import callApi from '../utils/callApi';
import Banner from './Banner';
import NavBar from './NavBar';
import Posts from './Posts';
import SidePanel from './SidePanel';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      response: { posts: [] }
    };
  }
  componentDidMount() {
    callApi('posts')
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }
  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <div className="container">
          <header>
            <NavBar />
          </header>
          <main role="main">
            <div className="col-12" style={{paddingLeft: '0', paddingRight: '0'}}>
              <div className="row">
                <Banner />
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <Posts posts={response} />
                <SidePanel posts={response} />
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
