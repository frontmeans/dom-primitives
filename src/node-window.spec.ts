import { beforeEach, describe, expect, it } from '@jest/globals';
import { nodeWindow } from './node-window';

describe('nodeWindow', () => {

  let doc: Document;

  beforeEach(() => {
    doc = document.implementation.createHTMLDocument('test');
  });

  it('returns the default view of the document', () => {
    expect(nodeWindow(document.createElement('test'))).toBe(window);
  });
  it('returns the `window` instance when there is nmo default view', () => {
    expect(nodeWindow(doc.createElement('test'))).toBe(window);
  });
});
