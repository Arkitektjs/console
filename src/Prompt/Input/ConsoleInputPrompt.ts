import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';


/**
 * Console input prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleInputPrompt } from '@arkitektjs/console';
 *
 *      const input: ConsoleInputPrompt = new ConsoleInputPrompt();
 *
 *      input.setName('name');
 *      input.setMessage('What your name?');
 *      input.onSuccess((answer) => {
 *        console.log(answer); // { name: 'John' }
 *      });
 *      input.prompt();
 */
class ConsoleInputPrompt extends ConsoleAbstractPrompt {
  constructor() {
    super();
    this.setType('input');
  }
}

export { ConsoleInputPrompt };
