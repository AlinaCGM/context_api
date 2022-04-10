import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import Card from 'react-bootstrap/Card'
import { AppContext } from '../context/AppContext'

function Cards() {
  const {  apiData } = useContext(AppContext)


  return (
    <Card className='container-cards'>
      
      <Card.Body className='row justify-content-center '>{apiData.slice(0,3).map((item)=>
      (<div className='col-3 cards'>{item}</div>))}
      </Card.Body>
     
    </Card>
  )
}

export default Cards;

