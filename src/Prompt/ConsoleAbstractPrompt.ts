import { prompt as enquirerPrompt } from 'enquirer';
import {
  ConsolePromptInterface,
  ConsolePromptQuestionType,
  MessageValueType,
  NameValueType,
  OnErrorCallbackType,
  OnInputCallbackType,
  OnSubmitCallbackType,
  OnSuccessCallbackType,
  TypeValueType,
  ValidatorCallbackType,
} from './console.prompt';

/**
 * Prompt base class.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 */
abstract class ConsoleAbstractPrompt implements ConsolePromptInterface {
  /**
   * Question type for base prompt.
   */
  protected _question: ConsolePromptQuestionType;

  /**
   * Stores success callback.
   */
  protected _onSuccess: OnSuccessCallbackType;

  /**
   * Stores error callback.
   */
  protected _onError: OnErrorCallbackType;

  /**
   * Constructor.
   */
  protected constructor() {
    this._question = {
      type: 'input',
      name: 'prompt',
      message: '',
      format: undefined,
      result: undefined,
      validate: undefined,
    };
    this._onSuccess = null;
    this._onError = null;
  }

  /**
   * Get type of prompt.
   */
  public getType(): TypeValueType {
    return this._question.type;
  }

  /**
   * Set type of prompt.
   *
   * @param type - Type of prompt.
   */
  protected setType(type: TypeValueType): this {
    this._question.type = type;

    return this;
  }

  /**
   * Get key for answer.
   * Used as the key for the answer on the returned values (answers) object.
   */
  public getName(): NameValueType {
    return this._question.name;
  }

  /**
   * Set key for answer.
   *
   * @param name - Used as the key for the answer on the returned values (answers) object.
   */
  public setName(name: NameValueType): this {
    this._question.name = name;

    return this;
  }

  /**
   * Get message to display when the prompt is rendered in the terminal.
   */
  public getMessage(): MessageValueType {
    return this._question.message;
  }

  /**
   * Set message to display when the prompt is rendered in the terminal.
   *
   * @param message - Message to display.
   */
  public setMessage(message: MessageValueType): this {
    this._question.message = message;

    return this;
  }

  /**
   * Set function to use to format user input in the terminal.
   *
   * @param callback - Formatting function in the terminal.
   */
  public onInput(callback: OnInputCallbackType): this {
    this._question.format = callback;

    return this;
  }

  /**
   * Get function to use to format user input in the terminal.
   */
  public getInputCallback(): OnInputCallbackType {
    return this._question.format;
  }

  /**
   * Set function to use to format the final submitted value.
   *
   * @param callback - Formatting function for the final value.
   */
  public onSubmit(callback: OnSubmitCallbackType): this {
    this._question.result = callback;

    return this;
  }

  /**
   * Get function to use to format the final submitted value.
   */
  public getSubmitCallback(): OnSubmitCallbackType {
    return this._question.result;
  }

  /**
   * Set function to use to validate the submitted value before it's returned.
   * This function may return a boolean or a string.
   * If a string is returned it will be used as the validation error message.
   *
   * @param validator - Validator function.
   */
  public setValidator(validator: ValidatorCallbackType): this {
    this._question.validate = validator;

    return this;
  }

  /**
   * Get validator function.
   */
  public getValidator(): ValidatorCallbackType {
    return this._question.validate;
  }

  /**
   * Set current question object.
   *
   * @param question - Question object.
   */
  public setQuestion(question: ConsolePromptQuestionType): this {
    this._question = question;

    return this;
  }

  /**
   * Get current question object.
   */
  public getQuestion(): ConsolePromptQuestionType {
    return this._question;
  }

  /**
   * Set success callback.
   *
   * @param callback - Success callback.
   */
  public onSuccess(callback: OnSuccessCallbackType): this {
    this._onSuccess = callback;

    return this;
  }

  /**
   * Get success callback.
   */
  public getSuccessCallback(): OnSuccessCallbackType {
    return this._onSuccess;
  }

  /**
   * Set error callback.
   *
   * @param callback
   */
  public onError(callback: OnErrorCallbackType): this {
    this._onError = callback;

    return this;
  }

  /**
   * Get error callback.
   */
  public getErrorCallback(): OnErrorCallbackType {
    return this._onError;
  }

  /**
   * Prompt question.
   */
  public prompt(): this {
    (async (): Promise<object> => await enquirerPrompt(this.getQuestion()))()
      .then(this.getSuccessCallback())
      .catch(this.getErrorCallback());

    return this;
  }
}

export { ConsoleAbstractPrompt };
