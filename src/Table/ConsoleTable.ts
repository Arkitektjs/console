import os from 'os';

import { ConsoleTableInterface } from './console.table';
import { ConsoleTableRowInterface } from './Row/console.table.row';
import { ConsoleTableColumnOptionsType } from './Column/console.table.column';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const UI = require('cliui');

/**
 * Table.
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
class ConsoleTable implements ConsoleTableInterface {
  /**
   * Collection of rows.
   */
  private _rows: ConsoleTableRowInterface[];

  private _ui = new UI();

  constructor() {
    this._rows = [];
  }

  /**
   * Set rows.
   *
   * @param rows - List of rows to set.
   */
  public setRows(rows: ConsoleTableRowInterface[]): this {
    this._rows = rows;

    return this;
  }

  /**
   * Add row.
   *
   * @param row - Row to add.
   */
  public addRow(row: ConsoleTableRowInterface): this {
    this._rows.push(row);

    return this;
  }

  /**
   * Get rows.
   */
  public getRows(): ConsoleTableRowInterface[] {
    return this._rows;
  }

  /**
   * Display table.
   */
  public print(): this {
    this._rows.forEach((row) => {
      const options: ConsoleTableColumnOptionsType[] = [];

      row.getColumns().forEach((column) => {
        options.push(column.getOptions());
      });

      this._ui.div(...options);
    });

    process.stdout.write(os.EOL);
    process.stdout.write(this._ui.toString());
    process.stdout.write(os.EOL);

    return this;
  }

  /**
   * Reset table output.
   */
  public reset(): this {
    this._ui.resetOutput();

    return this;
  }
}

export { ConsoleTable };
