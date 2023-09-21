'use client'
import { useState } from 'react'

const jeu = () => {
	const [number, setNumber] = useState(0)
	return <div>{number}</div>
}

export default jeu
