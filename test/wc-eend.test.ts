import { html, fixture, expect } from '@open-wc/testing';

import { WcEend } from '../src/WcEend.js';
import '../src/wc-eend.js';

describe('WcEend', () => {
  let element: WcEend;
  beforeEach(async () => {
    element = await fixture(html`<wc-eend></wc-eend>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
