import ansiColors from 'ansi-colors';
import {
  TextValueType,
  WidthValueType,
  PaddingValueType,
  AlignValueType,
  ConsoleTableColumnInterface,
  ConsoleTableColumnOptionsType,
} from './console.table.column';

/**
 * Table column.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import {
 *        ConsoleTableColumn as Column,
 *        ConsoleTableRow as Row,
 *        ConsoleTable as Table
 *      } from '@arkitektjs/console';
 *
 *      const col1: Column = new Column();
 *      col1.setText('Column 1');
 *
 *      const col2: Column = new Column();
 *      col2.setText('Column 2', 'bold.red');

 *      const row1: Row = new Row();
 *      row1.addColumn(col1);
 *      row1.addColumn(col2);
 *
 *      const table: Table = new Table();
 *      table.addRow(row1);
 *      table.print();
 */
class ConsoleTableColumn implements ConsoleTableColumnInterface {
  /**
   * Options type for table column.
   */
  private _options: ConsoleTableColumnOptionsType;

  constructor() {
    this._options = {
      text: '',
      width: 50,
      align: 'left',
      padding: [0, 0, 0, 0],
      wrap: true,
    };
  }

  /**
   * Set text.
   *
   * @param text - Text to set.
   * @param style
   */
  public setText(text: TextValueType, style?: string): this {
    try {
      // eslint-disable-next-line no-new-func
      const styleFunc = (new Function('colors', `return colors.${style}`))(ansiColors);
      this._options.text = styleFunc(text);
    } catch (e) {
      this._options.text = text;
    }

    return this;
  }

  /**
   * Get text.
   */
  public getText(): TextValueType {
    return this._options.text;
  }

  /**
   * Set width.
   *
   * @param width - Width to set.
   */
  public setWidth(width: WidthValueType): this {
    this._options.width = width;

    return this;
  }

  /**
   * Get width.
   */
  public getWidth(): WidthValueType {
    return this._options.width;
  }

  /**
   * Set align.
   *
   * @param align - Align to set.
   */
  public setAlign(align: AlignValueType): this {
    this._options.align = align;

    return this;
  }

  /**
   * Get align.
   */
  public getAlign(): AlignValueType {
    return this._options.align;
  }

  /**
   * Set padding.
   *
   * @param top - Padding top.
   * @param right - Padding right.
   * @param bottom - Padding bottom.
   * @param left - Padding left.
   */
  public setPadding(top: number, right: number, bottom: number, left: number): this {
    this._options.padding = [top, right, bottom, left];

    return this;
  }

  /**
   * Get padding.
   */
  public getPadding(): PaddingValueType {
    return this._options.padding;
  }

  /**
   * Set options.
   *
   * @param options - Options to set.
   */
  public setOptions(options: ConsoleTableColumnOptionsType): this {
    this._options = options;

    return this;
  }

  /**
   * Get options.
   */
  public getOptions(): ConsoleTableColumnOptionsType {
    return this._options;
  }
}

export { ConsoleTableColumn };
