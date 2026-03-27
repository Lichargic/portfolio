import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders first name', () => {
    render(<Hero />)
    expect(screen.getByText('Aman')).toBeInTheDocument()
  })

  it('renders last name', () => {
    render(<Hero />)
    expect(screen.getByText('Malik')).toBeInTheDocument()
  })

  it('renders role label', () => {
    render(<Hero />)
    expect(screen.getByText(/Full Stack/i)).toBeInTheDocument()
  })

  it('renders hero descriptor', () => {
    render(<Hero />)
    expect(
      screen.getByText(/I build things, ship them/i)
    ).toBeInTheDocument()
  })

  it('renders View Work CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /View Work/i })).toBeInTheDocument()
  })

  it('renders email CTA', () => {
    render(<Hero />)
    const links = screen.getAllByRole('link', { name: /hi@lichargic\.com/i })
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders graduation photo', () => {
    render(<Hero />)
    expect(screen.getByAltText(/Aman Malik/i)).toBeInTheDocument()
  })
})
