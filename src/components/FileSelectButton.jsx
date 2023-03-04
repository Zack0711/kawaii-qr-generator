import React, { forwardRef } from 'react'
import Button from '@mui/material/Button'
import FolderIcon from '@mui/icons-material/Folder'

const FileSelectButton = forwardRef(({ onSelect, disabled, children }, ref) => {
  return (
    <Button disabled={disabled}>
      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          ref={ref}
          onChange={onSelect}
          style={{ display: 'none' }}
        />
        <FolderIcon sx={{fontSize: '20px', mr:1, ml: -0.5}} />
        {children}
      </label>
    </Button>
  )
})

export default FileSelectButton