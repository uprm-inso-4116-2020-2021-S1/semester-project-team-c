import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import "./Carousel.css";

var listOfImages =[];

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    function componentWillMount() {
      listOfImages = importAll(require.context('../../CarouselImages/', false, /\.(png|jpe?g|svg)$/));
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
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    );
  }