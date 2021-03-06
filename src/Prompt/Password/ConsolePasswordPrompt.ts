import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { MessageValueType } from '../console.prompt';

/**
 * Password console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsolePasswordPrompt as Password } from '@deltarm/console';
 *
 *      const password: Password = new Password('What is your password?');
 *
 *      password.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      password.prompt();
 */
class ConsolePasswordPrompt extends ConsoleAbstractPrompt {
  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'password',
      name: 'password',
      message,
    };
  }
}

export { ConsolePasswordPrompt };
