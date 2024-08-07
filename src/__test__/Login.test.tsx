import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Login from '../app/(auth)/login/page'
 
test('Page Login', () => {
  render(<Login />)
  expect(screen.getByRole('heading', { level: 1, name: 'Next JS Starter..' })).toBeDefined()
})