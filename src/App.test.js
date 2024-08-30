import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
import UpvoteList from './UpvoteList';

test('clicking UpVote button changes state', () => {
  render(<UpvoteList numVotes={2} initialState='default' />); //create list with 2 buttons
  const buttons = screen.getAllByRole('button');
  const button1 = buttons[0];
  const button2 = buttons[1];

  //assert that both buttons are default
  expect(button1.classList.contains('default')).toBe(true);
  expect(button2.classList.contains('default')).toBe(true);

  fireEvent.click(button1); //click first button

  //check that both buttons are selected and not default
  expect(button1.classList.contains('selected')).toBe(true);
  expect(button2.classList.contains('selected')).toBe(true);
  expect(button1.classList.contains('default')).toBe(false);
  expect(button2.classList.contains('default')).toBe(false);

});
