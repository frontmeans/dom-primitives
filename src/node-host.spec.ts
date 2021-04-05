import { nodeHost } from './node-host';

describe('nodeHost', () => {
  it('returns parent element', () => {

    const parent = document.createElement('div');
    const child = parent.appendChild(document.createElement('span'));

    expect(nodeHost(child)).toBe(parent);
  });
  it('crosses shadow root bounds', () => {

    const parent = document.createElement('div');
    const shadowRoot = parent.attachShadow({ mode: 'closed' });
    const child = shadowRoot.appendChild(document.createElement('span'));

    expect(nodeHost(child)).toBe(parent);
  });
  it('returns host element for shadow root', () => {

    const parent = document.createElement('div');
    const shadowRoot = parent.attachShadow({ mode: 'closed' });

    expect(nodeHost(shadowRoot)).toBe(parent);
  });
  it('returns `undefined` for detached element', () => {
    expect(nodeHost(document.createElement('dev'))).toBeUndefined();
  });
  it('returns `undefined` for element inside document fragment', () => {

    const fragment = document.createDocumentFragment();
    const element = fragment.appendChild(document.createElement('div'));

    expect(nodeHost(element)).toBeUndefined();
  });
  it('returns `undefined` for document element', () => {
    expect(nodeHost(document.documentElement)).toBeUndefined();
  });
});
