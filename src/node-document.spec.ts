import { nodeDocument } from './node-document';

describe('nodeDocument', () => {

  let doc: Document;

  beforeEach(() => {
    doc = document.implementation.createHTMLDocument('test');
  });

  it('returns owner document', () => {
    expect(nodeDocument(doc.createElement('div'))).toBe(doc);
    expect(nodeDocument(doc.createTextNode('test'))).toBe(doc);
    expect(nodeDocument(doc.createComment('test'))).toBe(doc);
  });
  it('returns the document itself', () => {
    expect(nodeDocument(doc)).toBe(doc);
  });
});
