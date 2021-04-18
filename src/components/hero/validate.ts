import { isValid, isPast, isAfter } from 'date-fns'

interface Error {
  title: string
  description: string
}

export function validateDate(value: string, callback: any): boolean {
  const date = new Date(value)

  const validDate = isValid(date)
  const pastDate = isPast(date)
  const rangeDate = isAfter(date, new Date(2009, 9, 5))

  if (validDate && pastDate && rangeDate) return false

  let error: Error = {
    title: '',
    description: ''
  }

  if (!validDate) {
    error.title = 'Problem with the date'
    error.description = 'Please fix the date to calculate fomo.'
  }

  if (validDate && !pastDate) {
    error.title = `Shucks, can't predict the future`
    error.description = 'Please pick a date in the past to process fomo.'
  }

  if (validDate && !rangeDate) {
    error.title = `Pick a date later than Oct 5th, 2009`
    error.description = `The earliest pricing available is from October 5th, 2009 when a
      single Bitcoin cost $0.000764.`
  }

  callback({
    title: error.title,
    description: error.description,
    status: 'error',
    duration: 9000,
    position: 'top',
    isClosable: true
  })

  return true
}
