import { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useFetchCustom } from './useFetchCustom'
import Grid from './components/Grid'
import Cards from './components/Cards'
import MultipleItems from './components/MultipleItems'
import { AppContext } from './context/AppContext'


export default function Task() {
  const [gridMode, setGridMode] = useState(false)   // all the hooks in one place
  const [cardMode, setCardsMode] = useState(false)
  const [carouselMode, setCarouselMode] = useState(false)
  const { data, loading, error } = useFetchCustom()   

  const apiData = data.map((content) => (    // mapping and storing the data from the custom hook
    <>
      {loading && <h1>Loading...</h1>}
      {data && (
        <>
          <img className='image' src={content.download_url} alt='im' />
        
        </>
      )}
    </>
  ))
  if (error) {
    alert(error)
  }
  const apiDataText = data.map((text) => (   // data with pictures and text to use in cards
    <> 
      {loading && <h1>Loading...</h1>} 
      {data && (
        <>
          <img className='image card-text' src={text.download_url} alt='im' />
        {text.author}
        </>
      )}
    </>
  ))
  if (error) {
    alert(error)
  }

  return (
    <>
      <div className='container-home'>
        <div className='row justify-content-center'>
        <div className="logo"> </div>
         <h2 className='mt-5'>Home Page
         </h2> 
        <div>  <button
          className='btn btn-secondary'
            onClick={() => {
              setCardsMode(false)   // buttons logics
          setGridMode(true)
          setCarouselMode(false)
          setGridMode(!gridMode)
            }}
          >
            Grid 
          </button>
          <button
           className='btn btn-secondary'
            onClick={() => {
              setCardsMode(true)
              setCardsMode(!cardMode)
          setGridMode(false)
          setCarouselMode(false)
            }}
          >
            Cards
          </button>
          <button
           className='btn btn-secondary'
            onClick={() => {
              setCardsMode(false)
          setGridMode(false)
          setCarouselMode(true)
          setCarouselMode(!carouselMode)
            }}
          >
            Carousel 
          </button>
          </div>
          {/* wrapping the components in parent element and specifying the values which will be used */}
          <AppContext.Provider value={{ setGridMode, setCardsMode,setCarouselMode, apiData, apiDataText }}>   
            {cardMode && <Cards />}
            {gridMode && <Grid />}
            {carouselMode && <MultipleItems />}
          </AppContext.Provider>
        </div> 
      </div>
    </>
  )
}
