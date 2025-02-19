import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders MyComponent', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: /qwerty/i });
    expect(header).toBeInTheDocument();
  });
});
