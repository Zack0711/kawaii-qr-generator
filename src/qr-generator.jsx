import { AwesomeQR, Options } from 'awesome-qr'
import React, { useEffect, useRef, useState } from 'react'

import cat from './cat.gif'

const AwesomeQRCode = ({ options, onStateChange }) => {
  const currentTask = useRef()
  const [qrDataUri, setQrDataUri] = useState('')

  const generateQRDataUri = async (options) => {
    const instance = new AwesomeQR(options)
    const dataUri = await instance.draw()
    setQrDataUri(dataUri)
  }

  useEffect(() => {
    generateQRDataUri(options)
  }, [options])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${qrDataUri})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}

const QRCode = () => {
  const [gifArrayBuffer, setGifArrayBuffer] = useState('')
  useEffect(() => {
    (async () => {
      const arrayBuffer = await fetch(cat).then((res) => res.arrayBuffer())
      setGifArrayBuffer(arrayBuffer)
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

export default AwesomeQRCode