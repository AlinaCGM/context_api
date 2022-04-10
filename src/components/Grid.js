import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import { AppContext } from '../context/AppContext'

function Grid() {
  const { setCardsMode, setGridMode, apiData } = useContext(AppContext)


  return (
    <div className='grid-container'>
      Grid Mode
      <div className='row justify-content-center test-second'>{apiData.map((item)=>
      (<div className='col-4 grid'>{item}</div>))}</div>
      
      <button
      className='btn btn-secondary w-25 m-3'
        onClick={() => {
          setCardsMode(true)
          setGridMode(false)
        }}
      >
        Cards Mode
      </button>
    </div>
  )
}

export default Grid

