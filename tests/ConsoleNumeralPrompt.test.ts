import { ConsoleNumeralPrompt } from '../index';

describe('ConsoleNumeralPrompt', () => {
  const numeral: ConsoleNumeralPrompt = new ConsoleNumeralPrompt('Please enter a number');

  test('type must be numeral', () => {
    expect(numeral.getType()).toBe('numeral');
  });

  test('name must be answer', () => {
    expect(numeral.getName()).toBe('answer');
  });

  test('message must be: Please enter a number', () => {
    expect(numeral.getMessage()).toBe('Please enter a number');
  });
});
