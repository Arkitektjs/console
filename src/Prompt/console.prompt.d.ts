/**
 * Type value type.
 */
export type TypeValueType = string | (() => string);

/**
 * Name value type.
 */
export type NameValueType = string | (() => string);

/**
 * Message value type.
 */
export type MessageValueType = string | (() => string);

/**
 * On input callback type.
 */
export type OnInputCallbackType = undefined | ((value: string) => string);

/**
 * On submit callback type.
 */
export type OnSubmitCallbackType = undefined | ((value: string) => string);

/**
 * Validator callback type.
 */
export type ValidatorCallbackType = undefined | ((value: string) => string | boolean);

/**
 * Footer value type.
 */
export type FooterValueType = undefined | string;

/**
 * On success callback type.
 */
export type OnSuccessCallbackType = null | ((answer: object) => void);

/**
 * On error callback type.
 */
export type OnErrorCallbackType = null | ((error: object) => void);

/**
 * Console prompt question type.
 */
export type ConsolePromptQuestionType = {
  /**
   * Value to determine the type of prompt to run.
   *
   * @default 'input'
   */
  type: TypeValueType;

  /**
   * Used as the key for the answer on the returned values (answers) object.
   *
   * @default 'prompt'
   */
  name: NameValueType;

  /**
   * The message to display when the prompt is rendered in the terminal.
   *
   * @default ''
   */
  message: MessageValueType;

  /**
   * Function to format user input in the terminal.
   *
   * @default undefined
   */
  format: OnInputCallbackType;

  /**
   * Function to format the final submitted value before it's returned.
   *
   * @default undefined
   */
  result: OnSubmitCallbackType;

  /**
   * Function to validate the submitted value before it's returned. This function may return a boolean or a string.
   * If a string is returned it will be used as the validation error message.
   *
   * @default undefined
   */
  validate: ValidatorCallbackType;

  /**
   * Footer message.
   *
   * @default undefined
   */
  footer: FooterValueType;
};

/**
 * Console prompt interface.
 */
export interface ConsolePromptInterface {
  /**
   * Get export type of prompt.
   */
  getType(): TypeValueType;

  /**
   * Get key for answer.
   * Used as the key for the answer on the returned values (answers) object.
   */
  getName(): NameValueType;

  /**
   * Get message to display when the prompt is rendered in the terminal.
   */
  getMessage(): MessageValueType;

  /**
   * Get function to use to format user input in the terminal.
   */
  getInputCallback(): OnInputCallbackType;

  /**
   * Get function to use to format the final submitted value.
   */
  getSubmitCallback(): OnSubmitCallbackType;

  /**
   * Get validator function.
   */
  getValidator(): ValidatorCallbackType;

  /**
   * Get current question object.
   */
  getQuestion(): ConsolePromptQuestionType;

  /**
   * Get success callback.
   */
  getSuccessCallback(): OnSuccessCallbackType;

  /**
   * Get error callback.
   */
  getErrorCallback(): OnErrorCallbackType;

  /**
   * Prompt question.
   */
  prompt(): ConsolePromptInterface;
}
