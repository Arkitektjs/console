import { ConsoleConfirmPrompt } from '../index';

describe('ConsoleInputPrompt', () => {
  const confirm: ConsoleConfirmPrompt = new ConsoleConfirmPrompt('Are you ok?');

  test('type must be confirm', () => {
    expect(confirm.getType()).toBe('confirm');
  });

  test('name must be prompt', () => {
    expect(confirm.getName()).toBe('answer');
  });

  test('message must be: What your name?', () => {
    expect(confirm.getMessage()).toBe('Are you ok?');
  });
});
