import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { MessageValueType } from '../console.prompt';

/**
 * List console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleListPrompt as List } from '@arkitektjs/console';
 *
 *      const list: List = new List('Type comma-separated keywords');
 *
 *      list.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      list.prompt();
 */
class ConsoleListPrompt extends ConsoleAbstractPrompt {
  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'list',
      name: 'list',
      message,
    };
  }
}

export { ConsoleListPrompt };
