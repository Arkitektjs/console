import { ConsoleTableRowInterface as RowInterface } from './console.table.row';
import { ConsoleTableColumnInterface as ColumnInterface } from '../Column/console.table.column';

/**
 * Table row.
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
class ConsoleTableRow implements RowInterface {
  /**
   * Collection of columns.
   */
  private _columns: ColumnInterface[];

  constructor() {
    this._columns = [];
  }

  /**
   * Set columns.
   *
   * @param columns - List of columns to set.
   */
  public setColumns(columns: ColumnInterface[]): this {
    this._columns = columns;

    return this;
  }

  /**
   * Add column.
   *
   * @param column - Column to add.
   */
  public addColumn(column: ColumnInterface): this {
    this._columns.push(column);

    return this;
  }

  /**
   * Get columns.
   */
  public getColumns(): ColumnInterface[] {
    return this._columns;
  }
}

export { ConsoleTableRow };
