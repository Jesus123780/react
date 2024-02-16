import React from 'react'
import './App.css'
import { Text } from './Text'
/**
 * Función que renderiza un array de componentes Text
 * @returns renderiza un array de componentes Text 
 */
function App() {
  // Array de números
  const arrayNumers = [1, 2, 3, 4, 5]
  return (
    <div>
      {/* Renderiza un array de componentes Text */}
      {arrayNumers.map(function(number) {
        return <Text nombre='Juan' key={number} />
      })}
    </div>
  )
}
// exporta la función App
export default App
