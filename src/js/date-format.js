export const dateFormat = (date) => {
  const addZero = (n) => {
    if (n < 10) {
      return `0${n}`
    }
    return n
  }
  const d = new Date(date);
  return `${d.getFullYear()}-${addZero(d.getMonth()+1)}-${addZero(d.getDate())} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`
}

export const dateFormatLocal = (date) => {
  const addZero = (n) => {
    if (n < 10) {
      return `0${n}`
    }
    return n
  }
  const d = new Date(date);
  return `${addZero(d.getDate())}-${addZero(d.getMonth()+1)}-${d.getFullYear()} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`
}