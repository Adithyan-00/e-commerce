
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(url)
        setData(response.data)
        setError(null)
      } catch (err) {
        setError(err.message || "Something went wrong")
        setData(null)
      }
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
