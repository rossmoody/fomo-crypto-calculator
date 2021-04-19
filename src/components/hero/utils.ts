export const addCurrency = (val) => `$` + val

export const removeCurrency = (string: string) =>
  parseInt(string.replace('$', ''), 10)

export const resizeInput = () => {
  const ele = document.getElementById('investment-input') as HTMLInputElement
  const width = (ele.value.length + 1) * 22
  ele.style.width = width.toString() + 'px'
}
