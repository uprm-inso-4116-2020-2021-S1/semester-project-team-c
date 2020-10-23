import React from "react";
import "./MeetOurGuides.css";
import Nav from "../Nav/Nav";
import Tongo from "../../images/ProfileTongo.jpg"
import FacebookIcon from "../../images/FacebookIcon.png"
import InstagramIcon from "../../images/InstagramIcon.png"
import TwitterIcon from "../../images/TwitterIcon.png"
import YoutubeIcon from "../../images/YoutubeIcon.png"

class MeetOurGuides extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="HeaderDiv Background">
        <Nav />
        <h1 className="GuidesHeader">Meet our Guides</h1>
      </div>
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
      </React.Fragment>
    );
  }
}

export default MeetOurGuides;