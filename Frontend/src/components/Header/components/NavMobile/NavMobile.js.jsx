import { searchList } from '../../../../utils/serchList.js'

// esta funcion comprueba errores y retorna un resultado de la funcion searchList

export const getHanddleLogo = (list, get) => {
  if (Array.isArray(list)) {
    if (typeof get !== 'string') throw new Error('second parameter must be string')
    return searchList(list, get)
  } else {
    if (list === undefined || get === undefined) throw new Error('must send two parameter to the function')
    throw new Error('first parameter must be array')
  }
}
