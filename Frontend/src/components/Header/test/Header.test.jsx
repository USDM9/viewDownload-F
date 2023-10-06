import { afterEach, describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import NavBar from '../NavBar'

describe('Header Component', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<NavBar />)
  })

  it('should render the element html main', () => {
    render(<NavBar />)
    screen.getByRole('nav')
  })

  it('should render the element httml nav', () => {
    render(<NavBar />)
    screen.getByRole('navMobile')
  })
})
