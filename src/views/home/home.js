import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="cover-section">
          <div className="cover-header">header</div>
          <div className="cover-content">
            <div className="title-box">
              <h1 className="cover-cotent-title">Lorem Ipsum Dolar Lorem</h1>
              <h1 className="cover-cotent-title">Ipsum Dolar Amet.</h1>
            </div>
          </div>
        </div>
        <div className="content-section">
          <h1>Rest</h1>
        </div>
      </div>
    );
  }
}

export default Home;
