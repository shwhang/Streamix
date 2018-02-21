import React from 'react';

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
            <div className="contact-img github-img"></div>
            <p className="contact-detail">Github</p>
          </li>

          <li>
            <div className="contact-img portfolio-img"></div>
            <p className="contact-detail">More Work</p>
          </li>

          <li>
            <div className="contact-img linkedin-img"></div>
            <p className="contact-detail">LinkedIn</p>
          </li>

          <li>
            <div className="contact-img email-img"></div>
            <p className="contact-detail">Email</p>
          </li>
        </ul>

        <p className="copyright-blurb">Built By Sally Whang for Educational Purposes</p>
      </footer>
    )
  }
}

export default Footer;
