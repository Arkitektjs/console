import os from 'os';
import figures from 'figures';
import ansiColors from 'ansi-colors';

import { ConsoleOutputInterface } from './console.output';

/**
 * Print information on console.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleOutput } from '@deltarm/console';
 *
 *      const output: ConsoleOutput = new ConsoleOutput();
 *      output.tick('green').space().write('Success', 'green').space().ellipsis('green');
 *
 * @see https://www.npmjs.com/package/figures
 * @see https://www.npmjs.com/package/ansi-colors
 */
class ConsoleOutput implements ConsoleOutputInterface {
  /**
   * Write text.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  public write(text: string, style?: string): this {
    try {
      // eslint-disable-next-line no-new-func
      const styleFunc = (new Function('colors', `return colors.${style}`))(ansiColors);
      process.stdout.write(styleFunc(text));
    } catch (e) {
      process.stdout.write(text);
    }

    return this;
  }

  /**
   * Write with new line.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  public writeln(text: string, style?: string): this {
    return this.write(text, style).newLine();
  }

  /**
   * Write new line.
   *
   * @param count - Number of line.
   */
  public newLine(count: number = 1): this {
    return this.write(os.EOL.repeat(count));
  }

  /**
   * Write space.
   *
   * @param count - Number of space.
   */
  public space(count: number = 1): this {
    return this.write(' '.repeat(count));
  }

  /**
   * Write tick: ✔
   *
   * @param style - Style to apply.
   */
  public tick(style?: string): this {
    return this.write(figures.tick, style);
  }

  /**
   * Write cross: ✖
   *
   * @param style - Style to apply.
   */
  public cross(style?: string): this {
    return this.write(figures.cross, style);
  }

  /**
   * Write star: ★
   *
   * @param style - Style to apply.
   */
  public star(style?: string): this {
    return this.write(figures.star, style);
  }

  /**
   * Write squareFilled: ◼
   *
   * @param style - Style to apply.
   */
  public squareFilled(style?: string): this {
    return this.write(figures.squareSmallFilled, style);
  }

  /**
   * Write square: ◻
   *
   * @param style - Style to apply.
   */
  public square(style?: string): this {
    return this.write(figures.squareSmall, style);
  }

  /**
   * Write play: ▶
   *
   * @param style - Style to apply.
   */
  public play(style?: string): this {
    return this.write(figures.play, style);
  }

  /**
   * Write circle: ◯
   *
   * @param style - Style to apply.
   */
  public circle(style?: string): this {
    return this.write(figures.circle, style);
  }

  /**
   * Write circleFilled: ◉
   *
   * @param style - Style to apply.
   */
  public circleFilled(style?: string): this {
    return this.write(figures.circleFilled, style);
  }

  /**
   * Write bullet: ●
   *
   * @param style - Style to apply.
   */
  public bullet(style?: string): this {
    return this.write(figures.bullet, style);
  }

  /**
   * Write ellipsis: …
   *
   * @param style - Style to apply.
   */
  public ellipsis(style?: string): this {
    return this.write(figures.ellipsis, style);
  }

  /**
   * Write info: ℹ
   *
   * @param style - Style to apply.
   */
  public info(style?: string): this {
    return this.write(figures.info, style);
  }

  /**
   * Write warning: ⚠
   *
   * @param style - Style to apply.
   */
  public warning(style?: string): this {
    return this.write(figures.warning, style);
  }

  /**
   * Write hamburger: ☰
   *
   * @param style - Style to apply.
   */
  public hamburger(style?: string): this {
    return this.write(figures.hamburger, style);
  }

  /**
   * Write heart: ♥
   *
   * @param style - Style to apply.
   */
  public heart(style?: string): this {
    return this.write(figures.heart, style);
  }

  /**
   * Write arrowUp: ↑
   *
   * @param style - Style to apply.
   */
  public arrowUp(style?: string): this {
    return this.write(figures.arrowUp, style);
  }

  /**
   * Write arrowDown: ↓
   *
   * @param style - Style to apply.
   */
  public arrowDown(style?: string): this {
    return this.write(figures.arrowDown, style);
  }

  /**
   * Write arrowLeft: ←
   *
   * @param style - Style to apply.
   */
  public arrowLeft(style?: string): this {
    return this.write(figures.arrowLeft, style);
  }

  /**
   * Write arrowRight: →
   *
   * @param style - Style to apply.
   */
  public arrowRight(style?: string): this {
    return this.write(figures.arrowRight, style);
  }

  /**
   * Write radioOn: ◉
   *
   * @param style - Style to apply.
   */
  public radioOn(style?: string): this {
    return this.write(figures.radioOn, style);
  }

  /**
   * Write radioOff: ◯
   *
   * @param style - Style to apply.
   */
  public radioOff(style?: string): this {
    return this.write(figures.radioOff, style);
  }

  /**
   * Write checkboxOn: ☒
   *
   * @param style - Style to apply.
   */
  public checkboxOn(style?: string): this {
    return this.write(figures.checkboxOn, style);
  }

  /**
   * Write checkboxOff: ☐
   *
   * @param style - Style to apply.
   */
  public checkboxOff(style?: string): this {
    return this.write(figures.checkboxOff, style);
  }

  /**
   * Write success message.
   *
   * @param text - Message to print.
   * @param tick - Add check mark first.
   */
  public successMessage(text: string, tick: boolean = true): this {
    if (tick) {
      this.tick('green').space();
    }
    this.writeln(text, 'green');

    return this;
  }

  /**
   * Write error message.
   *
   * @param text - Message to print.
   * @param cross - Add cross mark first.
   */
  public errorMessage(text: string, cross: boolean = true): this {
    if (cross) {
      this.cross('red').space();
    }
    this.writeln(text, 'red');

    return this;
  }

  /**
   * Write info message.
   *
   * @param text - Message to print.
   * @param info - Add info mark first.
   */
  public infoMessage(text: string, info: boolean = true): this {
    if (info) {
      this.info('blue').space();
    }
    this.writeln(text, 'blue');

    return this;
  }

  /**
   * Write warning message.
   *
   * @param text - Message to print.
   * @param warning - Add warning mark first.
   */
  public warningMessage(text: string, warning: boolean = true): this {
    if (warning) {
      this.warning('yellow').space();
    }
    this.writeln(text, 'yellow');

    return this;
  }
}

export { ConsoleOutput };
