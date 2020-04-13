import { prompt as enquirerPrompt } from 'enquirer';

/**
 * Prompt base class.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 */
abstract class ConsoleAbstractPrompt implements Console.Prompt.Interface {
  /**
   * Stores current question.
   */
  protected _question: Console.Prompt.QuestionType = {
    type: '',
    name: '',
    message: '',
    initial: '',
    format: undefined,
    result: undefined,
    validate: undefined,
  };

  /**
   * Stores success callback.
   */
  protected _onSuccess: Console.Prompt.OnSuccessCallbackType = null;

  /**
   * Stores error callback.
   */
  protected _onError: Console.Prompt.OnErrorCallbackType = null;

  /**
   * Get type of prompt.
   */
  public getType(): Console.Prompt.TypeValueType {
    return this._question.type;
  }

  /**
   * Set prompt type.
   *
   * @param value - Prompt type.
   */
  protected setType(value: Console.Prompt.TypeValueType): this {
    this._question.type = value;

    return this;
  }

  /**
   * Get key for answer.
   * Used as the key for the answer on the returned values (answers) object.
   */
  public getName(): Console.Prompt.NameValueType {
    return this._question.name;
  }

  /**
   * Set key for answer.
   *
   * @param value - Used as the key for the answer on the returned values (answers) object.
   */
  public setName(value: Console.Prompt.NameValueType): this {
    this._question.name = value;

    return this;
  }

  /**
   * Get message to display when the prompt is rendered in the terminal.
   */
  public getMessage(): Console.Prompt.MessageValueType {
    return this._question.message;
  }

  /**
   * Set message to display when the prompt is rendered in the terminal.
   *
   * @param value - Message to display.
   */
  public setMessage(value: Console.Prompt.MessageValueType): this {
    this._question.message = value;

    return this;
  }

  /**
   * Get  default value to return if the user does not supply a value.
   */
  public getDefaultValue(): Console.Prompt.DefaultValueType {
    return this._question.initial;
  }

  /**
   * Set  default value to return if the user does not supply a value.
   *
   * @param value - Default value.
   */
  public setDefaultValue(value: Console.Prompt.DefaultValueType): this {
    this._question.initial = value;

    return this;
  }

  /**
   * Set function to use to format user input in the terminal.
   *
   * @param callback - Formatting function in the terminal.
   */
  public onInput(callback: Console.Prompt.OnInputCallbackType): this {
    this._question.format = callback;

    return this;
  }

  /**
   * Get function to use to format user input in the terminal.
   */
  public getInputCallback(): Console.Prompt.OnInputCallbackType {
    return this._question.format;
  }

  /**
   * Set function to use to format the final submitted value.
   *
   * @param callback - Formatting function for the final value.
   */
  public onSubmit(callback: Console.Prompt.OnSubmitCallbackType): this {
    this._question.result = callback;

    return this;
  }

  /**
   * Get function to use to format the final submitted value.
   */
  public getSubmitCallback(): Console.Prompt.OnSubmitCallbackType {
    return this._question.result;
  }

  /**
   * Set function to use to validate the submitted value before it's returned.
   * This function may return a boolean or a string.
   * If a string is returned it will be used as the validation error message.
   *
   * @param validator - Validator function.
   */
  public setValidator(validator: Console.Prompt.ValidatorCallbackType): this {
    this._question.validate = validator;

    return this;
  }

  /**
   * Get validator function.
   */
  public getValidator(): Console.Prompt.ValidatorCallbackType {
    return this._question.validate;
  }

  /**
   * Set current question object.
   *
   * @param question - Question object.
   */
  public setQuestion(question: Console.Prompt.QuestionType): this {
    this._question = question;

    return this;
  }

  /**
   * Get current question object.
   */
  public getQuestion(): Console.Prompt.QuestionType {
    return this._question;
  }

  /**
   * Set success callback.
   *
   * @param callback - Success callback.
   */
  public onSuccess(callback: Console.Prompt.OnSuccessCallbackType): this {
    this._onSuccess = callback;

    return this;
  }

  /**
   * Get success callback.
   */
  public getSuccessCallback(): Console.Prompt.OnSuccessCallbackType {
    return this._onSuccess;
  }

  /**
   * Set error callback.
   *
   * @param callback
   */
  public onError(callback: Console.Prompt.OnErrorCallbackType): this {
    this._onError = callback;

    return this;
  }

  /**
   * Get error callback.
   */
  public getErrorCallback(): Console.Prompt.OnErrorCallbackType {
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
