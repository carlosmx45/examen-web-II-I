import { useEffect, useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['Piedra', 'Papel', 'Tijeras']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'TijerasPapel':
        case 'PiedraTijeras':
        case 'PapelPiedra':
          setResult('TU GANAS!')
          break
        case 'PapelTijeras':
        case 'TijerasPiedra':
        case 'PiedraPapel':
          setResult('TU PIERDES!')
          break
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijerasTijeras':
          setResult('ES UN EMPATE!')
          break
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div>
      <h1>Tu escojiste: {userChoice}</h1>
      <h1>la computadora eligio: {computerChoice}</h1>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      )}
      <h1>{result}</h1>
    </div>
  )
}

export default App
