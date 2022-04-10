import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Task.css'
import { AppContext } from '../context/AppContext'
import Slider from "react-slick";


  
    function MultipleItems  () {
      const {  apiData } = useContext(AppContext)

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
           
           
            <Slider {...settings} className='slider'>{apiData.map((item)=>
      (<div className='slick-items' >{item}</div>))}</Slider>
      
      
             
            
          </div>
        );
      }
    
    export default MultipleItems;