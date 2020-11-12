import React from "react";
import "./MeetOurGuides.css";
import Nav from "../NavigationBar/NavigationBar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Tongo from "../../images/ProfileTongo.jpg"
import FacebookIcon from "../../images/FacebookIcon.png"
import InstagramIcon from "../../images/InstagramIcon.png"
import TwitterIcon from "../../images/TwitterIcon.png"
import YoutubeIcon from "../../images/YoutubeIcon.png"

class MeetOurGuides extends React.Component {

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <div className="GuideListDiv">
          <h2 className="Name TongoName1">Cristian (Tongo)</h2>
          <img class="Picture TongoPicture1" src={Tongo} alt="Tongo1"></img>
          <p className="Bio TongoBio1">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p>
          <a className="Email TongoEmail1" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a>
          <p className="Mobile TongoMobile1">Mobile: 939-287-5972</p>
          <a href="https://www.facebook.com/Tongo_PR-1491833804253503"><img class="Icon TongoFacebookIcon1" src={FacebookIcon} alt="Tongo1"></img></a>
          <a href="https://www.instagram.com/tongo_pr/"><img class="Icon TongoInstagramIcon1" src={InstagramIcon} alt="Tongo1"></img></a>
          <a href="https://twitter.com/tito824"><img class="Icon TongoTwitterIcon1" src={TwitterIcon} alt="Tongo1"></img></a>
          <a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><img class="Icon TongoYoutubeIcon1" src={YoutubeIcon} alt="Tongo1"></img></a>

          <h2 className="Name TongoName2">Cristian (Tongo)</h2>
          <img class="Picture TongoPicture2" src={Tongo} alt="Tongo2"></img>
          <p className="Bio TongoBio2">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p>
          <a className="Email TongoEmail2" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a>
          <p className="Mobile TongoMobile2">Mobile: 939-287-5972</p>
          <a href="https://www.facebook.com/Tongo_PR-1491833804253503"><img class="Icon TongoFacebookIcon2" src={FacebookIcon} alt="Tongo1"></img></a>
          <a href="https://www.instagram.com/tongo_pr/"><img class="Icon TongoInstagramIcon2" src={InstagramIcon} alt="Tongo1"></img></a>
          <a href="https://twitter.com/tito824"><img class="Icon TongoTwitterIcon2" src={TwitterIcon} alt="Tongo1"></img></a>
          <a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><img class="Icon TongoYoutubeIcon2" src={YoutubeIcon} alt="Tongo1"></img></a>

          <h2 className="Name TongoName3">Cristian (Tongo)</h2>
          <img class="Picture TongoPicture3" src={Tongo} alt="Tongo3"></img>
          <p className="Bio TongoBio3">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p>
          <a className="Email TongoEmail3" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a>
          <p className="Mobile TongoMobile3">Mobile: 939-287-5972</p>
          <a href="https://www.facebook.com/Tongo_PR-1491833804253503"><img class="Icon TongoFacebookIcon3" src={FacebookIcon} alt="Tongo1"></img></a>
          <a href="https://www.instagram.com/tongo_pr/"><img class="Icon TongoInstagramIcon3" src={InstagramIcon} alt="Tongo1"></img></a>
          <a href="https://twitter.com/tito824"><img class="Icon TongoTwitterIcon3" src={TwitterIcon} alt="Tongo1"></img></a>
          <a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><img class="Icon TongoYoutubeIcon3" src={YoutubeIcon} alt="Tongo1"></img></a>

          <h2 className="Name TongoName4">Cristian (Tongo)</h2>
          <img class="Picture TongoPicture4" src={Tongo} alt="Tongo4"></img>
          <p className="Bio TongoBio4">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p>
          <a className="Email TongoEmail4" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a>
          <p className="Mobile TongoMobile4">Mobile: 939-287-5972</p>
          <a href="https://www.facebook.com/Tongo_PR-1491833804253503"><img class="Icon TongoFacebookIcon4" src={FacebookIcon} alt="Tongo1"></img></a>
          <a href="https://www.instagram.com/tongo_pr/"><img class="Icon TongoInstagramIcon4" src={InstagramIcon} alt="Tongo1"></img></a>
          <a href="https://twitter.com/tito824"><img class="Icon TongoTwitterIcon4" src={TwitterIcon} alt="Tongo1"></img></a>
          <a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><img class="Icon TongoYoutubeIcon4" src={YoutubeIcon} alt="Tongo1"></img></a>
        </div>
=======
      <div className="HeaderDiv Background">
        <Nav />
        <h1 className="GuidesHeader">Meet our Guides</h1>
      </div>
      <Container fluid>
        <Row xl={3} lg={2} md={2} sm={1}>
          <Col>
            <Container fluid>
              <Row>
                <Col className="NameColPadding"><h2 className="Name">Cristian (Tongo)</h2></Col>
              </Row>
              <Row>
                <Col className="PicColPadding"><Image className="picDim d-block mx-auto" src={Tongo} roundedCircle/></Col>
              </Row>
              <Row>
                <Col className="BioColPadding"><p className="Bio">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><a className="Contact" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><p className="Contact">Mobile: 939-287-5972</p></Col>
              </Row>
              <Row>
                <Col className="iconColPadding"><a href="https://www.facebook.com/Tongo_PR-1491833804253503"><Image className="picDim d-block mx-auto Icon" src={FacebookIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.instagram.com/tongo_pr/"><Image className="picDim d-block mx-auto Icon" src={InstagramIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://twitter.com/tito824"><Image className="picDim d-block mx-auto Icon" src={TwitterIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><Image className="picDim d-block mx-auto Icon" src={YoutubeIcon}/></a></Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <Col className="NameColPadding"><h2 className="Name">Cristian (Tongo)</h2></Col>
              </Row>
              <Row>
                <Col className="PicColPadding"><Image className="picDim d-block mx-auto" src={Tongo} roundedCircle/></Col>
              </Row>
              <Row>
                <Col className="BioColPadding"><p className="Bio">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><a className="Contact" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><p className="Contact">Mobile: 939-287-5972</p></Col>
              </Row>
              <Row>
                <Col className="iconColPadding"><a href="https://www.facebook.com/Tongo_PR-1491833804253503"><Image className="picDim d-block mx-auto Icon" src={FacebookIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.instagram.com/tongo_pr/"><Image className="picDim d-block mx-auto Icon" src={InstagramIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://twitter.com/tito824"><Image className="picDim d-block mx-auto Icon" src={TwitterIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><Image className="picDim d-block mx-auto Icon" src={YoutubeIcon}/></a></Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <Col className="NameColPadding"><h2 className="Name">Cristian (Tongo)</h2></Col>
              </Row>
              <Row>
                <Col className="PicColPadding"><Image className="picDim d-block mx-auto" src={Tongo} roundedCircle/></Col>
              </Row>
              <Row>
                <Col className="BioColPadding"><p className="Bio">Born and raise puertorican native fan of nature and our rich history. Ready to make your dream vacations come true.</p></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><a className="Contact" href="mailto:tongo.pr.tours@gmail.com">Email: tongo.pr.tours@gmail.com</a></Col>
              </Row>
              <Row>
                <Col className="ContactColPadding"><p className="Contact">Mobile: 939-287-5972</p></Col>
              </Row>
              <Row>
                <Col className="iconColPadding"><a href="https://www.facebook.com/Tongo_PR-1491833804253503"><Image className="picDim d-block mx-auto Icon" src={FacebookIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.instagram.com/tongo_pr/"><Image className="picDim d-block mx-auto Icon" src={InstagramIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://twitter.com/tito824"><Image className="picDim d-block mx-auto Icon" src={TwitterIcon}/></a></Col>
                <Col className="iconColPadding"><a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><Image className="picDim d-block mx-auto Icon" src={YoutubeIcon}/></a></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
>>>>>>> origin
      </React.Fragment>
    );
  }
}

export default MeetOurGuides;