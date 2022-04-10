import { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useFetchCustom } from './useFetchCustom'
import Grid from './components/Grid'
import Cards from './components/Cards'
import { AppContext } from './context/AppContext'

export default function Task() {
  const [gridMode, setGridMode] = useState(false)
  const [cardMode, setCardsMode] = useState(false)
  const { data, loading, error } = useFetchCustom()

  const apiData = data.map((content, id) => (
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

  return (
    <>
      <div className='container-home'>
        <div className='row justify-content-center'>
         <h2 className='mt-5'>Home Page</h2> 
          <button
          className='btn btn-secondary w-25 m-3'
            onClick={() => {
              setGridMode(!gridMode)
            }}
          >
            Grid Mode
          </button>
          <button
           className='btn btn-secondary w-25 m-3'
            onClick={() => {
              setCardsMode(!cardMode)
            }}
          >
            Cards Mode
          </button>
          <button
           className='btn btn-secondary w-25 m-3'
            onClick={() => {
              setCardsMode(!cardMode)
            }}
          >
            Carousel Mode
          </button>
          <AppContext.Provider value={{ setGridMode, setCardsMode, apiData }}>
            {cardMode && <Cards />}
            {gridMode && <Grid />}
          </AppContext.Provider>
        </div>
      </div>
    </>
  )
}
