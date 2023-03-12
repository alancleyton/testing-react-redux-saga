import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Should render correctly', () => {
    render(<App />);
    expect(screen.getByText(/Hello world!/i)).toBeInTheDocument();
  });
});
