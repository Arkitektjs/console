declare namespace Console {
  namespace Prompt {
    /**
     * Type value type.
     */
    type TypeValueType = string | (() => string);

    /**
     * Name value type.
     */
    type NameValueType = string | (() => string);

    /**
     * Message value type.
     */
    type MessageValueType = string | (() => string);

    /**
     * Default value type.
     */
    type DefaultValueType = string | (() => string);

    /**
     * On input callback type.
     */
    type OnInputCallbackType = undefined | ((value: string) => string);

    /**
     * On submit callback type.
     */
    type OnSubmitCallbackType = undefined | ((value: string) => string);

    /**
     * Validator calllback type.
     */
    type ValidatorCallbackType = undefined | ((value: string) => string | boolean);

    /**
     * On success callback type.
     */
    type OnSuccessCallbackType = null | ((answer: object) => void);

    /**
     * On error callback type.
     */
    type OnErrorCallbackType = null | ((error: object) => void);

    /**
     * Question type.
     */
    type QuestionType = {
      type: TypeValueType;
      name: NameValueType;
      message: MessageValueType;
      initial: DefaultValueType;
      format: OnInputCallbackType;
      result: OnSubmitCallbackType;
      validate: ValidatorCallbackType;
    };

    interface Interface {
      /**
       * Get type of prompt.
       */
      getType(): Console.Prompt.TypeValueType;

      /**
       * Get key for answer.
       * Used as the key for the answer on the returned values (answers) object.
       */
      getName(): Console.Prompt.NameValueType;

      /**
       * Get message to display when the prompt is rendered in the terminal.
       */
      getMessage(): Console.Prompt.MessageValueType;

      /**
       * Get  default value to return if the user does not supply a value.
       */
      getDefaultValue(): Console.Prompt.DefaultValueType;

      /**
       * Get function to use to format user input in the terminal.
       */
      getInputCallback(): Console.Prompt.OnInputCallbackType;

      /**
       * Get function to use to format the final submitted value.
       */
      getSubmitCallback(): Console.Prompt.OnSubmitCallbackType;

      /**
       * Get validator function.
       */
      getValidator(): Console.Prompt.ValidatorCallbackType;

      /**
       * Get current question object.
       */
      getQuestion(): Console.Prompt.QuestionType;

      /**
       * Get success callback.
       */
      getSuccessCallback(): Console.Prompt.OnSuccessCallbackType;

      /**
       * Get error callback.
       */
      getErrorCallback(): Console.Prompt.OnErrorCallbackType;

      /**
       * Prompt question.
       */
      prompt(): Console.Prompt.Interface;
    }
  }
  namespace Request {
    /**
     * Console request interface.
     */
    export interface Interface {
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
      getOptions(): Console.Request.OptionType;

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
      parse(args: string[]): Console.Request.Interface;
    }

    /**
     * Console request option type interface.
     */
    interface OptionType {
      [key: string]: (string | boolean)[];
    }
  }
}
