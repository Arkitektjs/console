import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { ConsolePromptQuestionType, MessageValueType } from '../console.prompt';
import {
  ChoiceItemValueType,
  ConsoleFormPromptQuestionType,
  ConsoleFormPromptInterface,
} from './console.form.prompt';

/**
 * Form console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleFormPrompt as Form } from '@deltarm/console';
 *
 *      const form: Form = new Form('My form:');
 *      form.addChoice('name', 'Enter your name');
 *      form.addChoice('description', 'Enter your description');
 *
 *      form.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      form.prompt();
 */
class ConsoleFormPrompt extends ConsoleAbstractPrompt implements ConsoleFormPromptInterface {
  /**
   * Question type for input prompt.
   */
  protected _question: ConsolePromptQuestionType & ConsoleFormPromptQuestionType;

  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'form',
      name: 'form',
      message,
      choices: [],
    };
  }

  /**
   * Set choices.
   *
   * @param choices - List of choices.
   */
  public setChoices(choices: ChoiceItemValueType[]): this {
    this._question.choices = choices;

    return this;
  }

  /**
   * Get list of choices.
   */
  public getChoices(): ChoiceItemValueType[] {
    return this._question.choices;
  }

  /**
   * Add choice.
   *
   * @param choice - Choice to add.
   */

  /**
   * Add choice.
   *
   * @param name - Used as the key for the answer on the returned values (answers) object.
   * @param message - The message to display when the prompt is rendered in the terminal.
   * @param initial - Default value.
   */
  public addChoice(name: string, message: string, initial?: string): this {
    const choice: ChoiceItemValueType = { name, message, initial };
    this._question.choices.push(choice);

    return this;
  }

  public removeChoice(name: string): this {
    this._question.choices = this._question.choices.filter((c) => c.name !== name);

    return this;
  }
}

export { ConsoleFormPrompt };
