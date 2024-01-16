import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(event) {
  const [color, setColor] = useState('olive')
  
  return (
    <>
      <div className="w-full h-screen duration-150 rounded-xl " style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-2'>
            <button className="outline-none bg-red-700 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('red')}>red</button>
            <button className="outline-none bg-blue-700 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('blue')}>blue</button>
            <button className="outline-none bg-yellow-200 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('yellow')}>yellow</button>
            <button className="outline-none bg-green-700 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('green')}>green</button>
            <button className="outline-none bg-gray-600 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('gray')}>gray</button>
            <button className="outline-none bg-pink-400 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('pink')}>pink</button>
            <button className="outline-none bg-orange-600 m-3 px-3 py-1  rounded-full text-white shadow-lg" onClick={() => setColor('orange')}>orange</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
