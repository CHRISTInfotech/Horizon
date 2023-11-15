
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer bg-dark mt-5">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a className="text-white"
                  href="http://christinfotech.org/"
                  target="_blank"
                >
                  CHRIST InfoTech
                </a>
              </li>
              <li>
                <a className="text-white"
                  href="https://lavasa.christuniversity.in/"
                  target="_blank"
                >
                  Christ University
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright text-white">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by <a className="text-white"
                  href="http://christinfotech.org/"
                  target="_blank"
                >CHRIST InfoTech</a> 
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
