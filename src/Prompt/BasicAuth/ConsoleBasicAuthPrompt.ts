import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import { ConsolePromptQuestionType, MessageValueType } from '../console.prompt';
import {
  UsernameValueType,
  PasswordValueType,
  PasswordVisibilityValueType,
  ConsoleBasicAuthPromptQuestionType,
  ConsoleBasicAuthPromptInterface,
} from './console.basic.auth.prompt';

/**
 * Basic auth console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleBasicAuthPrompt } from '@arkitektjs/console';
 *
 *      const basicAuth: ConsoleBasicAuthPrompt = new ConsoleBasicAuthPrompt('What your name?');
 *
 *      basicAuth.onSuccess((answer) => {
 *        console.log(answer);
 *      });
 *      basicAuth.prompt();
 */
class ConsoleBasicAuthPrompt extends ConsoleAbstractPrompt implements ConsoleBasicAuthPromptInterface {
  /**
   * Question type for input prompt.
   */
  protected _question: ConsolePromptQuestionType & ConsoleBasicAuthPromptQuestionType;

  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...super._question,
      type: 'basicauth',
      name: 'answer',
      message,
      username: '',
      password: '',
      showPassword: false,
    };
  }

  /**
   * Set password.
   *
   * @param password - Password.
   */
  public setPassword(password: PasswordValueType): this {
    this._question.password = password;

    return this;
  }

  /**
   * Get password.
   */
  public getPassword(): PasswordValueType {
    return this._question.password;
  }

  /**
   * Set username.
   *
   * @param username - Username.
   */
  public setUsername(username: UsernameValueType): this {
    this._question.username = username;

    return this;
  }

  /**
   * Get username.
   */
  public getUsername(): UsernameValueType {
    return this._question.username;
  }

  /**
   * Check password visibility.
   */
  public isShowPassword(): PasswordVisibilityValueType {
    return this._question.showPassword;
  }

  /**
   * Set password visibility.
   *
   * @param visibility - Password visibility.
   */
  public setShowPassword(visibility: PasswordVisibilityValueType): this {
    this._question.showPassword = visibility;

    return this;
  }
}

export { ConsoleBasicAuthPrompt };
