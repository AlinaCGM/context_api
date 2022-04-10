import { useEffect, useState } from 'react'

export function useFetchCustom() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://picsum.photos/v2/list?page=9&limit=6')
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}
