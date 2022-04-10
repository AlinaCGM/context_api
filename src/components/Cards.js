import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Task.css'
import Card from 'react-bootstrap/Card'
import { AppContext } from '../context/AppContext'

function Cards() {
  const { setCardsMode, setGridMode, apiData } = useContext(AppContext)


  return (
    <Card className='container-cards'>
      
      <Card.Body className='row justify-content-center '>{apiData.map((item)=>
      (<div className='col-3 cards'>{item}</div>))}
      </Card.Body>
      <button
      className='btn btn-secondary w-25 m-3'
        onClick={() => {
          setGridMode(true)
          setCardsMode(false)
        }}
      >
        Grid Mode
      </button>
    </Card>
  )
}

export default Cards;

