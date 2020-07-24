import { ConsoleAbstractPrompt } from '../index';

class ConsolePrompt extends ConsoleAbstractPrompt {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}

describe('ConsoleAbstractPrompt', () => {
  const prompt: ConsolePrompt = new ConsolePrompt();

  test('default type must be input', () => {
    expect(prompt.getType()).toBe('input');
  });

  test('default name must be prompt', () => {
    expect(prompt.getName()).toBe('answer');
  });

  test('default message must be empty', () => {
    expect(prompt.getMessage()).toBe('');
  });

  test('default format/input callback must be undefined', () => {
    expect(prompt.getInputCallback()).toBeUndefined();
  });

  test('default result/submit callback must be undefined', () => {
    expect(prompt.getSubmitCallback()).toBeUndefined();
  });

  test('default validate/validator callback must be undefined', () => {
    expect(prompt.getValidator()).toBeUndefined();
  });

  test('footer value must be undefined', () => {
    expect(prompt.getFooter()).toBeUndefined();
  });
});
