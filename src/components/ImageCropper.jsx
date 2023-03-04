import React, { useState, useRef, useEffect } from 'react'
import { 
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  IconButton,
  Button,
  Modal,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import CropIcon from '@mui/icons-material/Crop'

import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

import FileSelectButton from './FileSelectButton'
import { readImage } from '../utils/image'

const ImageCropper = ({ open, onClose, onCrop }) => {
  const [selectedImage, setSelectedImage] = useState({ name: null, data: null })
  const selectInputRef = useRef(null)
  const imageElRef = useRef(null)
  const cropperRef = useRef(null)

  const handleImgSelect = async (e) => {
    const selectedFile = selectInputRef.current.files[0]
    const data = await readImage(selectedFile)
    setSelectedImage({name: selectedFile.name, data })
  }

  const setImgCropper = () => {
    if (cropperRef.current) {
      cropperRef.current.destroy()
      cropperRef.current = null
    }

    cropperRef.current = new Cropper(imageElRef.current, {
      aspectRatio: 1 / 1,
      viewMode: 1,
    })
  }

  const onCropBtnClick = () => {
    const croppedImg = cropperRef.current.getCroppedCanvas()
    onCrop(croppedImg, selectedImage.name)
    onClose()
  }

  useEffect(() => {
    if(selectedImage.data){
      setImgCropper()
    }
  },[selectedImage])

  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card>
        <CardHeader 
          title="Select and crop image"
          action={
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ width: 'calc(100vw - 48px)', p: 0, maxWidth: '640px' }}>
          <Box sx={{ height: 'calc(100vh - 240px)', width: '100%', bgcolor: 'secondary.light' }}>
            <img ref={imageElRef} src={selectedImage.data} />
          </Box>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
          <FileSelectButton
            ref={selectInputRef}
            onSelect={handleImgSelect}
          >
            Select
          </FileSelectButton>
          <Button startIcon={<CropIcon />} onClick={onCropBtnClick} disabled={!selectedImage.data}>
            Crop
          </Button>
        </CardActions>
      </Card>
    </Modal>
  )
}

export default ImageCropper