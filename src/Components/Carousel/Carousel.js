import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import "./Carousel.css";
import Chinchorro from "../../images/chinchorro.jpg"
import ElMorro from "../../images/elMorro.jpg"
import Hiking from "../../images/hiking.jpg"  
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
var listOfImages =[];

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    function componentWillMount() {
      listOfImages = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
    }
    function importAll(r) {
      return r.keys().map(r);
    }  
    componentWillMount();
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
       {listOfImages.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="CarouselDim"
          src={slide}
          alt="Slider Image"
        />
        {/* <Carousel.Caption className="Div">
        <Row>
            <Col className="noPadding"><h1 className="Title">ExplorePR</h1></Col>
          </Row>
          <Row>
            <Col className="noPadding"><h2 className="TitleDescription">Puerto Rico is full of hidden gems waiting for you to explore them.</h2></Col>
          </Row>
        </Carousel.Caption> */}
      </Carousel.Item>
        )
      })}
      
    </Carousel>
      // <Carousel activeIndex={index} onSelect={handleSelect}>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={Hiking}
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={Chinchorro}
      //       alt="Second slide"
      //     />
  
      //     <Carousel.Caption>
      //       <h3>Second slide label</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={ElMorro}
      //       alt="Third slide"
      //     />
  
      //     <Carousel.Caption>
      //       <h3>Third slide label</h3>
      //       <p>
      //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      //       </p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //</Carousel>
    );
  }


  
  //render(<ControlledCarousel />);