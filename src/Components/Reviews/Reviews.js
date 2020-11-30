import React from 'react';
import "./Reviews.css";
import IndividualReview from "../IndividualReview/IndividualReview";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.showReviews = this.showReviews.bind(this);
  }

  showReviews() {
      return (
        <div className="Container">
          {this.props.reviews.map((review) => {
            return (
              <IndividualReview 
                trid={review.trid}
                reviewMessage={review.reviewMessage}
                stars={review.stars}
                tour_tid={review.tour_tid}
                review_rid={review.review_rid}
                review_user_uid={review.review_user_uid}
              />
            );
          })}
        </div>
      );
    
  }

  render() {
    return (
      <div className="reviewWrapper">
        <Form className="reviewForm">
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>Name</Form.Label>
            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Name"/>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>Comment</Form.Label>
            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Comment"/>
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
      {this.showReviews()}
      </div>
    );
  }
}

export default Reviews;