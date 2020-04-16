import { ConsolePromptInterface } from '../console.prompt';

/**
 * Username value type.
 */
export type UsernameValueType = string;

/**
 * Password value type.
 */
export type PasswordValueType = string;

/**
 * Password value type.
 */
export type PasswordVisibilityValueType = boolean;

/**
 * Basic auth console prompt question type.
 */
export type ConsoleBasicAuthPromptQuestionType = {
  /**
   * Username.
   *
   * @default ''
   */
  username: UsernameValueType;

  /**
   * Password.
   *
   * @default ''
   */
  password: PasswordValueType;

  /**
   * Password visibility.
   *
   * @default false
   */
  showPassword: PasswordVisibilityValueType;
};

/**
 * Input console prompt interface.
 */
export interface ConsoleBasicAuthPromptInterface extends ConsolePromptInterface {
  /**
   * Get username.
   */
  getUsername(): UsernameValueType;

  /**
   * Get password.
   */
  getPassword(): PasswordValueType;

  /**
   * Get password visibility.
   */
  isShowPassword(): PasswordVisibilityValueType;
}
