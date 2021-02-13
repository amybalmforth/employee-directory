import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('title is visible', () => {
  render(<App />);
  const title = screen.getByText('Employees');
  expect(title).toBeInTheDocument();
});

test('name input is visible', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Employee name');
  expect(input).toBeInTheDocument();
});

test('email input is visible', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Employee email');
  expect(input).toBeInTheDocument();
});

test('can enter a name and email and submit', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Employee name'), {
      target: { value: 'New Person' },
  });
  fireEvent.change(screen.getByPlaceholderText('Employee email'), {
      target: { value: 'new@person.com' },
  });
  fireEvent.click(screen.getByText('Submit'))
  const person = screen.getByText('New Person - new@person.com');
  expect(person).toBeInTheDocument();
});

test('can delete a name', () => {
  const app = render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Employee name'), {
      target: { value: 'Person to delete' },
  });
  fireEvent.change(screen.getByPlaceholderText('Employee email'), {
      target: { value: 'person@delete.com' },
  });
  fireEvent.click(screen.getByText('Submit'))
  const toDelete = app.container.querySelector('#delete');
  const person = screen.getByText('Person to delete - person@delete.com');
  fireEvent.click(toDelete)
  expect(person).not.toBeInTheDocument();
});
