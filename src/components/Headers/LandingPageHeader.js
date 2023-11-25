import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/images/banner.png") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 style={{ fontWeight: "bold" }}>Kṣitija - HORIZON</h1>
            <h3 style={{ fontWeight: "bolder" }}>
              Harnessing Our Resources, Inspiring Zeal, Opening New Doors
            </h3>
            <h5 className="mt-3">
              Immerse yourself in an exclusive Executive Wellness Retreat
              meticulously curated amidst the breathtaking embrace of nature’s
              bounty, nestled within lush green valleys and mountain vistas. The
              retreat provides you with an ultimate experience where you relax
              and learn from the experts of industry. Get ready to unlock the
              future!
            </h5>
            <br />
            <Button className="btn-round" color="dark">
                  <a
                    href="#Registration"
                    className="text-decoration-none text-white"
                    
                  >
                    Registration
                  </a>
                </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
