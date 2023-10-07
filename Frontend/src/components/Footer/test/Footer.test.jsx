import { afterEach, describe, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { expect } from 'chai'

import { MemoryRouter } from 'react-router-dom'
import Footer from '../Footer'
import { matchIfTextEquall } from '../../../utils/machIfTextEquall'

describe('Probando que el componente footer se renderise', () => {
  afterEach(cleanup)
  it('<Footer/> should render', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    const footer = screen.getByRole('footer')

    expect(footer).to.exist
  })

  it("deberia tener un h2 con el mensaje 'Tecnologias  usadas para crear esta app'", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    const content = 'Tecnologias  usadas para crear esta app'

    const header = screen.getByRole('header')
    const element = screen.getByRole('h3')

    const isEquall = matchIfTextEquall(content, element)

    expect(header).to.exist
    expect(element).to.exist

    expect(isEquall).true
  })
})
