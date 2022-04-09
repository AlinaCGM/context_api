import 'bootstrap/dist/css/bootstrap.min.css';
import './Grid.css';
import { useFetchCustom } from '../useFetchCustom';




function Grid() {

    const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')
    
  


const apiDataGrid = data.map((content, id)=>(
<>
{loading && <h1>Loading...</h1>}
              {data && <div className='col-4 '>
                  <img  className='image-grid' src={content.download_url}  alt="im" />
               </div>
              }
</>

      ))
 if(error){
    alert(error)
 }
    return (
        <div className='container'>
        <div className='row justify-content-center'>
        {apiDataGrid}
        </div>
     </div>
    );
  }
  
  export default Grid;