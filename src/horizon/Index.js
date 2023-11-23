import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  CardTitle,
  // Form,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  TabContent,
  TabPane,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// core components

const items = [
  {
    src: require("assets/images/accomodation/1.JPG"),
  },
  {
    src: require("assets/images/accomodation/2.JPG"),
  },
  {
    src: require("assets/images/accomodation/3.JPG"),
  },
  {
    src: require("assets/images/accomodation/4.JPG"),
  },
  {
    src: require("assets/images/accomodation/5.JPG"),
  },
];

const items1 = [
  {
    src: require("assets/images/campus/1.JPG"),
  },
  {
    src: require("assets/images/campus/2.JPG"),
  },
  {
    src: require("assets/images/campus/3.jpg"),
  },
  {
    src: require("assets/images/campus/7.jpg"),
  },
  {
    src: require("assets/images/campus/5.JPG"),
  },
];

const items2 = [
  {
    src: require("assets/images/lavasa/1.jpg"),
  },
  {
    src: require("assets/images/lavasa/2.JPG"),
  },
  {
    src: require("assets/images/lavasa/14.JPG"),
  },
  {
    src: require("assets/images/lavasa/16.jpg"),
  },
  {
    src: require("assets/images/lavasa/11.jpg"),
  },
];

function MainIndex() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="about">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                {/* <h2 className="title"></h2> */}
                <h5 className="">
                  HORIZON develops a collective partnership with fellow
                  participants and expert facilitators to co-create
                  growth-oriented story-points.
                </h5>
                <h5>
                  This immersive program has been devised in active consultation
                  with industry stalwarts and is designed to provoke credible
                  conversations and transform theory into creative action.
                </h5>
                <br />
                <Button className="btn-round" color="info">
                  <a
                    href={require("assets/docs/Final Lavasa Retreat workbook v0.pdf")}
                    className="text-decoration-none text-white"
                    download
                  >
                    See Details
                  </a>
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4
                      className="info-title mb-3"
                      style={{ fontWeight: "bolder" }}
                    >
                      What You Can Expect From This Program
                    </h4>
                    <ul className="text-left">
                      <li>
                        <p className="text-muted">
                          Examine your current leadership influence in
                          actualising change.
                        </p>
                      </li>
                      <li>
                        {" "}
                        <p className="text-muted">
                          Explore and leverage the psychological mechanics of
                          leading agile teams.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Practise the yoga of ‘Futures Thinking’ through
                          reflexive action.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Reimagining empathetic sustainability for profitable
                          enterprise.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4
                      className="info-title mb-3"
                      style={{ fontWeight: "bolder" }}
                    >
                      Methodology & Structure
                    </h4>
                    <ul className="text-left mt-2">
                      <li>
                        <p className="text-muted">
                          Discussions facilitated by Industry Stalwarts &
                          Subject Specialists.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Contemplative and reflexive exercises in concept
                          clarification and development.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Participatory Action Learning.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Learning by engaging directly with nature.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted">
                          Co-discovery and creation of a tool-kit for enterprise
                          application.
                        </p>
                      </li>
                    </ul>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              {/* <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col> */}
              {/* <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div
          className="section section-blue text-center"
          style={{ backgroundColor: "#0B3F64" }}
        >
          <Container>
            <Row className="text-white">
              <Col md={12}>
                <h2
                  className="text-right mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  CHRIST Lavasa Campus
                </h2>
                <p className="text-justify">
                  The Lavasa campus is nestled within the Sahyadri mountains. In
                  its quiet seclusion, the campus offers an ideal environment in
                  the midst of a most pristine natural setting. CHRIST Lavasa
                  promotes a culture that embodies the philosophy of ‘excellence
                  and service’ with state-of-the-art infrastructure, quality
                  faculty and a platform where learners can spread their wings
                  and discover their true potential. Modelled after Italy’s
                  Portofino, Lavasa is unique in many ways. The promenade and
                  the various eateries and outlets it has to offer provide the
                  students with a chance to indulge in a distinct experience
                  that is far removed from the crowd and buzz of city life.
                </p>
              </Col>
              <Col md={12}>
                <h2
                  className="text-right mt-5 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  Centre for Experiential Learning
                </h2>
                <p className="text-justify">
                  It is the contemplative nature of being immersed in “Doing”
                  which sometimes leads to great insights. It is said that Art
                  is the biggest Hope and Art is Experiential. Anything related
                  to experiential or expressive arts is therapeutic and it
                  contributes to building resilience too. At CHRIST (Deemed to
                  be University), Lavasa, Pune, where we always strive for
                  excellence in a holistic manner, having a Centre whose prime
                  objective is to provide an environment to experience and learn
                  through a platform for self-expression only adds more value.
                  The Centre since its inception in November 2022, has organised
                  learning programs through workshops, training and expert
                  talks.
                </p>
              </Col>
              <Col md={12}>
                <h2
                  className="text-right mt-5 mb-3"
                  style={{ fontWeight: "bolder" }}
                >
                  CHRIST Consulting
                </h2>
                <p className="text-justify">
                  CHRIST Consulting is the Consultancy wing of CHRIST (Deemed to
                  be University) and is a results-driven business consultancy
                  centre. We design and deliver exceptional solutions to achieve
                  organisational objectives. We are a group of subject matter
                  experts who pool in resources from our respective domains to
                  help in problem-solving and successful goal achievement.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-neutral text-center" id="Inspirational">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto mb-3" md="12">
                <h2 style={{ fontWeight: "bold" }}>
                  Program Inspirational Themes
                </h2>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center mb-5">
              <Col md={8}>
                <h3
                  className="text-left text-primary mb-2"
                  style={{ fontWeight: "bolder" }}
                >
                  VAYU
                </h3>
                <p className="text-justify">
                  Drawing on the concept of ‘breath’, this introductory module
                  explores the creation of a deeper appreciation for our
                  'feeling' and 'listening' approaches to our inner and outer
                  realities. It introduces us to the practice of unlearning. We
                  also examine how to disambiguate personal narratives and
                  reestablish purposeful alignment.
                </p>
              </Col>
              <Col md={4}>
                <img
                  className="img-fluid img-rounded img-responsive"
                  style={{
                    maxHeight: "197px",
                    minHeight: "197px",
                    minWidth: "350px",
                  }}
                  alt="..."
                  src={require("assets/img/horizon/vayu.png")}
                />
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center mb-5">
              <Col md={4}>
                <img
                  className="img-fluid img-rounded img-responsive"
                  style={{
                    maxHeight: "197px",
                    minHeight: "197px",
                    minWidth: "350px",
                  }}
                  alt="..."
                  src={require("assets/img/horizon/agni1.png")}
                />
              </Col>

              <Col md={8}>
                <h3
                  className="text-right text-primary mb-2"
                  style={{ fontWeight: "bolder" }}
                >
                  AGNI
                </h3>
                <p className="text-justify">
                  ‘Fire’, the energising principle, provides us with a starting
                  point to examine the practice of Agility and the mindset which
                  enables this creative principle to come alive. We mindfully
                  reexamine our neural pathways which empowers us to apply a
                  design oriented approach to the Art of Agility in enterprise
                  and social transformation.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col md={8}>
                <h3
                  className="text-left text-primary mb-2"
                  style={{ fontWeight: "bolder" }}
                >
                  BHOOMI
                </h3>
                <p className="text-justify">
                  We use the ‘mother’ principle to examine the concept of time
                  and how we emerge from our history to the present and
                  fertilise the architecture of our future. Moving away from a
                  reactive and predictable scenario we learn what it means to
                  reimagine and co-create excellence through service.
                </p>
              </Col>
              <Col md={4}>
                <img
                  className="img-fluid img-rounded img-responsive"
                  alt="..."
                  style={{
                    maxHeight: "197px",
                    minHeight: "197px",
                    minWidth: "350px",
                  }}
                  src={require("assets/img/horizon/bhoomi1.png")}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-blue text-center"
          id="speakers"
          style={{ backgroundColor: "#0B3F64" }}
        >
          <Container>
            <h2
              className="title"
              style={{ color: "#ffffff", fontWeight: "bold" }}
            >
              Key Speaker Profiles
            </h2>
            <Row className="justify-content-center">
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/LijoThomas.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author ">
                        <CardTitle
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                          tag="h4"
                        >
                          Dr (Fr) Lijo Thomas
                        </CardTitle>
                        {/* <h6 className="card-category">
                          Director and Dean, Christ University, Pune, Lavasa,
                        </h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      He serves as the Director and Dean, Christ University,
                      Pune, Lavasa, India. He is the Founder/Director of DREAMS:
                      A community-university collaborative service-learning
                      project established in the USA, Germany and India. He is
                      also the Founder/Director of ‘Let Us Dream Community
                      Conference’ to connect diverse community service
                      initiatives with Higher Education Institutions for
                      sustainable impact in the community. He is a teaching and
                      research faculty member in the College of Education at
                      Louisiana Tech University, USA and the School of Social
                      Sciences at Christ University, India.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/SamRufus.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                        >
                          Sam Rufus
                        </CardTitle>
                        {/* <h6 className="card-category">Designer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      He is a seasoned leadership and creativity coach, has 3
                      decades of experience in Advertising. His case study on
                      'Repositioning of Milk Maid' finds pride of place in
                      'Brands & Brand Repositioning'. A visiting faculty at IIM,
                      C and IMI, Delhi, Sam developed his program 'Growing from
                      Good to Great' which won the 2023 Top Award for Training
                      awarded by the Ministry of Labour, Govt. of Saudi Arabia.
                      Sam travels widely ‘Enriching People In Creativity' in
                      fulfilling the acronym EPIC, a leadership training
                      initiative which he founded.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/AmanZaidi.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                        >
                          Aman Zaidi
                        </CardTitle>
                        {/* <h6 className="card-category">Developer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      He specialises in the fields of leadership and
                      organisation development, coaching, executive presence,
                      diversity and inclusion, business storytelling and applied
                      positive psychology. Early in his career he headed BPO
                      operations units, where he developed an excellent track
                      record in increasing employee engagement, reducing
                      attrition, improving performance and growing the business.
                      His other interests lie in wellbeing, food, history and
                      archaeology. He regularly writes articles on LinkedIn and
                      has spoken at TEDx.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/ArpitaGhosh.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author ">
                        <CardTitle
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                          tag="h4"
                        >
                          Arpita Ghosh
                        </CardTitle>
                        {/* <h6 className="card-category">
                          Director and Dean, Christ University, Pune, Lavasa,
                        </h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      Arpita Ghosh ‘Empowering Individuals, Touching Lives’. She
                      brings over 20 plus years of experience, is a Creative
                      Facilitator using the Expressive Arts in her learning
                      modules. A multi-faceted personality, she is a published
                      author, TEDx speaker and holds a coveted place among 100
                      most inspiring women in India. She heads the Centre for
                      Counselling & Health Service and is a founder member for
                      the Centre of Experiential Learning at CHRIST, Lavasa
                      Campus.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/JibraelJos.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                        >
                          Dr Jibrael Jos
                        </CardTitle>
                        {/* <h6 className="card-category">Designer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      He is an Academician, Stage Actor, Writer and Playbacker.
                      He has over 25 years of experience in academia and
                      industry (Project Manager with MindTree and CMC Limited).
                      During his IT tenure he has worked abroad for 6 years in
                      UK and US. Dr Jos has a Bachelor’s degree from St
                      Stephen’s and a Master’s from Birkbeck College, London
                      University, UK. He is a PMP (PMI) certified Project
                      Manager and a PhD in Artificial Intelligence and Computer
                      Vision. He has completed more than 300 workshops for
                      corporates, colleges and schools on Leadership and
                      Motivation.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/AnamikaViswanathan.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                        >
                          Anamika Viswanathan
                        </CardTitle>
                        {/* <h6 className="card-category">Developer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      She is, a dynamic leader with over 25 years of experience
                      in Business Psychology and Advertising, heads CHRIST
                      Consulting. She initially worked in creative roles at top
                      advertising agencies and later earned her Business
                      Psychologist qualification from the University of
                      Westminster, London. With 16 years of experience in the
                      UK, in business and cross-cultural communication, she
                      coaches executives to enhance personal branding,
                      communication skills, and leadership impact.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>

              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/AnilDSouza.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#ffffff", fontWeight: "bolder" }}
                        >
                          Dr Anil D’Souza
                        </CardTitle>
                        {/* <h6 className="card-category">Developer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#ffffff" }}
                    >
                      Dr Anil D’Souza, 3 decades of Industry practise in BFSI,
                      Consulting and Education. Areas of engagement include
                      leadership coaching, developing ‘enterprise purpose &
                      culture maps’, culture diagnostics, branding and designing
                      performance management solutions. Dr. D’Souza holds
                      accreditations in counselling and clinical therapy,
                      leadership coaching, Transactional Analysis, MBTI,
                      Assessment and Development Centres, Design Thinking,
                      Creativity (De Bono), Theatre & Dramaturgy in Education.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center" id="contact">
          <Container>
            <h2 className="title" style={{ fontWeight: "bold" }}>
              Organising Committee
            </h2>
            <Row>
              <Col md={6}>
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/ShrutikaMishra.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#000000", fontWeight: "bolder" }}
                        >
                          Shrutika Mishra
                        </CardTitle>
                        {/* <h6 className="card-category">Developer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#000000" }}
                    >
                      She is a leading expert in Strategic and Business
                      Management, specializing in cutting-edge technology. With
                      a Ph.D. from Banaras Hindu University and IIT-BHU, her
                      research focuses on AI in Business, Data Analytics, and
                      Digital Innovation. She has received accolades, including
                      the &#39;Best Paper Award&#39; from the University of
                      Delhi, and her work delves into AI-enabled Digital
                      Innovation Platforms, IoT Business Platforms, and the
                      intersection of Business Intelligence with advanced
                      technology.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-icon btn-black ml-1"
                      color="link"
                      href="mailto:shrutika.mishra@christuniversity.in"
                    >
                      <i className="fa fa-envelope" />{" "}
                      shrutika.mishra@christuniversity.in
                    </Button>
                    <Button
                      className="btn-icon btn-black ml-1"
                      color="link"
                      href=""
                    >
                      <i className="fa fa-phone" /> +91 83180 36616
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/images/persons/KiranMariam.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle
                          tag="h4"
                          className="text-neutral"
                          style={{ color: "#000000", fontWeight: "bolder" }}
                        >
                          Ms Kiran Mariam
                        </CardTitle>
                        {/* <h6 className="card-category">Developer</h6> */}
                      </div>
                    </a>
                    <p
                      className="card-description text-justify"
                      style={{ color: "#000000", minHeight: "180px" }}
                    >
                      She is a postgraduate in Commerce and has previously
                      served as the Senior Associate at Manipal Hospitals,
                      Finance Manager in Environ Technologies Pvt Ltd and as Tax
                      senior, in E&amp;Y. She has successfully channelized her
                      finance skills and management skills in the industry.
                      Within the academic sector, she aims to play an integral
                      part in bridging the gap between academia and
                      organisations
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-icon btn-black ml-1"
                      color="link"
                      href="mailto:consultancy@christuniversity.in"
                    >
                      <i className="fa fa-envelope" />{" "}
                      consultancy@christuniversity.in
                    </Button>
                    <Button className="btn-icon btn-black ml-1" color="link">
                      <i className="fa fa-phone" />
                      (080) 4012 9958
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-neutral text-center"
          id="gallery"
          style={{ backgroundColor: "#0B3F64" }}
        >
          <Container>
            <div className="title mb-5">
              <h3 style={{ fontWeight: "bold", color: "#ffffff" }}>
                Photo Gallery
              </h3>
            </div>
            <Row>
              <Col className="ml-auto mr-auto mb-3" md="4">
                <Card className="page-carousel">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img
                            src={item.src}
                            alt={item.altText}
                            className="img-fluid"
                            style={{ maxHeight: "197px" }}
                          />
                          <CarouselCaption
                            captionText={item.caption}
                            captionHeader=""
                          />
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="left carousel-control carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </Carousel>
                </Card>
                <div className="title">
                  <h5 style={{ fontWeight: "bolder", color: "#ffffff" }}>
                    Accomadation - Images
                  </h5>
                </div>
              </Col>
              <Col className="ml-auto mr-auto mb-3" md="4">
                <Card className="page-carousel">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items1}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items1.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img
                            src={item.src}
                            alt={item.altText}
                            className="img-fluid"
                            style={{ maxHeight: "197px" }}
                          />
                          <CarouselCaption
                            captionText={item.caption}
                            captionHeader=""
                          />
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="left carousel-control carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </Carousel>
                </Card>
                <div className="title">
                  <h5 style={{ fontWeight: "bolder", color: "#ffffff" }}>
                    Campus - Images
                  </h5>
                </div>
              </Col>
              <Col className="ml-auto mr-auto mb-3" md="4">
                <Card className="page-carousel">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items2}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items2.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img
                            src={item.src}
                            alt={item.altText}
                            className="img-fluid"
                            style={{ maxHeight: "197px", minHeight: "197px" }}
                          />
                          <CarouselCaption
                            captionText={item.caption}
                            captionHeader=""
                          />
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="left carousel-control carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </Carousel>
                </Card>
                <div className="title">
                  <h5 style={{ fontWeight: "bolder", color: "#ffffff" }}>
                    Lavasa - Images
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-neutral text-center" id="Itinerary">
          <Container>
            <Row>
              <Col md="12">
                <div className="title">
                  <h3 className="text-center" style={{ fontWeight: "bold" }}>
                    Program Itinerary
                  </h3>
                </div>
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "1" ? "active text-dark" : ""
                          }
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          <span style={{ fontWeight: "bolder" }}>
                            Friday, February 02, 2024
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "2" ? "active text-dark" : ""
                          }
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          <span style={{ fontWeight: "bolder" }}>
                            Saturday, February 03, 2024
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={
                            activeTab === "3" ? "active text-dark" : ""
                          }
                          onClick={() => {
                            toggle("3");
                          }}
                        >
                          <span style={{ fontWeight: "bolder" }}>
                            Sunday, February 04, 2024
                          </span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent
                  activeTab={activeTab}
                  className="text-center text-black"
                >
                  <TabPane tabId="1">
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        05.00 pm - 06.00 pm
                      </div>
                      <div className="col text-left">
                        <b>Welcome briefing on the Program</b>
                      </div>
                    </div>

                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        09:40 AM - 09:45 AM
                      </div>
                      <div className="col text-left">
                        <b>Bonfire Bonding - Unfolding the Visionary Voyage</b>
                        <br />
                        <p>Dr Jibrael Jos</p>
                        Assoc. Professor - Data Science & Head - HR Development
                        Cell
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        08.30 pm - 09.30 pm
                      </div>
                      <div className="col text-left">
                        <b>Dinner</b>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        06.30 am - 08.45 am
                      </div>
                      <div className="col text-left">
                        <b>Breakfast</b>
                      </div>
                    </div>

                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        09.00 am - 09.15 am
                      </div>
                      <div className="col text-left">
                        <b>The Journey Begins</b>
                        <br />
                        <p>Organising Team</p>
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        09.15 am - 09.30 am
                      </div>
                      <div className="col text-left">
                        <b>Inaugural Address</b>
                        <br />
                        <p>Dr (Fr) Lijo Thomas</p>
                        Dean & Campus Director
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        09.30 am - 11.30 am
                      </div>
                      <div className="col text-left">
                        <b>Leading the Future</b>
                        <br />
                        <p>Address by the Chief Guest</p>
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        11.45 am - 01.00 pm
                      </div>
                      <div className="col text-left">
                        <b>Leadership Design for Enterprise Agility</b>
                        <br />
                        <p>Dr Anil D’Souza</p>
                        Assoc. Professor - School of Business & Management
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        01.00 pm - 02.00 pm
                      </div>
                      <div className="col text-left">
                        <b>Lunch</b>
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        02.00 pm - 04.00 pm
                      </div>
                      <div className="col text-left">
                        <b>Leading through Positive Psychology</b>
                        <br />
                        <p>Mr Aman Zaidi</p>
                        Founder - Fortius; Partner - OD Alternatives, Co-
                        founder - Wake Up Speak Up
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        04.00 pm - 06.30 pm
                      </div>
                      <div className="col text-left">
                        <b>Networking & Personal Time</b>
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        06.30 pm - 07.30 pm
                      </div>
                      <div className="col text-left">
                        <b>The Survivor’s Fireless Cook-Out</b>
                        <br />
                        <p>Ms Anamika V</p>
                        Head - CHRIST Consulting & Business Psychologist
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        06.00 am - 07.30 am
                      </div>
                      <div className="col text-left">
                        <b>Morning Trail Trek / Meditation</b>
                        <br />
                        <p>Dr Maaz Khan</p>
                        Asst. Professor - School of Business & Management &
                        Adventure Enthusiast
                      </div>
                    </div>

                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        09.25 am - 11.30 am
                      </div>
                      <div className="col text-left">
                        <b>Creativity at the Workplace</b>
                        <br />
                        <p>Mr Sam Rufus</p>
                        Founder Director - EPIC Seasoned Adman (J. Walter
                        Thompson, Saatchi)
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        11.45 am - 01.15 pm
                      </div>
                      <div className="col text-left">
                        <b>Human-Centered Value Creation through Art Therapy</b>
                        <br />
                        <p>Ms Arpita Ghosh</p>
                        Head - Counselling & Health Services & Head -
                        Experiential Learning, CHRIST, Lavasa
                      </div>
                    </div>
                    <div
                      className="col-12 row mb-3 mt-5"
                      style={{ color: "#000000" }}
                    >
                      <div className="col-6 d-flex justify-content-end">
                        01.15 pm - 01.30 pm
                      </div>
                      <div className="col text-left">
                        <b>Closing Ceremony and wrap-up</b>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section " id="Registration">
          <Container>
            <Row>
              <Col className="text-left text-black" md={12}>
                <h3 className="mb-4 text-center" style={{ fontWeight: "bold" }}>
                  REGISTRATION
                </h3>
                <p className="text-justify">
                  <span style={{ fontWeight: "bold" }}>
                    Rs 25,000 + GST per delegate
                  </span>{" "}
                  - (Includes passes to all sessions, full board accommodation
                  including all meals and refreshments)
                </p>
                <p>
                  <span className="" style={{ fontWeight: "bold" }}>
                    1 day pass - Rs 14,000 + GST -
                  </span>{" "}
                  (Includes the sessions for that day, food and refreshments)
                </p>
                <p style={{ fontWeight: "bolder" }}>
                  For a truly holistic experience, we recommend you joining us
                  for the entire visionary voyage.
                </p>
                <p className="text-justify">
                  For Corporate Group Discounts{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Please call: 080 4012 9724 / 9157 / 9958 / 9700
                  </span>
                </p>
                <p className="text-justify" style={{ fontWeight: "bolder" }}>
                  To avail Early Bird Offer - Avail entry for
                  <span style={{ fontWeight: "bold" }}>
                    Rs 19,000 + GST Book before 30th November, 2023.
                  </span>
                  .
                </p>
                <Button
                  className="btn-round ml-1 mt-3"
                  color="default"
                  type="button"
                >
                  <i className="fa fa-rupee" aria-hidden="true"></i>

                  <a
                    style={{ fontWeight: "bolder" }}
                    href="https://feebook.southindianbank.com/FeeBookUser/org?id=7"
                    className="text-decoration-none text-white"
                  >
                    Payment Link
                  </a>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
      <DemoFooter />
    </>
  );
}

export default MainIndex;
