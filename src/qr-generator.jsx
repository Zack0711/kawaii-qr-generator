import { AwesomeQR, Options } from 'awesome-qr'
import React, { useEffect, useRef, useState } from 'react'

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

export default AwesomeQRCode