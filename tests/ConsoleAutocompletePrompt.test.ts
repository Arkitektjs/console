import { ConsoleAutocompletePrompt } from '../index';

describe('ConsoleAutocompletePrompt', () => {
  const autocomplete: ConsoleAutocompletePrompt = new ConsoleAutocompletePrompt('Make your choice:');

  test('type must be autocomplete', () => {
    expect(autocomplete.getType()).toBe('autocomplete');
  });

  test('name must be prompt', () => {
    expect(autocomplete.getName()).toBe('autocomplete');
  });

  test('message must be: Make your choice:', () => {
    expect(autocomplete.getMessage()).toBe('Make your choice:');
  });

  test('initial value must be 0', () => {
    expect(autocomplete.getInitialValue()).toStrictEqual(0);
  });

  test('limit must be 10', () => {
    expect(autocomplete.getLimit()).toStrictEqual(10);
  });

  test('choices must be []', () => {
    expect(autocomplete.getChoices()).toStrictEqual([]);
  });

  test('multiple must be false', () => {
    expect(autocomplete.isMultiple()).toBeFalsy();
  });

  test('suggest must be undefined', () => {
    expect(autocomplete.getFilterCallback()).toBeUndefined();
  });
});
