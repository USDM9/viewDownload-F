export const matchIfTextEquall = (content, element) => {
  const elements = element
  if (Array.isArray(elements)) {
    const temp = searchTextContentArray(element, content)
    let res = false
    temp.forEach((item, idx) => {
      if (item === content) {
        res = true
      }
    })

    return res
  }

  const text = element.textContent
  return text === content
}

const searchTextContentArray = (element, content) => {
  const res = []
  element.forEach((item, idx) => {
    item.forEach((item, idx) => {
      res.push(item.textContent)
      return res
    })
  })

  return res
}
