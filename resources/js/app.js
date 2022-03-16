(function () {
  'use strict';

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  /*! (c) Andrea Giammarchi - ISC */
  var self$3 = {};

  try {
    self$3.WeakMap = WeakMap;
  } catch (WeakMap) {
    // this could be better but 90% of the time
    // it's everything developers need as fallback
    self$3.WeakMap = function (id, Object) {

      var dP = Object.defineProperty;
      var hOP = Object.hasOwnProperty;
      var proto = WeakMap.prototype;

      proto["delete"] = function (key) {
        return this.has(key) && delete key[this._];
      };

      proto.get = function (key) {
        return this.has(key) ? key[this._] : void 0;
      };

      proto.has = function (key) {
        return hOP.call(key, this._);
      };

      proto.set = function (key, value) {
        dP(key, this._, {
          configurable: true,
          value: value
        });
        return this;
      };

      return WeakMap;

      function WeakMap(iterable) {
        dP(this, '_', {
          value: '_@ungap/weakmap' + id++
        });
        if (iterable) iterable.forEach(add, this);
      }

      function add(pair) {
        this.set(pair[0], pair[1]);
      }
    }(Math.random(), Object);
  }

  var WeakMap$1 = self$3.WeakMap;

  var uhyphen = (function (camel) {
    return camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, '$2$5-$3$6').toLowerCase();
  });

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
  }

  /*! (c) Andrea Giammarchi - ISC */
  var self$2 = {};

  try {
    self$2.Event = new Event('.').constructor;
  } catch (Event) {
    try {
      self$2.Event = new CustomEvent('.').constructor;
    } catch (Event) {
      self$2.Event = function Event(type, init) {
        if (!init) init = {};
        var e = document.createEvent('Event');
        var bubbles = !!init.bubbles;
        var cancelable = !!init.cancelable;
        e.initEvent(type, bubbles, cancelable);

        try {
          e.bubbles = bubbles;
          e.cancelable = cancelable;
        } catch (e) {}

        return e;
      };
    }
  }

  var Event$1 = self$2.Event;

  /*! (c) Andrea Giammarchi - ISC */
  var self$1 = {};

  try {
    self$1.WeakSet = WeakSet;
  } catch (WeakSet) {
    // requires a global WeakMap (IE11+)
    (function (WeakMap) {
      var all = new WeakMap();
      var proto = WeakSet.prototype;

      proto.add = function (value) {
        return all.get(this).set(value, 1), this;
      };

      proto["delete"] = function (value) {
        return all.get(this)["delete"](value);
      };

      proto.has = function (value) {
        return all.get(this).has(value);
      };

      self$1.WeakSet = WeakSet;

      function WeakSet(iterable) {

        all.set(this, new WeakMap());
        if (iterable) iterable.forEach(this.add, this);
      }
    })(WeakMap);
  }

  var WeakSet$1 = self$1.WeakSet;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
  }

  /*! (c) Andrea Giammarchi - ISC */
  // Custom
  var UID = '-' + Math.random().toFixed(6) + '%'; //                           Edge issue!

  var UID_IE = false;

  try {
    if (!function (template, content, tabindex) {
      return content in template && (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
    }(document.createElement('template'), 'content', 'tabindex')) {
      UID = '_dt: ' + UID.slice(1, -1) + ';';
      UID_IE = true;
    }
  } catch (meh) {}

  var UIDC = '<!--' + UID + '-->'; // DOM

  var COMMENT_NODE = 8;
  var ELEMENT_NODE$1 = 1;
  var TEXT_NODE = 3;
  var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
  var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

  /*! (c) Andrea Giammarchi - ISC */
  function domsanitizer (template) {
    return template.join(UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
  }
  var spaces = ' \\f\\n\\r\\t';
  var almostEverything = '[^' + spaces + '\\/>"\'=]+';
  var attrName = '[' + spaces + ']+' + almostEverything;
  var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
  var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';
  var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
  var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
  var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + UIDC + '\\2', 'gi');

  function attrReplacer($0, $1, $2, $3) {
    return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
  }

  function replaceAttributes($0, $1, $2) {
    return $1 + ($2 || '"') + UID + ($2 || '"');
  }

  function fullClosing($0, $1, $2) {
    return VOID_ELEMENTS.test($1) ? $0 : '<' + $1 + $2 + '></' + $1 + '>';
  }

  var isArray = Array.isArray;
  var _ref$1 = [],
      slice = _ref$1.slice;

  var umap = (function (_) {
    return {
      // About: get: _.get.bind(_)
      // It looks like WebKit/Safari didn't optimize bind at all,
      // so that using bind slows it down by 60%.
      // Firefox and Chrome are just fine in both cases,
      // so let's use the approach that works fast everywhere 👍
      get: function get(key) {
        return _.get(key);
      },
      set: function set(key, value) {
        return _.set(key, value), value;
      }
    };
  });

  var ELEMENT_NODE = 1;
  var nodeType = 111;

  var remove = function remove(_ref) {
    var firstChild = _ref.firstChild,
        lastChild = _ref.lastChild;
    var range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
  };

  var diffable = function diffable(node, operation) {
    return node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
  };
  var persistent = function persistent(fragment) {
    var childNodes = fragment.childNodes;
    var length = childNodes.length;
    if (length < 2) return length ? childNodes[0] : fragment;
    var nodes = slice.call(childNodes, 0);
    var firstChild = nodes[0];
    var lastChild = nodes[length - 1];
    return {
      ELEMENT_NODE: ELEMENT_NODE,
      nodeType: nodeType,
      firstChild: firstChild,
      lastChild: lastChild,
      valueOf: function valueOf() {
        if (childNodes.length !== length) {
          var i = 0;

          while (i < length) {
            fragment.appendChild(nodes[i++]);
          }
        }

        return fragment;
      }
    };
  };

  /*! (c) Andrea Giammarchi - ISC */
  var createContent = function (document) {

    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = ('content' in create(TEMPLATE));
    var createHTML = HAS_CONTENT ? function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } : function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;

      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }

      append(content, childNodes);
      return content;
    };
    return function createContent(markup, type) {
      return (type === 'svg' ? createSVG : createHTML)(markup);
    };

    function append(root, childNodes) {
      var length = childNodes.length;

      while (length--) {
        root.appendChild(childNodes[0]);
      }
    }

    function create(element) {
      return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    } // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE


    function createSVG(svg) {
      var content = create(FRAGMENT);
      var template = create('div');
      template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
      append(content, template.firstChild.childNodes);
      return content;
    }
  }(document);

  /**
   * ISC License
   *
   * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */

  /**
   * @param {Node} parentNode The container where children live
   * @param {Node[]} a The list of current/live children
   * @param {Node[]} b The list of future children
   * @param {(entry: Node, action: number) => Node} get
   * The callback invoked per each entry related DOM operation.
   * @param {Node} [before] The optional node used as anchor to insert before.
   * @returns {Node[]} The same list of future children.
   */
  var udomdiff = (function (parentNode, a, b, get, before) {
    var bLength = b.length;
    var aEnd = a.length;
    var bEnd = bLength;
    var aStart = 0;
    var bStart = 0;
    var map = null;

    while (aStart < aEnd || bStart < bEnd) {
      // append head, tail, or nodes in between: fast path
      if (aEnd === aStart) {
        // we could be in a situation where the rest of nodes that
        // need to be added are not at the end, and in such case
        // the node to `insertBefore`, if the index is more than 0
        // must be retrieved, otherwise it's gonna be the first item.
        var node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;

        while (bStart < bEnd) {
          parentNode.insertBefore(get(b[bStart++], 1), node);
        }
      } // remove head or tail: fast path
      else if (bEnd === bStart) {
        while (aStart < aEnd) {
          // remove the node only if it's unknown or not live
          if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
          aStart++;
        }
      } // same node: fast path
      else if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
      } // same tail: fast path
      else if (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      } // The once here single last swap "fast path" has been removed in v1.1.0
      // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
      // reverse swap: also fast path
      else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        // this is a "shrink" operation that could happen in these cases:
        // [1, 2, 3, 4, 5]
        // [1, 4, 3, 2, 5]
        // or asymmetric too
        // [1, 2, 3, 4, 5]
        // [1, 2, 3, 5, 6, 4]
        var _node = get(a[--aEnd], -1).nextSibling;
        parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
        parentNode.insertBefore(get(b[--bEnd], 1), _node); // mark the future index as identical (yeah, it's dirty, but cheap 👍)
        // The main reason to do this, is that when a[aEnd] will be reached,
        // the loop will likely be on the fast path, as identical to b[bEnd].
        // In the best case scenario, the next loop will skip the tail,
        // but in the worst one, this node will be considered as already
        // processed, bailing out pretty quickly from the map index check

        a[aEnd] = b[bEnd];
      } // map based fallback, "slow" path
      else {
        // the map requires an O(bEnd - bStart) operation once
        // to store all future nodes indexes for later purposes.
        // In the worst case scenario, this is a full O(N) cost,
        // and such scenario happens at least when all nodes are different,
        // but also if both first and last items of the lists are different
        if (!map) {
          map = new Map();
          var i = bStart;

          while (i < bEnd) {
            map.set(b[i], i++);
          }
        } // if it's a future node, hence it needs some handling


        if (map.has(a[aStart])) {
          // grab the index of such node, 'cause it might have been processed
          var index = map.get(a[aStart]); // if it's not already processed, look on demand for the next LCS

          if (bStart < index && index < bEnd) {
            var _i = aStart; // counts the amount of nodes that are the same in the future

            var sequence = 1;

            while (++_i < aEnd && _i < bEnd && map.get(a[_i]) === index + sequence) {
              sequence++;
            } // effort decision here: if the sequence is longer than replaces
            // needed to reach such sequence, which would brings again this loop
            // to the fast path, prepend the difference before a sequence,
            // and move only the future list index forward, so that aStart
            // and bStart will be aligned again, hence on the fast path.
            // An example considering aStart and bStart are both 0:
            // a: [1, 2, 3, 4]
            // b: [7, 1, 2, 3, 6]
            // this would place 7 before 1 and, from that time on, 1, 2, and 3
            // will be processed at zero cost


            if (sequence > index - bStart) {
              var _node2 = get(a[aStart], 0);

              while (bStart < index) {
                parentNode.insertBefore(get(b[bStart++], 1), _node2);
              }
            } // if the effort wasn't good enough, fallback to a replace,
            // moving both source and target indexes forward, hoping that some
            // similar node will be found later on, to go back to the fast path
            else {
              parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
            }
          } // otherwise move the source forward, 'cause there's nothing to do
          else aStart++;
        } // this node has no meaning in the future list, so it's more than safe
        // to remove it, and check the next live node out instead, meaning
        // that only the live list index should be forwarded
        else parentNode.removeChild(get(a[aStart++], -1));
      }
    }

    return b;
  });

  /*! (c) Andrea Giammarchi - ISC */
  var importNode = function (document, appendChild, cloneNode, createTextNode, importNode) {
    var _native = (importNode in document); // IE 11 has problems with cloning templates:
    // it "forgets" empty childNodes. This feature-detects that.


    var fragment = document.createDocumentFragment();
    fragment[appendChild](document[createTextNode]('g'));
    fragment[appendChild](document[createTextNode](''));
    /* istanbul ignore next */

    var content = _native ? document[importNode](fragment, true) : fragment[cloneNode](true);
    return content.childNodes.length < 2 ? function importNode(node, deep) {
      var clone = node[cloneNode]();

      for (var
      /* istanbul ignore next */
      childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++) {
        clone[appendChild](importNode(childNodes[i], deep));
      }

      return clone;
    } :
    /* istanbul ignore next */
    _native ? document[importNode] : function (node, deep) {
      return node[cloneNode](!!deep);
    };
  }(document, 'appendChild', 'cloneNode', 'createTextNode', 'importNode');

  var trim = ''.trim ||
  /* istanbul ignore next */
  function () {
    return String(this).replace(/^\s+|\s+/g, '');
  };

  /* istanbul ignore next */

  var normalizeAttributes = UID_IE ? function (attributes, parts) {
    var html = parts.join(' ');
    return parts.slice.call(attributes, 0).sort(function (left, right) {
      return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
  } : function (attributes, parts) {
    return parts.slice.call(attributes, 0);
  };

  function find(node, path) {
    var length = path.length;
    var i = 0;

    while (i < length) {
      node = node.childNodes[path[i++]];
    }

    return node;
  }

  function parse(node, holes, parts, path) {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    var i = 0;

    while (i < length) {
      var child = childNodes[i];

      switch (child.nodeType) {
        case ELEMENT_NODE$1:
          var childPath = path.concat(i);
          parseAttributes(child, holes, parts, childPath);
          parse(child, holes, parts, childPath);
          break;

        case COMMENT_NODE:
          var textContent = child.textContent;

          if (textContent === UID) {
            parts.shift();
            holes.push( // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i)));
          } else {
            switch (textContent.slice(0, 2)) {
              case '/*':
                if (textContent.slice(-2) !== '*/') break;

              case "\uD83D\uDC7B":
                // ghost
                node.removeChild(child);
                i--;
                length--;
            }
          }

          break;

        case TEXT_NODE:
          // the following ignore is actually covered by browsers
          // only basicHTML ends up on previous COMMENT_NODE case
          // instead of TEXT_NODE because it knows nothing about
          // special style or textarea behavior

          /* istanbul ignore if */
          if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && trim.call(child.textContent) === UIDC) {
            parts.shift();
            holes.push(Text(node, path));
          }

          break;
      }

      i++;
    }
  }

  function parseAttributes(node, holes, parts, path) {
    var attributes = node.attributes;
    var cache = [];
    var remove = [];
    var array = normalizeAttributes(attributes, parts);
    var length = array.length;
    var i = 0;

    while (i < length) {
      var attribute = array[i++];
      var direct = attribute.value === UID;
      var sparse;

      if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
        var name = attribute.name; // the following ignore is covered by IE
        // and the IE9 double viewBox test

        /* istanbul ignore else */

        if (cache.indexOf(name) < 0) {
          cache.push(name);
          var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp('^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")[\\S\\s]*', 'i'), '$1');
          var value = attributes[realName] || // the following ignore is covered by browsers
          // while basicHTML is already case-sensitive

          /* istanbul ignore next */
          attributes[realName.toLowerCase()];
          if (direct) holes.push(Attr(value, path, realName, null));else {
            var skip = sparse.length - 2;

            while (skip--) {
              parts.shift();
            }

            holes.push(Attr(value, path, realName, sparse));
          }
        }

        remove.push(attribute);
      }
    }

    length = remove.length;
    i = 0;
    /* istanbul ignore next */

    var cleanValue = 0 < length && UID_IE && !('ownerSVGElement' in node);

    while (i < length) {
      // Edge HTML bug #16878726
      var attr = remove[i++]; // IE/Edge bug lighterhtml#63 - clean the value or it'll persist

      /* istanbul ignore next */

      if (cleanValue) attr.value = ''; // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode

      node.removeAttribute(attr.name);
    } // This is a very specific Firefox/Safari issue
    // but since it should be a not so common pattern,
    // it's probably worth patching regardless.
    // Basically, scripts created through strings are death.
    // You need to create fresh new scripts instead.
    // TODO: is there any other node that needs such nonsense?


    var nodeName = node.nodeName;

    if (/^script$/i.test(nodeName)) {
      // this used to be like that
      // var script = createElement(node, nodeName);
      // then Edge arrived and decided that scripts created
      // through template documents aren't worth executing
      // so it became this ... hopefully it won't hurt in the wild
      var script = document.createElement(nodeName);
      length = attributes.length;
      i = 0;

      while (i < length) {
        script.setAttributeNode(attributes[i++].cloneNode(true));
      }

      script.textContent = node.textContent;
      node.parentNode.replaceChild(script, node);
    }
  }

  function Any(node, path) {
    return {
      type: 'any',
      node: node,
      path: path
    };
  }

  function Attr(node, path, name, sparse) {
    return {
      type: 'attr',
      node: node,
      path: path,
      name: name,
      sparse: sparse
    };
  }

  function Text(node, path) {
    return {
      type: 'text',
      node: node,
      path: path
    };
  }

  // globals
  var parsed = umap(new WeakMap$1());

  function createInfo(options, template) {
    var markup = (options.convert || domsanitizer)(template);
    var transform = options.transform;
    if (transform) markup = transform(markup);
    var content = createContent(markup, options.type);
    cleanContent(content);
    var holes = [];
    parse(content, holes, template.slice(0), []);
    return {
      content: content,
      updates: function updates(content) {
        var updates = [];
        var len = holes.length;
        var i = 0;
        var off = 0;

        while (i < len) {
          var info = holes[i++];
          var node = find(content, info.path);

          switch (info.type) {
            case 'any':
              updates.push({
                fn: options.any(node, []),
                sparse: false
              });
              break;

            case 'attr':
              var sparse = info.sparse;
              var fn = options.attribute(node, info.name, info.node);
              if (sparse === null) updates.push({
                fn: fn,
                sparse: false
              });else {
                off += sparse.length - 2;
                updates.push({
                  fn: fn,
                  sparse: true,
                  values: sparse
                });
              }
              break;

            case 'text':
              updates.push({
                fn: options.text(node),
                sparse: false
              });
              node.textContent = '';
              break;
          }
        }

        len += off;
        return function () {
          var length = arguments.length;

          if (len !== length - 1) {
            throw new Error(length - 1 + ' values instead of ' + len + '\n' + template.join('${value}'));
          }

          var i = 1;
          var off = 1;

          while (i < length) {
            var update = updates[i - off];

            if (update.sparse) {
              var values = update.values;
              var value = values[0];
              var j = 1;
              var l = values.length;
              off += l - 2;

              while (j < l) {
                value += arguments[i++] + values[j++];
              }

              update.fn(value);
            } else update.fn(arguments[i++]);
          }

          return content;
        };
      }
    };
  }

  function createDetails(options, template) {
    var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
    return info.updates(importNode.call(document, info.content, true));
  }

  var empty = [];

  function domtagger(options) {
    var previous = empty;
    var updates = cleanContent;
    return function (template) {
      if (previous !== template) updates = createDetails(options, previous = template);
      return updates.apply(null, arguments);
    };
  }

  function cleanContent(fragment) {
    var childNodes = fragment.childNodes;
    var i = childNodes.length;

    while (i--) {
      var child = childNodes[i];

      if (child.nodeType !== 1 && trim.call(child.textContent).length === 0) {
        fragment.removeChild(child);
      }
    }
  }

  /*! (c) Andrea Giammarchi - ISC */
  var hyperStyle = function () {

    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var hyphen = /([^A-Z])([A-Z]+)/g;
    return function hyperStyle(node, original) {
      return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
    };

    function ized($0, $1, $2) {
      return $1 + '-' + $2.toLowerCase();
    }

    function svg(node, original) {
      var style;
      if (original) style = original.cloneNode(true);else {
        node.setAttribute('style', '--hyper:style;');
        style = node.getAttributeNode('style');
      }
      style.value = '';
      node.setAttributeNode(style);
      return update(style, true);
    }

    function toStyle(object) {
      var key,
          css = [];

      for (key in object) {
        css.push(key.replace(hyphen, ized), ':', object[key], ';');
      }

      return css.join('');
    }

    function update(style, isSVG) {
      var oldType, oldValue;
      return function (newValue) {
        var info, key, styleValue, value;

        switch (_typeof(newValue)) {
          case 'object':
            if (newValue) {
              if (oldType === 'object') {
                if (!isSVG) {
                  if (oldValue !== newValue) {
                    for (key in oldValue) {
                      if (!(key in newValue)) {
                        style[key] = '';
                      }
                    }
                  }
                }
              } else {
                if (isSVG) style.value = '';else style.cssText = '';
              }

              info = isSVG ? {} : style;

              for (key in newValue) {
                value = newValue[key];
                styleValue = typeof value === 'number' && !IS_NON_DIMENSIONAL.test(key) ? value + 'px' : value;
                if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);else info[key] = styleValue;
              }

              oldType = 'object';
              if (isSVG) style.value = toStyle(oldValue = info);else oldValue = newValue;
              break;
            }

          default:
            if (oldValue != newValue) {
              oldType = 'string';
              oldValue = newValue;
              if (isSVG) style.value = newValue || '';else style.cssText = newValue || '';
            }

            break;
        }
      };
    }
  }();

  var aria = function aria(node) {
    return function (values) {
      for (var key in values) {
        var name = key === 'role' ? key : "aria-".concat(key);
        var value = values[key];
        if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
      }
    };
  };
  var attribute = function attribute(node, name) {
    var oldValue,
        orphan = true;
    var attributeNode = document.createAttributeNS(null, name);
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;

        if (oldValue == null) {
          if (!orphan) {
            node.removeAttributeNode(attributeNode);
            orphan = true;
          }
        } else {
          attributeNode.value = newValue;

          if (orphan) {
            node.setAttributeNodeNS(attributeNode);
            orphan = false;
          }
        }
      }
    };
  };

  var _boolean = function _boolean(node, key, oldValue) {
    return function (newValue) {
      if (oldValue !== !!newValue) {
        // when IE won't be around anymore ...
        // node.toggleAttribute(key, oldValue = !!newValue);
        if (oldValue = !!newValue) node.setAttribute(key, '');else node.removeAttribute(key);
      }
    };
  };
  var data = function data(_ref) {
    var dataset = _ref.dataset;
    return function (values) {
      for (var key in values) {
        var value = values[key];
        if (value == null) delete dataset[key];else dataset[key] = value;
      }
    };
  };
  var event = function event(node, name) {
    var oldValue,
        type = name.slice(2);
    if (!(name in node) && name.toLowerCase() in node) type = type.toLowerCase();
    return function (newValue) {
      var info = isArray(newValue) ? newValue : [newValue, false];

      if (oldValue !== info[0]) {
        if (oldValue) node.removeEventListener(type, oldValue, info[1]);
        if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
      }
    };
  };
  var ref = function ref(node) {
    return function (value) {
      if (typeof value === 'function') value(node);else value.current = node;
    };
  };
  var setter = function setter(node, key) {
    return key === 'dataset' ? data(node) : function (value) {
      node[key] = value;
    };
  };

  var hyperProperty = function hyperProperty(node, name) {
    var oldValue;
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;

        if (node[name] !== newValue) {
          if (newValue == null) {
            // cleanup before dropping the attribute to fix IE/Edge gotcha
            node[name] = '';
            node.removeAttribute(name);
          } else node[name] = newValue;
        }
      }
    };
  }; // list of attributes that should not be directly assigned


  var readOnly = /^(?:form|list)$/i; // simplifies text node creation

  var text = function text(node, _text) {
    return node.ownerDocument.createTextNode(_text);
  };

  function Tagger(type) {
    this.type = type;
    return domtagger(this);
  }
  Tagger.prototype = {
    // there are four kind of attributes, and related behavior:
    //  * events, with a name starting with `on`, to add/remove event listeners
    //  * special, with a name present in their inherited prototype, accessed directly
    //  * regular, accessed through get/setAttribute standard DOM methods
    //  * style, the only regular attribute that also accepts an object as value
    //    so that you can style=${{width: 120}}. In this case, the behavior has been
    //    fully inspired by Preact library and its simplicity.
    attribute: function attribute$1(node, name, original) {
      var isSVG = this.type === 'svg';

      switch (name) {
        case 'class':
          if (isSVG) return attribute(node, name);
          name = 'className';

        case 'props':
          return setter(node, name);

        case 'aria':
          return aria(node);

        case 'style':
          return hyperStyle(node, original, isSVG);

        case 'ref':
          return ref(node);

        case '.dataset':
          return data(node);

        default:
          if (name.slice(0, 1) === '.') return setter(node, name.slice(1));
          if (name.slice(0, 1) === '?') return _boolean(node, name.slice(1));
          if (name.slice(0, 2) === 'on') return event(node, name);
          if (name in node && !(isSVG || readOnly.test(name))) return hyperProperty(node, name);
          return attribute(node, name);
      }
    },
    // in a hyper(node)`<div>${content}</div>` case
    // everything could happen:
    //  * it's a JS primitive, stored as text
    //  * it's null or undefined, the node should be cleaned
    //  * it's a promise, update the content once resolved
    //  * it's an explicit intent, perform the desired operation
    //  * it's an Array, resolve all values if Promises and/or
    //    update the node with the resulting list of content
    any: function any(node, childNodes) {
      var type = this.type;
      var fastPath = false;
      var oldValue;

      var anyContent = function anyContent(value) {
        switch (_typeof(value)) {
          case 'string':
          case 'number':
          case 'boolean':
            if (fastPath) {
              if (oldValue !== value) {
                oldValue = value;
                childNodes[0].textContent = value;
              }
            } else {
              fastPath = true;
              oldValue = value;
              childNodes = udomdiff(node.parentNode, childNodes, [text(node, value)], diffable, node);
            }

            break;

          case 'function':
            anyContent(value(node));
            break;

          case 'object':
          case 'undefined':
            if (value == null) {
              fastPath = false;
              childNodes = udomdiff(node.parentNode, childNodes, [], diffable, node);
              break;
            }

          default:
            fastPath = false;
            oldValue = value;

            if (isArray(value)) {
              if (value.length === 0) {
                if (childNodes.length) {
                  childNodes = udomdiff(node.parentNode, childNodes, [], diffable, node);
                }
              } else {
                switch (_typeof(value[0])) {
                  case 'string':
                  case 'number':
                  case 'boolean':
                    anyContent(String(value));
                    break;

                  case 'function':
                    anyContent(value.map(invoke, node));
                    break;

                  case 'object':
                    if (isArray(value[0])) {
                      value = value.concat.apply([], value);
                    }

                  default:
                    childNodes = udomdiff(node.parentNode, childNodes, value, diffable, node);
                    break;
                }
              }
            } else if ('ELEMENT_NODE' in value) {
              childNodes = udomdiff(node.parentNode, childNodes, value.nodeType === 11 ? slice.call(value.childNodes) : [value], diffable, node);
            } else if ('text' in value) {
              anyContent(String(value.text));
            } else if ('any' in value) {
              anyContent(value.any);
            } else if ('html' in value) {
              childNodes = udomdiff(node.parentNode, childNodes, slice.call(createContent([].concat(value.html).join(''), type).childNodes), diffable, node);
            } else if ('length' in value) {
              anyContent(slice.call(value));
            }

            break;
        }
      };

      return anyContent;
    },
    // style or textareas don't accept HTML as content
    // it's pointless to transform or analyze anything
    // different from text there but it's worth checking
    // for possible defined intents.
    text: function text(node) {
      var oldValue;

      var textContent = function textContent(value) {
        if (oldValue !== value) {
          oldValue = value;

          var type = _typeof(value);

          if (type === 'object' && value) {
            if ('text' in value) {
              textContent(String(value.text));
            } else if ('any' in value) {
              textContent(value.any);
            } else if ('html' in value) {
              textContent([].concat(value.html).join(''));
            } else if ('length' in value) {
              textContent(slice.call(value).join(''));
            }
          } else if (type === 'function') {
            textContent(value(node));
          } else {
            node.textContent = value == null ? '' : value;
          }
        }
      };

      return textContent;
    }
  };

  function invoke(callback) {
    return callback(this);
  }

  var create$1 = Object.create,
      freeze = Object.freeze,
      keys$1 = Object.keys;
  var tProto = Tagger.prototype;
  var cache = umap(new WeakMap$1());

  var createRender = function createRender(Tagger) {
    return {
      html: outer('html', Tagger),
      svg: outer('svg', Tagger),
      render: function render(where, what) {
        var hole = typeof what === 'function' ? what() : what;
        var info = cache.get(where) || cache.set(where, createCache());
        var wire = hole instanceof LighterHole ? unroll(Tagger, info, hole) : hole;

        if (wire !== info.wire) {
          info.wire = wire;
          where.textContent = '';
          where.appendChild(wire.valueOf());
        }

        return where;
      }
    };
  };

  var createCache = function createCache() {
    return {
      stack: [],
      entry: null,
      wire: null
    };
  };

  var outer = function outer(type, Tagger) {
    var cache = umap(new WeakMap$1());

    var fixed = function fixed(info) {
      return function () {
        return unroll(Tagger, info, hole.apply(null, arguments));
      };
    };

    hole["for"] = function (ref, id) {
      var memo = cache.get(ref) || cache.set(ref, create$1(null));
      return memo[id] || (memo[id] = fixed(createCache()));
    };

    hole.node = function () {
      return unroll(Tagger, createCache(), hole.apply(null, arguments)).valueOf();
    };

    return hole;

    function hole() {
      return new LighterHole(type, tta.apply(null, arguments));
    }
  };

  var unroll = function unroll(Tagger, info, _ref) {
    var _entry;

    var type = _ref.type,
        template = _ref.template,
        values = _ref.values;
    var length = values.length;
    unrollValues(Tagger, info, values, length);
    var entry = info.entry;

    if (!entry || entry.template !== template || entry.type !== type) {
      var tag = new Tagger(type);
      info.entry = entry = {
        type: type,
        template: template,
        tag: tag,
        wire: persistent(tag.apply(void 0, [template].concat(_toConsumableArray(values))))
      };
    } else (_entry = entry).tag.apply(_entry, [template].concat(_toConsumableArray(values)));

    return entry.wire;
  };

  var unrollValues = function unrollValues(Tagger, _ref2, values, length) {
    var stack = _ref2.stack;

    for (var i = 0; i < length; i++) {
      var hole = values[i];
      if (hole instanceof Hole) values[i] = unroll(Tagger, stack[i] || (stack[i] = createCache()), hole);else if (isArray(hole)) unrollValues(Tagger, stack[i] || (stack[i] = createCache()), hole, hole.length);else stack[i] = null;
    }

    if (length < stack.length) stack.splice(length);
  };

  freeze(LighterHole);

  function LighterHole(type, args) {
    this.type = type;
    this.template = args.shift();
    this.values = args;
  }
  var Hole = LighterHole;
  var custom = function custom(overrides) {
    var prototype = create$1(tProto);
    keys$1(overrides).forEach(function (key) {
      prototype[key] = overrides[key](prototype[key] || (key === 'convert' ? domsanitizer : String));
    });
    CustomTagger.prototype = prototype;
    return createRender(CustomTagger);

    function CustomTagger() {
      return Tagger.apply(this, arguments);
    }
  };

  var _createRender = createRender(Tagger);
      _createRender.render;
      _createRender.html;
      _createRender.svg;

  function tta() {
    var out = [],
        i = 0,
        length = arguments.length;

    while (i < length) {
      out.push(arguments[i++]);
    }

    return out;
  }

  var compat = typeof cancelAnimationFrame === 'function';
  var cAF = compat ? cancelAnimationFrame : clearTimeout;
  var rAF = compat ? requestAnimationFrame : setTimeout;
  function reraf(limit) {
    var force, timer, callback, self, args;
    reset();
    return function reschedule(_callback, _self, _args) {
      callback = _callback;
      self = _self;
      args = _args;
      if (!timer) timer = rAF(invoke);
      if (--force < 0) stop(true);
      return stop;
    };

    function invoke() {
      reset();
      callback.apply(self, args || []);
    }

    function reset() {
      force = limit || Infinity;
      timer = compat ? 0 : null;
    }

    function stop(flush) {
      var didStop = !!timer;

      if (didStop) {
        cAF(timer);
        if (flush) invoke();
      }

      return didStop;
    }
  }

  /*! (c) Andrea Giammarchi - ISC */
  var state = null; // main exports

  var augmentor = function augmentor(fn) {
    var stack = [];
    return function hook() {
      var prev = state;
      var after = [];
      state = {
        hook: hook,
        args: arguments,
        stack: stack,
        i: 0,
        length: stack.length,
        after: after
      };

      try {
        return fn.apply(null, arguments);
      } finally {
        state = prev;

        for (var i = 0, length = after.length; i < length; i++) {
          after[i]();
        }
      }
    };
  };

  var updates = umap(new WeakMap());

  var hookdate = function hookdate(hook, ctx, args) {
    hook.apply(ctx, args);
  };

  var defaults = {
    async: false,
    always: false
  };

  var getValue = function getValue(value, f) {
    return typeof f == 'function' ? f(value) : f;
  };

  var useReducer = function useReducer(reducer, value, init, options) {
    var i = state.i++;
    var _state = state,
        hook = _state.hook,
        args = _state.args,
        stack = _state.stack,
        length = _state.length;
    if (i === length) state.length = stack.push({});
    var ref = stack[i];
    ref.args = args;

    if (i === length) {
      var fn = typeof init === 'function';

      var _ref = (fn ? options : init) || options || defaults,
          asy = _ref.async,
          always = _ref.always;

      ref.$ = fn ? init(value) : getValue(void 0, value);
      ref._ = asy ? updates.get(hook) || updates.set(hook, reraf()) : hookdate;

      ref.f = function (value) {
        var $value = reducer(ref.$, value);

        if (always || ref.$ !== $value) {
          ref.$ = $value;

          ref._(hook, null, ref.args);
        }
      };
    }

    return [ref.$, ref.f];
  }; // useState

  var useState = function useState(value, options) {
    return useReducer(getValue, value, void 0, options);
  }; // useContext

  var hooks$1 = new WeakMap();
  var useContext = function useContext(context) {
    var _state2 = state,
        hook = _state2.hook,
        args = _state2.args;
    var stack = hooks$1.get(context);
    var info = {
      hook: hook,
      args: args
    };
    if (!stack.some(update, info)) stack.push(info);
    return context.value;
  };

  function update(_ref3) {
    var hook = _ref3.hook;
    return hook === this.hook;
  } // dropEffect, hasEffect, useEffect, useLayoutEffect


  var effects = new WeakMap();
  var fx = umap(effects);

  var stop = function stop() {};

  var createEffect = function createEffect(asy) {
    return function (effect, guards) {
      var i = state.i++;
      var _state3 = state,
          hook = _state3.hook,
          after = _state3.after,
          stack = _state3.stack,
          length = _state3.length;

      if (i < length) {
        var info = stack[i];
        var _update = info.update,
            values = info.values,
            _stop = info.stop;

        if (!guards || guards.some(different, values)) {
          info.values = guards;
          if (asy) _stop(asy);
          var clean = info.clean;

          if (clean) {
            info.clean = null;
            clean();
          }

          var _invoke = function _invoke() {
            info.clean = effect();
          };

          if (asy) _update(_invoke);else after.push(_invoke);
        }
      } else {
        var _update2 = asy ? reraf() : stop;

        var _info = {
          clean: null,
          update: _update2,
          values: guards,
          stop: stop
        };
        state.length = stack.push(_info);
        (fx.get(hook) || fx.set(hook, [])).push(_info);

        var _invoke2 = function _invoke2() {
          _info.clean = effect();
        };

        if (asy) _info.stop = _update2(_invoke2);else after.push(_invoke2);
      }
    };
  };

  var dropEffect = function dropEffect(hook) {
    (effects.get(hook) || []).forEach(function (info) {
      var clean = info.clean,
          stop = info.stop;
      stop();

      if (clean) {
        info.clean = null;
        clean();
      }
    });
  };
  effects.has.bind(effects);
  var useEffect = createEffect(true);
  var useLayoutEffect = createEffect(false); // useMemo, useCallback

  var useMemo = function useMemo(memo, guards) {
    var i = state.i++;
    var _state4 = state,
        stack = _state4.stack,
        length = _state4.length;
    if (i === length) state.length = stack.push({
      $: memo(),
      _: guards
    });else if (!guards || guards.some(different, stack[i]._)) stack[i] = {
      $: memo(),
      _: guards
    };
    return stack[i].$;
  };
  var useCallback = function useCallback(fn, guards) {
    return useMemo(function () {
      return fn;
    }, guards);
  }; // useRef

  var useRef = function useRef(value) {
    var i = state.i++;
    var _state5 = state,
        stack = _state5.stack,
        length = _state5.length;
    if (i === length) state.length = stack.push({
      current: value
    });
    return stack[i];
  };

  function different(value, i) {
    return value !== this[i];
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var transpiled = null; // the angry koala check @WebReflection/status/1133757401482584064

  try {
    transpiled = new {
      o: function o() {}
    }.o();
  } catch ($) {}

  var extend = function extend(Super) {
    return /*#__PURE__*/function (_Super) {
      _inherits(_class, _Super);

      var _super = _createSuper$1(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      return _createClass(_class);
    }(Super);
  };

  if (transpiled) {
    var getPrototypeOf = Object.getPrototypeOf,
        setPrototypeOf = Object.setPrototypeOf;

    var _ref = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : {
      construct: function construct(Super, args, Target) {
        var a = [null];

        for (var i = 0; i < args.length; i++) {
          a.push(args[i]);
        }

        var Parent = Super.bind.apply(Super, a);
        return setPrototypeOf(new Parent(), Target.prototype);
      }
    },
        construct = _ref.construct;

    extend = function extend(Super, cutTheMiddleMan) {
      function Class() {
        return construct(cutTheMiddleMan ? getPrototypeOf(Super) : Super, arguments, Class);
      }

      setPrototypeOf(Class.prototype, Super.prototype);
      return setPrototypeOf(Class, Super);
    };
  }

  var hash = function hash(s) {
    var length = s.length;
    var t = 0;
    var i = 0;

    while (i < length) {
      t = (t << 5) - t + s.charCodeAt(i++);
      t = t & t;
    }

    return t.toString(36);
  };

  var registry = {
    map: {},
    re: null
  };

  var regExp = function regExp(keys) {
    return new RegExp("<(/)?(".concat(keys.join('|'), ")([^A-Za-z0-9:._-])"), 'g');
  };

  var tmp = null;

  var replace = function replace(markup, info) {
    var _ref2 = tmp || info,
        map = _ref2.map,
        re = _ref2.re;

    return markup.replace(re, function (_, close, name, after) {
      var _map$name = map[name],
          tagName = _map$name.tagName,
          is = _map$name.is,
          element = _map$name.element;
      return element ? close ? "</".concat(is, ">") : "<".concat(is).concat(after) : close ? "</".concat(tagName, ">") : "<".concat(tagName, " is=\"").concat(is, "\"").concat(after);
    });
  };

  var selector = function selector(_ref3) {
    var tagName = _ref3.tagName,
        is = _ref3.is,
        element = _ref3.element;
    return element ? is : "".concat(tagName, "[is=\"").concat(is, "\"]");
  };

  var getInfo = function getInfo() {
    return tmp;
  };

  var setInfo = function setInfo(info) {
    tmp = info;
  };

  var hooks = {
    useCallback: useCallback,
    useContext: useContext,
    useEffect: useEffect,
    useLayoutEffect: useLayoutEffect,
    useMemo: useMemo,
    useReducer: useReducer,
    useRef: useRef,
    useState: useState
  };

  var _custom = custom({
    transform: function transform() {
      return function (markup) {
        return replace(markup, registry);
      };
    }
  }),
      lighterRender = _custom.render,
      lighterHTML = _custom.html,
      lighterSVG = _custom.svg;

  var secret = "_\uD83D\uDD25";
  var defineProperties$1 = Object.defineProperties;
  var $html = new WeakMap$1();
  var $svg = new WeakMap$1();
  var $mappedAttributes = new WeakMap$1();
  var ws = new WeakSet$1();
  var configurable = true;
  var attributeChangedCallback = 'attributeChangedCallback';
  var connectedCallback = 'connectedCallback';
  var disconnectedCallback = "dis".concat(connectedCallback);

  var addInit = function addInit(prototype, properties, method) {
    if (method in prototype) {
      var original = prototype[method];
      properties[method] = {
        configurable: configurable,
        value: function value() {
          init.call(this);
          return original.apply(this, arguments);
        }
      };
    } else properties[method] = {
      configurable: configurable,
      value: init
    };
  };

  var augmented = function augmented(Class) {
    var prototype = Class.prototype;
    var events = [];
    var properties = {
      html: {
        configurable: configurable,
        get: getHTML
      },
      svg: {
        configurable: configurable,
        get: getSVG
      }
    };
    properties[secret] = {
      value: {
        events: events,
        info: null
      }
    };
    if (!('handleEvent' in prototype)) properties.handleEvent = {
      configurable: configurable,
      value: handleEvent
    };

    if ('render' in prototype && prototype.render.length) {
      var oninit = prototype.oninit;
      defineProperties$1(prototype, {
        oninit: {
          configurable: configurable,
          value: function value() {
            var hook = augmentor(this.render.bind(this, hooks));
            defineProperties$1(this, {
              render: {
                configurable: configurable,
                value: hook
              }
            });
            this.addEventListener('disconnected', dropEffect.bind(null, hook), false);
            if (oninit) oninit.apply(this, arguments);
          }
        }
      });
    } // setup the init dispatch only if needed
    // ensure render with an init is triggered after


    if ('oninit' in prototype) {
      events.push('init');
      addInit(prototype, properties, 'render');
    } // ensure all other callbacks are dispatched too


    addInit(prototype, properties, attributeChangedCallback);
    addInit(prototype, properties, connectedCallback);
    addInit(prototype, properties, disconnectedCallback);
    [[attributeChangedCallback, 'onattributechanged', onattributechanged], [connectedCallback, 'onconnected', onconnected], [disconnectedCallback, 'ondisconnected', ondisconnected], [connectedCallback, 'render', onconnectedrender]].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          ce = _ref2[0],
          he = _ref2[1],
          _value = _ref2[2];

      if (!(ce in prototype) && he in prototype) {
        if (he !== 'render') events.push(he.slice(2));

        if (ce in properties) {
          var original = properties[ce].value;
          properties[ce] = {
            configurable: configurable,
            value: function value() {
              original.apply(this, arguments);
              return _value.apply(this, arguments);
            }
          };
        } else properties[ce] = {
          configurable: configurable,
          value: _value
        };
      }
    });
    var booleanAttributes = Class.booleanAttributes || [];
    booleanAttributes.forEach(function (name) {
      if (!(name in prototype)) properties[name] = {
        configurable: configurable,
        get: function get() {
          return this.hasAttribute(name);
        },
        set: function set(value) {
          if (!value || value === 'false') this.removeAttribute(name);else this.setAttribute(name, value);
        }
      };
    });
    var observedAttributes = Class.observedAttributes || [];
    observedAttributes.forEach(function (name) {
      if (!(name in prototype)) properties[name] = {
        configurable: configurable,
        get: function get() {
          return this.getAttribute(name);
        },
        set: function set(value) {
          if (value == null) this.removeAttribute(name);else this.setAttribute(name, value);
        }
      };
    });
    var mappedAttributes = Class.mappedAttributes || [];
    mappedAttributes.forEach(function (name) {
      var _ = new WeakMap$1();

      var listening = ('on' + name in prototype);
      if (listening) events.push(name);
      properties[name] = {
        configurable: configurable,
        get: function get() {
          return _.get(this);
        },
        set: function set(detail) {
          _.set(this, detail);

          if (listening) {
            var e = evt(name);
            e.detail = detail;
            if (ws.has(this)) this.dispatchEvent(e);else {
              var dispatch = $mappedAttributes.get(this);
              if (dispatch) dispatch.push(e);else $mappedAttributes.set(this, [e]);
            }
          }
        }
      };
    });
    defineProperties$1(prototype, properties);
    var attributes = booleanAttributes.concat(observedAttributes);
    return attributes.length ? defineProperties$1(Class, {
      observedAttributes: {
        configurable: configurable,
        get: function get() {
          return attributes;
        }
      }
    }) : Class;
  };

  var evt = function evt(type) {
    return new Event$1(type);
  };

  var html = function html() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Hole('html', args);
  };

  html["for"] = lighterHTML["for"];

  var svg = function svg() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new Hole('svg', args);
  };

  svg["for"] = lighterSVG["for"];

  var setParsed = function setParsed(wm, template, _ref3) {
    var info = _ref3.info;
    var value = info ? replace(template.join(secret), info).split(secret) : template;
    wm.set(template, value);
    return value;
  };

  var setWrap = function setWrap(self, type, wm) {
    var fn = wrap(self, type, new WeakMap$1());
    wm.set(self, fn);
    return fn;
  };

  var wrap = function wrap(self, type, wm) {
    return function (template) {
      for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        values[_key3 - 1] = arguments[_key3];
      }

      var local = wm.get(template) || setParsed(wm, template, self[secret]);
      return lighterRender(self, function () {
        return type.apply(void 0, [local].concat(values));
      });
    };
  };

  function addListener(type) {
    this.addEventListener(type, this);
  }

  function dispatchEvent$1(event) {
    this.dispatchEvent(event);
  }

  function getHTML() {
    return $html.get(this) || setWrap(this, html, $html);
  }

  function getSVG() {
    return $svg.get(this) || setWrap(this, svg, $svg);
  }

  function handleEvent(event) {
    this["on".concat(event.type)](event);
  }

  function init() {
    if (!ws.has(this)) {
      ws.add(this);
      this[secret].events.forEach(addListener, this);
      this.dispatchEvent(evt('init'));
      var events = $mappedAttributes.get(this);

      if (events) {
        $mappedAttributes["delete"](this);
        events.forEach(dispatchEvent$1, this);
      }
    }
  }

  function onattributechanged(attributeName, oldValue, newValue) {
    var event = evt('attributechanged');
    event.attributeName = attributeName;
    event.oldValue = oldValue;
    event.newValue = newValue;
    this.dispatchEvent(event);
  }

  function onconnected() {
    this.dispatchEvent(evt('connected'));
  }

  function onconnectedrender() {
    this.render();
  }

  function ondisconnected() {
    this.dispatchEvent(evt('disconnected'));
  }

  var create = Object.create,
      defineProperty = Object.defineProperty,
      defineProperties = Object.defineProperties,
      getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      keys = Object.keys;
  var HTML = {
    element: HTMLElement
  };
  var cc = new WeakMap$1();
  var dc = new WeakMap$1();
  var oc = new WeakMap$1();
  new WeakMap$1();

  var info = function info(tagName, is) {
    return {
      tagName: tagName,
      is: is,
      element: tagName === 'element'
    };
  };

  var define = function define($, definition) {
    return (typeof $ === 'string' ? register($, definition, '') : register($.name, $, '')).Class;
  };

  var fromClass = function fromClass(constructor) {
    var Class = extend(constructor, false);
    cc.set(constructor, augmented(Class));
    return Class;
  };

  var fromObject = function fromObject(object, tag) {
    var _grabInfo = grabInfo(object),
        statics = _grabInfo.statics,
        prototype = _grabInfo.prototype;

    var Class = extend(HTML[tag] || (HTML[tag] = document.createElement(tag).constructor), false);
    defineProperties(Class.prototype, prototype);
    defineProperties(Class, statics);
    oc.set(object, augmented(Class));
    return Class;
  };

  var grabInfo = function grabInfo(object) {
    var statics = create(null);
    var prototype = create(null);
    var info = {
      prototype: prototype,
      statics: statics
    };
    getOwnPropertyNames(object).concat(getOwnPropertySymbols(object)).forEach(function (name) {
      var descriptor = getOwnPropertyDescriptor(object, name);
      descriptor.enumerable = false;

      switch (name) {
        case 'extends':
          name = 'tagName';

        case 'contains':
        case 'includes':
        case 'name':
        case 'booleanAttributes':
        case 'mappedAttributes':
        case 'observedAttributes':
        case 'style':
        case 'tagName':
          statics[name] = descriptor;
          break;

        default:
          prototype[name] = descriptor;
      }
    });
    return info;
  };

  var injectStyle = function injectStyle(cssText) {
    if ((cssText || '').length) {
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) style.styleSheet.cssText = cssText;else style.appendChild(document.createTextNode(cssText));
      var head = document.head || document.querySelector('head');
      head.insertBefore(style, head.lastChild);
    }
  };

  var register = function register($, definition, uid) {
    var _customElements;

    var validName = /^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/;
    if (!validName.test($)) throw 'Invalid name';
    var name = RegExp.$1,
        asTag = RegExp.$3,
        asColon = RegExp.$4;
    var tagName = asTag || asColon || definition.tagName || definition["extends"] || 'element';
    var isFragment = tagName === 'fragment';
    if (isFragment) tagName = 'element';else if (!/^[A-Za-z0-9:._-]+$/.test(tagName)) throw 'Invalid tag';
    var hyphenizedName = '';
    var suffix = '';

    if (tagName.indexOf('-') < 0) {
      hyphenizedName = uhyphen(name) + uid;
      if (hyphenizedName.indexOf('-') < 0) suffix = '-heresy';
    } else {
      hyphenizedName = tagName + uid;
      tagName = 'element';
    }

    var is = hyphenizedName + suffix;
    if (customElements.get(is)) throw "Duplicated ".concat(is, " definition");
    var Class = extend(_typeof(definition) === 'object' ? oc.get(definition) || fromObject(definition, tagName) : cc.get(definition) || fromClass(definition), true);
    var element = tagName === 'element';
    defineProperty(Class, 'new', {
      value: element ? function () {
        return document.createElement(is);
      } : function () {
        return document.createElement(tagName, {
          is: is
        });
      }
    });
    defineProperty(Class.prototype, 'is', {
      value: is
    }); // for some reason the class must be fully defined upfront
    // or components upgraded from the DOM won't have all details

    if (uid === '') {
      var id = hash(hyphenizedName.toUpperCase());
      registry.map[name] = setupIncludes(Class, tagName, is, {
        id: id,
        i: 0
      });
      registry.re = regExp(keys(registry.map));
    }

    if (isFragment) {
      var _render = Class.prototype.render;
      defineProperty(Class.prototype, 'render', {
        configurable: true,
        value: function value() {
          if (_render) _render.apply(this, arguments);

          if (this.parentNode) {
            var firstChild = this.firstChild;
            var contents = null;

            if (firstChild) {
              var range = document.createRange();
              range.setStartBefore(firstChild);
              range.setEndAfter(this.lastChild);
              contents = range.extractContents();
              this.parentNode.replaceChild(contents, this);
            }
          }
        }
      });
    }

    var args = [is, Class];
    if (!element) args.push({
      "extends": tagName
    });

    (_customElements = customElements).define.apply(_customElements, args);

    return {
      Class: Class,
      is: is,
      name: name,
      tagName: tagName
    };
  };

  var render = function render(where, what) {
    return lighterRender(where, typeof what === 'function' ? what : what instanceof Hole ? function () {
      return what;
    } : runtime$1(what));
  };

  var dcid = Math.random();

  var runtime$1 = function runtime(Component) {
    var Class = dc.get(Component);

    if (!Class) {
      var name = ('Heresy' + ++dcid).replace(/[^He-y0-9]/g, '');
      dc.set(Component, Class = define(name, Component));
    }

    return function () {
      return Class["new"]();
    };
  };

  var setupIncludes = function setupIncludes(Class, tagName, is, u) {
    var prototype = Class.prototype;
    var details = info(tagName, is);
    var styles = [selector(details)];
    var includes = Class.includes || Class.contains;

    if (includes) {
      var map = {};
      keys(includes).forEach(function ($) {
        var uid = "-".concat(u.id, "-").concat(u.i++);

        var _register = register($, includes[$], uid),
            Class = _register.Class,
            is = _register.is,
            name = _register.name,
            tagName = _register.tagName;

        styles.push(selector(map[name] = setupIncludes(Class, tagName, is, u)));
      });
      var re = regExp(keys(map));
      var events = prototype[secret].events;
      var value = {
        events: events,
        info: {
          map: map,
          re: re
        }
      };
      defineProperty(prototype, secret, {
        value: value
      });

      if ('render' in prototype) {
        var _render2 = prototype.render;
        var _info = value.info;
        defineProperty(prototype, 'render', {
          configurable: true,
          value: function value() {
            var tmp = getInfo();
            setInfo(_info);

            var out = _render2.apply(this, arguments);

            setInfo(tmp);
            return out;
          }
        });
      }
    }

    if ('style' in Class) injectStyle(Class.style.apply(Class, styles));
    return details;
  };

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var runtime = {exports: {}};

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  var regenerator = runtime.exports;

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  /*!
    * Router-component v0.16.2
    * https://github.com/markcellus/router-component
    *
    * Copyright (c) 2021 Mark Kennedy
    * Licensed under the MIT license
   */

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /* istanbul ignore file */
  // normalize-selector-rev-02.js

  /*
    author: kyle simpson (@getify)
    original source: https://gist.github.com/getify/9679380

    modified for tests by david kaye (@dfkaye)
    21 march 2014

    rev-02 incorporate kyle's changes 3/2/42014
  */


  function normalizeSelector(sel) {
    // save unmatched text, if any
    function saveUnmatched() {
      if (unmatched) {
        // whitespace needed after combinator?
        if (tokens.length > 0 && /^[~+>]$/.test(tokens[tokens.length - 1])) {
          tokens.push(" ");
        } // save unmatched text


        tokens.push(unmatched);
      }
    }

    var tokens = [],
        match,
        unmatched,
        regex,
        state = [0],
        next_match_idx = 0,
        prev_match_idx,
        not_escaped_pattern = /(?:[^\\]|(?:^|[^\\])(?:\\\\)+)$/,
        whitespace_pattern = /^\s+$/,
        state_patterns = [/\s+|\/\*|["'>~+[(]/g, // general
    /\s+|\/\*|["'[\]()]/g, // [..] set
    /\s+|\/\*|["'[\]()]/g, // (..) set
    null, // string literal (placeholder)
    /\*\//g // comment
    ];
    sel = sel.trim(); // eslint-disable-next-line no-constant-condition

    while (true) {
      unmatched = "";
      regex = state_patterns[state[state.length - 1]];
      regex.lastIndex = next_match_idx;
      match = regex.exec(sel); // matched text to process?

      if (match) {
        prev_match_idx = next_match_idx;
        next_match_idx = regex.lastIndex; // collect the previous string chunk not matched before this token

        if (prev_match_idx < next_match_idx - match[0].length) {
          unmatched = sel.substring(prev_match_idx, next_match_idx - match[0].length);
        } // general, [ ] pair, ( ) pair?


        if (state[state.length - 1] < 3) {
          saveUnmatched(); // starting a [ ] pair?

          if (match[0] === "[") {
            state.push(1);
          } // starting a ( ) pair?
          else if (match[0] === "(") {
            state.push(2);
          } // starting a string literal?
          else if (/^["']$/.test(match[0])) {
            state.push(3);
            state_patterns[3] = new RegExp(match[0], "g");
          } // starting a comment?
          else if (match[0] === "/*") {
            state.push(4);
          } // ending a [ ] or ( ) pair?
          else if (/^[\])]$/.test(match[0]) && state.length > 0) {
            state.pop();
          } // handling whitespace or a combinator?
          else if (/^(?:\s+|[~+>])$/.test(match[0])) {
            // need to insert whitespace before?
            if (tokens.length > 0 && !whitespace_pattern.test(tokens[tokens.length - 1]) && state[state.length - 1] === 0) {
              // add normalized whitespace
              tokens.push(" ");
            } // case-insensitive attribute selector CSS L4


            if (state[state.length - 1] === 1 && tokens.length === 5 && tokens[2].charAt(tokens[2].length - 1) === "=") {
              tokens[4] = " " + tokens[4];
            } // whitespace token we can skip?


            if (whitespace_pattern.test(match[0])) {
              continue;
            }
          } // save matched text


          tokens.push(match[0]);
        } // otherwise, string literal or comment
        else {
          // save unmatched text
          tokens[tokens.length - 1] += unmatched; // unescaped terminator to string literal or comment?

          if (not_escaped_pattern.test(tokens[tokens.length - 1])) {
            // comment terminator?
            if (state[state.length - 1] === 4) {
              // ok to drop comment?
              if (tokens.length < 2 || whitespace_pattern.test(tokens[tokens.length - 2])) {
                tokens.pop();
              } // otherwise, turn comment into whitespace
              else {
                tokens[tokens.length - 1] = " ";
              } // handled already


              match[0] = "";
            }

            state.pop();
          } // append matched text to existing token


          tokens[tokens.length - 1] += match[0];
        }
      } // otherwise, end of processing (no more matches)
      else {
        unmatched = sel.substr(next_match_idx);
        saveUnmatched();
        break;
      }
    }

    return tokens.join("").trim();
  }
  /**
   * @author Georgegriff@ (George Griffiths)
   * License Apache-2.0
   */


  function querySelectorDeep(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var allElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return _querySelectorDeep(selector, false, root, allElements);
  }

  function _querySelectorDeep(selector, findMany, root) {
    var allElements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    selector = normalizeSelector(selector);
    var lightElement = root.querySelector(selector);

    if (document.head.createShadowRoot || document.head.attachShadow) {
      // no need to do any special if selector matches something specific in light-dom
      if (!findMany && lightElement) {
        return lightElement;
      } // split on commas because those are a logical divide in the operation


      var selectionsToMake = splitByCharacterUnlessQuoted(selector, ',');
      return selectionsToMake.reduce(function (acc, minimalSelector) {
        // if not finding many just reduce the first match
        if (!findMany && acc) {
          return acc;
        } // do best to support complex selectors and split the query


        var splitSelector = splitByCharacterUnlessQuoted(minimalSelector //remove white space at start of selector
        .replace(/^\s+/g, '').replace(/\s*([>+~]+)\s*/g, '$1'), ' ') // filter out entry white selectors
        .filter(function (entry) {
          return !!entry;
        }) // convert "a > b" to ["a", "b"]
        .map(function (entry) {
          return splitByCharacterUnlessQuoted(entry, '>');
        });
        var possibleElementsIndex = splitSelector.length - 1;
        var lastSplitPart = splitSelector[possibleElementsIndex][splitSelector[possibleElementsIndex].length - 1];
        var possibleElements = collectAllElementsDeep(lastSplitPart, root, allElements);
        var findElements = findMatchingElement(splitSelector, possibleElementsIndex, root);

        if (findMany) {
          acc = acc.concat(possibleElements.filter(findElements));
          return acc;
        } else {
          acc = possibleElements.find(findElements);
          return acc || null;
        }
      }, findMany ? [] : null);
    } else {
      if (!findMany) {
        return lightElement;
      } else {
        return root.querySelectorAll(selector);
      }
    }
  }

  function findMatchingElement(splitSelector, possibleElementsIndex, root) {
    return function (element) {
      var position = possibleElementsIndex;
      var parent = element;
      var foundElement = false;

      while (parent && !isDocumentNode(parent)) {
        var foundMatch = true;

        if (splitSelector[position].length === 1) {
          foundMatch = parent.matches(splitSelector[position]);
        } else {
          // selector is in the format "a > b"
          // make sure a few parents match in order
          var reversedParts = [].concat(splitSelector[position]).reverse();
          var newParent = parent;

          var _iterator = _createForOfIteratorHelper$1(reversedParts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var part = _step.value;

              if (!newParent || !newParent.matches(part)) {
                foundMatch = false;
                break;
              }

              newParent = findParentOrHost(newParent, root);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (foundMatch && position === 0) {
          foundElement = true;
          break;
        }

        if (foundMatch) {
          position--;
        }

        parent = findParentOrHost(parent, root);
      }

      return foundElement;
    };
  }

  function splitByCharacterUnlessQuoted(selector, character) {
    return selector.match(/\\?.|^$/g).reduce(function (p, c) {
      if (c === '"' && !p.sQuote) {
        p.quote ^= 1;
        p.a[p.a.length - 1] += c;
      } else if (c === '\'' && !p.quote) {
        p.sQuote ^= 1;
        p.a[p.a.length - 1] += c;
      } else if (!p.quote && !p.sQuote && c === character) {
        p.a.push('');
      } else {
        p.a[p.a.length - 1] += c;
      }

      return p;
    }, {
      a: ['']
    }).a;
  }
  /**
   * Checks if the node is a document node or not.
   * @param {Node} node
   * @returns {node is Document | DocumentFragment}
   */


  function isDocumentNode(node) {
    return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_NODE;
  }

  function findParentOrHost(element, root) {
    var parentNode = element.parentNode;
    return parentNode && parentNode.host && parentNode.nodeType === 11 ? parentNode.host : parentNode === root ? null : parentNode;
  }
  /**
   * Finds all elements on the page, inclusive of those within shadow roots.
   * @param {string=} selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
   * @return {!Array<string>} List of anchor hrefs.
   * @author ebidel@ (Eric Bidelman)
   * License Apache-2.0
   */


  function collectAllElementsDeep() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var root = arguments.length > 1 ? arguments[1] : undefined;
    var cachedElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var allElements = [];

    if (cachedElements) {
      allElements = cachedElements;
    } else {
      var findAllElements = function findAllElements(nodes) {
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          allElements.push(el); // If the element has a shadow root, dig deeper.

          if (el.shadowRoot) {
            findAllElements(el.shadowRoot.querySelectorAll('*'));
          }
        }
      };

      if (root.shadowRoot) {
        findAllElements(root.shadowRoot.querySelectorAll('*'));
      }

      findAllElements(root.querySelectorAll('*'));
    }

    return selector ? allElements.filter(function (el) {
      return el.matches(selector);
    }) : allElements;
  }

  function delay() {
    var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return new Promise(function (resolve) {
      var timer = setTimeout(function () {
        resolve();
        clearTimeout(timer);
      }, Number(milliseconds));
    });
  }

  var routeComponents = new Set();

  var RouterComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(RouterComponent, _HTMLElement);

    var _super = _createSuper(RouterComponent);

    function RouterComponent() {
      var _this;

      _classCallCheck(this, RouterComponent);

      _this = _super.call(this);
      _this.routeElements = [];
      _this.shownRouteElements = new Map();
      /**
       * @deprecated since 0.15.0
       * TODO: remove this in next major version
       */

      _this.show = _this.showRoute;
      routeComponents.add(_assertThisInitialized(_this));
      _this.fragment = document.createDocumentFragment();
      var children = _this.children;

      while (children.length > 0) {
        var element = children[0];

        _this.routeElements.push(element);

        _this.fragment.appendChild(element);
      }

      return _this;
    }

    _createClass(RouterComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        this.popStateChangedListener = this.popStateChanged.bind(this);
        window.addEventListener('popstate', this.popStateChangedListener);
        this.bindLinks(); // we must hijack pushState and replaceState because we need to
        // detect when consumer attempts to use and trigger a page load

        this.historyChangeStates = new Map([[window.history.pushState, 'pushState'], [window.history.replaceState, 'replaceState']]);

        var _iterator2 = _createForOfIteratorHelper$1(this.historyChangeStates),
            _step2;

        try {
          var _loop = function _loop() {
            var _step2$value = _slicedToArray(_step2.value, 2),
                method = _step2$value[0],
                name = _step2$value[1];

            window.history[name] = function (state, title, url) {
              var triggerRouteChange = !state || state.triggerRouteChange !== false;

              if (!triggerRouteChange) {
                delete state.triggerRouteChange;
              }

              method.call(history, state, title, url);

              if (!triggerRouteChange) {
                return;
              }

              if (_this2.previousLocation) {
                _this2.hideRoute(_this2.previousLocation.pathname);
              }

              _this2.showRoute(url);
            };
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.showRoute(this.getFullPathname(this.location));
      }
    }, {
      key: "getRouteElementByPath",
      value: function getRouteElementByPath(pathname) {
        var element;
        if (!pathname) return;

        var _iterator3 = _createForOfIteratorHelper$1(this.routeElements),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;
            var path = pathname;
            var search = child.getAttribute('search-params');

            if (search) {
              path = "".concat(pathname, "?").concat(search);
            }

            if (this.matchPathWithRegex(path, child.getAttribute('path'))) {
              element = child;
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return element;
      }
    }, {
      key: "storedScrollPosition",
      get: function get() {
        var positionString = sessionStorage.getItem('currentScrollPosition');
        return positionString && Number(positionString);
      },
      set: function set(value) {
        sessionStorage.setItem('currentScrollPosition', value.toString());
      }
    }, {
      key: "scrollToHash",
      value: function scrollToHash() {
        var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.location.hash;
        var behaviorAttribute = this.getAttribute('hash-scroll-behavior');
        var hashId = hash.replace('#', '');

        try {
          var hashElement = querySelectorDeep("[id=".concat(hashId, "]"), this);

          if (hashElement) {
            hashElement.scrollIntoView({
              behavior: behaviorAttribute || 'auto'
            });
          }
        } catch (e) {
          // id attributes can only have valid characters, if invalid, skip
          console.warn("Cannot scroll to element with the id of \"".concat(hashId, "\"."));
          return;
        }
      }
    }, {
      key: "handleHash",
      value: function handleHash() {
        var _this3 = this;

        var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var delayAttribute = this.getAttribute('hash-scroll-delay');
        var delay = delayAttribute ? Number(delayAttribute) : 1;

        if (!wait) {
          this.scrollToHash(hash);
        } else {
          // wait for custom element to connect to the DOM so we
          // can scroll to it, on certain browsers this takes a while
          var timer = setTimeout(function () {
            _this3.scrollToHash(hash);

            clearTimeout(timer);
          }, delay);
        }
      }
    }, {
      key: "showRoute",
      value: function showRoute(location) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
          var _location$split, _location$split2, pathname, hashString, routeElement, child, showDelayAttribute, scrollToPosition;

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (location) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _location$split = location.split('#'), _location$split2 = _slicedToArray(_location$split, 2), pathname = _location$split2[0], hashString = _location$split2[1];
                  routeElement = this.getRouteElementByPath(pathname);
                  this.previousLocation = Object.assign({}, this.location);

                  if (routeElement) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", console.warn("Navigated to path \"".concat(pathname, "\" but there is no matching element with a path ") + "that matches. Maybe you should implement a catch-all route with the path attribute of \".*\"?"));

                case 7:
                  child = this.children[0];

                  if (child && this.previousLocation.href !== this.location.href && !querySelectorDeep('router-component', child)) {
                    this.hideRoute(this.previousLocation.pathname);
                  }

                  if (!this.shownRouteElements.has(pathname)) {
                    this.shownRouteElements.set(pathname, routeElement);
                  }

                  this.dispatchEvent(new CustomEvent('route-changed'));
                  this.appendChild(routeElement);
                  this.dispatchEvent(new CustomEvent('showing-page', {
                    detail: routeElement
                  }));
                  showDelayAttribute = this.getAttribute('show-delay');

                  if (!showDelayAttribute) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 17;
                  return delay(showDelayAttribute);

                case 17:
                  this.setupElement(routeElement);
                  scrollToPosition = 0;

                  if (this.storedScrollPosition && window.history.scrollRestoration === 'manual') {
                    scrollToPosition = this.storedScrollPosition;
                    sessionStorage.removeItem('currentScrollPosition');
                  }

                  if (hashString) {
                    this.handleHash("#".concat(hashString));
                  } else {
                    window.scrollTo({
                      top: scrollToPosition,
                      behavior: 'auto' // we dont wanna scroll here

                    });
                  }

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }
    }, {
      key: "hideRoute",
      value: function hideRoute() {
        var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee2() {
          var _location$split3, _location$split4, pathname, routeElement, hideDelayAttribute;

          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (location) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  _location$split3 = location.split('#'), _location$split4 = _slicedToArray(_location$split3, 1), pathname = _location$split4[0];
                  routeElement = this.getRouteElementByPath(pathname);

                  if (routeElement) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return");

                case 6:
                  this.dispatchEvent(new CustomEvent('hiding-page', {
                    detail: routeElement
                  }));
                  hideDelayAttribute = this.getAttribute('hide-delay');

                  if (!hideDelayAttribute) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return delay(hideDelayAttribute);

                case 11:
                  this.fragment.appendChild(routeElement);
                  this.teardownElement(routeElement);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }
    }, {
      key: "location",
      get: function get() {
        return window.location;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        window.removeEventListener('popstate', this.popStateChangedListener);

        var _iterator4 = _createForOfIteratorHelper$1(this.historyChangeStates),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                method = _step4$value[0],
                name = _step4$value[1];

            window.history[name] = method;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        this.unbindLinks();
        this.shownRouteElements.clear();
        this.previousLocation = undefined;
      }
    }, {
      key: "clickedLink",
      value: function clickedLink(link, e) {
        var href = link.href;
        if (!href || href.indexOf('mailto:') !== -1) return;
        var location = this.location;
        var origin = location.origin || location.protocol + '//' + location.host;

        if (href.indexOf(origin) !== 0 || link.origin !== location.origin) {
          // external links
          window.history.scrollRestoration = 'manual';
          sessionStorage.setItem('currentScrollPosition', document.documentElement.scrollTop.toString());
          return;
        }

        e.preventDefault();
        var state = {};

        if (link.hash && link.pathname === location.pathname) {
          this.scrollToHash(link.hash);
          state.triggerRouteChange = false;
        }

        window.history.pushState(state, document.title, "".concat(link.pathname).concat(link.search).concat(link.hash));
      }
    }, {
      key: "bindLinks",
      value: function bindLinks() {
        var _this4 = this;

        // TODO: update this to be more performant
        // listening to body to allow detection inside of shadow roots
        this.clickedLinkListener = function (e) {
          if (e.defaultPrevented) return;
          var link = e.composedPath().filter(function (n) {
            return n.tagName === 'A';
          })[0];

          if (!link) {
            return;
          }

          _this4.clickedLink(link, e);
        };

        document.body.addEventListener('click', this.clickedLinkListener);
      }
    }, {
      key: "unbindLinks",
      value: function unbindLinks() {
        document.body.removeEventListener('click', this.clickedLinkListener);
      }
    }, {
      key: "matchPathWithRegex",
      value: function matchPathWithRegex() {
        var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var regex = arguments.length > 1 ? arguments[1] : undefined;

        if (!pathname.startsWith('/')) {
          pathname = "".concat(pathname.replace(/^\//, ''));
        }

        return pathname.match(regex);
      }
      /**
       * Returns href without the hostname and stuff.
       * @param location
       * @returns
       */

    }, {
      key: "getFullPathname",
      value: function getFullPathname(location) {
        if (!location) {
          return '';
        }

        var pathname = location.pathname,
            search = location.search,
            hash = location.hash;
        return "".concat(pathname).concat(search).concat(hash);
      }
    }, {
      key: "popStateChanged",
      value: function popStateChanged() {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee3() {
          var path;
          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  path = this.getFullPathname(this.location); // although popstate was called we still need to trigger
                  // replaceState so all stateful operations can be performed

                  window.history.replaceState({}, document.title, path);

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      }
    }, {
      key: "setupElement",
      value: function setupElement(routeElement) {
        var pathname = this.location.pathname;
        this.originalDocumentTitle = document.title;
        var title = routeElement.getAttribute('document-title');

        if (title) {
          document.title = title;
        } else {
          document.title = this.originalDocumentTitle;
        }

        var nestedRouterComponent = routeElement.querySelector('router-component');

        if (nestedRouterComponent) {
          nestedRouterComponent.showRoute(pathname);
        }
      } // eslint-disable-next-line no-unused-vars

    }, {
      key: "teardownElement",
      value: function teardownElement(element) {
        document.title = this.originalDocumentTitle;
      }
    }, {
      key: "getExternalRouterByPath",
      value: function getExternalRouterByPath(pathname) {
        var _iterator5 = _createForOfIteratorHelper$1(routeComponents),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var component = _step5.value;
            var routeElement = component.getRouteElementByPath(pathname);

            if (routeElement) {
              return component;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }]);

    return RouterComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define('router-component', RouterComponent);

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@charset \"UTF-8\";\n/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .file-cta,\n.file-name, .select select, .textarea, .input, .button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .file-cta:focus,\n.file-name:focus, .select select:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .is-focused.file-cta,\n.is-focused.file-name, .select select.is-focused, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .file-cta:active,\n.file-name:active, .select select:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis, .is-active.file-cta,\n.is-active.file-name, .select select.is-active, .is-active.textarea, .is-active.input, .is-active.button {\n  outline: none;\n}\n[disabled].pagination-previous,\n[disabled].pagination-next,\n[disabled].pagination-link,\n[disabled].pagination-ellipsis, [disabled].file-cta,\n[disabled].file-name, .select select[disabled], [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,\nfieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {\n  cursor: not-allowed;\n}\n\n.is-unselectable, .tabs, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .breadcrumb, .file, .button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .block:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.modal-close, .delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.modal-close::before, .delete::before, .modal-close::after, .delete::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.modal-close::before, .delete::before {\n  height: 2px;\n  width: 50%;\n}\n.modal-close::after, .delete::after {\n  height: 50%;\n  width: 2px;\n}\n.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close:active, .delete:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.modal-close, .is-small.delete {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n.is-medium.modal-close, .is-medium.delete {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n.is-large.modal-close, .is-large.delete {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.hero-video, .is-overlay, .modal-background, .modal, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #485fc7;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n  color: currentColor;\n}\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\ntable th {\n  color: #363636;\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #485fc7;\n}\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #485fc7;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n  color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.button:focus, .button.is-focused {\n  border-color: #485fc7;\n  color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.button.is-text[disabled], fieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #485fc7;\n  text-decoration: none;\n}\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #485fc7;\n  text-decoration: underline;\n}\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white[disabled], fieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black[disabled], fieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light[disabled], fieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark[disabled], fieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary[disabled], fieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #defffa;\n  border-color: transparent;\n  color: #00947e;\n}\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #d1fff8;\n  border-color: transparent;\n  color: #00947e;\n}\n.button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link[disabled], fieldset[disabled] .button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #485fc7;\n}\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #485fc7;\n}\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  color: #485fc7;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important;\n}\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  box-shadow: none;\n  color: #485fc7;\n}\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #485fc7;\n}\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important;\n}\n.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #e6e9f7;\n  border-color: transparent;\n  color: #3850b7;\n}\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #dce0f4;\n  border-color: transparent;\n  color: #3850b7;\n}\n.button.is-info {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #3488ce;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info[disabled], fieldset[disabled] .button.is-info {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #3e8ed0;\n}\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3e8ed0;\n}\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  color: #3e8ed0;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;\n}\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  box-shadow: none;\n  color: #3e8ed0;\n}\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3e8ed0;\n}\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;\n}\n.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e4eff9;\n  border-color: transparent;\n  color: #296fa8;\n}\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #dae9f6;\n  border-color: transparent;\n  color: #296fa8;\n}\n.button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success[disabled], fieldset[disabled] .button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ef;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e9;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled], fieldset[disabled] .button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff6de;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff3d1;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger[disabled], fieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-small {\n  font-size: 0.75rem;\n}\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n.button.is-normal {\n  font-size: 1rem;\n}\n.button.is-medium {\n  font-size: 1.25rem;\n}\n.button.is-large {\n  font-size: 1.5rem;\n}\n.button[disabled], fieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em * 0.5));\n  top: calc(50% - (1em * 0.5));\n  position: absolute !important;\n}\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n.button.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.buttons.is-centered {\n  justify-content: center;\n}\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.buttons.is-right {\n  justify-content: flex-end;\n}\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n.content ul ul ul {\n  list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n.content figure img {\n  display: inline-block;\n}\n.content figure figcaption {\n  font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.content table th {\n  color: #363636;\n}\n.content table th:not([align]) {\n  text-align: inherit;\n}\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.content .tabs li + li {\n  margin-top: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-normal {\n  font-size: 1rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.image img.is-rounded {\n  border-radius: 9999px;\n}\n.image.is-fullwidth {\n  width: 100%;\n}\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n.image.is-5by4 {\n  padding-top: 80%;\n}\n.image.is-4by3 {\n  padding-top: 75%;\n}\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n.image.is-5by3 {\n  padding-top: 60%;\n}\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n.image.is-2by1 {\n  padding-top: 50%;\n}\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n.image.is-4by5 {\n  padding-top: 125%;\n}\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n.image.is-2by3 {\n  padding-top: 150%;\n}\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n.image.is-1by2 {\n  padding-top: 200%;\n}\n.image.is-1by3 {\n  padding-top: 300%;\n}\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.notification strong {\n  color: currentColor;\n}\n.notification code,\n.notification pre {\n  background: white;\n}\n.notification pre code {\n  background: transparent;\n}\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.notification.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n.notification.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n.notification.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n.notification.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.notification.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n.notification.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.notification.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.notification.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar {\n  background-color: #ededed;\n}\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%);\n}\n.progress.is-link::-webkit-progress-value {\n  background-color: #485fc7;\n}\n.progress.is-link::-moz-progress-bar {\n  background-color: #485fc7;\n}\n.progress.is-link::-ms-fill {\n  background-color: #485fc7;\n}\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #485fc7 30%, #ededed 30%);\n}\n.progress.is-info::-webkit-progress-value {\n  background-color: #3e8ed0;\n}\n.progress.is-info::-moz-progress-bar {\n  background-color: #3e8ed0;\n}\n.progress.is-info::-ms-fill {\n  background-color: #3e8ed0;\n}\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #3e8ed0 30%, #ededed 30%);\n}\n.progress.is-success::-webkit-progress-value {\n  background-color: #48c78e;\n}\n.progress.is-success::-moz-progress-bar {\n  background-color: #48c78e;\n}\n.progress.is-success::-ms-fill {\n  background-color: #48c78e;\n}\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%);\n}\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-ms-fill {\n  background-color: #ffe08a;\n}\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%);\n}\n.progress.is-danger::-webkit-progress-value {\n  background-color: #f14668;\n}\n.progress.is-danger::-moz-progress-bar {\n  background-color: #f14668;\n}\n.progress.is-danger::-ms-fill {\n  background-color: #f14668;\n}\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n.progress:indeterminate {\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-name: moveIndeterminate;\n  animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-ms-fill {\n  animation-name: none;\n}\n.progress.is-small {\n  height: 0.75rem;\n}\n.progress.is-medium {\n  height: 1.25rem;\n}\n.progress.is-large {\n  height: 1.5rem;\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-link,\n.table th.is-link {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n.table td.is-info,\n.table th.is-info {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff;\n}\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n.table th {\n  color: #363636;\n}\n.table th:not([align]) {\n  text-align: inherit;\n}\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n.table thead {\n  background-color: transparent;\n}\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.table tfoot {\n  background-color: transparent;\n}\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.table tbody {\n  background-color: transparent;\n}\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n  width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n.tags.is-centered {\n  justify-content: center;\n}\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tags.is-right {\n  justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.tag:not(body).is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n.tag:not(body).is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n.tag:not(body).is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n.tag:not(body).is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.tag:not(body).is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n.tag:not(body).is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.tag:not(body).is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.tag:not(body).is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n  border-radius: 9999px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n.title.is-1 {\n  font-size: 3rem;\n}\n.title.is-2 {\n  font-size: 2.5rem;\n}\n.title.is-3 {\n  font-size: 2rem;\n}\n.title.is-4 {\n  font-size: 1.5rem;\n}\n.title.is-5 {\n  font-size: 1.25rem;\n}\n.title.is-6 {\n  font-size: 1rem;\n}\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.select select, .textarea, .input {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n.select select::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .textarea:hover, .input:hover, .select select.is-hovered, .is-hovered.textarea, .is-hovered.input {\n  border-color: #b5b5b5;\n}\n.select select:focus, .textarea:focus, .input:focus, .select select.is-focused, .is-focused.textarea, .is-focused.input, .select select:active, .textarea:active, .input:active, .select select.is-active, .is-active.textarea, .is-active.input {\n  border-color: #485fc7;\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n.select select[disabled], [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.textarea, .input {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n[readonly].textarea, [readonly].input {\n  box-shadow: none;\n}\n.is-white.textarea, .is-white.input {\n  border-color: white;\n}\n.is-white.textarea:focus, .is-white.input:focus, .is-white.is-focused.textarea, .is-white.is-focused.input, .is-white.textarea:active, .is-white.input:active, .is-white.is-active.textarea, .is-white.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.is-black.textarea, .is-black.input {\n  border-color: #0a0a0a;\n}\n.is-black.textarea:focus, .is-black.input:focus, .is-black.is-focused.textarea, .is-black.is-focused.input, .is-black.textarea:active, .is-black.input:active, .is-black.is-active.textarea, .is-black.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.is-light.textarea, .is-light.input {\n  border-color: whitesmoke;\n}\n.is-light.textarea:focus, .is-light.input:focus, .is-light.is-focused.textarea, .is-light.is-focused.input, .is-light.textarea:active, .is-light.input:active, .is-light.is-active.textarea, .is-light.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.is-dark.textarea, .is-dark.input {\n  border-color: #363636;\n}\n.is-dark.textarea:focus, .is-dark.input:focus, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .is-dark.textarea:active, .is-dark.input:active, .is-dark.is-active.textarea, .is-dark.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.is-primary.textarea, .is-primary.input {\n  border-color: #00d1b2;\n}\n.is-primary.textarea:focus, .is-primary.input:focus, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .is-primary.textarea:active, .is-primary.input:active, .is-primary.is-active.textarea, .is-primary.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.is-link.textarea, .is-link.input {\n  border-color: #485fc7;\n}\n.is-link.textarea:focus, .is-link.input:focus, .is-link.is-focused.textarea, .is-link.is-focused.input, .is-link.textarea:active, .is-link.input:active, .is-link.is-active.textarea, .is-link.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n.is-info.textarea, .is-info.input {\n  border-color: #3e8ed0;\n}\n.is-info.textarea:focus, .is-info.input:focus, .is-info.is-focused.textarea, .is-info.is-focused.input, .is-info.textarea:active, .is-info.input:active, .is-info.is-active.textarea, .is-info.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n.is-success.textarea, .is-success.input {\n  border-color: #48c78e;\n}\n.is-success.textarea:focus, .is-success.input:focus, .is-success.is-focused.textarea, .is-success.is-focused.input, .is-success.textarea:active, .is-success.input:active, .is-success.is-active.textarea, .is-success.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.is-warning.textarea, .is-warning.input {\n  border-color: #ffe08a;\n}\n.is-warning.textarea:focus, .is-warning.input:focus, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .is-warning.textarea:active, .is-warning.input:active, .is-warning.is-active.textarea, .is-warning.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.is-danger.textarea, .is-danger.input {\n  border-color: #f14668;\n}\n.is-danger.textarea:focus, .is-danger.input:focus, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .is-danger.textarea:active, .is-danger.input:active, .is-danger.is-active.textarea, .is-danger.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.is-small.textarea, .is-small.input {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.is-medium.textarea, .is-medium.input {\n  font-size: 1.25rem;\n}\n.is-large.textarea, .is-large.input {\n  font-size: 1.5rem;\n}\n.is-fullwidth.textarea, .is-fullwidth.input {\n  display: block;\n  width: 100%;\n}\n.is-inline.textarea, .is-inline.input {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n.textarea[rows] {\n  height: initial;\n}\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.radio, .checkbox {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.radio input, .checkbox input {\n  cursor: pointer;\n}\n.radio:hover, .checkbox:hover {\n  color: #363636;\n}\n[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,\n.radio input[disabled],\n.checkbox input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #485fc7;\n  right: 1.125em;\n  z-index: 4;\n}\n.select.is-rounded select {\n  border-radius: 9999px;\n  padding-left: 1em;\n}\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select[disabled]:hover, fieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n.select.is-white select {\n  border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n.select.is-light select {\n  border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n.select.is-dark select {\n  border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.select.is-link:not(:hover)::after {\n  border-color: #485fc7;\n}\n.select.is-link select {\n  border-color: #485fc7;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #3a51bb;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n.select.is-info:not(:hover)::after {\n  border-color: #3e8ed0;\n}\n.select.is-info select {\n  border-color: #3e8ed0;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #3082c5;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n.select.is-success:not(:hover)::after {\n  border-color: #48c78e;\n}\n.select.is-success select {\n  border-color: #48c78e;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb81;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n  border-color: #ffe08a;\n}\n.select.is-warning select {\n  border-color: #ffe08a;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd970;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n.select.is-danger select {\n  border-color: #f14668;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.select.is-medium {\n  font-size: 1.25rem;\n}\n.select.is-large {\n  font-size: 1.5rem;\n}\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n  width: 100%;\n}\n.select.is-fullwidth select {\n  width: 100%;\n}\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link .file-cta {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 95, 199, 0.25);\n  color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info .file-cta {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #3488ce;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(62, 142, 208, 0.25);\n  color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success .file-cta {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n  color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-warning .file-cta {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-small {\n  font-size: 0.75rem;\n}\n.file.is-normal {\n  font-size: 1rem;\n}\n.file.is-medium {\n  font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-large {\n  font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n.file.is-centered {\n  justify-content: center;\n}\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n.file.is-right {\n  justify-content: flex-end;\n}\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n.label.is-small {\n  font-size: 0.75rem;\n}\n.label.is-medium {\n  font-size: 1.25rem;\n}\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n  color: white;\n}\n.help.is-black {\n  color: #0a0a0a;\n}\n.help.is-light {\n  color: whitesmoke;\n}\n.help.is-dark {\n  color: #363636;\n}\n.help.is-primary {\n  color: #00d1b2;\n}\n.help.is-link {\n  color: #485fc7;\n}\n.help.is-info {\n  color: #3e8ed0;\n}\n.help.is-success {\n  color: #48c78e;\n}\n.help.is-warning {\n  color: #ffe08a;\n}\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n  align-items: center;\n  color: #485fc7;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n  color: #363636;\n}\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"/\";\n}\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"→\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"•\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"·\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"≻\";\n}\n\n.card {\n  background-color: white;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-footer:first-child, .card-content:first-child, .card-header:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-footer:last-child, .card-content:last-child, .card-header:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n.level code {\n  border-radius: 4px;\n}\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n.level.is-mobile {\n  display: flex;\n}\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n.level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit;\n}\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.media .media .media {\n  padding-top: 0.5rem;\n}\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n  font-size: 0.75rem;\n}\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.menu-list a.is-active {\n  background-color: #485fc7;\n  color: #fff;\n}\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n  color: currentColor;\n}\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.message.is-small {\n  font-size: 0.75rem;\n}\n.message.is-medium {\n  font-size: 1.25rem;\n}\n.message.is-large {\n  font-size: 1.5rem;\n}\n.message.is-white {\n  background-color: white;\n}\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.message.is-white .message-body {\n  border-color: white;\n}\n.message.is-black {\n  background-color: #fafafa;\n}\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n.message.is-light {\n  background-color: #fafafa;\n}\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n.message.is-dark {\n  background-color: #fafafa;\n}\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n.message.is-primary {\n  background-color: #ebfffc;\n}\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #00947e;\n}\n.message.is-link {\n  background-color: #eff1fa;\n}\n.message.is-link .message-header {\n  background-color: #485fc7;\n  color: #fff;\n}\n.message.is-link .message-body {\n  border-color: #485fc7;\n  color: #3850b7;\n}\n.message.is-info {\n  background-color: #eff5fb;\n}\n.message.is-info .message-header {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.message.is-info .message-body {\n  border-color: #3e8ed0;\n  color: #296fa8;\n}\n.message.is-success {\n  background-color: #effaf5;\n}\n.message.is-success .message-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n.message.is-success .message-body {\n  border-color: #48c78e;\n  color: #257953;\n}\n.message.is-warning {\n  background-color: #fffaeb;\n}\n.message.is-warning .message-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n  border-color: #ffe08a;\n  color: #946c00;\n}\n.message.is-danger {\n  background-color: #feecf0;\n}\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px) {\n  .modal-content,\n.modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n.navbar.is-white .navbar-start .navbar-link,\n.navbar.is-white .navbar-end > .navbar-item,\n.navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n.navbar.is-white .navbar-start .navbar-link:focus,\n.navbar.is-white .navbar-start .navbar-link:hover,\n.navbar.is-white .navbar-start .navbar-link.is-active,\n.navbar.is-white .navbar-end > a.navbar-item:focus,\n.navbar.is-white .navbar-end > a.navbar-item:hover,\n.navbar.is-white .navbar-end > a.navbar-item.is-active,\n.navbar.is-white .navbar-end .navbar-link:focus,\n.navbar.is-white .navbar-end .navbar-link:hover,\n.navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n.navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n.navbar.is-black .navbar-start .navbar-link,\n.navbar.is-black .navbar-end > .navbar-item,\n.navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n.navbar.is-black .navbar-start .navbar-link:focus,\n.navbar.is-black .navbar-start .navbar-link:hover,\n.navbar.is-black .navbar-start .navbar-link.is-active,\n.navbar.is-black .navbar-end > a.navbar-item:focus,\n.navbar.is-black .navbar-end > a.navbar-item:hover,\n.navbar.is-black .navbar-end > a.navbar-item.is-active,\n.navbar.is-black .navbar-end .navbar-link:focus,\n.navbar.is-black .navbar-end .navbar-link:hover,\n.navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n.navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n.navbar.is-light .navbar-start .navbar-link,\n.navbar.is-light .navbar-end > .navbar-item,\n.navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n.navbar.is-light .navbar-start .navbar-link:focus,\n.navbar.is-light .navbar-start .navbar-link:hover,\n.navbar.is-light .navbar-start .navbar-link.is-active,\n.navbar.is-light .navbar-end > a.navbar-item:focus,\n.navbar.is-light .navbar-end > a.navbar-item:hover,\n.navbar.is-light .navbar-end > a.navbar-item.is-active,\n.navbar.is-light .navbar-end .navbar-link:focus,\n.navbar.is-light .navbar-end .navbar-link:hover,\n.navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n.navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n.navbar.is-dark .navbar-start .navbar-link,\n.navbar.is-dark .navbar-end > .navbar-item,\n.navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n.navbar.is-dark .navbar-start .navbar-link:focus,\n.navbar.is-dark .navbar-start .navbar-link:hover,\n.navbar.is-dark .navbar-start .navbar-link.is-active,\n.navbar.is-dark .navbar-end > a.navbar-item:focus,\n.navbar.is-dark .navbar-end > a.navbar-item:hover,\n.navbar.is-dark .navbar-end > a.navbar-item.is-active,\n.navbar.is-dark .navbar-end .navbar-link:focus,\n.navbar.is-dark .navbar-end .navbar-link:hover,\n.navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n.navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n.navbar.is-primary .navbar-start .navbar-link,\n.navbar.is-primary .navbar-end > .navbar-item,\n.navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n.navbar.is-primary .navbar-start .navbar-link:focus,\n.navbar.is-primary .navbar-start .navbar-link:hover,\n.navbar.is-primary .navbar-start .navbar-link.is-active,\n.navbar.is-primary .navbar-end > a.navbar-item:focus,\n.navbar.is-primary .navbar-end > a.navbar-item:hover,\n.navbar.is-primary .navbar-end > a.navbar-item.is-active,\n.navbar.is-primary .navbar-end .navbar-link:focus,\n.navbar.is-primary .navbar-end .navbar-link:hover,\n.navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n.navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n.navbar.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n.navbar.is-link .navbar-start .navbar-link,\n.navbar.is-link .navbar-end > .navbar-item,\n.navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n.navbar.is-link .navbar-start .navbar-link:focus,\n.navbar.is-link .navbar-start .navbar-link:hover,\n.navbar.is-link .navbar-start .navbar-link.is-active,\n.navbar.is-link .navbar-end > a.navbar-item:focus,\n.navbar.is-link .navbar-end > a.navbar-item:hover,\n.navbar.is-link .navbar-end > a.navbar-item.is-active,\n.navbar.is-link .navbar-end .navbar-link:focus,\n.navbar.is-link .navbar-end .navbar-link:hover,\n.navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #3a51bb;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n.navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3a51bb;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #485fc7;\n    color: #fff;\n  }\n}\n.navbar.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n.navbar.is-info .navbar-start .navbar-link,\n.navbar.is-info .navbar-end > .navbar-item,\n.navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n.navbar.is-info .navbar-start .navbar-link:focus,\n.navbar.is-info .navbar-start .navbar-link:hover,\n.navbar.is-info .navbar-start .navbar-link.is-active,\n.navbar.is-info .navbar-end > a.navbar-item:focus,\n.navbar.is-info .navbar-end > a.navbar-item:hover,\n.navbar.is-info .navbar-end > a.navbar-item.is-active,\n.navbar.is-info .navbar-end .navbar-link:focus,\n.navbar.is-info .navbar-end .navbar-link:hover,\n.navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #3082c5;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n.navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3082c5;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3e8ed0;\n    color: #fff;\n  }\n}\n.navbar.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n.navbar.is-success .navbar-start .navbar-link,\n.navbar.is-success .navbar-end > .navbar-item,\n.navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n.navbar.is-success .navbar-start .navbar-link:focus,\n.navbar.is-success .navbar-start .navbar-link:hover,\n.navbar.is-success .navbar-start .navbar-link.is-active,\n.navbar.is-success .navbar-end > a.navbar-item:focus,\n.navbar.is-success .navbar-end > a.navbar-item:hover,\n.navbar.is-success .navbar-end > a.navbar-item.is-active,\n.navbar.is-success .navbar-end .navbar-link:focus,\n.navbar.is-success .navbar-end .navbar-link:hover,\n.navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n.navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c78e;\n    color: #fff;\n  }\n}\n.navbar.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n.navbar.is-warning .navbar-start .navbar-link,\n.navbar.is-warning .navbar-end > .navbar-item,\n.navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n.navbar.is-warning .navbar-start .navbar-link:focus,\n.navbar.is-warning .navbar-start .navbar-link:hover,\n.navbar.is-warning .navbar-start .navbar-link.is-active,\n.navbar.is-warning .navbar-end > a.navbar-item:focus,\n.navbar.is-warning .navbar-end > a.navbar-item:hover,\n.navbar.is-warning .navbar-end > a.navbar-item.is-active,\n.navbar.is-warning .navbar-end .navbar-link:focus,\n.navbar.is-warning .navbar-end .navbar-link:hover,\n.navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n.navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffe08a;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n.navbar.is-danger .navbar-start .navbar-link,\n.navbar.is-danger .navbar-end > .navbar-item,\n.navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n.navbar.is-danger .navbar-start .navbar-link:focus,\n.navbar.is-danger .navbar-start .navbar-link:hover,\n.navbar.is-danger .navbar-start .navbar-link.is-active,\n.navbar.is-danger .navbar-end > a.navbar-item:focus,\n.navbar.is-danger .navbar-end > a.navbar-item:hover,\n.navbar.is-danger .navbar-end > a.navbar-item.is-active,\n.navbar.is-danger .navbar-end .navbar-link:focus,\n.navbar.is-danger .navbar-end .navbar-link:hover,\n.navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n.navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #485fc7;\n}\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img {\n  max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #485fc7;\n}\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #485fc7;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #485fc7;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #485fc7;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n\n  .navbar-brand .navbar-item,\n.navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-link::after {\n    display: none;\n  }\n\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n\n  html.has-navbar-fixed-top-touch,\nbody.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\nbody.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .navbar,\n.navbar-menu,\n.navbar-start,\n.navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n.navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n.navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n.navbar.is-transparent .navbar-link:focus,\n.navbar.is-transparent .navbar-link:hover,\n.navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7;\n  }\n\n  .navbar-burger {\n    display: none;\n  }\n\n  .navbar-item,\n.navbar-link {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n\n  .navbar-divider {\n    display: block;\n  }\n\n  .navbar > .container .navbar-brand,\n.container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n.container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n\n  html.has-navbar-fixed-top-desktop,\nbody.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\nbody.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\nbody.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\nbody.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n\n  a.navbar-item.is-active,\n.navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n.navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 9999px;\n}\n.pagination.is-rounded .pagination-link {\n  border-radius: 9999px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #485fc7;\n}\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n\n  .pagination-previous,\n.pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n\n  .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n\n  .pagination-previous {\n    order: 2;\n  }\n\n  .pagination-next {\n    order: 3;\n  }\n\n  .pagination {\n    justify-content: space-between;\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n.panel.is-primary .panel-heading {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #00d1b2;\n}\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #00d1b2;\n}\n.panel.is-link .panel-heading {\n  background-color: #485fc7;\n  color: #fff;\n}\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #485fc7;\n}\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #485fc7;\n}\n.panel.is-info .panel-heading {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #3e8ed0;\n}\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #3e8ed0;\n}\n.panel.is-success .panel-heading {\n  background-color: #48c78e;\n  color: #fff;\n}\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c78e;\n}\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c78e;\n}\n.panel.is-warning .panel-heading {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffe08a;\n}\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffe08a;\n}\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n  color: #485fc7;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=checkbox] {\n  margin-right: 0.75em;\n}\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n.panel-block.is-active {\n  border-left-color: #485fc7;\n  color: #363636;\n}\n.panel-block.is-active .panel-icon {\n  color: #485fc7;\n}\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n.tabs li {\n  display: block;\n}\n.tabs li.is-active a {\n  border-bottom-color: #485fc7;\n  color: #485fc7;\n}\n.tabs ul {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n  justify-content: center;\n}\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.tabs.is-toggle li.is-active a {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n  z-index: 1;\n}\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 9999px;\n  border-top-left-radius: 9999px;\n  padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 9999px;\n  border-top-right-radius: 9999px;\n  padding-right: 1.25em;\n}\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset;\n}\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333337%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333337%;\n}\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66666674%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66666674%;\n}\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333337%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333337%;\n}\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66666674%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66666674%;\n}\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333337%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333337%;\n}\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66666674%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66666674%;\n}\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333337%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333337%;\n}\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66666674%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66666674%;\n}\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n  justify-content: center;\n}\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n.columns.is-mobile {\n  display: flex;\n}\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n.columns.is-vcentered {\n  align-items: center;\n}\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.tile.is-child {\n  margin: 0 !important;\n}\n.tile.is-parent {\n  padding: 0.75rem;\n}\n.tile.is-vertical {\n  flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #00d1b2 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n\n.has-text-primary-light {\n  color: #ebfffc !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #b8fff4 !important;\n}\n\n.has-background-primary-light {\n  background-color: #ebfffc !important;\n}\n\n.has-text-primary-dark {\n  color: #00947e !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #00c7a9 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #00947e !important;\n}\n\n.has-text-link {\n  color: #485fc7 !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #3449a8 !important;\n}\n\n.has-background-link {\n  background-color: #485fc7 !important;\n}\n\n.has-text-link-light {\n  color: #eff1fa !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #c8cfee !important;\n}\n\n.has-background-link-light {\n  background-color: #eff1fa !important;\n}\n\n.has-text-link-dark {\n  color: #3850b7 !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #576dcb !important;\n}\n\n.has-background-link-dark {\n  background-color: #3850b7 !important;\n}\n\n.has-text-info {\n  color: #3e8ed0 !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #2b74b1 !important;\n}\n\n.has-background-info {\n  background-color: #3e8ed0 !important;\n}\n\n.has-text-info-light {\n  color: #eff5fb !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #c6ddf1 !important;\n}\n\n.has-background-info-light {\n  background-color: #eff5fb !important;\n}\n\n.has-text-info-dark {\n  color: #296fa8 !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #368ace !important;\n}\n\n.has-background-info-dark {\n  background-color: #296fa8 !important;\n}\n\n.has-text-success {\n  color: #48c78e !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a873 !important;\n}\n\n.has-background-success {\n  background-color: #48c78e !important;\n}\n\n.has-text-success-light {\n  color: #effaf5 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eedd !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf5 !important;\n}\n\n.has-text-success-dark {\n  color: #257953 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a06e !important;\n}\n\n.has-background-success-dark {\n  background-color: #257953 !important;\n}\n\n.has-text-warning {\n  color: #ffe08a !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd257 !important;\n}\n\n.has-background-warning {\n  background-color: #ffe08a !important;\n}\n\n.has-text-warning-light {\n  color: #fffaeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #ffecb8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffaeb !important;\n}\n\n.has-text-warning-dark {\n  color: #946c00 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79200 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #946c00 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  justify-content: start !important;\n}\n\n.is-justify-content-end {\n  justify-content: end !important;\n}\n\n.is-justify-content-left {\n  justify-content: left !important;\n}\n\n.is-justify-content-right {\n  justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  align-content: center !important;\n}\n\n.is-align-content-space-between {\n  align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  align-content: stretch !important;\n}\n\n.is-align-content-start {\n  align-content: start !important;\n}\n\n.is-align-content-end {\n  align-content: end !important;\n}\n\n.is-align-content-baseline {\n  align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  align-items: center !important;\n}\n\n.is-align-items-baseline {\n  align-items: baseline !important;\n}\n\n.is-align-items-start {\n  align-items: start !important;\n}\n\n.is-align-items-end {\n  align-items: end !important;\n}\n\n.is-align-items-self-start {\n  align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  align-self: center !important;\n}\n\n.is-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.p-auto {\n  padding: auto !important;\n}\n\n.pt-auto {\n  padding-top: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.pb-auto {\n  padding-bottom: auto !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important;\n}\n\n.py-auto {\n  padding-top: auto !important;\n  padding-bottom: auto !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.is-underlined {\n  text-decoration: underline !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .navbar {\n  background: none;\n}\n.hero .tabs ul {\n  border-bottom: none;\n}\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n  color: white !important;\n  opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n  }\n}\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n.hero.is-black .title {\n  color: white;\n}\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n  color: #0a0a0a !important;\n  opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n  color: whitesmoke !important;\n  opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n.hero.is-dark .title {\n  color: #fff;\n}\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n  color: #363636 !important;\n  opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n.hero.is-primary .title {\n  color: #fff;\n}\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n  color: #00d1b2 !important;\n  opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n.hero.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n.hero.is-link .title {\n  color: #fff;\n}\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #485fc7;\n  }\n}\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff;\n}\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n  color: #485fc7 !important;\n  opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #485fc7;\n}\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);\n  }\n}\n.hero.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n.hero.is-info .title {\n  color: #fff;\n}\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #3e8ed0;\n  }\n}\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff;\n}\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n  color: #3e8ed0 !important;\n  opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3e8ed0;\n}\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);\n  }\n}\n.hero.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n.hero.is-success .title {\n  color: #fff;\n}\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c78e;\n  }\n}\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n  color: #48c78e !important;\n  opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c78e;\n}\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n  }\n}\n.hero.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffe08a;\n  }\n}\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n  color: #ffe08a !important;\n  opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n  }\n}\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n.hero.is-danger .title {\n  color: #fff;\n}\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n  color: #f14668 !important;\n  opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 4.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 6rem;\n  }\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero-body {\n    padding: 3rem 3rem;\n  }\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .section {\n    padding: 3rem 3rem;\n  }\n  .section.is-medium {\n    padding: 9rem 4.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 6rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n\n/*!\n * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2022 Fonticons, Inc.\n */\n:host, :root {\n  --fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Free\";\n}\n\n@font-face {\n  font-family: \"Font Awesome 6 Free\";\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(../webfonts/fa-solid-900.woff2) format(\"woff2\"), url(../webfonts/fa-solid-900.ttf) format(\"truetype\");\n}\n.fa-solid, .fas {\n  font-family: \"Font Awesome 6 Free\";\n  font-weight: 900;\n}\n\n:root {\n  --tagify-dd-color-primary:rgb(53,149,246);\n  --tagify-dd-bg-color:white;\n}\n\n.tagify {\n  --tags-disabled-bg:#F1F1F1;\n  --tags-border-color:#DDD;\n  --tags-hover-border-color:#CCC;\n  --tags-focus-border-color:#3595f6;\n  --tag-bg:#E5E5E5;\n  --tag-hover:#D3E2E2;\n  --tag-text-color:black;\n  --tag-text-color--edit:black;\n  --tag-pad:0.3em 0.5em;\n  --tag-inset-shadow-size:1.1em;\n  --tag-invalid-color:#D39494;\n  --tag-invalid-bg:rgba(211, 148, 148, 0.5);\n  --tag-remove-bg:rgba(211, 148, 148, 0.3);\n  --tag-remove-btn-color:black;\n  --tag-remove-btn-bg:none;\n  --tag-remove-btn-bg--hover:#c77777;\n  --input-color:inherit;\n  --tag--min-width:1ch;\n  --tag--max-width:auto;\n  --tag-hide-transition:0.3s;\n  --placeholder-color:rgba(0, 0, 0, 0.4);\n  --placeholder-color-focus:rgba(0, 0, 0, 0.25);\n  --loader-size:.8em;\n  --readonly-striped:1;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  border: 1px solid #ddd;\n  border: 1px solid var(--tags-border-color);\n  padding: 0;\n  line-height: 0;\n  cursor: text;\n  outline: 0;\n  position: relative;\n  box-sizing: border-box;\n  transition: 0.1s;\n}\n\n@keyframes tags--bump {\n  30% {\n    transform: scale(1.2);\n  }\n}\n@keyframes rotateLoader {\n  to {\n    transform: rotate(1turn);\n  }\n}\n.tagify:hover {\n  border-color: #ccc;\n  border-color: var(--tags-hover-border-color);\n}\n\n.tagify.tagify--focus {\n  transition: 0s;\n  border-color: #3595f6;\n  border-color: var(--tags-focus-border-color);\n}\n\n.tagify[disabled] {\n  background: var(--tags-disabled-bg);\n  filter: saturate(0);\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.tagify[readonly].tagify--select {\n  pointer-events: none;\n}\n\n.tagify[readonly]:not(.tagify--mix):not(.tagify--select) {\n  cursor: default;\n}\n\n.tagify[readonly]:not(.tagify--mix):not(.tagify--select) > .tagify__input {\n  visibility: hidden;\n  width: 0;\n  margin: 5px 0;\n}\n\n.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag > div {\n  padding: 0.3em 0.5em;\n  padding: var(--tag-pad);\n}\n\n.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag > div::before {\n  animation: readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused;\n}\n\n@keyframes readonlyStyles {\n  0% {\n    background: linear-gradient(45deg, var(--tag-bg) 25%, transparent 25%, transparent 50%, var(--tag-bg) 50%, var(--tag-bg) 75%, transparent 75%, transparent) 0/5px 5px;\n    box-shadow: none;\n    filter: brightness(0.95);\n  }\n}\n.tagify[readonly] .tagify__tag__removeBtn {\n  display: none;\n}\n\n.tagify--loading .tagify__input > br:last-child {\n  display: none;\n}\n\n.tagify--loading .tagify__input::before {\n  content: none;\n}\n\n.tagify--loading .tagify__input::after {\n  content: \"\";\n  vertical-align: middle;\n  opacity: 1;\n  width: 0.7em;\n  height: 0.7em;\n  width: var(--loader-size);\n  height: var(--loader-size);\n  border: 3px solid;\n  border-color: #eee #bbb #888 transparent;\n  border-radius: 50%;\n  animation: rotateLoader 0.4s infinite linear;\n  content: \"\" !important;\n  margin: -2px 0 -2px 0.5em;\n}\n\n.tagify--loading .tagify__input:empty::after {\n  margin-left: 0;\n}\n\n.tagify + input, .tagify + textarea {\n  position: absolute !important;\n  left: -9999em !important;\n  transform: scale(0) !important;\n}\n\n.tagify__tag {\n  display: inline-flex;\n  align-items: center;\n  margin: 5px 0 5px 5px;\n  position: relative;\n  z-index: 1;\n  outline: 0;\n  line-height: normal;\n  cursor: default;\n  transition: 0.13s ease-out;\n}\n\n.tagify__tag > div {\n  vertical-align: top;\n  box-sizing: border-box;\n  max-width: 100%;\n  padding: 0.3em 0.5em;\n  padding: var(--tag-pad, 0.3em 0.5em);\n  color: #000;\n  color: var(--tag-text-color, #000);\n  line-height: inherit;\n  border-radius: 3px;\n  white-space: nowrap;\n  transition: 0.13s ease-out;\n}\n\n.tagify__tag > div > * {\n  white-space: pre-wrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: top;\n  min-width: 1ch;\n  max-width: auto;\n  min-width: var(--tag--min-width, 1ch);\n  max-width: var(--tag--max-width, auto);\n  transition: 0.8s ease, 0.1s color;\n}\n\n.tagify__tag > div > [contenteditable] {\n  outline: 0;\n  -webkit-user-select: text;\n  user-select: text;\n  cursor: text;\n  margin: -2px;\n  padding: 2px;\n  max-width: 350px;\n}\n\n.tagify__tag > div::before {\n  content: \"\";\n  position: absolute;\n  border-radius: inherit;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  pointer-events: none;\n  transition: 120ms ease;\n  animation: tags--bump 0.3s ease-out 1;\n  box-shadow: 0 0 0 1.1em #e5e5e5 inset;\n  box-shadow: 0 0 0 var(--tag-inset-shadow-size, 1.1em) var(--tag-bg, #e5e5e5) inset;\n}\n\n.tagify__tag:focus div::before, .tagify__tag:hover:not([readonly]) div::before {\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  box-shadow: 0 0 0 1.1em #d3e2e2 inset;\n  box-shadow: 0 0 0 var(--tag-inset-shadow-size, 1.1em) var(--tag-hover, #d3e2e2) inset;\n}\n\n.tagify__tag--loading {\n  pointer-events: none;\n}\n\n.tagify__tag--loading .tagify__tag__removeBtn {\n  display: none;\n}\n\n.tagify__tag--loading::after {\n  --loader-size:.4em;\n  content: \"\";\n  vertical-align: middle;\n  opacity: 1;\n  width: 0.7em;\n  height: 0.7em;\n  width: var(--loader-size);\n  height: var(--loader-size);\n  border: 3px solid;\n  border-color: #eee #bbb #888 transparent;\n  border-radius: 50%;\n  animation: rotateLoader 0.4s infinite linear;\n  margin: 0 0.5em 0 -0.1em;\n}\n\n.tagify__tag--flash div::before {\n  animation: none;\n}\n\n.tagify__tag--hide {\n  width: 0 !important;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  opacity: 0;\n  transform: scale(0);\n  transition: 0.3s;\n  transition: var(--tag-hide-transition, 0.3s);\n  pointer-events: none;\n}\n\n.tagify__tag--hide > div > * {\n  white-space: nowrap;\n}\n\n.tagify__tag.tagify--noAnim > div::before {\n  animation: none;\n}\n\n.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div > span {\n  opacity: 0.5;\n}\n\n.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div::before {\n  box-shadow: 0 0 0 1.1em rgba(211, 148, 148, 0.5) inset !important;\n  box-shadow: 0 0 0 var(--tag-inset-shadow-size, 1.1em) var(--tag-invalid-bg, rgba(211, 148, 148, 0.5)) inset !important;\n  transition: 0.2s;\n}\n\n.tagify__tag[readonly] .tagify__tag__removeBtn {\n  display: none;\n}\n\n.tagify__tag[readonly] > div::before {\n  animation: readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused;\n}\n\n@keyframes readonlyStyles {\n  0% {\n    background: linear-gradient(45deg, var(--tag-bg) 25%, transparent 25%, transparent 50%, var(--tag-bg) 50%, var(--tag-bg) 75%, transparent 75%, transparent) 0/5px 5px;\n    box-shadow: none;\n    filter: brightness(0.95);\n  }\n}\n.tagify__tag--editable > div {\n  color: #000;\n  color: var(--tag-text-color--edit, #000);\n}\n\n.tagify__tag--editable > div::before {\n  box-shadow: 0 0 0 2px #d3e2e2 inset !important;\n  box-shadow: 0 0 0 2px var(--tag-hover, #d3e2e2) inset !important;\n}\n\n.tagify__tag--editable > .tagify__tag__removeBtn {\n  pointer-events: none;\n}\n\n.tagify__tag--editable > .tagify__tag__removeBtn::after {\n  opacity: 0;\n  transform: translateX(100%) translateX(5px);\n}\n\n.tagify__tag--editable.tagify--invalid > div::before {\n  box-shadow: 0 0 0 2px #d39494 inset !important;\n  box-shadow: 0 0 0 2px var(--tag-invalid-color, #d39494) inset !important;\n}\n\n.tagify__tag__removeBtn {\n  order: 5;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  cursor: pointer;\n  font: 14px/1 Arial;\n  background: 0 0;\n  background: var(--tag-remove-btn-bg, none);\n  color: #000;\n  color: var(--tag-remove-btn-color, #000);\n  width: 14px;\n  height: 14px;\n  margin-right: 4.6666666667px;\n  margin-left: auto;\n  overflow: hidden;\n  transition: 0.2s ease-out;\n}\n\n.tagify__tag__removeBtn::after {\n  content: \"×\";\n  transition: 0.3s, color 0s;\n}\n\n.tagify__tag__removeBtn:hover {\n  color: #fff;\n  background: #c77777;\n  background: var(--tag-remove-btn-bg--hover, #c77777);\n}\n\n.tagify__tag__removeBtn:hover + div > span {\n  opacity: 0.5;\n}\n\n.tagify__tag__removeBtn:hover + div::before {\n  box-shadow: 0 0 0 1.1em rgba(211, 148, 148, 0.3) inset !important;\n  box-shadow: 0 0 0 var(--tag-inset-shadow-size, 1.1em) var(--tag-remove-bg, rgba(211, 148, 148, 0.3)) inset !important;\n  transition: box-shadow 0.2s;\n}\n\n.tagify:not(.tagify--mix) .tagify__input br {\n  display: none;\n}\n\n.tagify:not(.tagify--mix) .tagify__input * {\n  display: inline;\n  white-space: nowrap;\n}\n\n.tagify__input {\n  flex-grow: 1;\n  display: inline-block;\n  min-width: 110px;\n  margin: 5px;\n  padding: 0.3em 0.5em;\n  padding: var(--tag-pad, 0.3em 0.5em);\n  line-height: normal;\n  position: relative;\n  white-space: pre-wrap;\n  color: inherit;\n  color: var(--input-color, inherit);\n  box-sizing: inherit;\n}\n\n.tagify__input:focus {\n  outline: 0;\n}\n\n.tagify__input:focus::before {\n  transition: 0.2s ease-out;\n  opacity: 0;\n  transform: translatex(6px);\n}\n\n@supports (-ms-ime-align: auto) {\n  .tagify__input:focus::before {\n    display: none;\n  }\n}\n.tagify__input:focus:empty::before {\n  transition: 0.2s ease-out;\n  opacity: 1;\n  transform: none;\n  color: rgba(0, 0, 0, 0.25);\n  color: var(--placeholder-color-focus);\n}\n\n@-moz-document url-prefix() {\n  .tagify__input:focus:empty::after {\n    display: none;\n  }\n}\n.tagify__input::before {\n  content: attr(data-placeholder);\n  height: 1em;\n  line-height: 1em;\n  margin: auto 0;\n  z-index: 1;\n  color: rgba(0, 0, 0, 0.4);\n  color: var(--placeholder-color);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  position: absolute;\n}\n\n.tagify__input::after {\n  content: attr(data-suggest);\n  display: inline-block;\n  white-space: pre;\n  color: #000;\n  opacity: 0.3;\n  pointer-events: none;\n  max-width: 100px;\n}\n\n.tagify__input .tagify__tag {\n  margin: 0 1px;\n}\n\n.tagify--mix {\n  display: block;\n}\n\n.tagify--mix .tagify__input {\n  padding: 5px;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 1.5;\n  display: block;\n}\n\n.tagify--mix .tagify__input::before {\n  height: auto;\n  display: none;\n  line-height: inherit;\n}\n\n.tagify--mix .tagify__input::after {\n  content: none;\n}\n\n.tagify--select::after {\n  content: \">\";\n  opacity: 0.5;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: 0;\n  font: 16px monospace;\n  line-height: 8px;\n  height: 8px;\n  pointer-events: none;\n  transform: translate(-150%, -50%) scaleX(1.2) rotate(90deg);\n  transition: 0.2s ease-in-out;\n}\n\n.tagify--select[aria-expanded=true]::after {\n  transform: translate(-150%, -50%) rotate(270deg) scaleY(1.2);\n}\n\n.tagify--select .tagify__tag {\n  position: absolute;\n  top: 0;\n  right: 1.8em;\n  bottom: 0;\n}\n\n.tagify--select .tagify__tag div {\n  display: none;\n}\n\n.tagify--select .tagify__input {\n  width: 100%;\n}\n\n.tagify--empty .tagify__input::before {\n  transition: 0.2s ease-out;\n  opacity: 1;\n  transform: none;\n  display: inline-block;\n  width: auto;\n}\n\n.tagify--mix .tagify--empty .tagify__input::before {\n  display: inline-block;\n}\n\n.tagify--invalid {\n  --tags-border-color:#D39494;\n}\n\n.tagify__dropdown {\n  position: absolute;\n  z-index: 9999;\n  transform: translateY(1px);\n  overflow: hidden;\n}\n\n.tagify__dropdown[placement=top] {\n  margin-top: 0;\n  transform: translateY(-100%);\n}\n\n.tagify__dropdown[placement=top] .tagify__dropdown__wrapper {\n  border-top-width: 1.1px;\n  border-bottom-width: 0;\n}\n\n.tagify__dropdown[position=text] {\n  box-shadow: 0 0 0 3px rgba(var(--tagify-dd-color-primary), 0.1);\n  font-size: 0.9em;\n}\n\n.tagify__dropdown[position=text] .tagify__dropdown__wrapper {\n  border-width: 1px;\n}\n\n.tagify__dropdown__wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background: #fff;\n  background: var(--tagify-dd-bg-color);\n  border: 1px solid #3595f6;\n  border-color: var(--tagify-dd-color-primary);\n  border-bottom-width: 1.33px;\n  border-top-width: 0;\n  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2);\n  transition: 0.25s cubic-bezier(0, 1, 0.5, 1);\n}\n\n.tagify__dropdown--initial .tagify__dropdown__wrapper {\n  max-height: 20px;\n  transform: translateY(-1em);\n}\n\n.tagify__dropdown--initial[placement=top] .tagify__dropdown__wrapper {\n  transform: translateY(2em);\n}\n\n.tagify__dropdown__item {\n  box-sizing: inherit;\n  padding: 0.3em 0.5em;\n  margin: 1px;\n  cursor: pointer;\n  border-radius: 2px;\n  position: relative;\n  outline: 0;\n}\n\n.tagify__dropdown__item--active {\n  background: #3595f6;\n  background: var(--tagify-dd-color-primary);\n  color: #fff;\n}\n\n.tagify__dropdown__item:active {\n  filter: brightness(105%);\n}\n\n/*!\n * Toastify js 1.11.2\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n.toastify {\n  padding: 12px 20px;\n  color: #ffffff;\n  display: inline-block;\n  box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n  background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n  background: linear-gradient(135deg, #73a5ff, #5477f5);\n  position: fixed;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n  border-radius: 2px;\n  cursor: pointer;\n  text-decoration: none;\n  max-width: calc(50% - 20px);\n  z-index: 2147483647;\n}\n\n.toastify.on {\n  opacity: 1;\n}\n\n.toast-close {\n  opacity: 0.4;\n  padding: 0 5px;\n}\n\n.toastify-right {\n  right: 15px;\n}\n\n.toastify-left {\n  left: 15px;\n}\n\n.toastify-top {\n  top: -150px;\n}\n\n.toastify-bottom {\n  bottom: -150px;\n}\n\n.toastify-rounded {\n  border-radius: 25px;\n}\n\n.toastify-avatar {\n  width: 1.5em;\n  height: 1.5em;\n  margin: -7px 5px;\n  border-radius: 2px;\n}\n\n.toastify-center {\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  max-width: fit-content;\n  max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n  .toastify-right, .toastify-left {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n  }\n}";
  styleInject(css_248z);

  var _templateObject$8;
  var Menu = {
    render: function render() {
      this.html(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n        <aside class=\"menu\">\n            <ul class=\"menu-list\">\n            <li><a href=\"/\">Payload Generator</a></li>\n            <li><a href=\"editor\">Edit Payload</a></li>\n            </ul>\n        </aside>\n      "])));
    }
  };
  define('Menu', Menu);

  var _templateObject$7;
  var Footer = {
    render: function render() {
      this.html(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n      <footer class=\"footer\">\n        <div class=\"content has-text-centered\">\n            <p>Made with \u2764\uFE0F</p>\n        </div>\n      </footer>\n      "])));
    }
  };
  define('Footer', Footer);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var toastify = {exports: {}};

  (function (module) {
    (function (root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(commonjsGlobal, function (global) {
      // Object initialization
      var Toastify = function Toastify(options) {
        // Returning a new init object
        return new Toastify.lib.init(options);
      },
          // Library version
      version = "1.11.2"; // Set the default global options


      Toastify.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: undefined,
        duration: 3000,
        selector: undefined,
        callback: function callback() {},
        destination: undefined,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: '',
        backgroundColor: '',
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function onClick() {},
        offset: {
          x: 0,
          y: 0
        },
        escapeMarkup: true,
        style: {
          background: ''
        }
      }; // Defining the prototype of the object

      Toastify.lib = Toastify.prototype = {
        toastify: version,
        constructor: Toastify,
        // Initializing the object with required parameters
        init: function init(options) {
          // Verifying and validating the input object
          if (!options) {
            options = {};
          } // Creating the options object


          this.options = {};
          this.toastElement = null; // Validating the options

          this.options.text = options.text || Toastify.defaults.text; // Display message

          this.options.node = options.node || Toastify.defaults.node; // Display content as node

          this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration

          this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector

          this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display

          this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination

          this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window

          this.options.close = options.close || Toastify.defaults.close; // Show toast close icon

          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom

          this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right

          this.options.position = options.position || Toastify.defaults.position; // toast position - left or right

          this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color

          this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path

          this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast

          this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus

          this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click

          this.options.offset = options.offset || Toastify.defaults.offset; // toast offset

          this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
          this.options.style = options.style || Toastify.defaults.style;

          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          } // Returning the current object for chaining functions


          return this;
        },
        // Building the DOM element
        buildToast: function buildToast() {
          // Validating if the options are defined
          if (!this.options) {
            throw "Toastify is not initialized";
          } // Creating the DOM object


          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className; // Positioning toast to left or right or center

          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            // To be depreciated in further versions
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
            } else {
              // Default position
              divElement.className += " toastify-right";
            }
          } // Assigning gravity of element


          divElement.className += " " + this.options.gravity;

          if (this.options.backgroundColor) {
            // This is being deprecated in favor of using the style HTML DOM property
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          } // Loop through our style object and apply styles to divElement


          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          } // Adding the toast message/node


          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }

            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";

              if (this.options.position == "left" || this.options.positionLeft === true) {
                // Adding close icon on the left of content
                divElement.appendChild(avatarElement);
              } else {
                // Adding close icon on the right of content
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          } // Adding a close icon to the toast


          if (this.options.close === true) {
            // Create a span for close element
            var closeElement = document.createElement("span");
            closeElement.innerHTML = "&#10006;";
            closeElement.className = "toast-close"; // Triggering the removal of toast from DOM on close click

            closeElement.addEventListener("click", function (event) {
              event.stopPropagation();
              this.removeElement(this.toastElement);
              window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this)); //Calculating screen width

            var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Adding the close icon to the toast element
            // Display on the right if screen width is less than or equal to 360px

            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              // Adding close icon on the left of content
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              // Adding close icon on the right of content
              divElement.appendChild(closeElement);
            }
          } // Clear timeout while toast is focused


          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self = this; // stop countdown

            divElement.addEventListener("mouseover", function (event) {
              window.clearTimeout(divElement.timeOutValue);
            }); // add back the timeout

            divElement.addEventListener("mouseleave", function () {
              divElement.timeOutValue = window.setTimeout(function () {
                // Remove the toast from DOM
                self.removeElement(divElement);
              }, self.options.duration);
            });
          } // Adding an on-click destination path


          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener("click", function (event) {
              event.stopPropagation();

              if (this.options.newWindow === true) {
                window.open(this.options.destination, "_blank");
              } else {
                window.location = this.options.destination;
              }
            }.bind(this));
          }

          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener("click", function (event) {
              event.stopPropagation();
              this.options.onClick();
            }.bind(this));
          } // Adding offset


          if (_typeof(this.options.offset) === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          } // Returning the generated element


          return divElement;
        },
        // Displaying the toast
        showToast: function showToast() {
          // Creating the DOM object for the toast
          this.toastElement = this.buildToast(); // Getting the root element to with the toast needs to be added

          var rootElement;

          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          } // Validating if root element is present in DOM


          if (!rootElement) {
            throw "Root element is not defined";
          } // Adding the DOM element


          var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert); // Repositioning the toasts in case multiple toasts are present

          Toastify.reposition();

          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(function () {
              // Remove the toast from DOM
              this.removeElement(this.toastElement);
            }.bind(this), this.options.duration); // Binding `this` for function invocation
          } // Supporting function chaining


          return this;
        },
        hideToast: function hideToast() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }

          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function removeElement(toastElement) {
          // Hiding the element
          // toastElement.classList.remove("on");
          toastElement.className = toastElement.className.replace(" on", ""); // Removing the element from DOM after transition end

          window.setTimeout(function () {
            // remove options node if any
            if (this.options.node && this.options.node.parentNode) {
              this.options.node.parentNode.removeChild(this.options.node);
            } // Remove the element from the DOM, only when the parent node was not removed before.


            if (toastElement.parentNode) {
              toastElement.parentNode.removeChild(toastElement);
            } // Calling the callback function


            this.options.callback.call(toastElement); // Repositioning the toasts again

            Toastify.reposition();
          }.bind(this), 400); // Binding `this` for function invocation
        }
      }; // Positioning the toasts on the DOM

      Toastify.reposition = function () {
        // Top margins with gravity
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        }; // Get all toast messages on the DOM

        var allToasts = document.getElementsByClassName("toastify");
        var classUsed; // Modifying the position of each toast element

        for (var i = 0; i < allToasts.length; i++) {
          // Getting the applied gravity
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }

          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1); // Spacing between toasts

          var offset = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Show toast in center if screen with less than or equal to 360px

          if (width <= 360) {
            // Setting the position
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              // Setting the position
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              // Setting the position
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        } // Supporting function chaining


        return this;
      }; // Helper function to get offset.


      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + 'px';
          }
        }

        return '0px';
      }

      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      } // Setting up the prototype for the init object


      Toastify.lib.init.prototype = Toastify.lib; // Returning the Toastify function to be assigned to the window object/module

      return Toastify;
    });
  })(toastify);

  var Toastify = toastify.exports;

  var _templateObject$6;

  var _data$4 = new WeakMap();

  var Textfield = {
    get data() {
      return _data$4.get(this) || {};
    },

    set data(data) {
      _data$4.set(this, data);

      this.render();
    },

    render: function render() {
      var _this$data = this.data,
          label = _this$data.label,
          value = _this$data.value,
          handleChange = _this$data.handleChange;
      this.html(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n      <label class=\"label\">", "</label>\n      <div class=\"control\">\n          <input class=\"input\" type=\"text\" placeholder=\"Text input\" value=\"", "\" onchange=\"", "\"/>\n      </div>\n      "])), label, value, handleChange);
    }
  };
  define('Textfield', Textfield);

  var tagify_min = {exports: {}};

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (function (module, exports) {
    !function (t, e) {
      module.exports = e() ;
    }(commonjsGlobal, function () {

      function t(t, e) {
        var i = Object.keys(t);

        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e && (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), i.push.apply(i, s);
        }

        return i;
      }

      function e(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2 ? t(Object(a), !0).forEach(function (t) {
            i(e, t, a[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
        }

        return e;
      }

      function i(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t;
      }

      var s = function s(t, e, i, _s) {
        return t = "" + t, e = "" + e, _s && (t = t.trim(), e = e.trim()), i ? t == e : t.toLowerCase() == e.toLowerCase();
      };

      function a(t, e) {
        var i,
            s = {};

        for (i in t) {
          e.indexOf(i) < 0 && (s[i] = t[i]);
        }

        return s;
      }

      function n(t) {
        var e = document.createElement("div");
        return t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
          return e.innerHTML = t, e.innerText;
        });
      }

      function o(t, e) {
        for (e = e || "previous"; t = t[e + "Sibling"];) {
          if (3 == t.nodeType) return t;
        }
      }

      function r(t) {
        return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/`|'/g, "&#039;") : t;
      }

      function l(t) {
        var e = Object.prototype.toString.call(t).split(" ")[1].slice(0, -1);
        return t === Object(t) && "Array" != e && "Function" != e && "RegExp" != e && "HTMLUnknownElement" != e;
      }

      function d(t, e, i) {
        function s(t, e) {
          for (var i in e) {
            if (e.hasOwnProperty(i)) {
              if (l(e[i])) {
                l(t[i]) ? s(t[i], e[i]) : t[i] = Object.assign({}, e[i]);
                continue;
              }

              if (Array.isArray(e[i])) {
                t[i] = Object.assign([], e[i]);
                continue;
              }

              t[i] = e[i];
            }
          }
        }

        return t instanceof Object || (t = {}), s(t, e), i && s(t, i), t;
      }

      function h(t) {
        return String.prototype.normalize ? "string" == typeof t ? t.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : void 0 : t;
      }

      var g = function g() {
        return /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
      };

      function c(t) {
        return t && t.classList && t.classList.contains(this.settings.classNames.tag);
      }

      var p = {
        delimiters: ",",
        pattern: null,
        tagTextProp: "value",
        maxTags: 1 / 0,
        callbacks: {},
        addTagOnBlur: !0,
        duplicates: !1,
        whitelist: [],
        blacklist: [],
        enforceWhitelist: !1,
        userInput: !0,
        keepInvalidTags: !1,
        mixTagsAllowedAfter: /,|\.|\:|\s/,
        mixTagsInterpolator: ["[[", "]]"],
        backspace: !0,
        skipInvalid: !1,
        pasteAsTags: !0,
        editTags: {
          clicks: 2,
          keepInvalid: !0
        },
        transformTag: function transformTag() {},
        trim: !0,
        a11y: {
          focusableTags: !1
        },
        mixMode: {
          insertAfterTag: " "
        },
        autoComplete: {
          enabled: !0,
          rightKey: !1
        },
        classNames: {
          namespace: "tagify",
          mixMode: "tagify--mix",
          selectMode: "tagify--select",
          input: "tagify__input",
          focus: "tagify--focus",
          tagNoAnimation: "tagify--noAnim",
          tagInvalid: "tagify--invalid",
          tagNotAllowed: "tagify--notAllowed",
          scopeLoading: "tagify--loading",
          hasMaxTags: "tagify--hasMaxTags",
          hasNoTags: "tagify--noTags",
          empty: "tagify--empty",
          inputInvalid: "tagify__input--invalid",
          dropdown: "tagify__dropdown",
          dropdownWrapper: "tagify__dropdown__wrapper",
          dropdownItem: "tagify__dropdown__item",
          dropdownItemActive: "tagify__dropdown__item--active",
          dropdownInital: "tagify__dropdown--initial",
          tag: "tagify__tag",
          tagText: "tagify__tag-text",
          tagX: "tagify__tag__removeBtn",
          tagLoading: "tagify__tag--loading",
          tagEditing: "tagify__tag--editable",
          tagFlash: "tagify__tag--flash",
          tagHide: "tagify__tag--hide"
        },
        dropdown: {
          classname: "",
          enabled: 2,
          maxItems: 10,
          searchKeys: ["value", "searchBy"],
          fuzzySearch: !0,
          caseSensitive: !1,
          accentedSearch: !0,
          highlightFirst: !1,
          closeOnSelect: !0,
          clearOnSelect: !0,
          position: "all",
          appendTarget: null
        },
        hooks: {
          beforeRemoveTag: function beforeRemoveTag() {
            return Promise.resolve();
          },
          beforePaste: function beforePaste() {
            return Promise.resolve();
          },
          suggestionClick: function suggestionClick() {
            return Promise.resolve();
          }
        }
      };

      function u() {
        this.dropdown = {};

        for (var _t in this._dropdown) {
          this.dropdown[_t] = "function" == typeof this._dropdown[_t] ? this._dropdown[_t].bind(this) : this._dropdown[_t];
        }

        this.dropdown.refs();
      }

      var m = {
        refs: function refs() {
          this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings]), this.DOM.dropdown.content = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownWrapperSelector);
        },
        show: function show(t) {
          var _this = this;

          var e,
              i,
              a,
              n = this.settings,
              o = "mix" == n.mode && !n.enforceWhitelist,
              r = !n.whitelist || !n.whitelist.length,
              d = "manual" == n.dropdown.position;

          if (t = void 0 === t ? this.state.inputText : t, (!r || o || n.templates.dropdownItemNoMatch) && !1 !== n.dropdown.enable && !this.state.isLoading) {
            if (clearTimeout(this.dropdownHide__bindEventsTimeout), this.suggestedListItems = this.dropdown.filterListItems(t), t && !this.suggestedListItems.length && (this.trigger("dropdown:noMatch", t), n.templates.dropdownItemNoMatch && (a = n.templates.dropdownItemNoMatch.call(this, {
              value: t
            }))), !a) {
              if (this.suggestedListItems.length) t && o && !this.state.editing.scope && !s(this.suggestedListItems[0].value, t) && this.suggestedListItems.unshift({
                value: t
              });else {
                if (!t || !o || this.state.editing.scope) return this.input.autocomplete.suggest.call(this), void this.dropdown.hide();
                this.suggestedListItems = [{
                  value: t
                }];
              }
              i = "" + (l(e = this.suggestedListItems[0]) ? e.value : e), n.autoComplete && i && 0 == i.indexOf(t) && this.input.autocomplete.suggest.call(this, e);
            }

            this.dropdown.fill(a), n.dropdown.highlightFirst && this.dropdown.highlightOption(this.DOM.dropdown.content.children[0]), this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)), this.state.dropdown.visible = t || !0, this.state.dropdown.query = t, this.setStateSelection(), d || setTimeout(function () {
              _this.dropdown.position(), _this.dropdown.render();
            }), setTimeout(function () {
              _this.trigger("dropdown:show", _this.DOM.dropdown);
            });
          }
        },
        hide: function hide(t) {
          var _this2 = this;

          var e = this.DOM,
              i = e.scope,
              s = e.dropdown,
              a = "manual" == this.settings.dropdown.position && !t;
          if (s && document.body.contains(s) && !a) return window.removeEventListener("resize", this.dropdown.position), this.dropdown.events.binding.call(this, !1), i.setAttribute("aria-expanded", !1), s.parentNode.removeChild(s), setTimeout(function () {
            _this2.state.dropdown.visible = !1;
          }, 100), this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null, this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag), this.trigger("dropdown:hide", s), this;
        },
        toggle: function toggle(t) {
          this.dropdown[this.state.dropdown.visible && !t ? "hide" : "show"]();
        },
        render: function render() {
          var _this3 = this;

          var t,
              e,
              i,
              s = (t = this.DOM.dropdown, (i = t.cloneNode(!0)).style.cssText = "position:fixed; top:-9999px; opacity:0", document.body.appendChild(i), e = i.clientHeight, i.parentNode.removeChild(i), e),
              a = this.settings;
          return "number" == typeof a.dropdown.enabled && a.dropdown.enabled >= 0 ? (this.DOM.scope.setAttribute("aria-expanded", !0), document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(a.classNames.dropdownInital), this.dropdown.position(s), a.dropdown.appendTarget.appendChild(this.DOM.dropdown), setTimeout(function () {
            return _this3.DOM.dropdown.classList.remove(a.classNames.dropdownInital);
          })), this) : this;
        },
        fill: function fill(t) {
          var e;
          t = "string" == typeof t ? t : this.dropdown.createListHTML(t || this.suggestedListItems), this.DOM.dropdown.content.innerHTML = (e = t) ? e.replace(/\>[\r\n ]+\</g, "><").replace(/(<.*?>)|\s+/g, function (t, e) {
            return e || " ";
          }) : "";
        },
        refilter: function refilter(t) {
          t = t || this.state.dropdown.query || "", this.suggestedListItems = this.dropdown.filterListItems(t), this.dropdown.fill(), this.suggestedListItems.length || this.dropdown.hide(), this.trigger("dropdown:updated", this.DOM.dropdown);
        },
        position: function position(t) {
          var e = this.settings.dropdown;

          if ("manual" != e.position) {
            var i,
                s,
                a,
                n,
                o,
                r,
                l = this.DOM.dropdown,
                d = e.placeAbove,
                h = document.documentElement.clientHeight,
                g = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 480 ? e.position : "all",
                c = this.DOM["input" == g ? "input" : "scope"];
            t = t || l.clientHeight, this.state.dropdown.visible && ("text" == g ? (a = (i = this.getCaretGlobalPosition()).bottom, s = i.top, n = i.left, o = "auto") : (r = function (t) {
              for (var e = 0, i = 0; t;) {
                e += t.offsetLeft || 0, i += t.offsetTop || 0, t = t.parentNode;
              }

              return {
                left: e,
                top: i
              };
            }(this.settings.dropdown.appendTarget), s = (i = c.getBoundingClientRect()).top - r.top, a = i.bottom - 1 - r.top, n = i.left - r.left, o = i.width + "px"), s = Math.floor(s), a = Math.ceil(a), d = void 0 === d ? h - i.bottom < t : d, l.style.cssText = "left:" + (n + window.pageXOffset) + "px; width:" + o + ";" + (d ? "top: " + (s + window.pageYOffset) + "px" : "top: " + (a + window.pageYOffset) + "px"), l.setAttribute("placement", d ? "top" : "bottom"), l.setAttribute("position", g));
          }
        },
        events: {
          binding: function binding() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            var e = this.dropdown.events.callbacks,
                i = this.listeners.dropdown = this.listeners.dropdown || {
              position: this.dropdown.position.bind(this),
              onKeyDown: e.onKeyDown.bind(this),
              onMouseOver: e.onMouseOver.bind(this),
              onMouseLeave: e.onMouseLeave.bind(this),
              onClick: e.onClick.bind(this),
              onScroll: e.onScroll.bind(this)
            },
                s = t ? "addEventListener" : "removeEventListener";
            "manual" != this.settings.dropdown.position && (window[s]("resize", i.position), window[s]("keydown", i.onKeyDown)), this.DOM.dropdown[s]("mouseover", i.onMouseOver), this.DOM.dropdown[s]("mouseleave", i.onMouseLeave), this.DOM.dropdown[s]("mousedown", i.onClick), this.DOM.dropdown.content[s]("scroll", i.onScroll);
          },
          callbacks: {
            onKeyDown: function onKeyDown(t) {
              var _this4 = this;

              var e = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),
                  i = this.dropdown.getSuggestionDataByNode(e);

              switch (t.key) {
                case "ArrowDown":
                case "ArrowUp":
                case "Down":
                case "Up":
                  var s;
                  t.preventDefault(), e && (e = e[("ArrowUp" == t.key || "Up" == t.key ? "previous" : "next") + "ElementSibling"]), e || (s = this.DOM.dropdown.content.children, e = s["ArrowUp" == t.key || "Up" == t.key ? s.length - 1 : 0]), i = this.dropdown.getSuggestionDataByNode(e), this.dropdown.highlightOption(e, !0);
                  break;

                case "Escape":
                case "Esc":
                  this.dropdown.hide();
                  break;

                case "ArrowRight":
                  if (this.state.actions.ArrowLeft) return;

                case "Tab":
                  if ("mix" != this.settings.mode && e && !this.settings.autoComplete.rightKey && !this.state.editing) {
                    t.preventDefault();
                    var a = this.dropdown.getMappedValue(i);
                    return this.input.autocomplete.set.call(this, a), !1;
                  }

                  return !0;

                case "Enter":
                  t.preventDefault(), this.settings.hooks.suggestionClick(t, {
                    tagify: this,
                    tagData: i,
                    suggestionElm: e
                  }).then(function () {
                    if (e) return _this4.dropdown.selectOption(e);
                    _this4.dropdown.hide(), "mix" != _this4.settings.mode && _this4.addTags(_this4.state.inputText.trim(), !0);
                  })["catch"](function (t) {
                    return t;
                  });
                  break;

                case "Backspace":
                  {
                    if ("mix" == this.settings.mode || this.state.editing.scope) return;

                    var _t2 = this.input.raw.call(this);

                    "" != _t2 && 8203 != _t2.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
                  }
              }
            },
            onMouseOver: function onMouseOver(t) {
              var e = t.target.closest(this.settings.classNames.dropdownItemSelector);
              e && this.dropdown.highlightOption(e);
            },
            onMouseLeave: function onMouseLeave(t) {
              this.dropdown.highlightOption();
            },
            onClick: function onClick(t) {
              var _this5 = this;

              if (0 == t.button && t.target != this.DOM.dropdown && t.target != this.DOM.dropdown.content) {
                var e = t.target.closest(this.settings.classNames.dropdownItemSelector),
                    i = this.dropdown.getSuggestionDataByNode(e);
                this.state.actions.selectOption = !0, setTimeout(function () {
                  return _this5.state.actions.selectOption = !1;
                }, 50), this.settings.hooks.suggestionClick(t, {
                  tagify: this,
                  tagData: i,
                  suggestionElm: e
                }).then(function () {
                  e ? _this5.dropdown.selectOption(e) : _this5.dropdown.hide();
                })["catch"](function (t) {
                  return console.warn(t);
                });
              }
            },
            onScroll: function onScroll(t) {
              var e = t.target,
                  i = e.scrollTop / (e.scrollHeight - e.parentNode.clientHeight) * 100;
              this.trigger("dropdown:scroll", {
                percentage: Math.round(i)
              });
            }
          }
        },
        getSuggestionDataByNode: function getSuggestionDataByNode(t) {
          var e = t ? +t.getAttribute("tagifySuggestionIdx") : -1;
          return this.suggestedListItems[e] || null;
        },
        highlightOption: function highlightOption(t, e) {
          var i,
              s = this.settings.classNames.dropdownItemActive;
          if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(s), this.state.ddItemElm.removeAttribute("aria-selected")), !t) return this.state.ddItemData = null, this.state.ddItemElm = null, void this.input.autocomplete.suggest.call(this);
          i = this.suggestedListItems[this.getNodeIndex(t)], this.state.ddItemData = i, this.state.ddItemElm = t, t.classList.add(s), t.setAttribute("aria-selected", !0), e && (t.parentNode.scrollTop = t.clientHeight + t.offsetTop - t.parentNode.clientHeight), this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, i), this.dropdown.position());
        },
        selectOption: function selectOption(t) {
          var _this6 = this;

          var e = this.settings.dropdown,
              i = e.clearOnSelect,
              s = e.closeOnSelect;
          if (!t) return this.addTags(this.state.inputText, !0), void (s && this.dropdown.hide());
          var a = t.getAttribute("tagifySuggestionIdx"),
              n = this.suggestedListItems[+a];
          this.trigger("dropdown:select", {
            data: n,
            elm: t
          }), a && n ? (this.state.editing ? this.onEditTagDone(null, d({
            __isValid: !0
          }, this.normalizeTags([n])[0])) : this["mix" == this.settings.mode ? "addMixTags" : "addTags"]([n], i), this.DOM.input.parentNode && (setTimeout(function () {
            _this6.DOM.input.focus(), _this6.toggleFocusClass(!0);
          }), s ? setTimeout(this.dropdown.hide.bind(this)) : this.dropdown.refilter())) : this.dropdown.hide();
        },
        selectAll: function selectAll() {
          return this.suggestedListItems.length = 0, this.dropdown.hide(), this.addTags(this.dropdown.filterListItems(""), !0), this;
        },
        filterListItems: function filterListItems(t, e) {
          var _this7 = this;

          var i,
              s,
              a,
              n,
              o,
              r = this.settings,
              d = r.dropdown,
              g = (e = e || {}, t = "select" == r.mode && this.value.length && this.value[0][r.tagTextProp] == t ? "" : t, []),
              c = [],
              p = r.whitelist,
              u = d.maxItems || 1 / 0,
              m = d.searchKeys,
              v = 0;
          if (!t || !m.length) return (r.duplicates ? p : p.filter(function (t) {
            return !_this7.isTagDuplicate(l(t) ? t.value : t);
          })).slice(0, u);

          function f(t, e) {
            return e.toLowerCase().split(" ").every(function (e) {
              return t.includes(e.toLowerCase());
            });
          }

          for (o = d.caseSensitive ? "" + t : ("" + t).toLowerCase(); v < p.length; v++) {
            var _t3 = void 0,
                _u = void 0;

            i = p[v] instanceof Object ? p[v] : {
              value: p[v]
            };

            var _T = !Object.keys(i).some(function (t) {
              return m.includes(t);
            }) ? ["value"] : m;

            d.fuzzySearch && !e.exact ? (a = _T.reduce(function (t, e) {
              return t + " " + (i[e] || "");
            }, "").toLowerCase().trim(), d.accentedSearch && (a = h(a), o = h(o)), _t3 = 0 == a.indexOf(o), _u = a === o, s = f(a, o)) : (_t3 = !0, s = _T.some(function (t) {
              var s = "" + (i[t] || "");
              return d.accentedSearch && (s = h(s), o = h(o)), d.caseSensitive || (s = s.toLowerCase()), _u = s === o, e.exact ? s === o : 0 == s.indexOf(o);
            })), n = !r.duplicates && this.isTagDuplicate(l(i) ? i.value : i), s && !n && (_u && _t3 ? c.push(i) : "startsWith" == d.sortby && _t3 ? g.unshift(i) : g.push(i));
          }

          return "function" == typeof d.sortby ? d.sortby(c.concat(g), o) : c.concat(g).slice(0, u);
        },
        getMappedValue: function getMappedValue(t) {
          var e = this.settings.dropdown.mapValueTo;
          return e ? "function" == typeof e ? e(t) : t[e] || t.value : t.value;
        },
        createListHTML: function createListHTML(t) {
          var _this8 = this;

          return d([], t).map(function (t, e) {
            "string" != typeof t && "number" != typeof t || (t = {
              value: t
            });

            var i = _this8.dropdown.getMappedValue(t);

            t.value = i && "string" == typeof i ? r(i) : i;

            var s = _this8.settings.templates.dropdownItem.apply(_this8, [t, _this8]);

            return s = s.replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim, "").replace(">", " tagifySuggestionIdx=\"".concat(e, "\">"));
          }).join("");
        }
      };
      var v = "@yaireo/tagify/";
      var f,
          T = {
        empty: "empty",
        exceed: "number of tags exceeded",
        pattern: "pattern mismatch",
        duplicate: "already exists",
        notAllowed: "not allowed"
      },
          w = {
        wrapper: function wrapper(t, e) {
          return "<tags class=\"".concat(e.classNames.namespace, " ").concat(e.mode ? "".concat(e.classNames[e.mode + "Mode"]) : "", " ").concat(t.className, "\"\n                    ").concat(e.readonly ? "readonly" : "", "\n                    ").concat(e.disabled ? "disabled" : "", "\n                    ").concat(e.required ? "required" : "", "\n                    tabIndex=\"-1\">\n            <span ").concat(!e.readonly && e.userInput ? "contenteditable" : "", " tabIndex=\"0\" data-placeholder=\"").concat(e.placeholder || "&#8203;", "\" aria-placeholder=\"").concat(e.placeholder || "", "\"\n                class=\"").concat(e.classNames.input, "\"\n                role=\"textbox\"\n                aria-autocomplete=\"both\"\n                aria-multiline=\"").concat("mix" == e.mode, "\"></span>\n                &#8203;\n        </tags>");
        },
        tag: function tag(t, e) {
          var i = this.settings;
          return "<tag title=\"".concat(t.title || t.value, "\"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex=\"").concat(i.a11y.focusableTags ? 0 : -1, "\"\n                    class=\"").concat(i.classNames.tag, " ").concat(t["class"] || "", "\"\n                    ").concat(this.getAttributes(t), ">\n            <x title='' class=\"").concat(i.classNames.tagX, "\" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class=\"").concat(i.classNames.tagText, "\">").concat(t[i.tagTextProp] || t.value, "</span>\n            </div>\n        </tag>");
        },
        dropdown: function dropdown(t) {
          var e = t.dropdown,
              i = "manual" == e.position,
              s = "".concat(t.classNames.dropdown);
          return "<div class=\"".concat(i ? "" : s, " ").concat(e.classname, "\" role=\"listbox\" aria-labelledby=\"dropdown\">\n                    <div class=\"").concat(t.classNames.dropdownWrapper, "\"></div>\n                </div>");
        },
        dropdownItem: function dropdownItem(t, e) {
          return "<div ".concat(this.getAttributes(t), "\n                    class='").concat(this.settings.classNames.dropdownItem, " ").concat(t["class"] ? t["class"] : "", "'\n                    tabindex=\"0\"\n                    role=\"option\">").concat(t.value, "</div>");
        },
        dropdownItemNoMatch: null
      };
      var b = {
        customBinding: function customBinding() {
          var _this9 = this;

          this.customEventsList.forEach(function (t) {
            _this9.on(t, _this9.settings.callbacks[t]);
          });
        },
        binding: function binding() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var e,
              i = this.events.callbacks,
              s = t ? "addEventListener" : "removeEventListener";

          if (!this.state.mainEvents || !t) {
            for (var a in this.state.mainEvents = t, t && !this.listeners.main && (this.events.bindGlobal.call(this), this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))), e = this.listeners.main = this.listeners.main || {
              focus: ["input", i.onFocusBlur.bind(this)],
              keydown: ["input", i.onKeydown.bind(this)],
              click: ["scope", i.onClickScope.bind(this)],
              dblclick: ["scope", i.onDoubleClickScope.bind(this)],
              paste: ["input", i.onPaste.bind(this)],
              drop: ["input", i.onDrop.bind(this)]
            }) {
              this.DOM[e[a][0]][s](a, e[a][1]);
            }

            clearInterval(this.listeners.main.originalInputValueObserverInterval), this.listeners.main.originalInputValueObserverInterval = setInterval(i.observeOriginalInputValue.bind(this), 500);
            var n = this.listeners.main.inputMutationObserver || new MutationObserver(i.onInputDOMChange.bind(this));
            n && n.disconnect(), "mix" == this.settings.mode && n.observe(this.DOM.input, {
              childList: !0
            });
          }
        },
        bindGlobal: function bindGlobal(t) {
          var e,
              i = this.events.callbacks,
              s = t ? "removeEventListener" : "addEventListener";

          if (t || !this.listeners.global) {
            var _iterator = _createForOfIteratorHelper((this.listeners.global = this.listeners && this.listeners.global || [{
              type: this.isIE ? "keydown" : "input",
              target: this.DOM.input,
              cb: i[this.isIE ? "onInputIE" : "onInput"].bind(this)
            }, {
              type: "keydown",
              target: window,
              cb: i.onWindowKeyDown.bind(this)
            }, {
              type: "blur",
              target: this.DOM.input,
              cb: i.onFocusBlur.bind(this)
            }], this.listeners.global)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                e = _step.value;
                e.target[s](e.type, e.cb);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        },
        unbindGlobal: function unbindGlobal() {
          this.events.bindGlobal.call(this, !0);
        },
        callbacks: {
          onFocusBlur: function onFocusBlur(t) {
            var e = t.target ? this.trim(t.target.textContent) : "",
                i = this.settings,
                s = t.type,
                a = i.dropdown.enabled >= 0,
                n = {
              relatedTarget: t.relatedTarget
            },
                o = this.state.actions.selectOption && (a || !i.dropdown.closeOnSelect),
                r = this.state.actions.addNew && a,
                l = t.relatedTarget && c.call(this, t.relatedTarget) && this.DOM.scope.contains(t.relatedTarget);

            if ("blur" == s) {
              if (t.relatedTarget === this.DOM.scope) return this.dropdown.hide(), void this.DOM.input.focus();
              this.postUpdate(), this.triggerChangeEvent();
            }

            if (!o && !r) if (this.state.hasFocus = "focus" == s && +new Date(), this.toggleFocusClass(this.state.hasFocus), "mix" != i.mode) {
              if ("focus" == s) return this.trigger("focus", n), void (0 !== i.dropdown.enabled && i.userInput || this.dropdown.show(this.value.length ? "" : void 0));
              "blur" == s && (this.trigger("blur", n), this.loading(!1), "select" == this.settings.mode && l && (e = ""), ("select" == this.settings.mode && e ? !this.value.length || this.value[0].value != e : e && !this.state.actions.selectOption && i.addTagOnBlur) && this.addTags(e, !0), "select" != this.settings.mode || e || this.removeTags()), this.DOM.input.removeAttribute("style"), this.dropdown.hide();
            } else "focus" == s ? this.trigger("focus", n) : "blur" == t.type && (this.trigger("blur", n), this.loading(!1), this.dropdown.hide(), this.state.dropdown.visible = void 0, this.setStateSelection());
          },
          onWindowKeyDown: function onWindowKeyDown(t) {
            var e,
                i = document.activeElement;
            if (c.call(this, i) && this.DOM.scope.contains(document.activeElement)) switch (e = i.nextElementSibling, t.key) {
              case "Backspace":
                this.settings.readonly || (this.removeTags(i), (e || this.DOM.input).focus());
                break;

              case "Enter":
                setTimeout(this.editTag.bind(this), 0, i);
            }
          },
          onKeydown: function onKeydown(t) {
            var _this10 = this;

            var e = this.settings;
            "select" == e.mode && e.enforceWhitelist && this.value.length && "Tab" != t.key && t.preventDefault();
            var i = this.trim(t.target.textContent);

            if (this.trigger("keydown", {
              originalEvent: this.cloneEvent(t)
            }), "mix" == e.mode) {
              switch (t.key) {
                case "Left":
                case "ArrowLeft":
                  this.state.actions.ArrowLeft = !0;
                  break;

                case "Delete":
                case "Backspace":
                  if (this.state.editing) return;
                  var s,
                      a,
                      r,
                      l = document.getSelection(),
                      d = "Delete" == t.key && l.anchorOffset == (l.anchorNode.length || 0),
                      h = l.anchorNode.previousSibling,
                      p = 1 == l.anchorNode.nodeType || !l.anchorOffset && h && 1 == h.nodeType && l.anchorNode.previousSibling,
                      u = n(this.DOM.input.innerHTML),
                      m = this.getTagElms();
                  if ("edit" == e.backspace && p) return s = 1 == l.anchorNode.nodeType ? null : l.anchorNode.previousElementSibling, setTimeout(this.editTag.bind(this), 0, s), void t.preventDefault();
                  if (g() && p) return r = o(p), p.hasAttribute("readonly") || p.remove(), this.DOM.input.focus(), void setTimeout(function () {
                    _this10.placeCaretAfterNode(r), _this10.DOM.input.click();
                  });
                  if ("BR" == l.anchorNode.nodeName) return;
                  if ((d || p) && 1 == l.anchorNode.nodeType ? a = 0 == l.anchorOffset ? d ? m[0] : null : m[l.anchorOffset - 1] : d ? a = l.anchorNode.nextElementSibling : p && (a = p), 3 == l.anchorNode.nodeType && !l.anchorNode.nodeValue && l.anchorNode.previousElementSibling && t.preventDefault(), (p || d) && !e.backspace) return void t.preventDefault();
                  if ("Range" != l.type && !l.anchorOffset && l.anchorNode == this.DOM.input && "Delete" != t.key) return void t.preventDefault();
                  if ("Range" != l.type && a && a.hasAttribute("readonly")) return void this.placeCaretAfterNode(o(a));
                  clearTimeout(f), f = setTimeout(function () {
                    var t = document.getSelection(),
                        e = n(_this10.DOM.input.innerHTML),
                        i = !d && t.anchorNode.previousSibling;
                    if (e.length >= u.length && i) if (c.call(_this10, i) && !i.hasAttribute("readonly")) {
                      if (_this10.removeTags(i), _this10.fixFirefoxLastTagNoCaret(), 2 == _this10.DOM.input.children.length && "BR" == _this10.DOM.input.children[1].tagName) return _this10.DOM.input.innerHTML = "", _this10.value.length = 0, !0;
                    } else i.remove();
                    _this10.value = [].map.call(m, function (t, e) {
                      var i = _this10.tagData(t);

                      if (t.parentNode || i.readonly) return i;

                      _this10.trigger("remove", {
                        tag: t,
                        index: e,
                        data: i
                      });
                    }).filter(function (t) {
                      return t;
                    });
                  }, 20);
              }

              return !0;
            }

            switch (t.key) {
              case "Backspace":
                "select" == e.mode && e.enforceWhitelist && this.value.length ? this.removeTags() : this.state.dropdown.visible && "manual" != e.dropdown.position || "" != t.target.textContent && 8203 != i.charCodeAt(0) || (!0 === e.backspace ? this.removeTags() : "edit" == e.backspace && setTimeout(this.editTag.bind(this), 0));
                break;

              case "Esc":
              case "Escape":
                if (this.state.dropdown.visible) return;
                t.target.blur();
                break;

              case "Down":
              case "ArrowDown":
                this.state.dropdown.visible || this.dropdown.show();
                break;

              case "ArrowRight":
                {
                  var _t4 = this.state.inputSuggestion || this.state.ddItemData;

                  if (_t4 && e.autoComplete.rightKey) return void this.addTags([_t4], !0);
                  break;
                }

              case "Tab":
                {
                  var _s2 = "select" == e.mode;

                  if (!i || _s2) return !0;
                  t.preventDefault();
                }

              case "Enter":
                if (this.state.dropdown.visible || 229 == t.keyCode) return;
                t.preventDefault(), setTimeout(function () {
                  _this10.state.actions.selectOption || _this10.addTags(i, !0);
                });
            }
          },
          onInput: function onInput(t) {
            if (this.postUpdate(), "mix" == this.settings.mode) return this.events.callbacks.onMixTagsInput.call(this, t);
            var e = this.input.normalize.call(this),
                i = e.length >= this.settings.dropdown.enabled,
                s = {
              value: e,
              inputElm: this.DOM.input
            };
            s.isValid = this.validateTag({
              value: e
            }), this.state.inputText != e && (this.input.set.call(this, e, !1), -1 != e.search(this.settings.delimiters) ? this.addTags(e) && this.input.set.call(this) : this.settings.dropdown.enabled >= 0 && this.dropdown[i ? "show" : "hide"](e), this.trigger("input", s));
          },
          onMixTagsInput: function onMixTagsInput(t) {
            var _this11 = this;

            var e,
                i,
                s,
                a,
                n,
                o,
                r,
                l,
                h = this.settings,
                c = this.value.length,
                p = this.getTagElms(),
                u = document.createDocumentFragment(),
                m = window.getSelection().getRangeAt(0),
                v = [].map.call(p, function (t) {
              return _this11.tagData(t).value;
            });
            if ("deleteContentBackward" == t.inputType && g() && this.events.callbacks.onKeydown.call(this, {
              target: t.target,
              key: "Backspace"
            }), this.value.slice().forEach(function (t) {
              t.readonly && !v.includes(t.value) && u.appendChild(_this11.createTagElem(t));
            }), u.childNodes.length && (m.insertNode(u), this.setRangeAtStartEnd(!1, u.lastChild)), p.length != c) return this.value = [].map.call(this.getTagElms(), function (t) {
              return _this11.tagData(t);
            }), void this.update({
              withoutChangeEvent: !0
            });
            if (this.hasMaxTags()) return !0;

            if (window.getSelection && (o = window.getSelection()).rangeCount > 0 && 3 == o.anchorNode.nodeType) {
              if ((m = o.getRangeAt(0).cloneRange()).collapse(!0), m.setStart(o.focusNode, 0), s = (e = m.toString().slice(0, m.endOffset)).split(h.pattern).length - 1, (i = e.match(h.pattern)) && (a = e.slice(e.lastIndexOf(i[i.length - 1]))), a) {
                if (this.state.actions.ArrowLeft = !1, this.state.tag = {
                  prefix: a.match(h.pattern)[0],
                  value: a.replace(h.pattern, "")
                }, this.state.tag.baseOffset = o.baseOffset - this.state.tag.value.length, l = this.state.tag.value.match(h.delimiters)) return this.state.tag.value = this.state.tag.value.replace(h.delimiters, ""), this.state.tag.delimiters = l[0], this.addTags(this.state.tag.value, h.dropdown.clearOnSelect), void this.dropdown.hide();
                n = this.state.tag.value.length >= h.dropdown.enabled;

                try {
                  r = (r = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && r.value[0] == this.state.tag.value[0], this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset];
                } catch (t) {}

                (r || s < this.state.mixMode.matchedPatternCount) && (n = !1);
              } else this.state.flaggedTags = {};

              this.state.mixMode.matchedPatternCount = s;
            }

            setTimeout(function () {
              _this11.update({
                withoutChangeEvent: !0
              }), _this11.trigger("input", d({}, _this11.state.tag, {
                textContent: _this11.DOM.input.textContent
              })), _this11.state.tag && _this11.dropdown[n ? "show" : "hide"](_this11.state.tag.value);
            }, 10);
          },
          onInputIE: function onInputIE(t) {
            var e = this;
            setTimeout(function () {
              e.events.callbacks.onInput.call(e, t);
            });
          },
          observeOriginalInputValue: function observeOriginalInputValue() {
            this.DOM.originalInput.value != this.DOM.originalInput.tagifyValue && this.loadOriginalValues();
          },
          onClickScope: function onClickScope(t) {
            var e = this.settings,
                i = t.target.closest("." + e.classNames.tag),
                s = +new Date() - this.state.hasFocus;

            if (t.target != this.DOM.scope) {
              if (!t.target.classList.contains(e.classNames.tagX)) return i ? (this.trigger("click", {
                tag: i,
                index: this.getNodeIndex(i),
                data: this.tagData(i),
                originalEvent: this.cloneEvent(t)
              }), void (1 !== e.editTags && 1 !== e.editTags.clicks || this.events.callbacks.onDoubleClickScope.call(this, t))) : void (t.target == this.DOM.input && ("mix" == e.mode && this.fixFirefoxLastTagNoCaret(), s > 500) ? this.state.dropdown.visible ? this.dropdown.hide() : 0 === e.dropdown.enabled && "mix" != e.mode && this.dropdown.show(this.value.length ? "" : void 0) : "select" == e.mode && !this.state.dropdown.visible && this.dropdown.show());
              this.removeTags(t.target.parentNode);
            } else this.state.hasFocus || this.DOM.input.focus();
          },
          onPaste: function onPaste(t) {
            var _this12 = this;

            t.preventDefault();
            var e,
                i,
                s = this.settings;
            if ("select" == s.mode && s.enforceWhitelist || !s.userInput) return !1;
            s.readonly || (e = t.clipboardData || window.clipboardData, i = e.getData("Text"), s.hooks.beforePaste(t, {
              tagify: this,
              pastedText: i,
              clipboardData: e
            }).then(function (e) {
              void 0 === e && (e = i), e && (_this12.injectAtCaret(e, window.getSelection().getRangeAt(0)), "mix" == _this12.settings.mode ? _this12.events.callbacks.onMixTagsInput.call(_this12, t) : _this12.settings.pasteAsTags ? _this12.addTags(_this12.state.inputText + e, !0) : _this12.state.inputText = e);
            })["catch"](function (t) {
              return t;
            }));
          },
          onDrop: function onDrop(t) {
            t.preventDefault();
          },
          onEditTagInput: function onEditTagInput(t, e) {
            var i = t.closest("." + this.settings.classNames.tag),
                s = this.getNodeIndex(i),
                a = this.tagData(i),
                n = this.input.normalize.call(this, t),
                o = i.innerHTML != i.__tagifyTagData.__originalHTML,
                r = this.validateTag(_defineProperty({}, this.settings.tagTextProp, n));
            o || !0 !== t.originalIsValid || (r = !0), i.classList.toggle(this.settings.classNames.tagInvalid, !0 !== r), a.__isValid = r, i.title = !0 === r ? a.title || a.value : r, n.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = n), this.dropdown.show(n)), this.trigger("edit:input", {
              tag: i,
              index: s,
              data: d({}, this.value[s], {
                newValue: n
              }),
              originalEvent: this.cloneEvent(e)
            });
          },
          onEditTagFocus: function onEditTagFocus(t) {
            this.state.editing = {
              scope: t,
              input: t.querySelector("[contenteditable]")
            };
          },
          onEditTagBlur: function onEditTagBlur(t) {
            if (this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(t)) {
              var e,
                  i,
                  s = this.settings,
                  a = t.closest("." + s.classNames.tag),
                  n = this.input.normalize.call(this, t),
                  o = this.tagData(a).__originalData,
                  r = a.innerHTML != a.__tagifyTagData.__originalHTML,
                  l = this.validateTag(_defineProperty({}, s.tagTextProp, n));

              if (n) {
                if (r) {
                  var _d;

                  if (e = this.hasMaxTags(), i = this.getWhitelistItem(n) || d({}, o, (_d = {}, _defineProperty(_d, s.tagTextProp, n), _defineProperty(_d, "value", n), _defineProperty(_d, "__isValid", l), _d)), s.transformTag.call(this, i, o), !0 !== (l = (!e || !0 === o.__isValid) && this.validateTag(_defineProperty({}, s.tagTextProp, i[s.tagTextProp])))) {
                    if (this.trigger("invalid", {
                      data: i,
                      tag: a,
                      message: l
                    }), s.editTags.keepInvalid) return;
                    s.keepInvalidTags ? i.__isValid = l : i = o;
                  } else s.keepInvalidTags && (delete i.title, delete i["aria-invalid"], delete i["class"]);

                  this.onEditTagDone(a, i);
                } else this.onEditTagDone(a, o);
              } else this.onEditTagDone(a);
            }
          },
          onEditTagkeydown: function onEditTagkeydown(t, e) {
            switch (this.trigger("edit:keydown", {
              originalEvent: this.cloneEvent(t)
            }), t.key) {
              case "Esc":
              case "Escape":
                e.innerHTML = e.__tagifyTagData.__originalHTML;

              case "Enter":
              case "Tab":
                t.preventDefault(), t.target.blur();
            }
          },
          onDoubleClickScope: function onDoubleClickScope(t) {
            var e,
                i,
                s = t.target.closest("." + this.settings.classNames.tag),
                a = this.settings;
            s && a.userInput && (e = s.classList.contains(this.settings.classNames.tagEditing), i = s.hasAttribute("readonly"), "select" == a.mode || a.readonly || e || i || !this.settings.editTags || this.editTag(s), this.toggleFocusClass(!0), this.trigger("dblclick", {
              tag: s,
              index: this.getNodeIndex(s),
              data: this.tagData(s)
            }));
          },
          onInputDOMChange: function onInputDOMChange(t) {
            var _this13 = this;

            t.forEach(function (t) {
              t.addedNodes.forEach(function (t) {
                if (t) if ("<div><br></div>" == t.outerHTML) t.replaceWith(document.createElement("br"));else if (1 == t.nodeType && t.querySelector(_this13.settings.classNames.tagSelector)) {
                  var _e = document.createTextNode("");

                  3 == t.childNodes[0].nodeType && "BR" != t.previousSibling.nodeName && (_e = document.createTextNode("\n")), t.replaceWith.apply(t, [_e].concat(_toConsumableArray(_toConsumableArray(t.childNodes).slice(0, -1)))), _this13.placeCaretAfterNode(_e.previousSibling);
                } else c.call(_this13, t) && t.previousSibling && "BR" == t.previousSibling.nodeName && (t.previousSibling.replaceWith("\n​"), _this13.placeCaretAfterNode(t.previousSibling.previousSibling));
              }), t.removedNodes.forEach(function (t) {
                t && "BR" == t.nodeName && c.call(_this13, e) && (_this13.removeTags(e), _this13.fixFirefoxLastTagNoCaret());
              });
            });
            var e = this.DOM.input.lastChild;
            e && "" == e.nodeValue && e.remove(), e && "BR" == e.nodeName || this.DOM.input.appendChild(document.createElement("br"));
          }
        }
      };

      function y(t, e) {
        if (!t) {
          console.warn("Tagify:", "input element not found", t);

          var _e2 = new Proxy(this, {
            get: function get() {
              return function () {
                return _e2;
              };
            }
          });

          return _e2;
        }

        if (t.previousElementSibling && t.previousElementSibling.classList.contains("tagify")) return console.warn("Tagify: ", "input element is already Tagified", t), this;
        var i;
        d(this, function (t) {
          var e = document.createTextNode("");

          function i(t, i, s) {
            s && i.split(/\s+/g).forEach(function (i) {
              return e[t + "EventListener"].call(e, i, s);
            });
          }

          return {
            off: function off(t, e) {
              return i("remove", t, e), this;
            },
            on: function on(t, e) {
              return e && "function" == typeof e && i("add", t, e), this;
            },
            trigger: function trigger(i, s, a) {
              var n;
              if (a = a || {
                cloneData: !0
              }, i) if (t.settings.isJQueryPlugin) "remove" == i && (i = "removeTag"), jQuery(t.DOM.originalInput).triggerHandler(i, [s]);else {
                try {
                  var o = "object" == _typeof(s) ? s : {
                    value: s
                  };
                  if ((o = a.cloneData ? d({}, o) : o).tagify = this, s instanceof Object) for (var r in s) {
                    s[r] instanceof HTMLElement && (o[r] = s[r]);
                  }
                  n = new CustomEvent(i, {
                    detail: o
                  });
                } catch (t) {
                  console.warn(t);
                }

                e.dispatchEvent(n);
              }
            }
          };
        }(this)), this.isFirefox = "undefined" != typeof InstallTrigger, this.isIE = window.document.documentMode, e = e || {}, this.getPersistedData = (i = e.id, function (t) {
          var e,
              s = "/" + t;
          if (1 == localStorage.getItem(v + i + "/v", 1)) try {
            e = JSON.parse(localStorage[v + i + s]);
          } catch (t) {}
          return e;
        }), this.setPersistedData = function (t) {
          return t ? (localStorage.setItem(v + t + "/v", 1), function (e, i) {
            var s = "/" + i,
                a = JSON.stringify(e);
            e && i && (localStorage.setItem(v + t + s, a), dispatchEvent(new Event("storage")));
          }) : function () {};
        }(e.id), this.clearPersistedData = function (t) {
          return function (e) {
            var i = v + "/" + t + "/";
            if (e) localStorage.removeItem(i + e);else for (var _t5 in localStorage) {
              _t5.includes(i) && localStorage.removeItem(_t5);
            }
          };
        }(e.id), this.applySettings(t, e), this.state = {
          inputText: "",
          editing: !1,
          actions: {},
          mixMode: {},
          dropdown: {},
          flaggedTags: {}
        }, this.value = [], this.listeners = {}, this.DOM = {}, this.build(t), u.call(this), this.getCSSVars(), this.loadOriginalValues(), this.events.customBinding.call(this), this.events.binding.call(this), t.autofocus && this.DOM.input.focus();
      }

      return y.prototype = {
        _dropdown: m,
        customEventsList: ["change", "add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:beforeUpdate", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select", "dropdown:updated", "dropdown:noMatch", "dropdown:scroll"],
        dataProps: ["__isValid", "__removed", "__originalData", "__originalHTML", "__tagId"],
        trim: function trim(t) {
          return this.settings.trim && t && "string" == typeof t ? t.trim() : t;
        },
        parseHTML: function parseHTML(t) {
          return new DOMParser().parseFromString(t.trim(), "text/html").body.firstElementChild;
        },
        templates: w,
        parseTemplate: function parseTemplate(t, e) {
          return t = this.settings.templates[t] || t, this.parseHTML(t.apply(this, e));
        },

        set whitelist(t) {
          var e = t && Array.isArray(t);
          this.settings.whitelist = e ? t : [], this.setPersistedData(e ? t : [], "whitelist");
        },

        get whitelist() {
          return this.settings.whitelist;
        },

        applySettings: function applySettings(t, i) {
          p.templates = this.templates;
          var s = this.settings = d({}, p, i);
          s.disabled = t.hasAttribute("disabled"), s.readonly = s.readonly || t.hasAttribute("readonly"), s.placeholder = r(t.getAttribute("placeholder") || s.placeholder || ""), s.required = t.hasAttribute("required");

          var _loop = function _loop(_t6) {
            Object.defineProperty(s.classNames, _t6 + "Selector", {
              get: function get() {
                return "." + this[_t6].split(" ")[0];
              }
            });
          };

          for (var _t6 in s.classNames) {
            _loop(_t6);
          }

          if (this.isIE && (s.autoComplete = !1), ["whitelist", "blacklist"].forEach(function (e) {
            var i = t.getAttribute("data-" + e);
            i && (i = i.split(s.delimiters)) instanceof Array && (s[e] = i);
          }), "autoComplete" in i && !l(i.autoComplete) && (s.autoComplete = p.autoComplete, s.autoComplete.enabled = i.autoComplete), "mix" == s.mode && (s.autoComplete.rightKey = !0, s.delimiters = i.delimiters || null, s.tagTextProp && !s.dropdown.searchKeys.includes(s.tagTextProp) && s.dropdown.searchKeys.push(s.tagTextProp)), t.pattern) try {
            s.pattern = new RegExp(t.pattern);
          } catch (t) {}
          if (this.settings.delimiters) try {
            s.delimiters = new RegExp(this.settings.delimiters, "g");
          } catch (t) {}
          s.disabled && (s.userInput = !1), this.TEXTS = e(e({}, T), s.texts || {}), "select" != s.mode && s.userInput || (s.dropdown.enabled = 0), s.dropdown.appendTarget = i.dropdown && i.dropdown.appendTarget ? i.dropdown.appendTarget : document.body;
          var a = this.getPersistedData("whitelist");
          Array.isArray(a) && (this.whitelist = Array.isArray(s.whitelist) ? function () {
            var t = [],
                e = {};

            var _iterator2 = _createForOfIteratorHelper(arguments),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _i = _step2.value;

                var _iterator3 = _createForOfIteratorHelper(_i),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _s3 = _step3.value;
                    l(_s3) ? e[_s3.value] || (t.push(_s3), e[_s3.value] = 1) : t.includes(_s3) || t.push(_s3);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return t;
          }(s.whitelist, a) : a);
        },
        getAttributes: function getAttributes(t) {
          var e,
              i = this.getCustomAttributes(t),
              s = "";

          for (e in i) {
            s += " " + e + (void 0 !== t[e] ? "=\"".concat(i[e], "\"") : "");
          }

          return s;
        },
        getCustomAttributes: function getCustomAttributes(t) {
          if (!l(t)) return "";
          var e,
              i = {};

          for (e in t) {
            "__" != e.slice(0, 2) && "class" != e && t.hasOwnProperty(e) && void 0 !== t[e] && (i[e] = r(t[e]));
          }

          return i;
        },
        setStateSelection: function setStateSelection() {
          var t = window.getSelection(),
              e = {
            anchorOffset: t.anchorOffset,
            anchorNode: t.anchorNode,
            range: t.getRangeAt && t.rangeCount && t.getRangeAt(0)
          };
          return this.state.selection = e, e;
        },
        getCaretGlobalPosition: function getCaretGlobalPosition() {
          var t = document.getSelection();

          if (t.rangeCount) {
            var _e3 = t.getRangeAt(0),
                _i2 = _e3.startContainer,
                _s4 = _e3.startOffset;

            var _a, _n;

            if (_s4 > 0) return _n = document.createRange(), _n.setStart(_i2, _s4 - 1), _n.setEnd(_i2, _s4), _a = _n.getBoundingClientRect(), {
              left: _a.right,
              top: _a.top,
              bottom: _a.bottom
            };
            if (_i2.getBoundingClientRect) return _i2.getBoundingClientRect();
          }

          return {
            left: -9999,
            top: -9999
          };
        },
        getCSSVars: function getCSSVars() {
          var t = getComputedStyle(this.DOM.scope, null);
          var e;
          this.CSSVars = {
            tagHideTransition: function (_ref) {
              var t = _ref.value,
                  e = _ref.unit;
              return "s" == e ? 1e3 * t : t;
            }(function (t) {
              if (!t) return {};
              var e = (t = t.trim().split(" ")[0]).split(/\d+/g).filter(function (t) {
                return t;
              }).pop().trim();
              return {
                value: +t.split(e).filter(function (t) {
                  return t;
                })[0].trim(),
                unit: e
              };
            }((e = "tag-hide-transition", t.getPropertyValue("--" + e))))
          };
        },
        build: function build(t) {
          var e = this.DOM;
          this.settings.mixMode.integrated ? (e.originalInput = null, e.scope = t, e.input = t) : (e.originalInput = t, e.scope = this.parseTemplate("wrapper", [t, this.settings]), e.input = e.scope.querySelector(this.settings.classNames.inputSelector), t.parentNode.insertBefore(e.scope, t));
        },
        destroy: function destroy() {
          this.events.unbindGlobal.call(this), this.DOM.scope.parentNode.removeChild(this.DOM.scope), this.dropdown.hide(!0), clearTimeout(this.dropdownHide__bindEventsTimeout);
        },
        loadOriginalValues: function loadOriginalValues(t) {
          var e,
              i = this.settings;

          if (this.state.blockChangeEvent = !0, void 0 === t) {
            var _e4 = this.getPersistedData("value");

            t = _e4 && !this.DOM.originalInput.value ? _e4 : i.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value;
          }

          if (this.removeAllTags(), t) {
            if ("mix" == i.mode) this.parseMixTags(this.trim(t)), (e = this.DOM.input.lastChild) && "BR" == e.tagName || this.DOM.input.insertAdjacentHTML("beforeend", "<br>");else {
              try {
                JSON.parse(t) instanceof Array && (t = JSON.parse(t));
              } catch (t) {}

              this.addTags(t).forEach(function (t) {
                return t && t.classList.add(i.classNames.tagNoAnimation);
              });
            }
          } else this.postUpdate();
          this.state.lastOriginalValueReported = i.mixMode.integrated ? "" : this.DOM.originalInput.value, this.state.blockChangeEvent = !1;
        },
        cloneEvent: function cloneEvent(t) {
          var e = {};

          for (var i in t) {
            e[i] = t[i];
          }

          return e;
        },
        loading: function loading(t) {
          return this.state.isLoading = t, this.DOM.scope.classList[t ? "add" : "remove"](this.settings.classNames.scopeLoading), this;
        },
        tagLoading: function tagLoading(t, e) {
          return t && t.classList[e ? "add" : "remove"](this.settings.classNames.tagLoading), this;
        },
        toggleClass: function toggleClass(t, e) {
          "string" == typeof t && this.DOM.scope.classList.toggle(t, e);
        },
        toggleFocusClass: function toggleFocusClass(t) {
          this.toggleClass(this.settings.classNames.focus, !!t);
        },
        triggerChangeEvent: function triggerChangeEvent() {
          if (!this.settings.mixMode.integrated) {
            var t = this.DOM.originalInput,
                e = this.state.lastOriginalValueReported !== t.value,
                i = new CustomEvent("change", {
              bubbles: !0
            });
            e && (this.state.lastOriginalValueReported = t.value, i.simulated = !0, t._valueTracker && t._valueTracker.setValue(Math.random()), t.dispatchEvent(i), this.trigger("change", this.state.lastOriginalValueReported), t.value = this.state.lastOriginalValueReported);
          }
        },
        events: b,
        fixFirefoxLastTagNoCaret: function fixFirefoxLastTagNoCaret() {},
        placeCaretAfterNode: function placeCaretAfterNode(t) {
          if (t && t.parentNode) {
            var e = t.nextSibling,
                i = window.getSelection(),
                s = i.getRangeAt(0);
            i.rangeCount && (s.setStartAfter(e || t), s.collapse(!0), i.removeAllRanges(), i.addRange(s));
          }
        },
        insertAfterTag: function insertAfterTag(t, e) {
          if (e = e || this.settings.mixMode.insertAfterTag, t && t.parentNode && e) return e = "string" == typeof e ? document.createTextNode(e) : e, t.parentNode.insertBefore(e, t.nextSibling), e;
        },
        editTag: function editTag(t, e) {
          var _this14 = this;

          t = t || this.getLastTag(), e = e || {}, this.dropdown.hide();
          var i = this.settings;

          function s() {
            return t.querySelector(i.classNames.tagTextSelector);
          }

          var a = s(),
              n = this.getNodeIndex(t),
              o = this.tagData(t),
              r = this.events.callbacks,
              l = this,
              h = !0;

          if (a) {
            if (!(o instanceof Object && "editable" in o) || o.editable) return a.setAttribute("contenteditable", !0), t.classList.add(i.classNames.tagEditing), this.tagData(t, {
              __originalData: d({}, o),
              __originalHTML: t.innerHTML
            }), a.addEventListener("focus", r.onEditTagFocus.bind(this, t)), a.addEventListener("blur", function () {
              setTimeout(function () {
                return r.onEditTagBlur.call(l, s());
              });
            }), a.addEventListener("input", r.onEditTagInput.bind(this, a)), a.addEventListener("keydown", function (e) {
              return r.onEditTagkeydown.call(_this14, e, t);
            }), a.focus(), this.setRangeAtStartEnd(!1, a), e.skipValidation || (h = this.editTagToggleValidity(t)), a.originalIsValid = h, this.trigger("edit:start", {
              tag: t,
              index: n,
              data: o,
              isValid: h
            }), this;
          } else console.warn("Cannot find element in Tag template: .", i.classNames.tagTextSelector);
        },
        editTagToggleValidity: function editTagToggleValidity(t, e) {
          var i;
          if (e = e || this.tagData(t)) return (i = !("__isValid" in e) || !0 === e.__isValid) || this.removeTagsFromValue(t), this.update(), t.classList.toggle(this.settings.classNames.tagNotAllowed, !i), e.__isValid;
          console.warn("tag has no data: ", t, e);
        },
        onEditTagDone: function onEditTagDone(t, e) {
          e = e || {};
          var i = {
            tag: t = t || this.state.editing.scope,
            index: this.getNodeIndex(t),
            previousData: this.tagData(t),
            data: e
          };
          this.trigger("edit:beforeUpdate", i, {
            cloneData: !1
          }), this.state.editing = !1, delete e.__originalData, delete e.__originalHTML, t && e[this.settings.tagTextProp] ? (t = this.replaceTag(t, e), this.editTagToggleValidity(t, e), this.settings.a11y.focusableTags ? t.focus() : this.placeCaretAfterNode(t.previousSibling)) : t && this.removeTags(t), this.trigger("edit:updated", i), this.dropdown.hide(), this.settings.keepInvalidTags && this.reCheckInvalidTags();
        },
        replaceTag: function replaceTag(t, e) {
          e && e.value || (e = t.__tagifyTagData), e.__isValid && 1 != e.__isValid && d(e, this.getInvalidTagAttrs(e, e.__isValid));
          var i = this.createTagElem(e);
          return t.parentNode.replaceChild(i, t), this.updateValueByDOMTags(), i;
        },
        updateValueByDOMTags: function updateValueByDOMTags() {
          var _this15 = this;

          this.value.length = 0, [].forEach.call(this.getTagElms(), function (t) {
            t.classList.contains(_this15.settings.classNames.tagNotAllowed.split(" ")[0]) || _this15.value.push(_this15.tagData(t));
          }), this.update();
        },
        setRangeAtStartEnd: function setRangeAtStartEnd(t, e) {
          t = "number" == typeof t ? t : !!t, e = (e = e || this.DOM.input).lastChild || e;
          var i = document.getSelection();

          try {
            i.rangeCount >= 1 && ["Start", "End"].forEach(function (s) {
              return i.getRangeAt(0)["set" + s](e, t || e.length);
            });
          } catch (t) {}
        },
        injectAtCaret: function injectAtCaret(t, e) {
          if (e = e || this.state.selection.range) return "string" == typeof t && (t = document.createTextNode(t)), e.deleteContents(), e.insertNode(t), this.setRangeAtStartEnd(!1, t), this.updateValueByDOMTags(), this.update(), this;
        },
        input: {
          set: function set() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var i = this.settings.dropdown.closeOnSelect;
            this.state.inputText = t, e && (this.DOM.input.innerHTML = r("" + t)), !t && i && this.dropdown.hide.bind(this), this.input.autocomplete.suggest.call(this), this.input.validate.call(this);
          },
          raw: function raw() {
            return this.DOM.input.textContent;
          },
          validate: function validate() {
            var t = !this.state.inputText || !0 === this.validateTag({
              value: this.state.inputText
            });
            return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !t), t;
          },
          normalize: function normalize(t) {
            var e = t || this.DOM.input,
                i = [];
            e.childNodes.forEach(function (t) {
              return 3 == t.nodeType && i.push(t.nodeValue);
            }), i = i.join("\n");

            try {
              i = i.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
            } catch (t) {}

            return i = i.replace(/\s/g, " "), this.settings.trim && (i = i.replace(/^\s+/, "")), i;
          },
          autocomplete: {
            suggest: function suggest(t) {
              if (this.settings.autoComplete.enabled) {
                "string" == typeof (t = t || {}) && (t = {
                  value: t
                });
                var e = t.value ? "" + t.value : "",
                    i = e.substr(0, this.state.inputText.length).toLowerCase(),
                    s = e.substring(this.state.inputText.length);
                e && this.state.inputText && i == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", s), this.state.inputSuggestion = t) : (this.DOM.input.removeAttribute("data-suggest"), delete this.state.inputSuggestion);
              }
            },
            set: function set(t) {
              var e = this.DOM.input.getAttribute("data-suggest"),
                  i = t || (e ? this.state.inputText + e : null);
              return !!i && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + i)) : (this.input.set.call(this, i), this.setRangeAtStartEnd()), this.input.autocomplete.suggest.call(this), this.dropdown.hide(), !0);
            }
          }
        },
        getTagIdx: function getTagIdx(t) {
          return this.value.findIndex(function (e) {
            return e.__tagId == (t || {}).__tagId;
          });
        },
        getNodeIndex: function getNodeIndex(t) {
          var e = 0;
          if (t) for (; t = t.previousElementSibling;) {
            e++;
          }
          return e;
        },
        getTagElms: function getTagElms() {
          for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
          }

          var e = "." + [].concat(_toConsumableArray(this.settings.classNames.tag.split(" ")), t).join(".");
          return [].slice.call(this.DOM.scope.querySelectorAll(e));
        },
        getLastTag: function getLastTag() {
          var t = this.DOM.scope.querySelectorAll("".concat(this.settings.classNames.tagSelector, ":not(.").concat(this.settings.classNames.tagHide, "):not([readonly])"));
          return t[t.length - 1];
        },
        tagData: function tagData(t, e, i) {
          return t ? (e && (t.__tagifyTagData = i ? e : d({}, t.__tagifyTagData || {}, e)), t.__tagifyTagData) : (console.warn("tag element doesn't exist", t, e), e);
        },
        isTagDuplicate: function isTagDuplicate(t, e) {
          var _this16 = this;

          var i = this.settings;
          return "select" != i.mode && this.value.reduce(function (a, n) {
            return s(_this16.trim("" + t), n.value, e || i.dropdown.caseSensitive) ? a + 1 : a;
          }, 0);
        },
        getTagIndexByValue: function getTagIndexByValue(t) {
          var _this17 = this;

          var e = [];
          return this.getTagElms().forEach(function (i, a) {
            s(_this17.trim(i.textContent), t, _this17.settings.dropdown.caseSensitive) && e.push(a);
          }), e;
        },
        getTagElmByValue: function getTagElmByValue(t) {
          var e = this.getTagIndexByValue(t)[0];
          return this.getTagElms()[e];
        },
        flashTag: function flashTag(t) {
          var _this18 = this;

          t && (t.classList.add(this.settings.classNames.tagFlash), setTimeout(function () {
            t.classList.remove(_this18.settings.classNames.tagFlash);
          }, 100));
        },
        isTagBlacklisted: function isTagBlacklisted(t) {
          return t = this.trim(t.toLowerCase()), this.settings.blacklist.filter(function (e) {
            return ("" + e).toLowerCase() == t;
          }).length;
        },
        isTagWhitelisted: function isTagWhitelisted(t) {
          return !!this.getWhitelistItem(t);
        },
        getWhitelistItem: function getWhitelistItem(t, e, i) {
          e = e || "value";
          var a,
              n = this.settings;
          return (i = i || n.whitelist).some(function (i) {
            var o = "string" == typeof i ? i : i[e] || i.value;
            if (s(o, t, n.dropdown.caseSensitive, n.trim)) return a = "string" == typeof i ? {
              value: i
            } : i, !0;
          }), a || "value" != e || "value" == n.tagTextProp || (a = this.getWhitelistItem(t, n.tagTextProp, i)), a;
        },
        validateTag: function validateTag(t) {
          var e = this.settings,
              i = "value" in t ? "value" : e.tagTextProp,
              s = this.trim(t[i] + "");
          return (t[i] + "").trim() ? e.pattern && e.pattern instanceof RegExp && !e.pattern.test(s) ? this.TEXTS.pattern : !e.duplicates && this.isTagDuplicate(s, this.state.editing) ? this.TEXTS.duplicate : this.isTagBlacklisted(s) || e.enforceWhitelist && !this.isTagWhitelisted(s) ? this.TEXTS.notAllowed : !e.validate || e.validate(t) : this.TEXTS.empty;
        },
        getInvalidTagAttrs: function getInvalidTagAttrs(t, e) {
          return {
            "aria-invalid": !0,
            "class": "".concat(t["class"] || "", " ").concat(this.settings.classNames.tagNotAllowed).trim(),
            title: e
          };
        },
        hasMaxTags: function hasMaxTags() {
          return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
        },
        setReadonly: function setReadonly(t, e) {
          var i = this.settings;
          document.activeElement.blur(), i[e || "readonly"] = t, this.DOM.scope[(t ? "set" : "remove") + "Attribute"](e || "readonly", !0), "mix" == i.mode && this.setContentEditable(!t);
        },
        setContentEditable: function setContentEditable(t) {
          !this.settings.readonly && this.settings.userInput && (this.DOM.input.contentEditable = t);
        },
        setDisabled: function setDisabled(t) {
          this.setReadonly(t, "disabled");
        },
        normalizeTags: function normalizeTags(t) {
          var _this19 = this,
              _ref3;

          var e = this.settings,
              i = e.whitelist,
              s = e.delimiters,
              a = e.mode,
              n = e.tagTextProp;
          e.enforceWhitelist;

          var o = [],
              r = !!i && i[0] instanceof Object,
              l = t instanceof Array,
              d = function d(t) {
            return (t + "").split(s).filter(function (t) {
              return t;
            }).map(function (t) {
              var _ref2;

              return _ref2 = {}, _defineProperty(_ref2, n, _this19.trim(t)), _defineProperty(_ref2, "value", _this19.trim(t)), _ref2;
            });
          };

          if ("number" == typeof t && (t = t.toString()), "string" == typeof t) {
            if (!t.trim()) return [];
            t = d(t);
          } else l && (t = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.map(function (t) {
            return t.value ? t : d(t);
          }))));

          return r && (t.forEach(function (t) {
            var e = o.map(function (t) {
              return t.value;
            }),
                i = _this19.dropdown.filterListItems.call(_this19, t[n], {
              exact: !0
            });

            _this19.settings.duplicates || (i = i.filter(function (t) {
              return !e.includes(t.value);
            }));
            var s = i.length > 1 ? _this19.getWhitelistItem(t[n], n, i) : i[0];
            s && s instanceof Object ? o.push(s) : "mix" != a && (null == t.value && (t.value = t[n]), o.push(t));
          }), o.length && (t = o)), t;
        },
        parseMixTags: function parseMixTags(t) {
          var _this20 = this;

          var e = this.settings,
              i = e.mixTagsInterpolator,
              s = e.duplicates,
              a = e.transformTag,
              n = e.enforceWhitelist,
              o = e.maxTags,
              r = e.tagTextProp,
              l = [];
          return t = t.split(i[0]).map(function (t, e) {
            var d,
                h,
                g,
                c = t.split(i[1]),
                p = c[0],
                u = l.length == o;

            try {
              if (p == +p) throw Error;
              h = JSON.parse(p);
            } catch (t) {
              h = _this20.normalizeTags(p)[0] || {
                value: p
              };
            }

            if (a.call(_this20, h), u || !(c.length > 1) || n && !_this20.isTagWhitelisted(h.value) || !s && _this20.isTagDuplicate(h.value)) {
              if (t) return e ? i[0] + t : t;
            } else h[d = h[r] ? r : "value"] = _this20.trim(h[d]), g = _this20.createTagElem(h), l.push(h), g.classList.add(_this20.settings.classNames.tagNoAnimation), c[0] = g.outerHTML, _this20.value.push(h);

            return c.join("");
          }).join(""), this.DOM.input.innerHTML = t, this.DOM.input.appendChild(document.createTextNode("")), this.DOM.input.normalize(), this.getTagElms().forEach(function (t, e) {
            return _this20.tagData(t, l[e]);
          }), this.update({
            withoutChangeEvent: !0
          }), t;
        },
        replaceTextWithNode: function replaceTextWithNode(t, e) {
          if (this.state.tag || e) {
            e = e || this.state.tag.prefix + this.state.tag.value;
            var i,
                s,
                a = window.getSelection(),
                n = a.anchorNode,
                o = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
            return n.splitText(a.anchorOffset - o), -1 == (i = n.nodeValue.lastIndexOf(e)) ? !0 : (s = n.splitText(i), t && n.parentNode.replaceChild(t, s), !0);
          }
        },
        selectTag: function selectTag(t, e) {
          var i = this.settings;

          if (!i.enforceWhitelist || this.isTagWhitelisted(e.value)) {
            this.input.set.call(this, e[i.tagTextProp] || e.value, !0), this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this));
            var s = this.getLastTag();
            return s ? this.replaceTag(s, e) : this.appendTag(t), i.enforceWhitelist && this.setContentEditable(!1), this.value[0] = e, this.update(), this.trigger("add", {
              tag: t,
              data: e
            }), [t];
          }
        },
        addEmptyTag: function addEmptyTag(t) {
          var e = d({
            value: ""
          }, t || {}),
              i = this.createTagElem(e);
          this.tagData(i, e), this.appendTag(i), this.editTag(i, {
            skipValidation: !0
          });
        },
        addTags: function addTags(t, e, i) {
          var _this21 = this;

          var s = [],
              a = this.settings,
              n = document.createDocumentFragment();
          return i = i || a.skipInvalid, t && 0 != t.length ? (t = this.normalizeTags(t), "mix" == a.mode ? this.addMixTags(t) : ("select" == a.mode && (e = !1), this.DOM.input.removeAttribute("style"), t.forEach(function (t) {
            var e,
                o = {},
                r = Object.assign({}, t, {
              value: t.value + ""
            });

            if (t = Object.assign({}, r), a.transformTag.call(_this21, t), t.__isValid = _this21.hasMaxTags() || _this21.validateTag(t), !0 !== t.__isValid) {
              if (i) return;
              d(o, _this21.getInvalidTagAttrs(t, t.__isValid), {
                __preInvalidData: r
              }), t.__isValid == _this21.TEXTS.duplicate && _this21.flashTag(_this21.getTagElmByValue(t.value));
            }

            if ("readonly" in t && (t.readonly ? o["aria-readonly"] = !0 : delete t.readonly), e = _this21.createTagElem(t, o), s.push(e), "select" == a.mode) return _this21.selectTag(e, t);
            n.appendChild(e), t.__isValid && !0 === t.__isValid ? (_this21.value.push(t), _this21.trigger("add", {
              tag: e,
              index: _this21.value.length - 1,
              data: t
            })) : (_this21.trigger("invalid", {
              data: t,
              index: _this21.value.length,
              tag: e,
              message: t.__isValid
            }), a.keepInvalidTags || setTimeout(function () {
              return _this21.removeTags(e, !0);
            }, 1e3)), _this21.dropdown.position();
          }), this.appendTag(n), this.update(), t.length && e && this.input.set.call(this), this.dropdown.refilter(), s)) : ("select" == a.mode && this.removeAllTags(), s);
        },
        addMixTags: function addMixTags(t) {
          var _this22 = this;

          if ((t = this.normalizeTags(t))[0].prefix || this.state.tag) return this.prefixedTextToTag(t[0]);
          "string" == typeof t && (t = [{
            value: t
          }]);
          var e = !!this.state.selection,
              i = document.createDocumentFragment();
          return t.forEach(function (t) {
            var e = _this22.createTagElem(t);

            i.appendChild(e), _this22.insertAfterTag(e);
          }), e ? this.injectAtCaret(i) : (this.DOM.input.focus(), (e = this.setStateSelection()).range.setStart(this.DOM.input, e.range.endOffset), e.range.setEnd(this.DOM.input, e.range.endOffset), this.DOM.input.appendChild(i), this.updateValueByDOMTags(), this.update()), i;
        },
        prefixedTextToTag: function prefixedTextToTag(t) {
          var _this23 = this;

          var e,
              i = this.settings,
              s = this.state.tag.delimiters;

          if (i.transformTag.call(this, t), t.prefix = t.prefix || this.state.tag ? this.state.tag.prefix : (i.pattern.source || i.pattern)[0], e = this.createTagElem(t), this.replaceTextWithNode(e) || this.DOM.input.appendChild(e), setTimeout(function () {
            return e.classList.add(_this23.settings.classNames.tagNoAnimation);
          }, 300), this.value.push(t), this.update(), !s) {
            var a = this.insertAfterTag(e) || e;
            this.placeCaretAfterNode(a);
          }

          return this.state.tag = null, this.trigger("add", d({}, {
            tag: e
          }, {
            data: t
          })), e;
        },
        appendTag: function appendTag(t) {
          var e = this.DOM,
              i = e.scope.lastElementChild;
          i === e.input ? e.scope.insertBefore(t, i) : e.scope.appendChild(t);
        },
        createTagElem: function createTagElem(t, i) {
          t.__tagId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (t) {
            return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16);
          });
          var s,
              a = d({}, t, e({
            value: r(t.value + "")
          }, i));
          return function (t) {
            for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_TEXT, null, !1); e = i.nextNode();) {
              e.textContent.trim() || e.parentNode.removeChild(e);
            }
          }(s = this.parseTemplate("tag", [a])), this.tagData(s, t), s;
        },
        reCheckInvalidTags: function reCheckInvalidTags() {
          var _this24 = this;

          var t = this.settings;
          this.getTagElms(t.classNames.tagNotAllowed).forEach(function (t, e) {
            var i = _this24.tagData(t),
                s = _this24.hasMaxTags(),
                a = _this24.validateTag(i);

            if (!0 === a && !s) return i = i.__preInvalidData ? i.__preInvalidData : {
              value: i.value
            }, _this24.replaceTag(t, i);
            t.title = s || a;
          });
        },
        removeTags: function removeTags(t, e, i) {
          var _this25 = this;

          var s;
          if (t = t && t instanceof HTMLElement ? [t] : t instanceof Array ? t : t ? [t] : [this.getLastTag()], s = t.reduce(function (t, e) {
            e && "string" == typeof e && (e = _this25.getTagElmByValue(e));

            var i = _this25.tagData(e);

            return e && i && !i.readonly && t.push({
              node: e,
              idx: _this25.getTagIdx(i),
              data: _this25.tagData(e, {
                __removed: !0
              })
            }), t;
          }, []), i = "number" == typeof i ? i : this.CSSVars.tagHideTransition, "select" == this.settings.mode && (i = 0, this.input.set.call(this)), 1 == s.length && s[0].node.classList.contains(this.settings.classNames.tagNotAllowed) && (e = !0), s.length) return this.settings.hooks.beforeRemoveTag(s, {
            tagify: this
          }).then(function () {
            function t(t) {
              t.node.parentNode && (t.node.parentNode.removeChild(t.node), e ? this.settings.keepInvalidTags && this.trigger("remove", {
                tag: t.node,
                index: t.idx
              }) : (this.trigger("remove", {
                tag: t.node,
                index: t.idx,
                data: t.data
              }), this.dropdown.refilter(), this.dropdown.position(), this.DOM.input.normalize(), this.settings.keepInvalidTags && this.reCheckInvalidTags()));
            }

            i && i > 10 && 1 == s.length ? function (e) {
              e.node.style.width = parseFloat(window.getComputedStyle(e.node).width) + "px", document.body.clientTop, e.node.classList.add(this.settings.classNames.tagHide), setTimeout(t.bind(this), i, e);
            }.call(_this25, s[0]) : s.forEach(t.bind(_this25)), e || (_this25.removeTagsFromValue(s.map(function (t) {
              return t.node;
            })), _this25.update(), "select" == _this25.settings.mode && _this25.setContentEditable(!0));
          })["catch"](function (t) {});
        },
        removeTagsFromDOM: function removeTagsFromDOM() {
          [].slice.call(this.getTagElms()).forEach(function (t) {
            return t.parentNode.removeChild(t);
          });
        },
        removeTagsFromValue: function removeTagsFromValue(t) {
          var _this26 = this;

          (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
            var e = _this26.tagData(t),
                i = _this26.getTagIdx(e);

            i > -1 && _this26.value.splice(i, 1);
          });
        },
        removeAllTags: function removeAllTags(t) {
          t = t || {}, this.value = [], "mix" == this.settings.mode ? this.DOM.input.innerHTML = "" : this.removeTagsFromDOM(), this.dropdown.position(), "select" == this.settings.mode && (this.input.set.call(this), this.setContentEditable(!0)), this.update(t);
        },
        postUpdate: function postUpdate() {
          var t = this.settings.classNames,
              e = "mix" == this.settings.mode ? this.settings.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value.trim() : this.value.length + this.input.raw.call(this).length;
          this.toggleClass(t.hasMaxTags, this.value.length >= this.settings.maxTags), this.toggleClass(t.hasNoTags, !this.value.length), this.toggleClass(t.empty, !e);
        },
        setOriginalInputValue: function setOriginalInputValue(t) {
          var e = this.DOM.originalInput;
          this.settings.mixMode.integrated || (e.value = t, e.tagifyValue = e.value, this.setPersistedData(t, "value"));
        },
        update: function update(t) {
          var e = this.getInputValue();
          this.setOriginalInputValue(e), this.postUpdate(), (t || {}).withoutChangeEvent || this.state.blockChangeEvent || this.triggerChangeEvent();
        },
        getInputValue: function getInputValue() {
          var t = this.getCleanValue();
          return "mix" == this.settings.mode ? this.getMixedTagsAsString(t) : t.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(t) : JSON.stringify(t) : "";
        },
        getCleanValue: function getCleanValue(t) {
          return e = t || this.value, i = this.dataProps, e && Array.isArray(e) && e.map(function (t) {
            return a(t, i);
          });
          var e, i;
        },
        getMixedTagsAsString: function getMixedTagsAsString() {
          var t = "",
              e = this,
              i = this.settings.mixTagsInterpolator;
          return function s(n) {
            n.childNodes.forEach(function (n) {
              if (1 == n.nodeType) {
                var _o = e.tagData(n);

                if ("BR" == n.tagName && (t += "\r\n"), "DIV" == n.tagName || "P" == n.tagName) t += "\r\n", s(n);else if (c.call(e, n) && _o) {
                  if (_o.__removed) return;
                  t += i[0] + JSON.stringify(a(_o, e.dataProps)) + i[1];
                }
              } else t += n.textContent;
            });
          }(this.DOM.input), t;
        }
      }, y.prototype.removeTag = y.prototype.removeTags, y;
    });
  })(tagify_min);

  var Tagify = tagify_min.exports;

  var _templateObject$5;

  var _data$3 = new WeakMap();

  var tagify = null;
  var Tag = {
    onconnected: function onconnected() {
      var _this = this;

      var tagInput = this.querySelector('.tagify');
      tagify = new Tagify(tagInput, {
        enforceWhitelist: true,
        delimiters: null,
        dropdown: {
          closeOnSelect: true
        },
        originalInputValueFormat: function originalInputValueFormat(valuesArr) {
          return valuesArr.map(function (item) {
            return item.value;
          }).join(',');
        },
        hooks: {
          beforePaste: this.data.handlePaste
        }
      });
      tagify.on('input', function (e) {
        _this.data.handleInput(e);
      });
      tagify.on('change', function (e) {
        _this.data.handleChange(e);
      });
    },
    ondisconnected: function ondisconnected() {
      tagify.destroy();
    },

    get data() {
      return _data$3.get(this) || {};
    },

    set data(data) {
      _data$3.set(this, data);

      this.render();
    },

    render: function render() {
      var _this$data = this.data,
          label = _this$data.label,
          value = _this$data.value;

      if (tagify) {
        tagify.removeAllTags();
        tagify.whitelist = value;
        tagify.addTags(value);
      }

      this.html(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n        <label class=\"label\">", "</label>\n        <textarea class=\"tagify\" placeholder=\"", "\"></textarea>\n      "])), label, label);
    }
  };
  define('Tag', Tag);

  var _templateObject$4;

  var _data$2 = new WeakMap();

  var File = {
    get data() {
      return _data$2.get(this) || {};
    },

    set data(data) {
      _data$2.set(this, data);

      this.render();
    },

    render: function render() {
      var _this$data = this.data,
          label = _this$data.label,
          value = _this$data.value,
          handleClick = _this$data.handleClick;
      this.html(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n      <div class=\"file has-name is-fullwidth\">\n            <label class=\"file-label\">\n                <input class=\"file-input\" type=\"input\" onclick=\"", "\"/>\n                <span class=\"file-cta\">\n                <!-- <span class=\"file-icon\">\n                    <i class=\"fas fa-upload\"></i>\n                </span> -->\n                <span class=\"file-label\">\n                    ", "\n                </span>\n                </span>\n                <span class=\"file-name\">\n                    ", "\n                </span>\n            </label>\n        </div>\n      "])), handleClick, label, value);
    }
  };
  define('File', File);

  var _templateObject$3;

  var _data$1 = new WeakMap();

  var Checkbox = {
    get data() {
      return _data$1.get(this) || {};
    },

    set data(data) {
      _data$1.set(this, data);

      this.render();
    },

    render: function render() {
      var _this$data = this.data,
          label = _this$data.label,
          value = _this$data.value,
          handleChange = _this$data.handleChange;
      this.html(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n      <label class=\"checkbox\">\n        <input type=\"checkbox\" checked=\"", "\" onchange=\"", "\"/>\n        ", "\n      </label>\n      "])), value, handleChange, label);
    }
  };
  define('Checkbox', Checkbox);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var toJSON = function toJSON(data) {
    return JSON.parse(data);
  };

  var PRODUCT_OFFERING_FOLDER = "productOffering";
  var PRODUCT_SPEC_FOLDER = "productSpecification";
  var PRODUCT_OFFERING_GROUP_FOLDER = "productOfferingGroup";
  var PRODUCT_PRICE_FOLDER = "price";
  var LOCALE = "en-US";
  var objectMap = function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
      result[key] = mapFn(object[key]);
      return result;
    }, {});
  };
  var diff = function diff(a, b) {
    return Math.abs(a - b);
  };
  var readJSONFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(filename) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Neutralino.filesystem.readFile(filename, {
                encoding: "utf8"
              }).then(toJSON);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function readJSONFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var writeJSONFile = function writeJSONFile(filename, data) {
    return Neutralino.filesystem.writeFile(filename, JSON.stringify(data, null, 4));
  };
  var getLocaleValue = function getLocaleValue(contents) {
    return contents.find(function (content) {
      return LOCALE === content.locale;
    }).value;
  };
  var getCurrency = function getCurrency(contents) {
    return contents.defaultCurrency;
  };
  var getMainSpo = function getMainSpo(contents) {
    return contents.find(function (content) {
      return content.bundledProdOfferOption.numberRelOfferLowerLimit === 1 && content.bundledProdOfferOption.numberRelOfferUpperLimit === 1 && content.bundledProdOfferOption.defaultRelOfferNumber === 1;
    }).id;
  };
  var Util = /*#__PURE__*/_createClass(function Util() {
    var _this = this;

    _classCallCheck(this, Util);

    _defineProperty(this, "getSettings", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      var settings;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return readJSONFile('./settings.json');

            case 2:
              settings = _context2.sent;
              return _context2.abrupt("return", settings);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(this, "generateJSONFileLocation", function (type, id) {
      return "".concat(_this.settings.fdLocation, "/").concat(type, "/").concat(id, ".json");
    });

    _defineProperty(this, "writeToJSONFile", function (_ref3) {
      var name = _ref3.name,
          currency = _ref3.currency,
          timing = _ref3.timing,
          proration = _ref3.proration,
          payload = _ref3.payload;
      return Neutralino.filesystem.writeFile("".concat(_this.settings.outputFolder, "/").concat(name, "_").concat(currency, "_").concat(timing, "_").concat(proration, ".json"), JSON.stringify(payload, null, _this.settings.prettify ? 4 : 0));
    });

    this.getSettings().then(function (settings) {
      _this.settings = settings;
    });
  });

  var ROOT_TYPE = "ROOT_TYPE";
  var BUNDLE_PRODUCT_TYPE = "BUNDLE_PRODUCT_TYPE";
  var SIMPLE_PRODUCT_TYPE = "SIMPLE_PRODUCT_TYPE";
  var STRING_TYPE = "String";
  var INTEGER_TYPE = "Integer";
  var FLOAT_TYPE = "Float";
  var util$2 = new Util();
  var Build = /*#__PURE__*/_createClass(function Build() {
    var _this = this;

    _classCallCheck(this, Build);

    _defineProperty(this, "addBillingAccountField", function (payload) {
      return payload.billingAccount = {
        id: "{{billing}}"
      };
    });

    _defineProperty(this, "addExternalIdentifierField", function (payload, type, orderCount) {
      var externalIdentifier = [];

      switch (type) {
        case BUNDLE_PRODUCT_TYPE:
          externalIdentifier.push({
            id: "Vlocity_OrderItemID",
            type: "VlocityOrderItem"
          });
          break;

        case SIMPLE_PRODUCT_TYPE:
          externalIdentifier.push({
            id: "Vlocity_OrderItemID_".concat(orderCount),
            type: "VlocityOrderItem"
          });
          externalIdentifier.push({
            "id": "NCSOM_OrderItemID_".concat(orderCount),
            "type": "NCSOM Product"
          });
          break;

        case ROOT_TYPE:
        default:
          externalIdentifier.push({
            "id": "Vlocity_OrderID",
            "type": "VlocityOrder"
          });
          externalIdentifier.push({
            "id": "NCSOM_OrderID",
            "type": "NCSOM External"
          });
      }

      payload.externalIdentifier = externalIdentifier;
    });

    _defineProperty(this, "createBasicPayload", function () {
      var payload = {
        relatedParty: [{
          role: "customer",
          id: "{{CustomerId}}"
        }],
        orderItem: []
      };

      _this.addBillingAccountField(payload);

      _this.addExternalIdentifierField(payload, ROOT_TYPE);

      return payload;
    });

    _defineProperty(this, "createMainOrder", function (mainProductOfferingId, cardinality) {
      var mainOrder = _this.createBaseOrderItem(mainProductOfferingId, cardinality);

      _this.addBillingAccountField(mainOrder);

      _this.addExternalIdentifierField(mainOrder, BUNDLE_PRODUCT_TYPE);

      return mainOrder;
    });

    _defineProperty(this, "generateValue", function (type) {
      switch (type) {
        case STRING_TYPE:
          return "Random String";

        case INTEGER_TYPE:
        case FLOAT_TYPE:
          return _this.generateRandomNumber(1, 100);
      }
    });

    _defineProperty(this, "selectValueFromProductOfferDefinedProductSpecCharValues", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(productOfferId) {
        var characteristic, __filename, _yield$readJSONFile, prodSpecCharValueUse, productSpecification, productOfferingTerm, localizedName, place;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                characteristic = [];
                __filename = util$2.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, productOfferId);
                _context.next = 4;
                return readJSONFile(__filename);

              case 4:
                _yield$readJSONFile = _context.sent;
                prodSpecCharValueUse = _yield$readJSONFile.prodSpecCharValueUse;
                productSpecification = _yield$readJSONFile.productSpecification;
                productOfferingTerm = _yield$readJSONFile.productOfferingTerm;
                localizedName = _yield$readJSONFile.localizedName;
                place = util$2.settings.productOffersWithPlace.includes(getLocaleValue(localizedName)) ? generatePlace() : null;
                prodSpecCharValueUse.forEach(function (_ref2) {
                  var name = _ref2.name,
                      characteristicValue = _ref2.characteristicValue,
                      valueType = _ref2.valueType;
                  characteristic.push({
                    name: name,
                    value: characteristicValue.length ? characteristicValue[_this.generateRandomNumber(0, characteristicValue.length - 1)].value : _this.generateValue(valueType)
                  });
                });
                return _context.abrupt("return", {
                  characteristic: characteristic,
                  productSpecification: productSpecification,
                  productOfferingTerm: productOfferingTerm,
                  place: place
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "generatePlace", function () {
      return [{
        "role": "installation",
        "name": "installation",
        "id": "{{installation}}"
      }];
    });

    _defineProperty(this, "selectValueFromProductSpecCharValues", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(productSpecId, characteristic, onNetIndicator) {
        var __filename, productSpec, addedCharacteristics;

        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                __filename = util$2.generateJSONFileLocation(PRODUCT_SPEC_FOLDER, productSpecId);
                _context2.next = 3;
                return readJSONFile(__filename);

              case 3:
                productSpec = _context2.sent;
                addedCharacteristics = characteristic.map(function (_ref4) {
                  var name = _ref4.name;
                  return name;
                });
                productSpec.productSpecCharacteristic.filter(function (_ref5) {
                  var name = _ref5.name;
                  return !addedCharacteristics.includes(name);
                }).forEach(function (_ref6) {
                  var name = _ref6.name,
                      valueType = _ref6.valueType,
                      productSpecCharacteristicValue = _ref6.productSpecCharacteristicValue;
                  if (name === "ipAddress") characteristic.push({
                    name: name,
                    value: "10.10.10.10"
                  });else if (name === "onNetIndicator" && productSpecCharacteristicValue.length) {
                    characteristic.push({
                      name: name,
                      value: productSpecCharacteristicValue[onNetIndicator].value
                    });
                  } else characteristic.push({
                    name: name,
                    value: productSpecCharacteristicValue.length ? productSpecCharacteristicValue[_this.generateRandomNumber(0, productSpecCharacteristicValue.length - 1)].value : _this.generateValue(valueType)
                  });
                });
                return _context2.abrupt("return", characteristic);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "selectProductsFromOfferGroup", function (productOfferingsInGroup, min, max, defaultValue) {
      var cardinality = {
        min: min,
        max: max,
        "default": defaultValue
      };

      var quantity = _this.generateQuantity(cardinality);

      var currentOffers = productOfferingsInGroup.filter(function (productOffering) {
        return !productOffering.expiredForSales;
      });
      var selectedOffers = [];

      for (var i = 0; i < quantity; i++) {
        var selectedIndex = _this.generateRandomNumber(0, currentOffers.length - 1);

        selectedOffers.push(currentOffers[selectedIndex]);
      }

      return selectedOffers;
    });

    _defineProperty(this, "convertOfferGroupToProductOffering", function (offerGroup) {
      var selectedOffers = offerGroup.flat();

      var uniqueOffers = _toConsumableArray(new Set(selectedOffers)).map(function (uniqueOffer) {
        var count = selectedOffers.filter(function (selectedOffer) {
          return selectedOffer.id === uniqueOffer.id;
        }).length;
        return {
          bundledProdOfferOption: {
            defaultRelOfferNumber: count,
            numberRelOfferLowerLimit: count,
            numberRelOfferUpperLimit: count
          },
          expiredForSales: false,
          id: uniqueOffer.id,
          groupOptionId: uniqueOffer.groupOptionId
        };
      });

      return uniqueOffers;
    });

    _defineProperty(this, "isLastMileOrAdditionalEquipment", function (offer) {
      return offer.name[0].value !== "Select Last Mile Equipment" && offer.name[0].value !== "Select Additional Equipment";
    });

    _defineProperty(this, "generateOfferGroupOrder", function (offerGroup) {
      var offers = util$2.settings.offNet3rdPartyProvider ? offerGroup.filter(isLastMileOrAdditionalEquipment) : offerGroup;
      return Promise.all(offers.map( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(productOffer) {
          var bundledGroupPolicy, groupOptionId, numberRelOfferLowerLimit, numberRelOfferUpperLimit, __filename, offerGroup, selectedOrders;

          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  bundledGroupPolicy = productOffer.bundledGroupPolicy, groupOptionId = productOffer.groupOptionId, numberRelOfferLowerLimit = productOffer.numberRelOfferLowerLimit, numberRelOfferUpperLimit = productOffer.numberRelOfferUpperLimit;
                  __filename = util$2.generateJSONFileLocation(PRODUCT_OFFERING_GROUP_FOLDER, productOffer.bundledGroupPolicy.id, util$2.settings.fdLocation);
                  _context3.next = 4;
                  return readJSONFile(__filename);

                case 4:
                  offerGroup = _context3.sent;
                  selectedOrders = _this.selectProductsFromOfferGroup(offerGroup.productOfferingsInGroup, numberRelOfferLowerLimit, numberRelOfferUpperLimit, bundledGroupPolicy.defaultRelOfferNumber);
                  selectedOrders.forEach(function (selectedOrder) {
                    return selectedOrder.groupOptionId = groupOptionId;
                  });
                  return _context3.abrupt("return", selectedOrders);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5) {
          return _ref7.apply(this, arguments);
        };
      }())).then(_this.convertOfferGroupToProductOffering);
    });

    _defineProperty(this, "addItemTerm", function (productOfferingTerm) {
      var index = _this.generateRandomNumber(0, productOfferingTerm.length - 1);

      var selectedTerm = productOfferingTerm[index];
      return {
        duration: selectedTerm.duration,
        policyId: selectedTerm.policy.id,
        "@type": selectedTerm.type,
        name: selectedTerm.name
      };
    });

    _defineProperty(this, "createProductDetails", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(productOfferId, onNetIndicator) {
        var _yield$_this$selectVa, characteristic, productSpecification, productOfferingTerm, place, itemTerm, product;

        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.selectValueFromProductOfferDefinedProductSpecCharValues(productOfferId);

              case 2:
                _yield$_this$selectVa = _context4.sent;
                characteristic = _yield$_this$selectVa.characteristic;
                productSpecification = _yield$_this$selectVa.productSpecification;
                productOfferingTerm = _yield$_this$selectVa.productOfferingTerm;
                place = _yield$_this$selectVa.place;
                _context4.next = 9;
                return _this.selectValueFromProductSpecCharValues(productSpecification.id, characteristic, onNetIndicator);

              case 9:
                itemTerm = [];

                if (productOfferingTerm.length > 0) {
                  itemTerm.push(_this.addItemTerm(productOfferingTerm));
                }

                product = {
                  productSpecification: productSpecification,
                  characteristic: characteristic,
                  place: place
                };
                if (!place) delete product.place;
                return _context4.abrupt("return", {
                  product: product,
                  itemTerm: itemTerm
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "selectOnNetIndicator", function (is3rdParty) {
      return is3rdParty ? 1 : 0;
    });

    _defineProperty(this, "addGroupOptionId", function (orderItem, groupOptionId) {
      return orderItem.productOfferingGroupOption = {
        groupOptionId: groupOptionId
      };
    });

    _defineProperty(this, "createOrderItems", function (productOfferings, onNetIndicator) {
      return Promise.all(productOfferings.map( /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(_ref9, index) {
          var id, bundledProdOfferOption, groupOptionId, cardinality, orderItem, productDetails;
          return regenerator.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  id = _ref9.id, bundledProdOfferOption = _ref9.bundledProdOfferOption, groupOptionId = _ref9.groupOptionId;
                  cardinality = {
                    min: bundledProdOfferOption.numberRelOfferLowerLimit,
                    max: bundledProdOfferOption.numberRelOfferUpperLimit,
                    "default": bundledProdOfferOption.defaultRelOfferNumber
                  };
                  orderItem = _this.createBaseOrderItem(id, cardinality);

                  if (orderItem) {
                    _context5.next = 5;
                    break;
                  }

                  return _context5.abrupt("return");

                case 5:
                  _this.addExternalIdentifierField(orderItem, SIMPLE_PRODUCT_TYPE, index + 1);

                  if (groupOptionId) _this.addGroupOptionId(orderItem, groupOptionId);
                  _context5.next = 9;
                  return _this.createProductDetails(id, onNetIndicator);

                case 9:
                  productDetails = _context5.sent;
                  orderItem.product = productDetails.product;
                  if (productDetails.itemTerm.length > 0) orderItem.itemTerm = productDetails.itemTerm;
                  if (orderItem.product.productSpecification.id === "a0bba909-01a0-4ab7-87d1-bdfe3e6329bd") _this.addNextActionField(orderItem);
                  return _context5.abrupt("return", orderItem);

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x8, _x9) {
          return _ref10.apply(this, arguments);
        };
      }())).then(function (orderItems) {
        return orderItems.filter(function (orderItem) {
          return orderItem;
        });
      });
    });

    _defineProperty(this, "addNextActionField", function (orderItem) {
      return orderItem.nextAction = [{
        "durationPolicy": {
          "duration": {
            "amount": 2,
            "units": "Months"
          },
          "startDatePolicy": "activationDate"
        },
        "action": "terminate",
        "nextActionType": "customerDefined",
        "extensions": {
          "requestType": "Future"
        }
      }];
    });

    _defineProperty(this, "generateRandomNumber", function (min, max) {
      return Math.floor(Math.random() * max) + min;
    });

    _defineProperty(this, "generateQuantity", function (cardinality) {
      var quantity = 1;
      if (!cardinality) return quantity;

      if (cardinality && util$2.settings.allowRandomQty) {
        var min = INCLUDE_ALL_SPO ? 1 : cardinality.min || cardinality["default"];
        quantity = _this.generateRandomNumber(min, cardinality.max);
      } else if (cardinality && !util$2.settings.allowRandomQty) {
        var _min = util$2.settings.includeAllSpo ? 1 : cardinality.min || cardinality["default"];

        quantity = _min;
      }

      return quantity + "";
    });

    _defineProperty(this, "createBaseOrderItem", function (productOfferingId, cardinality) {
      var quantity = _this.generateQuantity(cardinality);

      if (quantity == 0) return false;
      return {
        extensions: {
          reservationId: "123" //leave as is

        },
        quantity: quantity,
        productOffering: {
          id: productOfferingId
        },
        action: "add",
        modifyReason: [{
          name: "CREQ",
          action: "add"
        }]
      };
    });
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  /* TODO:
       Issues:
      
      1. When the item is serialized, the quantity value must be equal to one
          - how to identify serialized item? --> from PST
      workaround: "ALLOW_RANDOM_QTY": false
   */

  var util$1, build;
  var Main = /*#__PURE__*/_createClass(function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    _defineProperty(this, "findPrice", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(args) {
        var spoPrice, priceCharacteristic, paymentTiming, prorationMethod, rc;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                spoPrice = args.spoPrice;
                _context.next = 3;
                return Promise.all(spoPrice.map(function (price) {
                  var __filename = util$1.generateJSONFileLocation(PRODUCT_PRICE_FOLDER, price.id);

                  return readJSONFile(__filename).then(function (_ref2) {
                    var priceType = _ref2.priceType,
                        priceCharacteristic = _ref2.priceCharacteristic;

                    if (priceType === "RC") {
                      var _paymentTiming = priceCharacteristic.find(function (result) {
                        return result.name === "Payment timing";
                      });

                      var _prorationMethod = priceCharacteristic.find(function (result) {
                        return result.name === "Proration Method";
                      });

                      return {
                        rc: {
                          timing: _paymentTiming ? _paymentTiming.characteristicValue[0].value : "NO_PAYMENT_TIMING",
                          proration: _prorationMethod ? _prorationMethod.characteristicValue[0].value : "NO_PRORATION_METHOD"
                        }
                      };
                    } else return {
                      oc: "OC"
                    };
                  });
                }));

              case 3:
                priceCharacteristic = _context.sent;
                paymentTiming = "";
                prorationMethod = "";
                rc = priceCharacteristic.find(function (result) {
                  return result.rc;
                });

                if (rc) {
                  paymentTiming = rc.rc.timing;
                  prorationMethod = rc.rc.proration;
                } else {
                  paymentTiming = "NO";
                  prorationMethod = "RC";
                }

                return _context.abrupt("return", _objectSpread$1(_objectSpread$1({}, args), {}, {
                  timing: paymentTiming,
                  proration: prorationMethod
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "findMainSpoPrice", function (args) {
      var mainSpoId = args.mainSpoId;

      var __filename = util$1.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, mainSpoId);

      return readJSONFile(__filename).then(function (_ref3) {
        var productOfferingPrice = _ref3.productOfferingPrice;
        return _objectSpread$1(_objectSpread$1({}, args), {}, {
          spoPrice: productOfferingPrice
        });
      });
    });

    _defineProperty(this, "buildPayload", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(bundledProduct) {
        var payload, mainOrder, onNetIndicator, offerGroupOrders, orderItems, mainSpoId;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (bundledProduct.isBundle) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("Not a bundle");

              case 2:
                payload = build.createBasicPayload();
                mainOrder = build.createMainOrder(bundledProduct.id);
                onNetIndicator = build.selectOnNetIndicator(util$1.settings.offNet3rdPartyProvider);
                _context2.next = 7;
                return build.generateOfferGroupOrder(bundledProduct.bundledProdOfferGroupOption, util$1.settings.fdLocation);

              case 7:
                offerGroupOrders = _context2.sent;
                _context2.next = 10;
                return build.createOrderItems([].concat(_toConsumableArray(bundledProduct.bundledProductOffering), _toConsumableArray(offerGroupOrders)), onNetIndicator);

              case 10:
                orderItems = _context2.sent;
                mainOrder.orderItem = orderItems;
                payload.orderItem.push(mainOrder);
                mainSpoId = getMainSpo(bundledProduct.bundledProductOffering);
                return _context2.abrupt("return", {
                  name: getLocaleValue(bundledProduct.localizedName).replace(/[^\w\s]/, ' '),
                  currency: getCurrency(bundledProduct.currency),
                  mainSpoId: mainSpoId,
                  payload: payload
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getGeneratedPayloadList", function () {
      return util$1.settings.bpoIds.map(function (id) {
        if (id.indexOf("@") > -1) id = id.split("@")[1];

        var __filename = util$1.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, id, util$1.settings.fdLocation);

        return readJSONFile(__filename).then(_this.buildPayload).then(_this.findMainSpoPrice).then(_this.findPrice).then(util$1.writeToJSONFile)["catch"](function (error) {
          return error;
        });
      });
    });

    _defineProperty(this, "generate", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              util$1 = new Util();
              build = new Build();
              _context3.next = 4;
              return util$1.getSettings().then(function (setting) {
                return Promise.all(_this.getGeneratedPayloadList()).then(function (errors) {
                  var errorJSON = {};
                  var errorCount = errors.filter(function (error) {
                    return error.code;
                  }).length;
                  var report = {
                    generatedCount: errors.length - errorCount
                  };

                  if (errorCount > 0) {
                    report.hasError = true;
                    errors.forEach(function (error, i) {
                      if (error) {
                        console.log(error);
                        errorJSON[setting.bpoIds[i]] = error.message;
                      }
                    });
                    writeJSONFile("".concat(util$1.settings.outputFolder, "/error-").concat(Date.now(), ".json"), errorJSON);
                  }

                  return report;
                });
              });

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });

  var _templateObject$2;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  var _data = new WeakMap();

  var main = new Main();
  var util = new Util();

  var _saveSettings = function _saveSettings(data) {
    var settingsData = objectMap(data, function (prop) {
      return prop.value;
    });
    writeJSONFile("./settings.json", settingsData).then(function (data) {
      _showToast("Settings saved");
    });
  };

  var _showToast = function _showToast(text) {
    Toastify({
      text: text,
      className: "info",
      style: {
        background: "#00c4a7"
      }
    }).showToast();
  };

  var Home = {
    includes: {
      Textfield: Textfield,
      Tag: Tag,
      File: File,
      Checkbox: Checkbox
    },

    get data() {
      return _data.get(this) || {};
    },

    set data(data) {
      _data.set(this, data);

      this.render();
    },

    onconnected: function onconnected() {
      var _this = this;

      util.getSettings().then(function (setting) {
        _this.data = {
          fdLocation: {
            label: "FD Location",
            value: setting.fdLocation,
            handleClick: function handleClick() {
              return _this.onFdLocClick();
            }
          },
          bpoIds: {
            label: "BPO IDs",
            value: setting.bpoIds,
            handleInput: function handleInput(e) {
              return _this.onBpoIdInput(e);
            }
          },
          outputFolder: {
            label: "Output Folder",
            value: setting.outputFolder,
            handleClick: function handleClick() {
              return _this.onOutputFolderClick();
            }
          },
          prettify: {
            label: "Prettify",
            value: setting.prettify,
            handleChange: function handleChange(e) {
              return _this.onPrettifyChange(e);
            }
          },
          allowRandomQty: {
            label: "Allow Random Qty",
            value: setting.allowRandomQty,
            handleChange: function handleChange(e) {
              return _this.onAllowRandomQtyChange(e);
            }
          },
          includeAllSpo: {
            label: "Include All SPO",
            value: setting.includeAllSpo,
            handleChange: function handleChange(e) {
              return _this.onIncludeAllSpoChange(e);
            }
          },
          offNet3rdPartyProvider: {
            label: "Off Net 3rd Party Provider",
            value: setting.offNet3rdPartyProvider,
            handleChange: function handleChange(e) {
              return _this.onOffNet3rdPartyProviderChange(e);
            }
          },
          productOffersWithPlace: {
            label: "Product Offers with Place",
            value: setting.productOffersWithPlace,
            handleChange: function handleChange(e) {
              return _this.onProductOffersWithPlaceChange(e);
            }
          }
        };
      });
    },
    onFdLocClick: function onFdLocClick() {
      var _this2 = this;

      Neutralino.os.showFolderDialog('Select Directory').then(function (directory) {
        if (directory !== "") {
          _this2.data = _objectSpread(_objectSpread({}, _this2.data), {}, {
            fdLocation: _objectSpread(_objectSpread({}, _this2.data.fdLocation), {}, {
              value: directory
            })
          });

          _saveSettings(_this2.data);
        }
      });
    },
    onBpoIdInput: function onBpoIdInput(e) {
      var _this3 = this;

      var tagify = e.detail.tagify;
      var value = e.detail.value;
      if (!(value.indexOf("\\") > -1) || value === "\\") return;
      value = value.replace("\\", "");
      tagify.whitelist = null;
      var controller;
      controller && controller.abort();
      controller = new AbortController();
      tagify.loading(true).dropdown.hide();
      var dir = "".concat(this.data.fdLocation.value, "\\").concat(PRODUCT_OFFERING_FOLDER);
      Neutralino.filesystem.readDirectory(dir).then(function (entries) {
        entries.splice(0, 2); // remove ./ & ../

        var bpoIds = entries.map(function (entry) {
          var jsonPath = "".concat(_this3.data.fdLocation.value, "\\").concat(PRODUCT_OFFERING_FOLDER, "\\").concat(entry.entry);
          return readJSONFile(jsonPath);
        });
        return Promise.all(bpoIds).then(function (offers) {
          var tagList = [];
          offers.forEach(function (offer) {
            var localizedName = offer.localizedName;

            if (offer.isBundle && localizedName[0].value.toLowerCase().indexOf(value.toLowerCase()) > -1) {
              tagList.push(localizedName[0].value + "@" + offer.id);
            }
          });
          return tagList;
        });
      }).then(function (tagList) {
        tagify.whitelist = tagList;
        tagify.loading(false).dropdown.show(value);
      });
    },
    onBpoIdPaste: function onBpoIdPaste(data) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        data.tagify.loading(true);
        var dir = "".concat(_this4.data.fdLocation.value, "\\").concat(PRODUCT_OFFERING_FOLDER);
        util.readJSONFile("".concat(dir, "\\").concat(data.pastedText, ".json")).then(function (offer) {
          if (offer.isBundle) {
            data.tagify.whitelist = [offer.id];
            resolve();
          } else {
            _showToast("BPO with id: ".concat(data.pastedText, " not found"));

            reject();
          }
        })["catch"](function (error) {
          _showToast("BPO with id: ".concat(data.pastedText, " not found"));

          reject();
        });
        data.tagify.loading(false);
      });
    },
    onBpoIdChange: function onBpoIdChange(e) {
      var tagifyValue = e.detail.value.split(",");

      if (diff(tagifyValue.length, this.data.bpoIds.value.length) === 1) {
        this.data.bpoIds = _objectSpread(_objectSpread({}, this.bpoIds), {}, {
          value: tagifyValue
        });

        _saveSettings(this.data);
      }
    },
    onOutputFolderClick: function onOutputFolderClick() {
      var _this5 = this;

      Neutralino.os.showFolderDialog('Select Directory').then(function (directory) {
        if (directory !== "") {
          _this5.data = _objectSpread(_objectSpread({}, _this5.data), {}, {
            outputFolder: _objectSpread(_objectSpread({}, _this5.data.outputFolder), {}, {
              value: directory
            })
          });

          _saveSettings(_this5.data);
        }
      });
    },
    onPrettifyChange: function onPrettifyChange(e) {
      this.data.prettify = _objectSpread(_objectSpread({}, this.data.prettify), {}, {
        value: e.target.checked
      });

      _saveSettings(this.data);
    },
    onAllowRandomQtyChange: function onAllowRandomQtyChange(e) {
      this.data.allowRandomQty = _objectSpread(_objectSpread({}, this.data.allowRandomQty), {}, {
        value: e.target.checked
      });

      _saveSettings(this.data);
    },
    onIncludeAllSpoChange: function onIncludeAllSpoChange(e) {
      this.data.includeAllSpo = _objectSpread(_objectSpread({}, this.data.includeAllSpo), {}, {
        value: e.target.checked
      });

      _saveSettings(this.data);
    },
    onOffNet3rdPartyProviderChange: function onOffNet3rdPartyProviderChange(e) {
      this.data.offNet3rdPartyProvider = _objectSpread(_objectSpread({}, this.data.offNet3rdPartyProvider), {}, {
        value: e.target.checked
      });

      _saveSettings(this.data);
    },
    onProductOffersWithPlaceChange: function onProductOffersWithPlaceChange(e) {
      this.data.productOffersWithPlace = _objectSpread(_objectSpread({}, this.data.productOffersWithPlace.toString()), {}, {
        value: e.target.value.split(",")
      });

      _saveSettings(this.data);
    },
    onGenerateClick: function onGenerateClick(e) {
      e.target.setAttribute("class", "button is-primary is-loading");
      main.generate().then(function (report) {
        _showToast("Sucessfully generated ".concat(report.generatedCount, " payloads ").concat(report.hasError ? ". see logs for errors." : ""));

        e.target.setAttribute("class", "button is-primary");
      });
    },
    render: function render() {
      var _this6 = this;

      this.html(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n    <div class=\"container\">\n      <div class=\"content\">\n          <h3>Payload Generator</h3>\n          <div class=\"field\">\n            <Tag data=\"", "\"\n            />\n          </div>\n          <div class=\"field\">\n            <File data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <File data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <Checkbox data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <Checkbox data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <Checkbox data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <Checkbox data=\"", "\"/>\n          </div>\n          <div class=\"field\">\n            <Textfield data=\"", "\"/>\n          </div>\n          <button class=\"button is-primary\" onclick=\"", "\">Generate</button>\n      </div>\n    </div>\n    "])), _objectSpread(_objectSpread({}, this.data.bpoIds), {}, {
        handlePaste: function handlePaste(clipboardEvent, data) {
          return _this6.onBpoIdPaste(data);
        },
        handleChange: function handleChange(e) {
          return _this6.onBpoIdChange(e);
        }
      }), this.data.fdLocation, this.data.outputFolder, this.data.prettify, this.data.allowRandomQty, this.data.includeAllSpo, this.data.offNet3rdPartyProvider, this.data.productOffersWithPlace, function (e) {
        return _this6.onGenerateClick(e);
      });
    }
  };
  define('Home', Home);

  var _templateObject$1;
  var Editor = {
    render: function render() {
      this.html(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      <div class=\"container\">\n        <div class=\"content\">\n            <h3>Payload Editor</h3>\n            <p>\n              Coming soon!\n            </p>\n        </div>\n      </div>\n      "])));
    }
  };
  define('Editor', Editor);

  var _templateObject, _templateObject2;
  Neutralino.init();
  Neutralino.events.on("windowClose", function () {
    return Neutralino.app.exit();
  });
  document.addEventListener('contextmenu', function (event) {
    return event.preventDefault();
  });
  var App = {
    includes: {
      Menu: Menu,
      Footer: Footer
    },
    onclick: function onclick(e) {
      if (e.target.id) this.main.current.setAttribute("active-page", e.target.id);
    },
    render: function render() {
      this.html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <div class=\"columns\">\n        <div class=\"column is-one-fifth is-gapless\">\n          <Menu/>\n        </div>\n        <div class=\"column is-gapless\">\n          <section class=\"section\">\n            <router-component>\n                <editor-heresy path=\"editor\"></editor-heresy>\n                <home-heresy path=\".*\"></home-heresy>\n            </router-component>\n          </section>\n        </div>\n    </div>\n    <Footer/>\n    "])));
    }
  };
  define('App', App);
  render(document.body, html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<App id=\"app\"/>"]))));

})();
