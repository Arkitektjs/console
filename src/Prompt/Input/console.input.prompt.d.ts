import { ConsolePromptInterface } from '../console.prompt';

/**
 * Initial value type.
 */
export type InitialValueType = string | (() => string);

/**
 * Input console prompt question type.
 */
export type ConsoleInputPromptQuestionType = {
  /**
   * Initial value. Default value to return if the user does not supply a value.
   *
   * @default ''
   */
  initial: InitialValueType;
};

/**
 * Input console prompt interface.
 */
export interface ConsoleInputPromptInterface extends ConsolePromptInterface {
  /**
   * Get default value to return if the user does not supply a value.
   */
  getInitialValue(): InitialValueType;
}
