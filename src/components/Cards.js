import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import { useFetchCustom } from '../useFetchCustom';

function Cards() {
  const {data,loading,error} = useFetchCustom('https://picsum.photos/v2/list?page=9&limit=6')



  const apiDataCards = data.map((content, id)=>(
<>
{loading && <h1>Loading...</h1>}
    {data && <div className='col-5 col-md-3 card-body m-1'>
         
               <img className='picture-card' src={content.download_url}  alt="im" />
               <h3 className='card-text'>{content.author}</h3>
        
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
        
        {apiDataCards}
                  
        </div>
        
     </div>

    );
  }
  
  export default Cards;