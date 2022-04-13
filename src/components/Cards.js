import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import Card from 'react-bootstrap/Card'
import { AppContext } from '../context/AppContext'

function Cards() {
  const {  apiDataText } = useContext(AppContext) // importing data from the context


  return (
    <Card className='container-cards'>
            {/* mapping and displaying the results */}

      <Card.Body className='row justify-content-center '>{apiDataText.slice(2,5).map((text, id)=>
      (<div className='col-5 col-md-5 col-lg-3 cards' key={id}>{text}</div>))}
      {/* (<div className='col col-md-5 col-lg-3 cards' key={id}><div className='text'>{text}</div></div>))} */}

      </Card.Body>
     
    </Card>
  )
}

export default Cards;

