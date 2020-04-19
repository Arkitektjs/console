import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { MessageValueType } from '../console.prompt';

/**
 * Confirm console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleConfirmPrompt as Confirm } from '@arkitektjs/console';
 *
 *      const confirm: Confirm = new Confirm('Are you ok?');
 *
 *      confirm.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      confirm.prompt();
 */
class ConsoleConfirmPrompt extends ConsoleAbstractPrompt {
  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'confirm',
      name: 'confirm',
      message,
    };
  }
}

export { ConsoleConfirmPrompt };
