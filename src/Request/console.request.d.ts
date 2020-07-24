/**
 * Console request interface.
 */
export interface ConsoleRequestInterface {
  /**
   * Get command.
   */
  getCommand(): string | null;

  /**
   * Check if this request has a command.
   */
  hasCommand(): boolean;

  /**
   * Get sub commands.
   */
  getSubCommands(): string[];

  /**
   * Check if this request has a sub commands.
   */
  hasSubCommands(): boolean;

  /**
   * Get options.
   */
  getOptions(): ConsoleRequestOptionType;

  /**
   * Get option.
   */
  getOption(option: string): (string | boolean)[];

  /**
   * Check if this request has a given option.
   */
  hasOption(option: string): boolean;

  /**
   * Check if this request has at least one option.
   */
  hasOptions(): boolean;

  /**
   * Get arguments.
   */
  getArguments(): string[];

  /**
   * Parses arguments.
   */
  parse(args: string[]): ConsoleRequestInterface;
}

/**
 * Console request option type.
 */
export type ConsoleRequestOptionType = {
  [key: string]: (string | boolean)[];
}
