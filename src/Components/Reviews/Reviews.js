import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Reviews extends React.Component {
  render() {
    return (
      <Form>
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
    );
  }
}

export default Reviews;