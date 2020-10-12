import { html } from 'lit-element';
import { DemoActionMenu } from './demo-actionmenu.component';

import '@spectrum/sp-actionmenu';
import '@spectrum/sp-actionmenu';
import '@spectrum/sp-container';


export default function template(this: DemoActionMenu) {
  return html`
    <sp-container>
      <sp-rule medium label="Action menu - Standard"></sp-rule>
      <sp-demo width="220">
        <pre>
<sp-actionmenu title="More Actions" width="100" style="justify-content: end;">
  <sp-actionmenuitem label="Canada"></sp-actionmenuitem>
  <sp-actionmenuitem label="Tunisia"></sp-actionmenuitem>
  <sp-actionmenuitem label="France"></sp-actionmenuitem>
  <sp-actionmenuitem label="Spain"></sp-actionmenuitem>
</sp-actionmenu>
</pre>
      </sp-demo>
    </sp-container>
  `;
}
