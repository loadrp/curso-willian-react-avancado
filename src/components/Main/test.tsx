import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('shoud render the heading', () => {
    //renderiza o component
    const { container } = render(<Main />)
    // busca o elemento e verifica existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
