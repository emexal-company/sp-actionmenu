import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { ActionMenu } from './actionmenu.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-button';
import '@spectrum/sp-menu'
import '@spectrum/sp-menu'

export default function template(this: ActionMenu) {

    return html`   
        <sp-popover>
            <sp-button  type="action" label="${this.title}" slot="dropdown-trigger"></sp-button>
            <br slot="return-toline">   
            <sp-menu slot="dropdown-content" width="${this.width}" @slectionchanged="${this._handleSelectionChanged}">
                <slot></slot>
            </sp-menu>
        </sp-popover>
    `;
}
