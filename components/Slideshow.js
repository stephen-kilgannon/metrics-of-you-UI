import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slideStyles from '../styles/Slideshow.module.css'
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <h2>Insert tang here</h2>
              <Carousel className={slideStyles.slideshow}>
                  <div>
                      <img src="/1.png" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
            </div>
        );
    }
};