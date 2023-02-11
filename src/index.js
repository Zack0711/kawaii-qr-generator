import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import AwesomeQRCode from './qr-generator'
import cat from './cat.gif'

const App = () => {
  const [gifArrayBuffer, setGifArrayBuffer] = useState('')
  useEffect(() => {
    (async () => {
      const arrayBuffer = await fetch(cat).then((res) => res.arrayBuffer())
      setGifArrayBuffer(arrayBuffer)
      //console.log('arrayBuffer', arrayBuffer)
    })()
  }, [])
  
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
      }}
    >
    {
      gifArrayBuffer && (
        <AwesomeQRCode
          options={{
            text: 'https://www.facebook.com/',
            gifBackground: gifArrayBuffer,
          }}
        />
      )
    }      
    </div>
  )
}

const root = document.getElementById('root')
createRoot(root).render(<App/>)