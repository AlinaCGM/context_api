import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
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


    </>
)

}