import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders the Lichargic wordmark', () => {
    render(<Nav />)
    expect(screen.getByText('Lichargic')).toBeInTheDocument()
  })

  it('renders the get in touch link with mailto href', () => {
    render(<Nav />)
    const link = screen.getByRole('link', { name: /get in touch/i })
    expect(link).toHaveAttribute('href', 'mailto:hi@lichargic.com')
  })

  it('renders work and about nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('has a nav landmark', () => {
    render(<Nav />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
