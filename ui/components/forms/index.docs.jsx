/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Radio from 'ui/components/forms/flavors/radio/index.react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import Input from 'ui/components/forms/flavors/input/index.react';
import Textarea from 'ui/components/forms/flavors/textarea/index.react';
import Select from 'ui/components/forms/flavors/select/index.react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';

import globals from 'app_modules/global';
import CodeClass from 'app_modules/site/components/code-class';

export const intro = (
  <p className="site-text-introduction">
    An HTML form contains interactive controls to submit information to a web server.
  </p>
);

export default (
<ComponentDocs>
  <p>For optimum spacing and layout, wrap each element in <CodeClass className="form-element" />. Layout helper classes are available through the following class names, <CodeClass className="form--stacked" />, <CodeClass className="form--horizontal" /> and <CodeClass className="form--inline" />.</p>
  <p>The read-only state is for form elements that can’t be modified. It is used for small, non-editable form fields that sit next to inputs and allows the size and height to align. It is not meant for large paragraphs of text.</p>
  <p>Because the read-only field state has no <code>&lt;input&gt;</code>, don’t use a <code>&lt;label&gt;</code> to provide better accessibility for screen readers and keyboard navigators. Instead, use a <code>&lt;span&gt;</code> with the <CodeClass className="form-element__label" /> class. Instead of an <code>&lt;input&gt;</code>, use the <CodeClass className="form-element__static" /> class inside the <CodeClass className="form-element__control" /> wrapper.</p>
  <p>Error states alert the user when content in the form is invalid. The <CodeClass className="has-error" /> class is placed on the <code>&lt;div class=".slds-form-element"&gt;</code>. Place the error message for the user in a <code>&lt;span&gt;</code> with the <CodeClass className="form-element__help" /> class.</p>
  <p>The native form elements, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;input type='checkbox'&gt;</code>, and <code>&lt;input type='radio'&gt;</code>, receive validation styling for <code>disabled</code>, <code>checked</code>, and <code>checked disabled</code>, if applicable.</p>


  <h4 className="site-text-heading--label">Accessibility</h4>
  <p>Every form element requires an associated, non-empty <code>&lt;label&gt;</code> element. To link the field with its label, either wrap the <code>&lt;label&gt;</code> element around the field or associate the <code>for</code> attribute of the label with the <code>id</code> of the field. For example, <code>&lt;label for="emailAddress"&gt;Enter email address:&lt;&#47;label&gt;</code> and <code>&lt;input id="emailAddress"&gt;</code>. This association ensures that assistive technology informs users what information to enter where.</p>
  <p>When an <code>&lt;input&gt;</code> is required, add the HTML attribute <code>required</code> or <code>required=""</code> to it. Do not use true/false values inside the <code>required</code> because the mere presence of that attribute signifies the field is required.</p>
  <p>If the field is invalid and displays an error message, the field should have an <code>aria-describedby</code> attribute that references the <code>id</code> of the error message in the <code>&lt;span&gt;</code>. This configuration allows screen readers to read the associated error message with the field.</p>


  <h4 className="site-text-heading--label">Form Example</h4>
  <form role="form" className="slds-form--stacked slds-grid slds-wrap slds-grid--pull-padded slds-m-top--large">
    <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2">
      <Input label="Opportunity Name" placeholder="Moderna 10k" assistiveText="Opportunity Name" />
      <Input label="Account Name" placeholder="Moderno Bistro" assistiveText="Account Name" />
      <Input label="Contact Name" placeholder="John Smith" assistiveText="Contact Name" />
      <Input label="Contact Email" placeholder="jsmith@moderna.com" assistiveText="Contact Email" help="Example Form Element Help" />
      <Textarea label="Notes" assistiveText="textarea"></Textarea>
    </div>
    <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2">
      <div className="slds-form-element slds-has-divider--bottom">
        <span className="slds-form-element__label">Opportunity Owner</span>
        <div className="slds-form-element__control">
          <span className="slds-form-element__static">Erin Buck</span>
        </div>
      </div>
      <Input label="Amount" assistiveText="Amount" />
      <Input label="Probability" placeholder="100" assistiveText="Probability" />
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">Options</legend>
        <div className="slds-form-element__control">
          <Radio name="options" label="Lead generation" assistiveText="lead" />
          <Radio name="options" label="Education leads" assistiveText="education" />
          <Radio name="options" label="Pass to partner" assistiveText="partner" />
        </div>
      </fieldset>
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">Default</legend>
        <div className="slds-form-element__control">
          <Checkbox name="default" label="All opportunities owned by you" assistiveText="opportunities ownership" />
          <Checkbox name="default" label="All contacts in the account owned by you" assistiveText="contact ownership" />
        </div>
      </fieldset>
    </div>
  </form>
</ComponentDocs>
);
