// import necessary react testing library helpers here
import {render, fireEvent, screen} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const initialVal = parseInt(screen.getByTestId('count').textContent);

  fireEvent.click(screen.getByText('+'));
  expect(count).toHaveTextContent(initialVal + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const initialVal = parseInt(screen.getByTestId('count').textContent);

  fireEvent.click(screen.getByText('-'));
  expect(count).toHaveTextContent(initialVal - 1);
});
