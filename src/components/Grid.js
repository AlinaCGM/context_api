import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import { AppContext } from '../context/AppContext'

function Grid() {
  const {  apiData } = useContext(AppContext) // importing data from the context


  return (
    <div className='grid-container'>
      {/* mapping and displaying the results */}
      <div className='row justify-content-center test-second'>{apiData.map((item, id)=>
      (<div className='col-5 col-md-4 grid' key={id}>{item}</div>))}</div>
      
      
    </div>
  )
}

export default Grid

