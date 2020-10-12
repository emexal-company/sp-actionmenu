import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import actionmenuStyles from './actionmenu.styles';
import template from './actionmenu.template';

@customElement('sp-actionmenu')
export class ActionMenu extends Base {
  public static componentStyles = actionmenuStyles;

  @property({ type: String }) public title: string = '';
  @property({ type: String }) public width: string = '';
  @property({ type: Boolean }) public selected: boolean = false;

  _handleSelectionChanged(e) {
    let changedEvent = new CustomEvent('slectionchanged', {
      detail: {
        selectedItem: e.detail.selectedItem
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changedEvent);
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-actionmenu': ActionMenu;
  }
}
