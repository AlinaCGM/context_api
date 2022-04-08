import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { useFetchCustom } from '../useFetchCustom';

function CarouselSlider() {
  const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')


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


    return (
  
      <div  className='container-carousel'>
      <Carousel
        interval={9000}
       >
      {data.map(content => (
         <Carousel.Item  
         key={content.id} 
         >
         <img className='picture-carousel' src={content.download_url}  alt="im" />
         </Carousel.Item>
      ))}
      </Carousel>
</div>
    );
  }
  
  export default CarouselSlider;