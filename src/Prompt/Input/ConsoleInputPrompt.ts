import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { ConsolePromptQuestionType, MessageValueType } from '../console.prompt';
import {
  InitialValueType,
  ConsoleInputPromptQuestionType,
  ConsoleInputPromptInterface,
} from './console.input.prompt';

/**
 * Input console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleInputPrompt as Input } from '@deltarm/console';
 *
 *      const input: Input = new Input('Your name: ');
 *
 *      input.onSuccess((answer) => {
 *        console.log(answer); // { prompt: 'John' }
 *      });
 *      input.prompt();
 */
class ConsoleInputPrompt extends ConsoleAbstractPrompt implements ConsoleInputPromptInterface {
  /**
   * Question type for input prompt.
   */
  protected _question: ConsolePromptQuestionType & ConsoleInputPromptQuestionType;

  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'input',
      name: 'input',
      message,
      initial: '',
    };
  }

  /**
   * Get default value to return if the user does not supply a value.
   */
  public getInitialValue(): InitialValueType {
    return this._question.initial;
  }

  /**
   * Set default value to return if the user does not supply a value.
   *
   * @param initialValue - Default value.
   */
  public setInitialValue(initialValue: InitialValueType): this {
    this._question.initial = initialValue;

    return this;
  }
}

export { ConsoleInputPrompt };
