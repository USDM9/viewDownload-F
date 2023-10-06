const dataLogo = []

const getHanddleLogo = (list, get) => {
  if (Array.isArray(list)) {
    if (typeof get !== 'string') throw new Error('second parameter must be string')
    handdleSearchLogo(list, get)
  } else {
    if (list === undefined || get === undefined) throw new Error('must send two parameter to the function')
    throw new Error('first parameter must be array')
  }

  if (get === 'img') return dataLogo[0]
  if (get === 'alt') return dataLogo[1]
}

const handdleSearchLogo = (list, get) => {
  list.forEach(item => {
    if (item.content === 'logo') {
      dataLogo.push(item.img)
      dataLogo.push(item.content)
    }
  })
}

export default getHanddleLogo
