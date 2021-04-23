import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  },
  fontSizes: {
    '3xl': '2.1rem',
    '4xl': '2.45rem'
  },
  colors: {
    brand: {
      50: '#f0e8ff',
      100: '#cfbef7',
      200: '#ae94ec',
      300: '#8d6ae3',
      400: '#6c3fd9',
      500: '#5326c0',
      600: '#411d96',
      700: '#2e146d',
      800: '#1b0c43',
      900: '#0b021c'
    }
  },
  shadows: {
    outline: '0 0 0 3px rgba(79, 42, 162, 0.3)'
  },
  styles: {
    global: {
      'input[type="date"]::-webkit-inner-spin-button': {
        display: 'none'
      },
      'input[type="date"]::-webkit-calendar-picker-indicator': {
        display: 'none'
      }
    }
  }
})

export default theme
