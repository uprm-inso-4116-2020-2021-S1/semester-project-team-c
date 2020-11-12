import React from "react";
import "./Home.css";
import Nav from "../NavigationBar/NavigationBar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Crashboat from "../../images/crashboat.jpg"
import Gozalandia from "../../images/gozalandia.jpg"
import Yunque from "../../images/yunque.jpg"
import BahiaBioluminicente from "../../images/bahiaBioluminicente.jpg"
import Chinchorro from "../../images/chinchorro.jpg"
import ElMorro from "../../images/elMorro.jpg"
import Hiking from "../../images/hiking.jpg"
import Zipline from "../../images/zipline.jpg"
import userEvent from "@testing-library/user-event";
class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <div className="TitleDiv">
          <Nav />
          <h1 className="Title">ExplorePR</h1>
          <h2 className="TitleDescription">Puerto Rico is full of hidden gems waiting for you to explore them.</h2>
        </div>
        <div className="PlanAdventureDiv">
          <h1 className="PlanAdventureTitle">Plan your adventure</h1>
          <h2 className="PlanAdventureDescription">From beaches to a national forest, a bioluminescent lake, or hiking, in Puerto Rico you will find what suit you most. Plan your adventure along with our local tour guides to make the most of your stay.</h2>
          <img class="Crashboat" src={Crashboat} alt="Crashboat"></img>
          <img class="Gozalandia" src={Gozalandia} alt="Gozalandia"></img>
          <img class="Yunque" src={Yunque} alt="Yunque"></img>
          <img class="BahiaBioluminicente" src={BahiaBioluminicente} alt="Bahia Bioluminicente"></img>
          <img class="Chinchorro" src={Chinchorro} alt="Chinchorro"></img>
          <img class="ElMorro" src={ElMorro} alt="El morro"></img>
          <img class="Hiking" src={Hiking} alt="Hiking"></img>
          <img class="Zipline" src={Zipline} alt="Zipline"></img>
        </div>
=======
      <div className="TitleDiv">
        <Nav />
        <Container fluid>
          <Row>
            <Col className="noPadding"><h1 className="Title">ExplorePR</h1></Col>
          </Row>
          <Row>
            <Col className="noPadding"><h2 className="TitleDescription">Puerto Rico is full of hidden gems waiting for you to explore them.</h2></Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row>
          <Col className="noPadding"><h1 className="PlanAdventureTitle">Plan your adventure</h1></Col>
        </Row>
        <Row>
          <Col className="noPadding"><h2 className="PlanAdventureDescription">From beaches to a national forest, a bioluminescent lake, or hiking, in Puerto Rico you will find what suit you most. Plan your adventure along with our local tour guides to make the most of your stay.</h2></Col>
        </Row>
        <Row xl={3}>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Crashboat} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Gozalandia} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Yunque} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={BahiaBioluminicente} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Chinchorro} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={ElMorro} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Hiking} roundedCircle/></Col>
          <Col className="picPadding"><Image className="picDim d-block mx-auto" src={Zipline} roundedCircle/></Col>
        </Row>
      </Container>
>>>>>>> origin
      </React.Fragment>
    );
  }
}

export default Home;