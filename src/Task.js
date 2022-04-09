
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import Cards from './components/Cards';
import Grid from './components/Grid';
import CarouselSlider from './components/CarouselSlider';
import './Task.css';
// import { useFetchCustom } from './useFetchCustom';


export default function Task() {
   
    

   
  



//   const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')

//   if(error){
//      alert(error)



return(
    <>
    <div>
       
    </div>
   <CarouselSlider/>
    <Cards/>
    <Grid/>
    </>
)

}