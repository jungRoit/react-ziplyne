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
          <div className="cover-header">
              header
          </div>
          <div className="cover-content">
              content
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
