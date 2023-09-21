'use client'
import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
// https://dumbstockapi.com/stock?exchanges=NYSE

const testApi = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://dumbstockapi.com/stock?exchanges=NYSE')
				setData(response.data)
				setLoading(false)
			} catch (error) {
				console.log(error)
				setLoading(false)
			}
		}

		fetchData()

		return () => {
			// console.log('cleanup')
		}
	}),
		[]
	return (
		<div>
			{loading ? <p>Loading...</p> : <ul>{data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}</ul>}
		</div>
	)
}

export default testApi
