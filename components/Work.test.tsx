import { render, screen } from '@testing-library/react'
import Work from '@/components/Work'

describe('Work', () => {
  it('renders the section label', () => {
    render(<Work />)
    expect(screen.getByText(/§ Work/i)).toBeInTheDocument()
  })

  it('renders Angie as a featured project', () => {
    render(<Work />)
    expect(screen.getByText(/Angie SkyHelper/i)).toBeInTheDocument()
  })

  it('renders Medical Center project', () => {
    render(<Work />)
    expect(screen.getByText(/Medical Center/i)).toBeInTheDocument()
  })

  it('renders Pi-hole project', () => {
    render(<Work />)
    expect(screen.getByRole('heading', { name: /Pi-hole/i })).toBeInTheDocument()
  })

  it('renders Angie live link', () => {
    render(<Work />)
    const link = screen.getByRole('link', { name: /angie\.lichargic\.com/i })
    expect(link).toHaveAttribute('href', 'https://angie.lichargic.com')
  })

  it('renders Angie case study link', () => {
    render(<Work />)
    const link = screen.getByRole('link', { name: /case study/i })
    expect(link).toHaveAttribute('href', '/angie')
  })
})
