import { ConsoleFormPrompt } from '../index';
import { ChoiceItemValueType } from '../src/Prompt/Form/console.form.prompt';

describe('ConsoleFormPrompt', () => {
  const formPrompt: ConsoleFormPrompt = new ConsoleFormPrompt('Please fill out this form:');

  test('type must be form', () => {
    expect(formPrompt.getType()).toBe('form');
  });

  test('name must be answer', () => {
    expect(formPrompt.getName()).toBe('form');
  });

  test('message must be: Please fill out this form:', () => {
    expect(formPrompt.getMessage()).toBe('Please fill out this form:');
  });

  test('choices value must be empty', () => {
    expect(formPrompt.getChoices()).toStrictEqual([]);
  });

  test('choice value must be added', () => {
    const choice: ChoiceItemValueType = { name: 'name', message: 'Enter your name', initial: '' };
    formPrompt.addChoice('name', 'Enter your name', '');

    expect(formPrompt.getChoices()).toContainEqual(choice);
  });

  test('choice value must be removed', () => {
    const choice: ChoiceItemValueType = { name: 'choice', message: 'choice', initial: '' };
    const choiceToRemove: ChoiceItemValueType = { name: 'remove', message: 'remove', initial: '' };
    const choices: ChoiceItemValueType[] = [choice, choiceToRemove];
    formPrompt.setChoices(choices);
    formPrompt.removeChoice('remove');

    expect(formPrompt.getChoices()).toHaveLength(1);
    expect(formPrompt.getChoices()).toContainEqual(choice);
  });
});
