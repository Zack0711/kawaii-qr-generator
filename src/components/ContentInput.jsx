import React, { useState } from 'react'

import { Box, Tab, Tabs, MenuItem, TextField, InputAdornment } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import WifiPasswordIcon from '@mui/icons-material/WifiPassword'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import WifiIcon from '@mui/icons-material/Wifi'
import SmsIcon from '@mui/icons-material/Sms'
import LockIcon from '@mui/icons-material/Lock'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, pt: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const networkTypes = [
  { value: 'WPA/WPA2', label: 'WPA/WPA2' },
  { value: 'WEP', label: 'WEP' },
  { value: '', label: 'No encryption' },
]

const ContentInput = () => {
  const [inputMode, setInputMode] = useState(0)
  const handleInputModeChange = (e, newMode) => {
    setInputMode(newMode);
  }

  return (
    <>
      <Tabs value={inputMode} onChange={handleInputModeChange} variant="fullWidth">
        <Tab icon={<LinkIcon />} iconPosition="start" label="Link" />
        <Tab icon={<WifiPasswordIcon />} iconPosition="start" label="Wifi" />
        <Tab icon={<SmsIcon />} iconPosition="start" label="SMS" />
        <Tab icon={<PhoneIcon />} iconPosition="start" label="Call" />
        <Tab icon={<MailOutlineIcon />} iconPosition="start" label="E-mal" />
      </Tabs>
      <TabPanel value={inputMode} index={1}>
        <TextField 
          fullWidth
          label="URL"
          InputProps={{
            startAdornment: <InputAdornment position="start"><LinkIcon /></InputAdornment>,
          }}
        />
      </TabPanel>
      <TabPanel value={inputMode} index={0}>
        <TextField 
          fullWidth
          label="Type" 
          select
          defaultValue="WPA/WPA2"
          InputProps={{
            startAdornment: <InputAdornment position="start"><VpnKeyIcon /></InputAdornment>,
          }}
        >
          {networkTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField 
          fullWidth
          label="SSID" 
          InputProps={{
            startAdornment: <InputAdornment position="start"><WifiIcon /></InputAdornment>,
          }}
        />
        <TextField 
          fullWidth
          label="Password" 
          InputProps={{
            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
          }}
        />
      </TabPanel>
      <TabPanel value={inputMode} index={2}>
        2
      </TabPanel>
    </>
  )
}

export default ContentInput