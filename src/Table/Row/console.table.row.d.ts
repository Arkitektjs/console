import { ConsoleTableColumnInterface as ColumnInterface } from '../Column/console.table.column';

/**
 * Console table row interface.
 */
export interface ConsoleTableRowInterface {
  /**
   * Get columns.
   */
  getColumns(): ColumnInterface[];
}
