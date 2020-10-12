import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { ActionMenuItem } from './actionmenuitem.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-menu'

export default function template(this: ActionMenuItem) {

    return html`   
        <sp-menuitem label="${this.label}" unselectable></sp-menuitem>
    `;
}
