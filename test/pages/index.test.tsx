import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../pages/index'
import { ThemeProvider, theme } from '@chakra-ui/core'

const renderWithProvider = (
  ui,
  { providerProps = {}, ...renderOptions } = {}
) => {
  return render(
    <ThemeProvider theme={theme} {...providerProps}>
      {ui}
    </ThemeProvider>,
    renderOptions
  )
}

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with buttons alert', () => {
    const { getByText } = renderWithProvider(<Home />, {})

    getByText('Emotion CSS')
    getByText('Emotion React')
    getByText('Chakra-UI')
  })
})
