export const addCurrency = (value: string): string => `$${value}`

export const removeCurrency = (string: string): number =>
  Number.parseInt(string.replace('$', ''), 10)

export const resizeInput = (): void => {
  const ele = document.querySelector('#investment-input') as HTMLInputElement
  const width = (ele.value.length + 1) * 22
  ele.style.width = `${width.toString()}px`
}
