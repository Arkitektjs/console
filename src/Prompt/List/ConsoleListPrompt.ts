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
 *      import { ConsoleListPrompt } from '@arkitektjs/console';
 *
 *      const list: ConsoleListPrompt = new ConsoleListPrompt('Type comma-separated keywords');
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
      ...super._question,
      type: 'list',
      name: 'answer',
      message,
    };
  }
}

export { ConsoleListPrompt };
