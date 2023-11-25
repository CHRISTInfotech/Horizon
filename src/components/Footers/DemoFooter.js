
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer bg-dark mt-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <nav className="footer-nav">
            <ul className="d-flex align-items-center">
              <li >
                <a className="text-white d-flex flex-column"
                  href="http://christinfotech.org/"
                  target="_blank"
                >
                   <img className="img-fluid" style={{width:"150px"}}
                        alt="..."
                        src={require("assets/img/horizon/CHRIST Infotech.png")}
                      />
                  
                  CHRIST InfoTech
                </a>
              </li>
              <li>
                <a className="text-white d-flex flex-column"
                  href="https://lavasa.christuniversity.in/"
                  target="_blank"
                >
                 <img
                   className="img-fluid" style={{width:"150px"}}
                        alt="..."
                        src={require("assets/img/horizon/Christ University Hindi_logo_2023-White.png")}
                      />
                  Christ University
                </a>
              </li>
              <li>
                <a className="text-white d-flex flex-column"
                  href="https://christuniversity.in/center/O/CONSULTING"
                  target="_blank"
                >
                 <img
                   className="img-fluid" style={{width:"150px"}}
                        alt="..."
                        src={require("assets/img/horizon/cc.png")}
                      />
                  Christ Consulting
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
