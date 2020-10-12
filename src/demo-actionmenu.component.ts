import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-actionmenu.styles';
import template from './demo-actionmenu.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { ActionMenu } from '@spectrum/sp-actionmenu';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-actionmenu')
export class DemoActionMenu extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-actionmenu': DemoActionMenu;
  }
}
