import React from 'react'
import { createRoot } from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import OptionForm from './components/option-form'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OptionForm />
    </ThemeProvider>
  )
}

const root = document.getElementById('root')
createRoot(root).render(<App/>)