import { afterEach, describe, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai'

import ListIcons from '../components/ListIcons'

describe('tests de renderizado componente <ListIcons/>', () => {
  afterEach(cleanup)
  it('renderizando <ListIcons/>', () => {
    render(
      <MemoryRouter>
        <ListIcons />
      </MemoryRouter>
    )

    // esto revisa que el element <ul> de <ListIcons/> se renderiza
    const element = screen.getByRole('listIcons')

    expect(element).to.exist
  })

  it('comfirma que el elemento li se esta renderizando', () => {
    render(
      <MemoryRouter>
        <ListIcons />
      </MemoryRouter>
    )
    // verifica que el elemento <li> existe en el DOM
    const element = screen.getAllByRole('li')

    expect(element).to.be.lengthOf(4)
  })

  it('comfirma que el elemento img se renderiza', () => {
    render(
      <MemoryRouter>
        <ListIcons />
      </MemoryRouter>
    )

    const element = screen.getAllByRole('img')

    expect(element).to.be.lengthOf(4)
  })
})
