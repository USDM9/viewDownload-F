import { afterEach, describe, expect, expectTypeOf, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import NavMobile from '../components/NavMobile/NavMobile'
import getHanddleLogo from '../components/NavMobile/NavMobile.js'

// it('', () => {})

describe('NavMobile Component', () => {
  afterEach(cleanup)

  it('should render Component', () => {
    render(<NavMobile />)
  })

  it('should render element html with the role navMobile', () => {
    render(<NavMobile />)
    screen.getByRole('navMobile')
  })

  it('should render element html with the role ul', () => {
    render(<NavMobile />)
    screen.getByRole('ul')
  })

  it('should render element html with the role li', () => {
    render(<NavMobile />)
    screen.getAllByRole('li')
  })

  it('should render the element <Link /> of react-dom', () => {
    render(<NavMobile />)
    screen.getAllByText('Inicio')
    screen.getAllByText('Contacto')
  })

  it('should render the containerImg', () => {
    render(<NavMobile />)
    screen.getByRole('containerImg')
  })

  it('should render the element html img', () => {
    render(<NavMobile />)
    screen.getByRole('img')
  })

  it('getHanddleLogo should be a function', () => {
    expectTypeOf(getHanddleLogo).toBeFunction()
  })

  it('if not provide a parameter throws an error', () => {
    expect(() => getHanddleLogo()).toThrow('must send two parameter to the function')
  })

  // it('getHanddleLogo has return logo if get is equal img', () => {
  //   expect(getHanddleLogo(listImg, get)).toBe(img)
  // })

  // it('getHanddleLogo has return logo if get is equal alt', () => {
  //  expect(getHanddleLogo(listImg, get)).toBe(alt)
  // })
})
