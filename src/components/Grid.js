import 'bootstrap/dist/css/bootstrap.min.css';
import './Grid.css';
import { useFetchCustom } from '../useFetchCustom';
import {useStore1} from '../store'



function Grid() {

   const {fetched}=useStore1()




// const apiDataGrid = data.map((content, id)=>(
// <>
// {loading && <h1>Loading...</h1>}
//               {data && <div className='col-4 '>
//                   <img  className='image-grid' src={content.download_url}  alt="im" />
//                </div>
//               }
// </>

//       ))
//  if(error){
//     alert(error)
//  }
    return (
        <div className='container'>
        <div className='row justify-content-center'>
        {fetched}
        </div>
     </div>
    );
  }
  
  export default Grid;