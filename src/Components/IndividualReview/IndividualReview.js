import React from "react";
import "./IndividualReview.css";

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="IndividualResult">
          <div className="info">
            <div className="name">{this.props.reviewMessage}</div>
            <div className="details">
              <div className="location">Stars: {this.props.stars}/5</div>
              <div className="duration">ID: {this.props.review_user_uid}</div>
            </div>
          </div>
        </div>
      );
  }
}

export default IndividualReview;
