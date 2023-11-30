// esta funcion busca en una lista

export const searchList = (list, get) => {
  const newList = list.find(item => item.content === 'logoTrasparent')
  const res = Object.values(newList)

  if (get === 'img') return res[0]
  if (get === 'alt') return res[1]
}
