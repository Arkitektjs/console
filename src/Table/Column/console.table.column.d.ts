/**
 * Text value type.
 */
export type TextValueType = string;

/**
 * Width value type.
 */
export type WidthValueType = number;

/**
 * Align value type.
 */
export type AlignValueType = 'right' | 'center' | 'left';

/**
 * Padding value type.
 */
export type PaddingValueType = [number, number, number, number];

/**
 * Console table column option type.
 */
export type ConsoleTableColumnOptionsType = {
  /**
   * Some text to place in the column.
   *
   * @default ''
   */
  text: TextValueType;

  /**
   * The width of a column.
   *
   * @default 50
   */
  width: WidthValueType;

  /**
   * Alignment, 'right', 'center' or 'left'.
   *
   * @default 'left'
   */
  align: AlignValueType;

  /**
   * Inner space.
   *
   * @default [0, 0, 0, 0]
   */
  padding: PaddingValueType;

  /**
   * Wrap content.
   *
   * @default true
   */
  wrap: boolean;
};

/**
 * Console table column interface.
 */
export interface ConsoleTableColumnInterface {
  /**
   * Get text.
   */
  getText(): TextValueType;

  /**
   * Get width.
   */
  getWidth(): WidthValueType;

  /**
   * Get align.
   */
  getAlign(): AlignValueType;

  /**
   * Get padding.
   */
  getPadding(): PaddingValueType;

  /**
   * Get options.
   */
  getOptions(): ConsoleTableColumnOptionsType;
}
