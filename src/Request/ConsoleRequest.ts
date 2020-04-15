import { ConsoleRequestInterface, ConsoleRequestOptionType } from './console.request';

/**
 * Parse console request values.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleRequest } from '@arkitektjs/console';
 *
 *      let request = new ConsoleRequest();
 *
 *      // Get help
 *      request.parse(['-h']);
 *      request.parse(['--help']);
 *      request.parse(['help']);
 *
 *      // Get version
 *      request.parse(['-v']);
 *      request.parse(['--version']);
 *      request.parse(['version']);
 *
 *      // List available commands
 *      request.parse(['--list']);
 *
 *      // Basic usage
 *      request.parse(['command', '--long', 'value', '-a', 'value']);
 *      console.log(request.getCommand());
 *
 *      // Sub commands
 *      request.parse(['command:sub1:sub2', '--long', 'value', '-a', 'value']);
 *      console.log(request.hasSubCommands()); // true
 *      console.log(request.getSubCommands()); // ['sub1', 'sub2']
 */
class ConsoleRequest implements ConsoleRequestInterface {
  /**
   * Parsed command.
   */
  private _command: string | null = null;

  private _subCommands: string[] = [];

  /**
   * Parsed options.
   */
  private _options: ConsoleRequestOptionType = {};

  /**
   * Parsed long options.
   */
  private _longOptions: ConsoleRequestOptionType = {};

  /**
   * Parsed short options
   */
  private _shortOptions: ConsoleRequestOptionType = {};

  /**
   * Parsed console arguments.
   */
  private _consoleArgs: string[] = [];

  /**
   * Long option regexp.
   */
  private _longOptionReg = /^--[a-z0-9]{2,}$/i;

  /**
   * Short option regexp.
   */
  private _shortOptionReg = /^-[a-z]$/i;

  /**
   * Set command.
   */
  public setCommand(command: string | null): this {
    if (!command) {
      return this;
    }

    this._subCommands = (command as string).split(':');

    this._command = (this._subCommands[0] as string);

    this._subCommands = this._subCommands.slice(1);

    return this;
  }

  /**
   * Get command.
   */
  public getCommand(): string | null {
    return this._command;
  }

  /**
   * Check if this request has a command.
   */
  public hasCommand(): boolean {
    return null !== this._command;
  }

  /**
   * Get sub commands.
   */
  public getSubCommands(): string[] {
    return this._subCommands;
  }

  /**
   * Check if this request has a sub commands.
   */
  public hasSubCommands(): boolean {
    return 0 !== this._subCommands.length;
  }

  /**
   * Set options.
   */
  public setOptions(options: ConsoleRequestOptionType): this {
    this._options = options;

    return this;
  }

  /**
   * Get options.
   */
  public getOptions(): ConsoleRequestOptionType {
    return this._options;
  }

  /**
   * Get option.
   */
  public getOption(option: string): (string | boolean)[] {
    return this._options[option];
  }

  /**
   * Add option.
   */
  public addOption(option: string, value: string | boolean): this {
    if (this._longOptionReg.test(option) || this._shortOptionReg.test(option)) {
      if (!Object.prototype.hasOwnProperty.call(this._options, option)) {
        this._options[option] = [];
      }

      this._options[option].push(value);
    }

    if (this._longOptionReg.test(option)) {
      this._longOptions[option] = this._options[option];
    }

    if (this._shortOptionReg.test(option)) {
      this._shortOptions[option] = this._options[option];
    }

    return this;
  }

  /**
   * Check if this request has a given option.
   */
  public hasOption(option: string): boolean {
    return Object.prototype.hasOwnProperty.call(this._options, option);
  }

  /**
   * Check if this request has at least one option.
   */
  public hasOptions(): boolean {
    return 0 !== Object.keys(this._options).length;
  }

  /**
   * Set arguments.
   */
  public setArguments(args: string[]): this {
    this._consoleArgs = args;

    return this;
  }

  /**
   * Get arguments.
   */
  public getArguments(): string[] {
    return this._consoleArgs;
  }

  /**
   * Parses arguments.
   */
  public parse(args: string[]): this {
    this.resetDefaultValues();

    const consoleArgs: string[] = [];

    for (let i = 0; i < args.length; i += 1) {
      const next: string = args[i + 1];

      if (this._longOptionReg.test(args[i]) || this._shortOptionReg.test(args[i])) {
        if (this._longOptionReg.test(next) || this._shortOptionReg.test(next)) {
          const a: string = args[i];
          this.addOption(a, true);

          // eslint-disable-next-line no-continue
          continue;
        }

        this.addOption(args[i], next || true);

        i += 1;
        // eslint-disable-next-line no-continue
        continue;
      }

      consoleArgs.push(args[i]);
    }

    if (consoleArgs[0]) {
      consoleArgs[0] = consoleArgs[0].replace(/^-+|-+$/g, '');
    }
    this.setCommand(consoleArgs[0] || null);

    this.setArguments(consoleArgs.slice(1));

    if (!this.hasCommand() && this.hasOption('--list')) {
      this
        .setCommand('list')
        .setOptions({})
        .addOption('--list', true);
    }

    if (!this.hasCommand() && (this.hasOption('-v') || this.hasOption('--version'))) {
      this
        .setCommand('version')
        .setOptions({})
        .addOption('-v', true)
        .addOption('--version', true);
    }

    if (!this.hasCommand() && (this.hasOption('-h') || this.hasOption('--help'))) {
      this
        .setCommand('help')
        .setOptions({})
        .addOption('-h', true)
        .addOption('--help', true);
    }

    if (!this.hasCommand()) {
      this
        .setCommand('help')
        .setOptions({})
        .addOption('-h', true)
        .addOption('--help', true);
    }

    return this;
  }

  /**
   * Reset default values.
   */
  private resetDefaultValues(): void {
    this._command = null;
    this._options = {};
    this._longOptions = {};
    this._shortOptions = {};
    this._consoleArgs = [];
  }
}

export { ConsoleRequest };
