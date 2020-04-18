/**
 * Console output interface.
 */
export interface ConsoleOutputInterface {
  write(text: string, style?: string): ConsoleOutputInterface;
  writeln(text: string, style?: string): ConsoleOutputInterface;
  newLine(count: number): ConsoleOutputInterface;
  space(count: number): ConsoleOutputInterface;
  successMessage(text: string, tick: boolean): ConsoleOutputInterface;
  errorMessage(text: string, cross: boolean): ConsoleOutputInterface;
  infoMessage(text: string, info: boolean): ConsoleOutputInterface;
  warningMessage(text: string, warning: boolean): ConsoleOutputInterface;
}
