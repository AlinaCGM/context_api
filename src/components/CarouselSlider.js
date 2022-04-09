import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import Slider from "react-slick";
// import { useFetchCustom } from '../useFetchCustom';



//  function CarouselSlider = () {
//   const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')


// const apiDataCarousel = data.map((content, id)=>(
//   <>
//   {loading && <h1>Loading...</h1>}
//                 {data && <div key={content.id}> 
//                     <img  className='picture-carousel' src={content.download_url}  alt="im" />
//                     </div>
//                 }
//   </>
  
  //       ))
  //  if(error){
  //     alert(error)
  //  }


//     return (
//   <>

//   </>
// //       <div  className='container-carousel'>
//       <Carousel
//        >
//       {data.map(content => (
//          <Carousel.Item  
//          key={content.id} 
//          >
//          <img className='picture-carousel' src={content.download_url}  alt="im" />
//          </Carousel.Item>
//       ))}
//       </Carousel>
// </div>
  //   );
  // }
  
  // export default CarouselSlider;




  // function CarouselSlider() {


      // const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')
    
    
    // const apiDataCarousel = data.map((content, id)=>(
    //   <>
    //   {loading && <h1>Loading...</h1>}
    //                 {data && <div key={content.id}> 
                    
    //                     <img  className='picture-carousel' src={content.download_url}  alt="im" />
    //                     </div>
    //                 }
    //   </>
      
    //         ))
    //    if(error){
    //       alert(error)
    //    }
    
    
  
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