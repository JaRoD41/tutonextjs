'use client'
import { useState, useEffect } from 'react'

const jeu = () => {
	const [number, setNumber] = useState(0)
	const increment = () => {
		setNumber(number + 1)
	}
	const decrement = () => {
		setNumber(number - 1)
	}

	useEffect(() => {
		if (number > 10) {
			alert('Vous avez dépassé le nombre maximum')
      setNumber(10)
		}
	}, [number])
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
