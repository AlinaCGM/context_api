import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Task.css';


export default function Task() {

    const [data, setData]=useState([])
  

    useEffect(() => {
        const getData = async (id) => {
          
            const response = await fetch(`https://picsum.photos/v2/list?page=9&limit=6`)
            
            const actualData = await response.json()
            setData(actualData)
          
            console.log(data)
          
        }
        
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const apiDataGrid = data.map((content, id)=>(
<>
               <div className='col-4 '>
                  <img  className='picture' src={content.download_url}  alt="im" />
               </div>
</>

      ))

      const apiDataCards = data.map((content, id)=>(
        <>
             <div className='col-3 card-body m-1'>
                   <img className='picture-card' src={content.download_url}  alt="im" />
                   <h3 className='card-text'>{content.author}</h3>

              </div>
        </>
      ))
        
 
 
    //   const apiDataCarousel = data.map((content, id)=>(
    //     <>
    //         <div className='test'>
    //         <img className='picture-card' src={content.download_url}  alt="im" />
    // </div>
    //     </>
    //   ))

return(
    <>
    {/* GRID */}
    <div className='container'>
       <div className='row justify-content-center'>
          {apiDataGrid}  
       </div>
    </div>
     
     {/*CARDS */}

     <div className='container'>
         <div className='row cards justify-content-center'>
          {apiDataCards}  
         </div>
     </div>


    {/* CAROUSEL */}


    {/* <div className='container'>
         <div className='row cards justify-content-center'>
          {apiDataCarousel}  
         </div>
     </div> */}

<div  className='container-carousel'>
       <Carousel>
       {data.map(content => (
          <Carousel.Item  key={content.id}>
          <img className='picture-carousel' src={content.download_url}  alt="im" />
          </Carousel.Item>
       ))}
       </Carousel>
</div>
    </>
)

}