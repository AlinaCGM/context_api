import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { useFetchCustom } from '../useFetchCustom';

function CarouselSlider() {
  const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')



//   const apiDataCarousel = data.map((content, id)=>(
// <>
 
// {loading && <h1>Data is loading...</h1>}
//     {data &&  <Carousel.Item  key={content.id} className='carousel-item'>
//              <img className='picture-carousel' src={content.download_url}  alt="im" />
//              </Carousel.Item>
//           }
         
//     </>
//   ))
//    if(error){
//       alert(error)
//    }
const apiDataCarousel = data.map((content, id)=>(
  <>
  {loading && <h1>Loading...</h1>}
                {data &&  <Carousel.Item>
                    <img  className='image-grid' src={content.download_url}  alt="im" />
                    </Carousel.Item>
                }
  </>
  
        ))
   if(error){
      alert(error)
   }
    return (
        <div  className='container-carousel'>
       <Carousel> {apiDataCarousel} </Carousel>
        </div>

    );
  }
  
  export default CarouselSlider;