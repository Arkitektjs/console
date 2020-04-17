import { ConsoleConfirmPrompt } from '../index';

describe('ConsoleConfirmPrompt', () => {
  const confirm: ConsoleConfirmPrompt = new ConsoleConfirmPrompt('Are you ok?');

  test('type must be confirm', () => {
    expect(confirm.getType()).toBe('confirm');
  });

  test('name must be answer', () => {
    expect(confirm.getName()).toBe('answer');
  });

  test('message must be: Are you ok?', () => {
    expect(confirm.getMessage()).toBe('Are you ok?');
  });
});
