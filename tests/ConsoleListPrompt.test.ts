import { ConsoleListPrompt } from '../index';

describe('ConsoleListPrompt', () => {
  const confirm: ConsoleListPrompt = new ConsoleListPrompt('Type comma-separated keywords');

  test('type must be list', () => {
    expect(confirm.getType()).toBe('list');
  });

  test('name must be answer', () => {
    expect(confirm.getName()).toBe('answer');
  });

  test('message must be: Type comma-separated keywords', () => {
    expect(confirm.getMessage()).toBe('Type comma-separated keywords');
  });
});
