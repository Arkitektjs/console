import { ConsoleTableRowInterface } from './console.table.row';
import { ConsoleTableColumnInterface } from '../Column/console.table.column';

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
 *      } from '@deltarm/console';
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
class ConsoleTableRow implements ConsoleTableRowInterface {
  /**
   * Collection of columns.
   */
  private _columns: ConsoleTableColumnInterface[];

  constructor() {
    this._columns = [];
  }

  /**
   * Set columns.
   *
   * @param columns - List of columns to set.
   */
  public setColumns(columns: ConsoleTableColumnInterface[]): this {
    this._columns = columns;

    return this;
  }

  /**
   * Add column.
   *
   * @param column - Column to add.
   */
  public addColumn(column: ConsoleTableColumnInterface): this {
    this._columns.push(column);

    return this;
  }

  /**
   * Get columns.
   */
  public getColumns(): ConsoleTableColumnInterface[] {
    return this._columns;
  }
}

export { ConsoleTableRow };
