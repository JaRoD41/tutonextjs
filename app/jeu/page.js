'use client'
import { useState } from 'react'

const jeu = () => {
	const [number, setNumber] = useState(0)
	const increment = () => {
		setNumber(number + 1)
	}
	const decrement = () => {
		setNumber(number - 1)
	}
	return (
		<>
			<div>{number}</div>
			<button onClick={() => increment()}>Ajouter 1</button>
			<button onClick={() => setNumber(0)}>Reset</button>
			<button onClick={() => decrement()}>Enlever 1</button>
		</>
	)
}
export default jeu
