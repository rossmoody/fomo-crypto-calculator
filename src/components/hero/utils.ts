export const addCurrency = (val: string): string => `$` + val

export const removeCurrency = (string: string): number =>
  parseInt(string.replace('$', ''), 10)

export const resizeInput = (): void => {
  const ele = document.getElementById('investment-input') as HTMLInputElement
  const width = (ele.value.length + 1) * 22
  ele.style.width = width.toString() + 'px'
}
