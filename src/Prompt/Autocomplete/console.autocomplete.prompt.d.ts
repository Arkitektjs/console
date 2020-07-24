import { ConsolePromptInterface } from '../console.prompt';

/**
 * Initial value type.
 */
export type InitialValueType = number;

/**
 * Limit of suggestion value type.
 */
export type LimitValueType = number;

/**
 * Choices value type.
 */
export type ChoicesValueType = string[];

/**
 * Multiple selection value type.
 */
export type MultipleValueType = boolean;

/**
 * Filter choices callback value type.
 */
export type OnFilterValueType = undefined | ((input: string, choices: string[]) => string[]);

/**
 * Question type for autocomplete console prompt.
 */
export type ConsoleAutocompletePromptQuestionType = {
  /**
   * Initial value. Preselected item in the list of choices.
   *
   * @default 0
   */
  initial: InitialValueType;

  /**
   * Limit of suggestion.
   *
   * @default 10
   */
  limit: LimitValueType;

  /**
   * Suggestion values.
   *
   * @default []
   */
  choices: ChoicesValueType;

  /**
   * Enable or disable multiple selection. Allow multiple choices to be selected.
   *
   * @default false
   */
  multiple: MultipleValueType;

  /**
   * Function that filters choices. Takes user input and a choices array, and returns a list of matching choices.
   *
   * @default undefined
   */
  suggest: OnFilterValueType;
};


/**
 * Input console prompt interface.
 */
export interface ConsoleAutocompletePromptInterface extends ConsolePromptInterface {
  /**
   * Get preselected value.
   */
  getInitialValue(): InitialValueType;

  /**
   * Get limit of choices.
   */
  getLimit(): LimitValueType;

  /**
   * Get list of choices.
   */
  getChoices(): ChoicesValueType;

  /**
   * Check if multiple selection is enabled.
   */
  isMultiple(): MultipleValueType;

  /**
   * Get filter callback.
   */
  getFilterCallback(): OnFilterValueType;
}
