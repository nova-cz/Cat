import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const board = Array(9).fill(null)
function App() {

  return (
    <main className="board">
      <h1>GATO</h1>
      <section className="game">
        {
          board.map((cell, index) => {
            return (
              <div className="cell" key = {index}>
                <span className="cell__content">
                  {index}
                </span>
              </div>

            )
          })
        }
      </section>
    </main>

  )
}

export default App
