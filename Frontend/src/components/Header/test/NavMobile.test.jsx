import { afterEach, describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { expect } from 'chai'

import NavMobile from '../components/NavMobile/NavMobile'
import getHanddleLogo from '../components/NavMobile/NavMobile.js'
import listImg from '../../../Assets/data/listImg'

describe('NavMobile Component', () => {
  afterEach(cleanup)

  it('Should render the component', () => {
    render(<NavMobile />)
  })

  it("Should render HTML element with the 'navMobile' role", () => {
    render(<NavMobile />)
    const element = screen.getByRole('navMobile')

    expect(element).to.exist
  })

  it("Should render HTML element with the 'ul' role", () => {
    render(<NavMobile />)
    const element = screen.getByRole('ul')
    expect(element).to.exist
  })

  it("Should render HTML elements with the 'li' role", () => {
    render(<NavMobile />)
    const element = screen.getAllByRole('li')
    expect(element).to.exist
  })

  it("Should render React DOM <Link /> elements for 'Inicio' and 'Contacto'", () => {
    render(<NavMobile />)
    const home = screen.getAllByText('Inicio')
    const contacto = screen.getAllByText('Contacto')

    expect(home).to.exist
    expect(contacto).to.exist
  })

  it("Should render the 'containerImg' element", () => {
    render(<NavMobile />)
    const containerImg = screen.getByRole('containerImg')

    expect(containerImg).to.exist
  })

  it("Should render the HTML 'img' element", () => {
    render(<NavMobile />)
    const img = screen.getByRole('img')

    expect(img).to.exist
  })
})

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

  it('should return img or alt based on props and confirm a minimum length of 2', () => {
    const img = getHanddleLogo(listImg, 'img')
    const alt = getHanddleLogo(listImg, 'alt')

    const data = []

    listImg.forEach(item => {
      if (item.content === 'logo') {
        data.push(item.img)
        data.push(item.content)
      }
    })

    // Verififa que data tenga una longitud de 2
    expect(data.length).to.be.at.least(2)

    // Verifica que el contenido de img o alt sea igual data[n]
    expect(img).to.equal(data[0])
    expect(alt).to.equal(data[1])
  })
})
