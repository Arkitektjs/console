/**
 * Console output interface.
 */
export interface ConsoleOutputInterface {
  /**
   * Write text.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  write(text: string, style?: string): ConsoleOutputInterface;

  /**
   * Write with new line.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  writeln(text: string, style?: string): ConsoleOutputInterface;

  /**
   * Write new line.
   *
   * @param count - Number of line.
   */
  newLine(count: number): ConsoleOutputInterface;

  /**
   * Write space.
   *
   * @param count - Number of space.
   */
  space(count: number): ConsoleOutputInterface;

  /**
   * Write success message.
   *
   * @param text - Message to print.
   * @param tick - Add check mark first.
   */
  successMessage(text: string, tick: boolean): ConsoleOutputInterface;

  /**
   * Write error message.
   *
   * @param text - Message to print.
   * @param cross - Add cross mark first.
   */
  errorMessage(text: string, cross: boolean): ConsoleOutputInterface;

  /**
   * Write info message.
   *
   * @param text - Message to print.
   * @param info - Add info mark first.
   */
  infoMessage(text: string, info: boolean): ConsoleOutputInterface;

  /**
   * Write warning message.
   *
   * @param text - Message to print.
   * @param warning - Add warning mark first.
   */
  warningMessage(text: string, warning: boolean): ConsoleOutputInterface;
}
