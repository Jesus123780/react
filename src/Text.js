import React from 'react'

export function Text (prosp) {
    const { nombre } = prosp
  return (
    <div>Hola {nombre}</div>
  )
}

// Path: src/Text.js
// Compare this snippet from src/Paragraph.js:
// destructuring the props object in the function signature
// export function Text ({ nombre }) {
//     const { nombre } = prosp
//   return (
//     <div>Hola {nombre}</div>
//   )
// }

