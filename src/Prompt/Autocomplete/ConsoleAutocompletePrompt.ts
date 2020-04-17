import { ConsoleAbstractPrompt } from '../ConsoleAbstractPrompt';
import {
  MessageValueType,
  ConsolePromptQuestionType,
} from '../console.prompt';
import {
  InitialValueType,
  LimitValueType,
  ChoicesValueType,
  MultipleValueType,
  OnFilterValueType,
  ConsoleAutocompletePromptQuestionType,
  ConsoleAutocompletePromptInterface,
} from './console.autocomplete.prompt';

/**
 * Autocomplete console prompt.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author
 *    name: Franck DIOMANDE
 * @example
 *      import { ConsoleAutocompletePrompt } from '@arkitektjs/console';
 *
 *      const autocomplete = new ConsoleAutocompletePrompt('Make your choice: ');
 *
 *      autocomplete.setChoices(['Almond', 'Apple', 'Banana', 'Blackberry', 'Blueberry', 'Cherry']);
 *      autocomplete.setName('fruits').setMultiple(true);
 *      autocomplete.onSuccess((answers) => {
 *        console.log(answers); // { fruits: [ 'Almond', 'Banana', 'Blueberry' ] }
 *      });
 *      autocomplete.prompt();
 */
class ConsoleAutocompletePrompt extends ConsoleAbstractPrompt implements ConsoleAutocompletePromptInterface {
  /**
   * Question type for autocomplete prompt.
   */
  protected _question: ConsolePromptQuestionType & ConsoleAutocompletePromptQuestionType;

  /**
   * Constructor.
   *
   * @param message - Message to display when the prompt is rendered in the terminal.
   */
  constructor(message: MessageValueType) {
    super();
    this._question = {
      ...this.getQuestion(),
      type: 'autocomplete',
      message,
      initial: 0,
      limit: 10,
      choices: [],
      multiple: false,
      suggest: undefined,
    };
  }

  /**
   * Get preselected value.
   */
  public getInitialValue(): InitialValueType {
    return this._question.initial;
  }

  /**
   * Set preselected value.
   *
   * @param initialValue - Initial value.
   */
  public setInitialValue(initialValue: InitialValueType): this {
    this._question.initial = initialValue;

    return this;
  }

  /**
   * Get limit of choices.
   */
  public getLimit(): LimitValueType {
    return this._question.limit;
  }

  /**
   * Set limit of choices.
   *
   * @param limit - Limit of choices.
   */
  public setLimit(limit: LimitValueType): this {
    this._question.limit = limit;

    return this;
  }

  /**
   * Get list of choices.
   */
  public getChoices(): ChoicesValueType {
    return this._question.choices;
  }

  /**
   * Set list of choices.
   *
   * @param choices - Choices value.
   */
  public setChoices(choices: ChoicesValueType): this {
    this._question.choices = choices;

    return this;
  }

  /**
   * Check if multiple selection is enabled.
   */
  public isMultiple(): MultipleValueType {
    return this._question.multiple;
  }

  /**
   * Set multiple selection value.
   *
   * @param multiple - Multiple selection value.
   */
  public setMultiple(multiple: MultipleValueType): this {
    this._question.multiple = multiple;

    return this;
  }

  /**
   * Get filter callback.
   */
  public getFilterCallback(): OnFilterValueType {
    return this._question.suggest;
  }

  /**
   * Set filter callback.
   *
   * @param callback - Filter callback.
   */
  public onFilter(callback: OnFilterValueType): this {
    this._question.suggest = callback;

    return this;
  }
}

export { ConsoleAutocompletePrompt };
