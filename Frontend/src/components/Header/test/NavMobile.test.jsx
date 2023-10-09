import { afterEach, describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { expect } from 'chai'

import { MemoryRouter } from 'react-router-dom'
import NavMobile from '../components/NavMobile/NavMobile'
import { getHanddleLogo } from '../components/NavMobile/NavMobile.js.jsx'
import { searchList } from '../../../utils/serchList.js.jsx'
import { matchIfTextEquall } from '../../../utils/machIfTextEquall'
import listImg from '../../../Assets/data/listImg'

/* ============ Test de Renderizado ============= */

const getChildrens = (element) => {
  const res = []

  element.forEach((item, idx) => {
    if (item.children) res.push(item.children)
  })
  console.log(['log'])
  return res
}

describe('NavMobile Component', () => {
  afterEach(cleanup)

  it('Should render the component', () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
  })

  it("Should render HTML element with the 'navMobile' role", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const element = screen.getByRole('navMobile')

    // 'exist' genera un error de linter no afecta el test el error es que el linter espera  'expect(element).to.exist()'
    // pero chair funciona sin '()'
    // prueba poner '()' a 'exist' y el error desaparece pero el test falla
    expect(element).to.exist
  })

  it("Should render HTML element with the 'ul' role", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const element = screen.getByRole('ul')
    expect(element).to.exist
  })

  it("Should render HTML elements with the 'li' role", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const li = screen.getAllByRole('li')
    // isInfo retorna un array de <a>
    const elements = getChildrens(li)
    // res comprueba que los links se estan renderizando
    const res = matchIfTextEquall('User Page', elements)

    expect(elements).to.lengthOf(3)
    expect(li).to.exist
    expect(res).to.true
  })

  it("Should render React DOM <Link /> elements for 'Inicio' and 'Contacto'", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const home = screen.getAllByText('Inicio')
    const contacto = screen.getAllByText('Contacto')

    expect(home).to.exist
    expect(contacto).to.exist
  })

  it("Should render the 'containerImg' element", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const containerImg = screen.getByRole('containerImg')

    expect(containerImg).to.exist
  })

  it("Should render the HTML 'img' element", () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const img = screen.getByRole('img')

    expect(img).to.exist
  })

  it('confirm element <img> contain alt', () => {
    render(
      <MemoryRouter>
        <NavMobile />
      </MemoryRouter>
    )
    const isAlt = screen.getAllByAltText('logo')

    expect(isAlt).to.exist
  })
})

/* ====='Testing getHanddleLogo Function' ===== */

describe('Testing getHanddleLogo Function', () => {
  it('getHanddleLogo should be a function', () => {
    expect(getHanddleLogo).to.be.a('function')
  })

  it('Should throw an error when not provided with two parameters', () => {
    expect(() => getHanddleLogo()).to.throw('must send two parameter to the function')
  })

  it('Should throw errors with specific messages when incorrect parameter types are provided', () => {
    const i = 'i'
    const number = 50

    expect(() => getHanddleLogo(i, number)).to.throw('first parameter must be array')
    expect(() => getHanddleLogo(listImg, number)).to.throw('second parameter must be string')
  })

  it('should return img or alt based on props and confirm than res is a string', () => {
    const img = getHanddleLogo(listImg, 'img')
    const alt = getHanddleLogo(listImg, 'alt')
    const resWithAlt = searchList(listImg, 'alt')
    const resWithImg = searchList(listImg, 'img')

    // Verififa que res sea un string
    expect(resWithAlt).to.be.a('string')

    // Verifica que el contenido de img o alt exista en la lista
    expect(img).to.equal(resWithImg)
    expect(alt).to.equal(resWithAlt)
  })
})
