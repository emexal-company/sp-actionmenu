import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import actionmenuitemStyles from './actionmenuitem.styles';
import template from './actionmenuitem.template';

@customElement('sp-actionmenuitem')
export class ActionMenuItem extends Base {
  public static componentStyles = actionmenuitemStyles;

  @property({ type: String }) public label: string = '';

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-actionmenuitem': ActionMenuItem;
  }
}
