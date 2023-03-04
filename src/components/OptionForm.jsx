import React, { useEffect, useRef, useState } from 'react'

import { 
  Box,
  TextField,
  InputAdornment,
  Tab,
  Tabs,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Modal,
  Checkbox,
} from '@mui/material'

import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import ImageIcon from '@mui/icons-material/Image'

import ContentInput from './ContentInput'
import ImageCropper from './ImageCropper'
import FileSelectButton from './FileSelectButton'

import { loadImage } from '../utils/image'

const OptionForm = ({ options, onStateChange }) => {
  const [enableLogo, setEnableLogo] = useState(false)
  const [logoImage , setLogoImage] = useState({ name: null, data: null })
  const logoInputRef = useRef(null)

  const [enableBackgroundImage, setEnableBackground] = useState(false)
  const [backgoundImage , setBackgroundImage] = useState({ name: null, data: null })

  const [imageCropperOpen, setImageCropperOpen] = useState(false)

  const handleCrop = (data, fileName) => {
    setBackgroundImage({
      name: fileName,
      data,
    })
  }

  const handleLogoImgSelect = async (e) => {
    const selectedFile = logoInputRef.current.files[0]
    const img = await loadImage(selectedFile)
    setLogoImage({
      name: selectedFile.name,
      data: img
    })
  }

  return (
    <Box
      component="form"
      sx={{ my:1, mx: 'auto', width: '540px' }}
      noValidate
      autoComplete="off"
    >
      <ListItem
        secondaryAction={
          <Button 
            disabled={!enableBackgroundImage}
            startIcon={<EditIcon />} 
            onClick={() => setImageCropperOpen(true)}
          >
            Edit
          </Button>
        }
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={enableBackgroundImage}
            onClick={() => setEnableBackground(!enableBackgroundImage)}
          />
        </ListItemIcon>
        <Avatar 
          src={backgoundImage.data && backgoundImage.data.toDataURL()} 
          variant="square"
          sx={{ width: '64px', height: '64px', mr: 2 }}
        >
          <ImageIcon />
        </Avatar>
        <ListItemText
          primary="Background Image"
          secondary={backgoundImage.name}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={enableLogo}
            onClick={() => setEnableLogo(!enableLogo)}
          />
        </ListItemIcon>
        <Avatar 
          src={logoImage.data && logoImage.data.src} 
          variant="square"
          sx={{ width: '64px', height: '64px', mr: 2 }}
        >
          <ImageIcon />
        </Avatar>
        <ListItemText
          primary="Logo"
          secondary={logoImage.name}
        />
        <FileSelectButton 
          disabled={!enableLogo}
          ref={logoInputRef}
          onSelect={handleLogoImgSelect}
        >
          Choose
        </FileSelectButton>
      </ListItem>
      <ImageCropper
        open={imageCropperOpen}
        onClose={() => setImageCropperOpen(false)}
        onCrop={handleCrop}
      />
    </Box>
  )
}

export default OptionForm