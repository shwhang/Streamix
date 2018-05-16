import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className="contact-blurb">
          <p>
            Scroll down to check out more work or contact me.
          </p>
        </div>

        <ul className="contact-section">
          <li>
            <a href="https://github.com/shwhang/Streamix" className="contact-link">
              <div className="contact-img github-img"></div>
              <p className="contact-detail">Github</p>
            </a>
          </li>

          <li>
            <a href="https://codename-sally.surge.sh" className="contact-link">
              <div className="contact-img portfolio-img"></div>
              <p className="contact-detail">More Work</p>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/sally-whang/" className="contact-link">
              <div className="contact-img linkedin-img"></div>
              <p className="contact-detail">LinkedIn</p>
            </a>
          </li>

          <li>
            <a href="mailto:wsaehee@gmail.com" className="contact-link">
              <div className="contact-img email-img"></div>
              <p className="contact-detail">Email</p>
            </a>
          </li>
        </ul>

        <p className="copyright-blurb">Built By Sally Whang for Educational Purposes</p>
      </footer>
    )
  }
}

export default Footer;
