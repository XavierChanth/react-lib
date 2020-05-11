'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var inheritsLoose = _inheritsLoose;

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  return tag;
}
var StyleSheet =
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);
      var before;
      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }
      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
        sheet.insertRule(rule,
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet;
}();

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var delimiter = '/*|*/';
var needle = delimiter + '}';
function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}
var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              Sheet.current.insert(content + ';');
              return '';
            }
          case 108:
            {
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }
        break;
      }
    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    case 3:
      {
        switch (ns) {
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }
          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }
    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 &&
  content.charCodeAt(0) === 108 &&
  content.charCodeAt(2) === 98
  ) {
      return '';
    }
};
var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  var getCache = weakMemoize(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }
    if (prefix === false) {
      return prefixFalseCache;
    }
    return getCache(prefix);
  };
});
var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;
  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }
  var stylis = new stylis_min(stylisOptions);
  if (process.env.NODE_ENV !== 'production') {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }
  var inserted = {};
  var container;
  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key);
      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });
      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }
  var _insert;
  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;
      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }
      stylis(selector, serialized.styles);
      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;
    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins);
      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  if (process.env.NODE_ENV !== 'production') {
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;
              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }
              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }
            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);
            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);
                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }
            break;
          }
      }
    });
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  (isStringTag === false ||
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

function murmur2(str) {
  var h = 0;
  var k,
      i = 0,
      len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    k >>> 24;
    h =
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  h ^= h >>> 13;
  h =
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};
  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var shouldWarnAboutInterpolatingClassNameFromCss = true;
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }
  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;
if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
}
var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' +
    match[1];
  }
  var name = murmur2(styles) + identifierName;
  if (process.env.NODE_ENV !== 'production') {
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}

var isBrowser$2 = typeof document !== 'undefined';
var EmotionCacheContext = React.createContext(
typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = React.createContext({});
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return React.createElement(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  };
  return React.forwardRef(render);
};
if (!isBrowser$2) {
  var BasicProvider =
  function (_React$Component) {
    inheritsLoose(BasicProvider, _React$Component);
    function BasicProvider(props, context, updater) {
      var _this;
      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: createCache()
      };
      return _this;
    }
    var _proto = BasicProvider.prototype;
    _proto.render = function render() {
      return React.createElement(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };
    return BasicProvider;
  }(React.Component);
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return React.createElement(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return React.createElement(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme);
  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles);
  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }
  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = React.createElement(type, newProps);
  if (!isBrowser$2 && rules !== undefined) {
    var _ref;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }
  return ele;
};
var Emotion =
withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return React.createElement(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }
  return render(cache, props, null, ref);
});
if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}
var jsx = function jsx(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty.call(props, 'css')) {
    return React.createElement.apply(undefined, args);
  }
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' &&
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (process.env.NODE_ENV !== 'production') {
    var error = new Error();
    if (error.stack) {
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);
      if (!match) {
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }
      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }
  createElementArgArray[1] = newProps;
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return React.createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global =
withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && (
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props.styles;
  if (typeof styles === 'function') {
    return React.createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return React.createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }
  var serialized = serializeStyles([styles]);
  return React.createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});
var InnerGlobal =
function (_React$Component) {
  inheritsLoose(InnerGlobal, _React$Component);
  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }
  var _proto = InnerGlobal.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    });
    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");
    if (node !== null) {
      this.sheet.tags.push(node);
    }
    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }
    this.insertStyles();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };
  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }
    if (this.sheet.tags.length) {
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }
    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };
  _proto.render = function render() {
    if (!isBrowser$2) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;
      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }
      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, shouldCache);
      if (!shouldCache) {
        var _ref;
        return React.createElement("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
      }
    }
    return null;
  };
  return InnerGlobal;
}(React.Component);
var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var ClassNames = withEmotionCache(function (props, context) {
  return React.createElement(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;
    var css = function css() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('css can only be used during render');
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, context.registered);
      if (isBrowser$2) {
        insertStyles(context, serialized, false);
      } else {
        var res = insertStyles(context, serialized, false);
        if (res !== undefined) {
          rules += res;
        }
      }
      if (!isBrowser$2) {
        serializedHashes += " " + serialized.name;
      }
      return context.key + "-" + serialized.name;
    };
    var cx = function cx() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('cx can only be used during render');
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(context.registered, css, classnames(args));
    };
    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    if (!isBrowser$2 && rules.length !== 0) {
      var _ref;
      return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }
    return ele;
  });
});

var darkTheme = {
  background: '#151525',
  pane: '#505050',
  themes: {
    blended: {
      text: '#ffffff',
      element: '#151525'
    },
    white: {
      text: '#151525',
      element: '#eeeeee'
    },
    "default": {
      text: '#ffffff',
      element: '#2B50AA'
    },
    success: {
      text: '#ffffff',
      element: '#1B998B'
    },
    info: {
      text: '#ffffff',
      element: '#F0544F'
    },
    warning: {
      text: '#ffffff',
      element: '#B9B535'
    },
    danger: {
      text: '#ffffff',
      element: '#EA324F'
    }
  },
  font: ''
};
var defaultJssOverride = {
  body: {
    backgroundColor: darkTheme.background
  }
};
var ThemeContext$1 = React__default.createContext({});
var DarkThemeProvider = function DarkThemeProvider(_ref) {
  var children = _ref.children,
      jss = _ref.jss;
  return jsx(ThemeContext$1.Provider, {
    value: darkTheme
  }, jssOverride(jss), children);
};
var CustomThemeProvider = function CustomThemeProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme,
      jss = _ref2.jss;
  return jsx(ThemeContext$1.Provider, {
    value: theme
  }, jssOverride(jss), children);
};
var isColor = function isColor(string) {
  return darkTheme.themes.hasOwnProperty(string);
};
var jssOverride = function jssOverride() {
  var jss = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultJssOverride;
  return jsx(Global, {
    styles: css(jss, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FeUIiLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHbG9iYWwsIGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcclxuXHJcbi8vIGRlZmF1bHQgdGhlbWVzXHJcbmNvbnN0IGRhcmtUaGVtZSA9IHtcclxuICBiYWNrZ3JvdW5kOiAnIzE1MTUyNScsXHJcbiAgcGFuZTogJyM1MDUwNTAnLFxyXG4gIHRoZW1lczoge1xyXG4gICAgYmxlbmRlZDoge1xyXG4gICAgICB0ZXh0OiAnI2ZmZmZmZicsXHJcbiAgICAgIGVsZW1lbnQ6ICcjMTUxNTI1J1xyXG4gICAgfSxcclxuICAgIHdoaXRlOiB7XHJcbiAgICAgIHRleHQ6ICcjMTUxNTI1JyxcclxuICAgICAgZWxlbWVudDogJyNlZWVlZWUnXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0ZXh0OiAnI2ZmZmZmZicsXHJcbiAgICAgIGVsZW1lbnQ6ICcjMkI1MEFBJ1xyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgdGV4dDogJyNmZmZmZmYnLFxyXG4gICAgICBlbGVtZW50OiAnIzFCOTk4QidcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHRleHQ6ICcjZmZmZmZmJyxcclxuICAgICAgZWxlbWVudDogJyNGMDU0NEYnXHJcbiAgICB9LFxyXG4gICAgd2FybmluZzoge1xyXG4gICAgICB0ZXh0OiAnI2ZmZmZmZicsXHJcbiAgICAgIGVsZW1lbnQ6ICcjQjlCNTM1J1xyXG4gICAgfSxcclxuICAgIGRhbmdlcjoge1xyXG4gICAgICB0ZXh0OiAnI2ZmZmZmZicsXHJcbiAgICAgIGVsZW1lbnQ6ICcjRUEzMjRGJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9udDogJydcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEpzc092ZXJyaWRlID0ge1xyXG4gIGJvZHk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZGFya1RoZW1lLmJhY2tncm91bmRcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgRGFya1RoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwganNzIH0pID0+IHtcclxuICByZXR1cm4gPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGFya1RoZW1lfT5cclxuICAgIHtqc3NPdmVycmlkZShqc3MpfVxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5jb25zdCBDdXN0b21UaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIHRoZW1lLCBqc3MgfSkgPT4ge1xyXG4gIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZX0+XHJcbiAgICB7anNzT3ZlcnJpZGUoanNzKX1cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5cclxuY29uc3QgaXNDb2xvciA9IChzdHJpbmcpID0+IHtcclxuICByZXR1cm4gZGFya1RoZW1lLnRoZW1lcy5oYXNPd25Qcm9wZXJ0eShzdHJpbmcpO1xyXG59XHJcblxyXG5jb25zdCBqc3NPdmVycmlkZSA9IChqc3MgPSBkZWZhdWx0SnNzT3ZlcnJpZGUpID0+IHtcclxuICByZXR1cm4gPEdsb2JhbCBzdHlsZXM9e2Nzcyhqc3MpfSAvPlxyXG59XHJcblxyXG5leHBvcnQgeyBDdXN0b21UaGVtZVByb3ZpZGVyLCBEYXJrVGhlbWVQcm92aWRlciwgaXNDb2xvciB9XHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dFxyXG4iXX0= */")
  });
};

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      args = _objectWithoutProperties(_ref, ["children", "onClick"]);
  var theme = React.useContext(ThemeContext$1);
  var colorTheme;
  var borderRadius = "2px";
  for (var arg in args) {
    if (isColor(arg)) {
      colorTheme = theme.themes[arg];
    } else if (['left', 'right', 'middle'].includes(arg)) {
      console.log(children, arg);
      switch (arg) {
        case 'middle':
          borderRadius = "0";
          break;
        case 'left':
          borderRadius = "2px 0px 0px 2px";
          break;
        case 'right':
          borderRadius = "0px 2px 2px 0px";
          break;
      }
    }
  }
  if (!colorTheme) colorTheme = theme.themes["default"];
  var styles = css({
    color: colorTheme.text,
    backgroundColor: colorTheme.element,
    display: "inline-block",
    border: "none",
    borderRadius: borderRadius,
    '&:hover': {
      filter: "brightness(1.2)"
    }
  }, ";label:styles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2lCIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCBUaGVtZUNvbnRleHQsIHsgaXNDb2xvciB9IGZyb20gJy4uL3RoZW1lJ1xyXG4vKlxyXG4gIEJ1dHRvblxyXG4gIHByb3BzOlxyXG4gICAgY29sb3JzOiAoYm9vbGVhbiB0YWdzKVxyXG4gICAgICBwcmltYXJ5XHJcbiAgICAgIHNlY29uZGFyeVxyXG4gICAgICBpbmZvXHJcbiAgICAgIGRhbmdlclxyXG4gICAgcG9zaXRpb25hbDogKGNvbm5lY3RpbmcgYnV0dG9ucyBpbnRvIGEgYnV0dG9uIGJhcilcclxuICAgICAgbGVmdFxyXG4gICAgICBtaWRkbGVcclxuICAgICAgcmlnaHRcclxuICAgICAgKi9cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIC4uLmFyZ3MgfSkgPT4ge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcbiAgbGV0IGNvbG9yVGhlbWU7XHJcbiAgbGV0IGJvcmRlclJhZGl1cyA9IFwiMnB4XCI7XHJcbiAgZm9yIChsZXQgYXJnIGluIGFyZ3MpIHtcclxuICAgIGlmIChpc0NvbG9yKGFyZykpIHtcclxuICAgICAgY29sb3JUaGVtZSA9IHRoZW1lLnRoZW1lc1thcmddO1xyXG4gICAgfSBlbHNlIGlmIChbJ2xlZnQnLCAncmlnaHQnLCAnbWlkZGxlJ10uaW5jbHVkZXMoYXJnKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbiwgYXJnKVxyXG4gICAgICBzd2l0Y2goYXJnKSB7XHJcbiAgICAgICAgY2FzZSAnbWlkZGxlJzogYm9yZGVyUmFkaXVzID0gXCIwXCJcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOiBib3JkZXJSYWRpdXMgPSBcIjJweCAwcHggMHB4IDJweFwiXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyaWdodCc6IGJvcmRlclJhZGl1cyA9IFwiMHB4IDJweCAycHggMHB4XCJcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6YnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghY29sb3JUaGVtZSkgY29sb3JUaGVtZSA9IHRoZW1lLnRoZW1lcy5kZWZhdWx0O1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBjc3Moe1xyXG4gICAgICBjb2xvcjogY29sb3JUaGVtZS50ZXh0LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVGhlbWUuZWxlbWVudCxcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDEuMilcIlxyXG4gICAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIDxidXR0b24gY3NzPXtzdHlsZXN9IG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiJdfQ== */"));
  return jsx("button", {
    css: styles,
    onClick: onClick
  }, children);
};

var ButtonBar = function ButtonBar(_ref) {
  var children = _ref.children;
  if (children.length <= 1) return children;
  var getPosition = function getPosition(index) {
    switch (index) {
      case 0:
        return 'left';
      case children.length - 1:
        return 'right';
      default:
        return 'middle';
    }
  };
  return children.map(function (child, index) {
    var _cloneElement;
    return React.cloneElement(child, (_cloneElement = {}, _defineProperty(_cloneElement, getPosition(index), true), _defineProperty(_cloneElement, "key", index), _cloneElement));
  });
};

exports.Button = Button;
exports.ButtonBar = ButtonBar;
exports.CustomThemeProvider = CustomThemeProvider;
exports.DarkThemeProvider = DarkThemeProvider;
exports.ThemeContext = ThemeContext$1;
