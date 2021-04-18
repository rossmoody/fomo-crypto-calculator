import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  },
  colors: {
    brand: {
      '50': '#EFEBFA',
      '100': '#D3C6F0',
      '200': '#B7A2E7',
      '300': '#9B7EDD',
      '400': '#7F59D4',
      '500': '#6335CA',
      '600': '#4F2AA2',
      '700': '#3B2079',
      '800': '#271551',
      '900': '#140B28'
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
