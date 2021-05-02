import React, { useEffect } from 'react'

export function useStickyState(
  defaultValue: boolean,
  key: string
): [boolean, React.Dispatch<boolean>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)

    if (stickyValue) return JSON.parse(stickyValue)

    return defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
