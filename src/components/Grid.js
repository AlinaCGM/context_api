import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import { AppContext } from '../context/AppContext'

function Grid() {
  const {  apiData } = useContext(AppContext)


  return (
    <div className='grid-container'>
      Grid Mode
      <div className='row justify-content-center test-second'>{apiData.map((item)=>
      (<div className='col-4 grid'>{item}</div>))}</div>
      
      
    </div>
  )
}

export default Grid

