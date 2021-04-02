let timer: ReturnType<typeof setTimeout>

export const handle = {
  date(date: string, callback: (arg0: string) => void) {
    clearTimeout(timer)

    const splitDate = date.split("-")
    const [year, month, day] = splitDate

    if (
      !year ||
      !month ||
      !day ||
      !Number.isFinite(+year) ||
      !Number.isFinite(+day) ||
      !Number.isFinite(+month)
    )
      return "error"

    const newDate = `${day}-${month}-${year}`
    const currentYear = new Date().getFullYear()

    timer = setTimeout(() => {
      let result = newDate
      if (+year < 2010 && +month < 10) result = "past"
      if (+year > currentYear) result = "future"
      callback(result)
    }, 900)
  },

  investment(money: number, callback: (arg0: number) => void) {
    clearTimeout(timer)

    const inputSpan: HTMLSpanElement = document.querySelector("#fiat")
    inputSpan.style.width = (money.toString().length + 2) * 24 + "px"

    if (money < 1 || !Number.isFinite(money)) return

    timer = setTimeout(() => {
      callback(money)
    }, 700)
  }
}
