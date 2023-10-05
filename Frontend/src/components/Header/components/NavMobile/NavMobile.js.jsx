const dataLogo = []

const getHanddleLogo = (list, get) => {
  const img = dataLogo[0]
  const alt = dataLogo[1]
  if (list === undefined || get === undefined) throw new Error('must send two parameter to the function')
  list.forEach(item => {
    if (item.content === 'logo') {
      dataLogo.push(item.img)
      dataLogo.push(item.content)
    }
  })

  if (get === 'img') return img

  if (get === 'alt') return alt
}

export default getHanddleLogo
