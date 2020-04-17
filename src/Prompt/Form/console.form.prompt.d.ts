import { ConsolePromptInterface } from '../console.prompt';

export type ChoiceItemValueType = {
  /**
   * Used as the key for the answer on the returned values (answers) object.
   */
  name: string;

  /**
   * The message to display when the prompt is rendered in the terminal.
   */
  message: string;

  /**
   * Default value.
   */
  initial?: string;
};

/**
 * Form console prompt question type.
 */
export type ConsoleFormPromptQuestionType = {
  /**
   * List of choices.
   *
   * @default []
   */
  choices: ChoiceItemValueType[];
};

/**
 * Form console prompt interface.
 */
export interface ConsoleFormPromptInterface extends ConsolePromptInterface {
  /**
   * Get list of choices.
   */
  getChoices(): ChoiceItemValueType[];
}
