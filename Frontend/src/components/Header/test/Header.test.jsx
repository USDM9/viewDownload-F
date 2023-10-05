import { afterEach, describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import Header from '../Header'

describe('Header Component', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Header />)
  })

  it('should render the element html main', () => {
    render(<Header />)
    screen.getByRole('nav')
  })

  it('should render the element httml nav', () => {
    render(<Header />)
    screen.getByRole('navMobile')
  })
})
