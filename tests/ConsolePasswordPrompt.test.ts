import { ConsolePasswordPrompt } from '../index';

describe('ConsolePasswordPrompt', () => {
  const password: ConsolePasswordPrompt = new ConsolePasswordPrompt('What is your password?');

  test('type must be password', () => {
    expect(password.getType()).toBe('password');
  });

  test('name must be answer', () => {
    expect(password.getName()).toBe('password');
  });

  test('message must be: What is your password?', () => {
    expect(password.getMessage()).toBe('What is your password?');
  });
});
