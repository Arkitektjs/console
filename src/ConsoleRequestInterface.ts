interface ConsoleRequestInterface {
  parse(args: string[]): ConsoleRequestInterface;
}

interface OptionType {
  [key: string]: (string | boolean)[];
}

export { ConsoleRequestInterface, OptionType };
