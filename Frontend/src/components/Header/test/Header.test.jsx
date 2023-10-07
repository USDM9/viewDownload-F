import { afterEach, describe, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import NavBar from '../NavBar'

describe('Header Component', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  })

  it('should render the element html main', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    screen.getByRole('nav')
  })

  it('should render the element httml nav', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    screen.getByRole('navMobile')
  })
})
