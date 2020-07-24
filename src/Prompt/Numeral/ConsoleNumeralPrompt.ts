import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { MessageValueType } from '../console.prompt';

/**
 * Numeral console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleNumeralPrompt as Numeral } from '@deltarm/console';
 *
 *      const numeral: Numeral = new Numeral('Please enter a number');
 *
 *      numeral.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      numeral.prompt();
 */
class ConsoleNumeralPrompt extends ConsoleAbstractPrompt {
  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'numeral',
      name: 'numeral',
      message,
    };
  }
}

export { ConsoleNumeralPrompt };
