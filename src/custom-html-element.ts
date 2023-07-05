/* eslint-disable @typescript-eslint/ban-types */
/**
 * Custom HTML element.
 */
export interface CustomHTMLElement extends HTMLElement {
  attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void;

  adoptedCallback?(): void;

  connectedCallback?(): void;

  disconnectedCallback?(): void;
}

/**
 * Custom HTML element constructor signature.
 */
export interface CustomHTMLElementClass<T extends CustomHTMLElement = CustomHTMLElement>
  extends Function {
  prototype: T;
  observedAttributes?: readonly string[] | undefined;
  new (): T;
}
