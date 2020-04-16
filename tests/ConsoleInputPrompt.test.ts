import { ConsoleInputPrompt } from '../index';

describe('ConsoleInputPrompt', () => {
  const inputPrompt: ConsoleInputPrompt = new ConsoleInputPrompt('What your name?');

  test('type must be input', () => {
    expect(inputPrompt.getType()).toBe('input');
  });

  test('name must be prompt', () => {
    expect(inputPrompt.getName()).toBe('answer');
  });

  test('message must be: What your name?', () => {
    expect(inputPrompt.getMessage()).toBe('What your name?');
  });

  test('initial value must be empty', () => {
    expect(inputPrompt.getInitialValue()).toBe('');
  });
});
