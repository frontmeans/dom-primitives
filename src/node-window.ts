import { nodeDocument } from './node-document';

/**
 * Returns an owner window of the given DOM node.
 *
 * @param node - Source node.
 *
 * @returns Either a `defaultView` of the {@link nodeDocument node document}, or `window` instance if there is no one.
 */
export function nodeWindow(node: Node): Window {
  return nodeDocument(node).defaultView || window;
}
