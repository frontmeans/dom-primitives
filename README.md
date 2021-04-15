DOM Primitives
==============

[![NPM][npm-image]][npm-url]
[![Build Status][build-status-img]][build-status-link]
[![GitHub Project][github-image]][github-url]
[![API Documentation][api-docs-image]][API documentation]

An assorted set of basic DOM-related. See the [API documentation].

[npm-image]: https://img.shields.io/npm/v/@frontmeans/dom-primitives.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@frontmeans/dom-primitives
[build-status-img]: https://github.com/frontmeans/dom-primitives/workflows/Build/badge.svg
[build-status-link]: https://github.com/frontmeans/dom-primitives/actions?query=workflow%3ABuild
[github-image]: https://img.shields.io/static/v1?logo=github&label=GitHub&message=project&color=informational
[github-url]: https://github.com/frontmeans/dom-primitives
[api-docs-image]: https://img.shields.io/static/v1?logo=typescript&label=API&message=docs&color=informational
[API documentation]: https://frontmeans.github.io/dom-primitives/ 


DOM Node Types
--------------

These function check whether the target [DOM node] is of corresponding type:

- [isElementNode](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [isAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Attr)
- [isTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Text)
- [isCDATASectionNode](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection)
- [isProcessingInstructionNode](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction)
- [isCommentNode](https://developer.mozilla.org/en-US/docs/Web/API/Comment)
- [isDocumentNode](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [isDocumentTypeNode](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType)
- [isDocumentFragmentNode](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- [isShadowRootNode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)

[DOM node]: https://developer.mozilla.org/en-US/docs/Web/API/Node


DOM Inspection
--------------

- [nodeDocument] - Returns a document of the given DOM node.

- [nodeHost] - Finds a host element of the given DOM node. I.e. an enclosing element.

  Crosses shadow DOM bounds.

- [nodeWindow] - Returns an owner window of the given DOM node.

[nodeDocument]: https://frontmeans.github.io/dom-primitives/modules.html#nodedocument
[nodeHost]: https://frontmeans.github.io/dom-primitives/modules.html#nodehost
[nodeWindow]: https://frontmeans.github.io/dom-primitives/modules.html#nodewindow


DOM Manipulation
----------------

- [importNode] - Imports DOM node from one document to another.
- [importNodeContent] - Imports DOM node contents from one document to another.
- [removeNodeContent] - Removes all child nodes from the given one.

[importNode]: https://frontmeans.github.io/dom-primitives/modules.html#importnode
[importNodeContent]: https://frontmeans.github.io/dom-primitives/modules.html#importnodecontent
[removeNodeContent]: https://frontmeans.github.io/dom-primitives/modules.html#removenodecontent
