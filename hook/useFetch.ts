import { useState, useEffect } from "react";
import axios from 'axios'
//import { API_KEY } from '@env'

//const apiKey = API_KEY

const useFetch = (endpoint: string, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '84eab421e1msh8493097eed57be7p1b8b02jsn4158a8e8940a',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },

  };

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch