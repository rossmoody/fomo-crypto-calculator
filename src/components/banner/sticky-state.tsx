import React, { useEffect } from 'react'

export function useStickyState(
  defaultValue: boolean,
  key: string
): [boolean, React.Dispatch<boolean>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
