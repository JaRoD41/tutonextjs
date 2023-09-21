import { useState, useEffect } from 'react'
import axios from 'axios'
// https://dumbstockapi.com/stock?exchanges=NYSE

const testApi = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dumbstockapi.com/stock?exchanges=NYSE')
      setData(response.data)
      setLoading(false)
    }

    fetchData()

    return () => {
      console.log('cleanup')
    }
  }), []
	return <div>testApi</div>
}

export default testApi
