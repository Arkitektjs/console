import { ConsoleTableRowInterface as RowInterface } from './Row/console.table.row';

/**
 * Console table interface.
 */
export interface ConsoleTableInterface {
  /**
   * Get rows.
   */
  getRows(): RowInterface[];
}
