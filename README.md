DOM Primitives
==============

[![NPM][npm-image]][npm-url]
[![Build Status][build-status-img]][build-status-link]
[![Code Quality][quality-img]][quality-link]
[![Coverage][coverage-img]][coverage-link]
[![GitHub Project][github-image]][github-url]
[![API Documentation][api-docs-image]][API documentation]

An assorted set of basic DOM-related. See the [API documentation].

[npm-image]: https://img.shields.io/npm/v/@frontmeans/dom-primitives.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@frontmeans/dom-primitives
[build-status-img]: https://github.com/frontmeans/dom-primitives/workflows/Build/badge.svg
[build-status-link]: https://github.com/frontmeans/dom-primitives/actions?query=workflow%3ABuild
[quality-img]: https://app.codacy.com/project/badge/Grade/023f791e8d82413c8eb46738e4afe224
[quality-link]: https://www.codacy.com/gh/frontmeans/dom-primitives/dashboard?utm_source=github.com&utm_medium=referral&utm_content=frontmeans/dom-primitives&utm_campaign=Badge_Grade
[coverage-img]: https://app.codacy.com/project/badge/Coverage/023f791e8d82413c8eb46738e4afe224
[coverage-link]: https://www.codacy.com/gh/frontmeans/dom-primitives/dashboard?utm_source=github.com&utm_medium=referral&utm_content=frontmeans/dom-primitives&utm_campaign=Badge_Coverage
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

[nodeDocument]: https://frontmeans.github.io/dom-primitives/modules.html#nodeDocument
[nodeHost]: https://frontmeans.github.io/dom-primitives/modules.html#nodeHost
[nodeWindow]: https://frontmeans.github.io/dom-primitives/modules.html#nodeWindow


DOM Manipulation
----------------

- [importNode] - Imports DOM node from one document to another.
- [importNodeContent] - Imports DOM node contents from one document to another.
- [removeNodeContent] - Removes all child nodes from the given one.

[importNode]: https://frontmeans.github.io/dom-primitives/modules.html#importNode
[importNodeContent]: https://frontmeans.github.io/dom-primitives/modules.html#importNodeContent
[removeNodeContent]: https://frontmeans.github.io/dom-primitives/modules.html#removeNodeContent
