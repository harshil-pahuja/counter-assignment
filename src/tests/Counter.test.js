// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //Used ChatGPT for line 14
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
  //Check if the initial count is rendered and equals 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('0');
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  //Assert that the element is in the document 
  expect(countElement).toBeInTheDocument();
  //Assert that the text content of the count element is '0'
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  expect(countElement).toHaveTextContent('0');
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  expect(countElement).toHaveTextContent('0');
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');
});
