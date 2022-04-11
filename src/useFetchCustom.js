import { useEffect, useState } from 'react'

export function useFetchCustom() {   // custom hook
  const [data, setData] = useState([])      
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)  

  useEffect(() => {  
    setLoading(true)
    fetch('https://picsum.photos/v2/list?page=19&limit=6')  //getting and fetching data from the API
      .then((response) => response.json())                  // data to json
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))   // error handling
  }, [])

  return { data, error, loading }  
}
 