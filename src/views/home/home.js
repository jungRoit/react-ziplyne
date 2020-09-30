import React from 'react';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { logo, exit, desktop, diamond } from '../../config/image';

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
            <div className="logo-box">
              <div className="logo-wrapper">
                <img src={logo} className="img" />
              </div>
            </div>
            <div className="nav-box">
              <Navbar
                navList={[
                  'Product',
                  'Solution',
                  'Pricing',
                  'Customer Stories',
                  'Resources',
                ]}
              />
            </div>
            <div className="action-box">
              <Button
                text="Request a Demo"
                backgroundColor="#7246CE"
                color="#ffffff"
              />
              <div className="exit-wrapper">
                <img src={exit} className="img" />
              </div>
            </div>
          </div>
          <div className="cover-content">
            <div className="title-box">
              <h1 className="cover-cotent-title">Lorem Ipsum Dolar Lorem</h1>
              <h1 className="cover-cotent-title">Ipsum Dolar Amet.</h1>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-section-body">
            <div className="content-section-left">
              <div className="content-section-left-title">
                <div className="title-box">
                  <h1 className="cotent-left-title">
                    Lorem Ipsum Dolar Lorem
                  </h1>
                  <h1 className="cotent-left-title">Ipsum Dolar Amet.</h1>
                </div>
              </div>
              <div className="content-section-left-image">
                <div className="desktop-wrapper">
                {/* <img src={desktop} className="img" /> */}
                </div>
              </div>
            </div>
            <div className="content-section-right">
              <div className="diamond-box">
                <div className="paragraph-wrapper">
                <p className="paragraph"> Lorem Ipsum Dolar sit Amet.Lorem Ipsum Dolar sit Amet.</p>
                <p className="paragraph"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
              
                </div>
              </div>
            </div>
          </div>
          <div className="content-section-footer"></div>
        </div>
      </div>
    );
  }
}

export default Home;
