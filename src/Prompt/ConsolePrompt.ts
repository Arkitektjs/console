import { prompt as enquirerPrompt } from 'enquirer';
import {
  ConsolePromptInterface, ConsolePromptQuestionType,
} from './console.prompt';
import { ConsoleAbstractPrompt } from './ConsoleAbstractPrompt';

/**
 * Input console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import {
 *        ConsolePasswordPrompt,
 *        ConsoleNumeralPrompt,
 *        ConsolePrompt,
 *      } from '@deltarm/console';
 *
 *      const password: ConsolePasswordPrompt = new ConsolePasswordPrompt('Password: ');
 *      const numeral: ConsoleNumeralPrompt = new ConsoleNumeralPrompt('Number: ');
 *
 *      const prompt: ConsolePrompt = new ConsolePrompt();
 *      prompt.addPrompt(password).addPrompt(numeral);
 *      prompt.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      prompt.prompt();
 */
class ConsolePrompt extends ConsoleAbstractPrompt {
  /**
   * List of prompts.
   */
  private _prompts: ConsolePromptInterface[];

  /**
   * Constructor.
   */
  constructor() {
    super();
    this._prompts = [];
  }

  /**
   * Set prompts.
   *
   * @param prompts - List of prompts to set.
   */
  public setPrompts(prompts: ConsolePromptInterface[]): this {
    this._prompts = prompts;

    return this;
  }

  /**
   * Add prompt.
   *
   * @param prompt - Prompt to add.
   */
  public addPrompt(prompt: ConsolePromptInterface): this {
    this._prompts.push(prompt);

    return this;
  }

  /**
   * Get prompts.
   */
  public getPrompts(): ConsolePromptInterface[] {
    return this._prompts;
  }

  /**
   * Prompt question.
   */
  public prompt(): this {
    const prompts: ConsolePromptQuestionType[] = [];
    this._prompts.forEach((prompt) => {
      prompts.push(prompt.getQuestion());
    });

    (async (): Promise<object> => await enquirerPrompt(prompts))()
      .then(this.getSuccessCallback())
      .catch(this.getErrorCallback());

    return this;
  }
}

export { ConsolePrompt };
