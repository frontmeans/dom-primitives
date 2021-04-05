import { isElementNode } from './node-types';

/**
 * Finds a host element of the given DOM node. I.e. an enclosing element.
 *
 * Crosses shadow DOM bounds.
 *
 * @param node - Target element.
 *
 * @returns Either parent element of the given node, or `undefined` when not found.
 */
export function nodeHost(node: Node): Element | undefined {

  const { parentNode } = node;

  return parentNode && isElementNode(parentNode) && parentNode
      || (node.getRootNode() as Partial<ShadowRoot>).host// Inside shadow DOM?
      || undefined;
}
