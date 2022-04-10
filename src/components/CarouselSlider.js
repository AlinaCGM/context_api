import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import Slider from "react-slick";


  
    function MultipleItems  () {
     
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
         
        }
        return (
          <div className='slider-container'>
            <h2> Multiple items </h2>
            <Slider className='slider' {...settings}>
              <div>
                <h3>1</h3>
                <img className=" img-y" src="../images/h1.png"  path="/about" alt=""/>
              </div>
              <div>
                <h3>2</h3>
                <img className=" img-y" src="../images/h3.png"  path="/about" alt=""/>
              </div>
              <div>
                <h3>3</h3>
                <img className=" img-y" src="../images/h5.png"  path="/about" alt=""/>
              </div>
              <div>
                <h3>1</h3>
                <img className=" img-y" src="../images/h1.png"  path="/about" alt=""/>
              </div>
              <div>
                <h3>2</h3>
                <img className=" img-y" src="../images/h3.png"  path="/about" alt=""/>
              </div>
              <div>
                <h3>3</h3>
                <img className=" img-y" src="../images/h5.png"  path="/about" alt=""/>
              </div>
             
            </Slider>
          </div>
        );
      }
    
    export default MultipleItems;