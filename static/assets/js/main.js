!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = e.document
      , r = Object.getPrototypeOf
      , o = n.slice
      , s = n.concat
      , a = n.push
      , l = n.indexOf
      , u = {}
      , c = u.toString
      , f = u.hasOwnProperty
      , h = f.toString
      , d = h.call(Object)
      , p = {}
      , g = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, m = function(e) {
        return null != e && e === e.window
    }, v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var r, o, s = (n = n || i).createElement("script");
        if (s.text = e,
        t)
            for (r in v)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
    }
    var C = "3.4.1", T = function(e, t) {
        return new T.fn.init(e,t)
    }
    , E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function _(e) {
        var t = !!e && "length"in e && e.length, n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: C,
        constructor: T,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(e) {
            return this.pushStack(T.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    T.extend = T.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || g(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && s !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t],
                    o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {},
                    r = !1,
                    s[t] = T.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    T.extend({
        expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (_(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (_(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (_(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = n[Symbol.iterator]),
    T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var w = function(e) {
        var t, n, i, r, o, s, a, l, u, c, f, h, d, p, g, m, v, y, b, C = "sizzle" + 1 * new Date, T = e.document, E = 0, _ = 0, w = ec(), x = ec(), S = ec(), A = ec(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, I = [], k = I.pop, O = I.push, L = I.push, j = I.slice, P = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + R + "*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]", W = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", B = RegExp(R + "+", "g"), F = RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), U = RegExp("^" + R + "*," + R + "*"), V = RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), z = RegExp(R + "|>"), K = RegExp(W), Q = RegExp("^" + q + "$"), Y = {
            ID: RegExp("^#(" + q + ")"),
            CLASS: RegExp("^\\.(" + q + ")"),
            TAG: RegExp("^(" + q + "|[*])"),
            ATTR: RegExp("^" + M),
            PSEUDO: RegExp("^" + W),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
            bool: RegExp("^(?:" + H + ")$", "i"),
            needsContext: RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
        }, G = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /[+~]/, en = RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ei = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, er = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, eo = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, es = function() {
            h()
        }, ea = eC(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(I = j.call(T.childNodes), T.childNodes),
            I[T.childNodes.length].nodeType
        } catch (el) {
            L = {
                apply: I.length ? function(e, t) {
                    O.apply(e, j.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function eu(e, t, i, r) {
            var o, a, u, c, f, p, v, y = t && t.ownerDocument, E = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E)
                return i;
            if (!r && ((t ? t.ownerDocument || t : T) !== d && h(t),
            t = t || d,
            g)) {
                if (11 !== E && (f = ee.exec(e))) {
                    if (o = f[1]) {
                        if (9 === E) {
                            if (!(u = t.getElementById(o)))
                                return i;
                            if (u.id === o)
                                return i.push(u),
                                i
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
                            return i.push(u),
                            i
                    } else {
                        if (f[2])
                            return L.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                }
                if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === E && z.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(er, eo) : t.setAttribute("id", c = C),
                        a = (p = s(e)).length; a--; )
                            p[a] = "#" + c + " " + e8(p[a]);
                        v = p.join(","),
                        y = et.test(e) && e$(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)),
                        i
                    } catch (_) {
                        A(e, !0)
                    } finally {
                        c === C && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, i, r)
        }
        function ec() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function ef(e) {
            return e[C] = !0,
            e
        }
        function eh(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ed(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t
        }
        function ep(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n) {
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1
            }
            return e ? 1 : -1
        }
        function eg(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function em(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ev(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && ea(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ey(e) {
            return ef(function(t) {
                return t = +t,
                ef(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function e$(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = eu.support = {},
        o = eu.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML")
        }
        ,
        h = eu.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e : T;
            return s !== d && 9 === s.nodeType && s.documentElement && (p = (d = s).documentElement,
            g = !o(d),
            T !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", es, !1) : r.attachEvent && r.attachEvent("onunload", es)),
            n.attributes = eh(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = eh(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = J.test(d.getElementsByClassName),
            n.getById = eh(function(e) {
                return p.appendChild(e).id = C,
                !d.getElementsByName || !d.getElementsByName(C).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(en, ei);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(en, ei);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = J.test(d.querySelectorAll)) && (eh(function(e) {
                p.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]")
            }),
            eh(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                p.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && eh(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            m = m.length && RegExp(m.join("|")),
            v = v.length && RegExp(v.join("|")),
            b = (t = J.test(p.compareDocumentPosition)) || J.test(p.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t) {
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0
                }
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === T && b(T, e) ? -1 : t === d || t.ownerDocument === T && b(T, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (r === o)
                    return ep(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ep(s[i], a[i]) : s[i] === T ? -1 : a[i] === T ? 1 : 0
            }
            ),
            d
        }
        ,
        eu.matches = function(e, t) {
            return eu(e, null, null, t)
        }
        ,
        eu.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && h(e),
            n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (r) {
                    A(t, !0)
                }
            return 0 < eu(t, d, null, [e]).length
        }
        ,
        eu.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && h(e),
            b(e, t)
        }
        ,
        eu.attr = function(e, t) {
            (e.ownerDocument || e) !== d && h(e);
            var r = i.attrHandle[t.toLowerCase()]
              , o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        eu.escape = function(e) {
            return (e + "").replace(er, eo)
        }
        ,
        eu.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        eu.uniqueSort = function(e) {
            var t, i = [], r = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (r = i.push(o));
                for (; r--; )
                    e.splice(i[r], 1)
            }
            return c = null,
            e
        }
        ,
        r = eu.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (i = eu.selectors = {
            cacheLength: 50,
            createPseudo: ef,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(en, ei),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(en, ei),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || eu.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && eu.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(en, ei).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = w[e + " "];
                    return t || (t = RegExp("(^|" + R + ")" + e + "(" + R + "|$)"),
                    w(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }))
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = eu.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "",
                        "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (h = t; h = h[g]; )
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (b = (d = (u = (c = (f = (h = m)[C] || (h[C] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2],
                                h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop(); )
                                    if (1 === h.nodeType && ++b && h === t) {
                                        c[e] = [E, d, b];
                                        break
                                    }
                            } else if (y && (b = d = (u = (c = (f = (h = t)[C] || (h[C] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]),
                            !1 === b)
                                for (; (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && (!((a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) && ++b) || (y && ((c = (f = h[C] || (h[C] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, b]),
                                h !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && 0 <= b / i
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || eu.error("unsupported pseudo: " + e);
                    return r[C] ? r(t) : 1 < r.length ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ef(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; )
                            e[i = P(e, o[s])] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ef(function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(F, "$1"));
                    return i[C] ? ef(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ef(function(e) {
                    return function(t) {
                        return 0 < eu(e, t).length
                    }
                }),
                contains: ef(function(e) {
                    return e = e.replace(en, ei),
                    function(t) {
                        return -1 < (t.textContent || r(t)).indexOf(e)
                    }
                }),
                lang: ef(function(e) {
                    return Q.test(e || "") || eu.error("unsupported lang: " + e),
                    e = e.replace(en, ei).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === p
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ev(!1),
                disabled: ev(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Z.test(e.nodeName)
                },
                input: function(e) {
                    return X.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ey(function() {
                    return [0]
                }),
                last: ey(function(e, t) {
                    return [t - 1]
                }),
                eq: ey(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ey(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ey(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ey(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: ey(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = eg(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = em(t);
        function eb() {}
        function e8(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function eC(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , s = n && "parentNode" === o
              , a = _++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var u, c, f, h = [E, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s) {
                            if (c = (f = t[C] || (t[C] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === E && u[1] === a)
                                    return h[2] = u[2];
                                if ((c[o] = h)[2] = e(t, n, l))
                                    return !0
                            }
                        }
                return !1
            }
        }
        function eT(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function eE(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                u && t.push(a)));
            return s
        }
        function e_(e, t, n, i, r, o) {
            return i && !i[C] && (i = e_(i)),
            r && !r[C] && (r = e_(r, o)),
            ef(function(o, s, a, l) {
                var u, c, f, h = [], d = [], p = s.length, g = o || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        eu(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), m = e && (o || !t) ? eE(g, h, e, a, l) : g, v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (u = eE(v, d),
                    i(u, [], a, l),
                    c = u.length; c--; )
                        (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [],
                            c = v.length; c--; )
                                (f = v[c]) && u.push(m[c] = f);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && -1 < (u = r ? P(o, f) : h[c]) && (o[u] = !(s[u] = f))
                    }
                } else
                    v = eE(v === s ? v.splice(p, v.length) : v),
                    r ? r(null, s, v, l) : L.apply(s, v)
            })
        }
        function ew(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = eC(function(e) {
                return e === t
            }, a, !0), f = eC(function(e) {
                return -1 < P(t, e)
            }, a, !0), h = [function(e, n, i) {
                var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                return t = null,
                r
            }
            , ]; l < o; l++)
                if (n = i.relative[e[l].type])
                    h = [eC(eT(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[C]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++)
                            ;
                        return e_(1 < l && eT(h), 1 < l && e8(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < r && ew(e.slice(l, r)), r < o && ew(e = e.slice(r)), r < o && e8(e))
                    }
                    h.push(n)
                }
            return eT(h)
        }
        return eb.prototype = i.filters = i.pseudos,
        i.setFilters = new eb,
        s = eu.tokenize = function(e, t) {
            var n, r, o, s, a, l, u, c = x[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            l = [],
            u = i.preFilter; a; ) {
                for (s in (!n || (r = U.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                n = !1,
                (r = V.exec(a)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(F, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    (r = Y[s].exec(a)) && (!u[s] || (r = u[s](r))) && (n = r.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? eu.error(e) : x(e, l).slice(0)
        }
        ,
        a = eu.compile = function(e, t) {
            var n, r, o, a, l, c, f = [], p = [], m = S[e + " "];
            if (!m) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (m = ew(t[n]))[C] ? f.push(m) : p.push(m);
                (m = S(e, (r = p,
                a = 0 < (o = f).length,
                l = 0 < r.length,
                c = function(e, t, n, s, c) {
                    var f, p, m, v = 0, y = "0", b = e && [], C = [], T = u, _ = e || l && i.find.TAG("*", c), w = E += null == T ? 1 : Math.random() || .1, x = _.length;
                    for (c && (u = t === d || t || c); y !== x && null != (f = _[y]); y++) {
                        if (l && f) {
                            for (p = 0,
                            t || f.ownerDocument === d || (h(f),
                            n = !g); m = r[p++]; )
                                if (m(f, t || d, n)) {
                                    s.push(f);
                                    break
                                }
                            c && (E = w)
                        }
                        a && ((f = !m && f) && v--,
                        e && b.push(f))
                    }
                    if (v += y,
                    a && y !== v) {
                        for (p = 0; m = o[p++]; )
                            m(b, C, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--; )
                                    b[y] || C[y] || (C[y] = k.call(s));
                            C = eE(C)
                        }
                        L.apply(s, C),
                        c && !e && 0 < C.length && 1 < v + o.length && eu.uniqueSort(s)
                    }
                    return c && (E = w,
                    u = T),
                    b
                }
                ,
                a ? ef(c) : c))).selector = e
            }
            return m
        }
        ,
        l = eu.select = function(e, t, n, r) {
            var o, l, u, c, f, h = "function" == typeof e && e, d = !r && s(e = h.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(en, ei), t) || [])[0]))
                        return n;
                    h && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o],
                !i.relative[c = u.type]); )
                    if ((f = i.find[c]) && (r = f(u.matches[0].replace(en, ei), et.test(l[0].type) && e$(t.parentNode) || t))) {
                        if (l.splice(o, 1),
                        !(e = r.length && e8(l)))
                            return L.apply(n, r),
                            n;
                        break
                    }
            }
            return (h || a(e, d))(r, t, !g, n, !t || et.test(e) && e$(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = C.split("").sort(D).join("") === C,
        n.detectDuplicates = !!f,
        h(),
        n.sortDetached = eh(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        eh(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ed("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && eh(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ed("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        eh(function(e) {
            return null == e.getAttribute("disabled")
        }) || ed(H, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        eu
    }(e);
    T.find = w,
    T.expr = w.selectors,
    T.expr[":"] = T.expr.pseudos,
    T.uniqueSort = T.unique = w.uniqueSort,
    T.text = w.getText,
    T.isXMLDoc = w.isXML,
    T.contains = w.contains,
    T.escapeSelector = w.escape;
    var x = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && T(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , A = T.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function I(e, t, n) {
        return g(t) ? T.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? T.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? T.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : T.filter(t, e, n)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    T.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(T(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (T.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                T.find(e, r[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
        }
    });
    var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof T ? t[0] : t,
                T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                N.test(r[1]) && T.isPlainObject(t))
                    for (r in t)
                        g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
    }
    ).prototype = T.fn,
    k = T(i);
    var L = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && T(e);
            if (!A.test(e)) {
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(T(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            T.merge([], e.childNodes))
        }
    }, function(e, t) {
        T.fn[e] = function(n, i) {
            var r = T.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = T.filter(i, r)),
            1 < this.length && (j[e] || T.uniqueSort(r),
            L.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function q(e) {
        throw e
    }
    function M(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (o) {
            n.apply(void 0, [o])
        }
    }
    T.Callbacks = function(e) {
        e = "string" == typeof e ? (t = e,
        n = {},
        T.each(t.match(H) || [], function(e, t) {
            n[t] = !0
        }),
        n) : T.extend({}, e);
        var t, n, i, r, o, s, a = [], l = [], u = -1, c = function() {
            for (s = s || e.once,
            o = i = !0; l.length; u = -1)
                for (r = l.shift(); ++u < a.length; )
                    !1 === a[u].apply(r[0], r[1]) && e.stopOnFalse && (u = a.length,
                    r = !1);
            e.memory || (r = !1),
            i = !1,
            s && (a = r ? [] : "")
        }, f = {
            add: function() {
                return a && (r && !i && (u = a.length - 1,
                l.push(r)),
                function t(n) {
                    T.each(n, function(n, i) {
                        g(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments),
                r && !i && c()),
                this
            },
            remove: function() {
                return T.each(arguments, function(e, t) {
                    for (var n; -1 < (n = T.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < T.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = l = [],
                a = r = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = l = [],
                r || i || (a = r = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    T.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"], ]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return T.Deferred(function(t) {
                        T.each(n, function(n, i) {
                            var r = g(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, r) {
                    var o = 0;
                    function s(t, n, i, r) {
                        return function() {
                            var a = this
                              , l = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < o)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw TypeError("Thenable self-resolution");
                                    g(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? r ? u.call(e, s(o, n, R, r), s(o, n, q, r)) : (o++,
                                    u.call(e, s(o, n, R, r), s(o, n, q, r), s(o, n, R, n.notifyWith))) : (i !== R && (a = void 0,
                                    l = [e]),
                                    (r || n.resolveWith)(a, l))
                                }
                            }
                              , c = r ? u : function() {
                                try {
                                    u()
                                } catch (e) {
                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, c.stackTrace),
                                    o <= t + 1 && (i !== q && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return T.Deferred(function(e) {
                        n[0][3].add(s(0, e, g(r) ? r : R, e.notifyWith)),
                        n[1][3].add(s(0, e, g(t) ? t : R)),
                        n[2][3].add(s(0, e, g(i) ? i : q))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? T.extend(e, r) : r
                }
            }
              , o = {};
            return T.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                r[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , s = T.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = 1 < arguments.length ? o.call(arguments) : n,
                    --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || g(r[n] && r[n].then)))
                return s.then();
            for (; n--; )
                M(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    T.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var B = T.Deferred();
    function F() {
        i.removeEventListener("DOMContentLoaded", F),
        e.removeEventListener("load", F),
        T.ready()
    }
    T.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            T.readyException(e)
        }),
        this
    }
    ,
    T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || B.resolveWith(i, [T])
        }
    }),
    T.ready.then = B.then,
    "complete" !== i.readyState && ("loading" === i.readyState || i.documentElement.doScroll) ? (i.addEventListener("DOMContentLoaded", F),
    e.addEventListener("load", F)) : e.setTimeout(T.ready);
    var U = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === b(n))
            for (a in r = !0,
            n)
                U(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        g(i) || (s = !0),
        u && (s ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(T(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , V = /^-ms-/
      , z = /-([a-z])/g;
    function K(e, t) {
        return t.toUpperCase()
    }
    function Q(e) {
        return e.replace(V, "ms-").replace(z, K)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = T.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[Q(t)] = n;
            else
                for (i in t)
                    r[Q(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t)
                    for (n = (t = Array.isArray(t) ? t.map(Q) : ((t = Q(t))in i) ? [t] : t.match(H) || []).length; n--; )
                        delete i[t[n]];
                (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var X = new G
      , Z = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function et(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType) {
            if (i = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (o) {}
                Z.set(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    T.extend({
        hasData: function(e) {
            return Z.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return Z.access(e, t, n)
        },
        removeData: function(e, t) {
            Z.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }),
    T.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Z.get(o),
                1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && et(o, i = Q(i.slice(5)), r[i]);
                    X.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Z.set(this, e)
            }) : U(this, function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = et(o, e)) ? n : void 0;
                this.each(function() {
                    Z.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Z.remove(this, e)
            })
        }
    }),
    T.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = X.get(e, t),
                n && (!i || Array.isArray(n) ? i = X.access(e, t, T.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                T.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    T.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = T.queue(this, e, t);
                T._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = T.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = X.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var en = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ei = RegExp("^(?:([+-])=|)(" + en + ")([a-z%]*)$", "i")
      , er = ["Top", "Right", "Bottom", "Left"]
      , eo = i.documentElement
      , es = function(e) {
        return T.contains(e.ownerDocument, e)
    }
      , ea = {
        composed: !0
    };
    eo.getRootNode && (es = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(ea) === e.ownerDocument
    }
    );
    var el = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && es(e) && "none" === T.css(e, "display")
    }
      , eu = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    };
    function ec(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return T.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && ei.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; s--; )
                T.style(e, t, c + u),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                c /= o;
            c *= 2,
            T.style(e, t, c + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    var ef = {};
    function eh(e, t) {
        for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (u[c] = X.get(i, "display") || null,
            u[c] || (i.style.display = "")),
            "" === i.style.display && el(i) && (u[c] = (l = s = o = void 0,
            s = (r = i).ownerDocument,
            (l = ef[a = r.nodeName]) || (o = s.body.appendChild(s.createElement(a)),
            l = T.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === l && (l = "block"),
            ef[a] = l)))) : "none" !== n && (u[c] = "none",
            X.set(i, "display", n)));
        for (c = 0; c < f; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return eh(this, !0)
        },
        hide: function() {
            return eh(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                el(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ed = /^(?:checkbox|radio)$/i
      , ep = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , eg = /^$|^module$|\/(?:java|ecma)script/i
      , em = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ev(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? T.merge([e], n) : n
    }
    function ey(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    em.optgroup = em.option,
    em.tbody = em.tfoot = em.colgroup = em.caption = em.thead,
    em.th = em.td;
    var e$, eb, e8 = /<|&#?\w+;/;
    function eC(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o) {
                if ("object" === b(o))
                    T.merge(h, o.nodeType ? [o] : o);
                else if (e8.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    l = em[a = (ep.exec(o) || ["", ""])[1].toLowerCase()] || em._default,
                    s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                    c = l[0]; c--; )
                        s = s.lastChild;
                    T.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(o))
            }
        for (f.textContent = "",
        d = 0; o = h[d++]; )
            if (i && -1 < T.inArray(o, i))
                r && r.push(o);
            else if (u = es(o),
            s = ev(f.appendChild(o), "script"),
            u && ey(s),
            n)
                for (c = 0; o = s[c++]; )
                    eg.test(o.type || "") && n.push(o);
        return f
    }
    e$ = i.createDocumentFragment().appendChild(i.createElement("div")),
    (eb = i.createElement("input")).setAttribute("type", "radio"),
    eb.setAttribute("checked", "checked"),
    eb.setAttribute("name", "t"),
    e$.appendChild(eb),
    p.checkClone = e$.cloneNode(!0).cloneNode(!0).lastChild.checked,
    e$.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!e$.cloneNode(!0).lastChild.defaultValue;
    var eT = /^key/
      , eE = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , e_ = /^([^.]*)(?:\.(.+)|)/;
    function ew() {
        return !0
    }
    function ex() {
        return !1
    }
    function eS(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function eA(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                eA(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = ex;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return T().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = T.guid++)),
        e.each(function() {
            T.event.add(this, t, r, i, n)
        })
    }
    function eD(e, t, n) {
        n ? (X.set(e, t, !1),
        T.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = X.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)
                        (T.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments),
                    X.set(this, t, s),
                    i = n(this, t),
                    this[t](),
                    s !== (r = X.get(this, t)) || i ? X.set(this, t, !1) : r = {},
                    s !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r.value
                } else
                    s.length && (X.set(this, t, {
                        value: T.event.trigger(T.extend(s[0], T.Event.prototype), s.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, t) && T.event.add(e, t, ew)
    }
    T.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = X.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && T.find.matchesSelector(eo, r),
                n.guid || (n.guid = T.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(H) || [""]).length; u--; )
                    d = g = (a = e_.exec(t[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d && (f = T.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = T.event.special[d] || {},
                    c = T.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (h = l[d]) || ((h = l[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    T.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--; )
                    if (d = g = (a = e_.exec(t[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = T.event.special[d] || {},
                        h = l[d = (i ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            c = h[o],
                            !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || T.removeEvent(e, d, m.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            T.event.remove(e, d + t[u], n, i, !0);
                T.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = T.event.fix(e), l = Array(arguments.length), u = (X.get(this, "events") || {})[a.type] || [], c = T.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = T.event.handlers.call(this, a, u),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) {
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            }
            return u = this,
            l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && D(t, "input") && eD(t, "click", ew),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && D(t, "input") && eD(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return ed.test(t.type) && t.click && D(t, "input") && X.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    T.Event = function(e, t) {
        if (!(this instanceof T.Event))
            return new T.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ew : ex,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && T.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[T.expando] = !0
    }
    ,
    T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: ex,
        isPropagationStopped: ex,
        isImmediatePropagationStopped: ex,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ew,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ew,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ew,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && eT.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && eE.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp),
    T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return eD(this, e, eS),
                !1
            },
            trigger: function() {
                return eD(this, e),
                !0
            },
            delegateType: t
        }
    }),
    T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        T.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || T.contains(this, i)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    T.fn.extend({
        on: function(e, t, n, i) {
            return eA(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return eA(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ex),
            this.each(function() {
                T.event.remove(this, e, n, t)
            })
        }
    });
    var eN = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , eI = /<script|<style|<link/i
      , ek = /checked\s*(?:[^=]|=\s*.checked.)/i
      , eO = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function eL(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }
    function ej(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function eP(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function eH(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e),
            s = X.set(t, o),
            u = o.events))
                for (r in delete s.handle,
                s.events = {},
                u)
                    for (n = 0,
                    i = u[r].length; n < i; n++)
                        T.event.add(t, r, u[r][n]);
            Z.hasData(e) && (a = Z.access(e),
            l = T.extend({}, a),
            Z.set(t, l))
        }
    }
    function eR(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, u, c, f = 0, h = e.length, d = h - 1, m = t[0], v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && ek.test(m))
            return e.each(function(r) {
                var o = e.eq(r);
                v && (t[0] = m.call(this, r, o.html())),
                eR(o, t, n, i)
            });
        if (h && (o = (r = eC(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (l = (a = T.map(ev(r, "script"), ej)).length; f < h; f++)
                u = r,
                f !== d && (u = T.clone(u, !0, !0),
                l && T.merge(a, ev(u, "script"))),
                n.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument,
                T.map(a, eP),
                f = 0; f < l; f++)
                    u = a[f],
                    eg.test(u.type || "") && !X.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : y(u.textContent.replace(eO, ""), u, c))
        }
        return e
    }
    function eq(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || T.cleanData(ev(i)),
            i.parentNode && (n && es(i) && ey(ev(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(eN, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0), f = es(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (s = ev(c),
                i = 0,
                r = (o = ev(e)).length; i < r; i++)
                    a = o[i],
                    "input" === (u = (l = s[i]).nodeName.toLowerCase()) && ed.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t) {
                if (n)
                    for (o = o || ev(e),
                    s = s || ev(c),
                    i = 0,
                    r = o.length; i < r; i++)
                        eH(o[i], s[i]);
                else
                    eH(e, c)
            }
            return 0 < (s = ev(c, "script")).length && ey(s, !f && ev(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
        }
    }),
    T.fn.extend({
        detach: function(e) {
            return eq(this, e, !0)
        },
        remove: function(e) {
            return eq(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return eR(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || eL(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return eR(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eL(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return eR(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return eR(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (T.cleanData(ev(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !eI.test(e) && !em[(ep.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (T.cleanData(ev(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return eR(this, arguments, function(t) {
                var n = this.parentNode;
                0 > T.inArray(this, e) && (T.cleanData(ev(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        T.fn[e] = function(e) {
            for (var n, i = [], r = T(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                T(r[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var eM = RegExp("^(" + en + ")(?!px)[a-z%]+$", "i")
      , eW = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , eB = RegExp(er.join("|"), "i");
    function e0(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || eW(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || es(e) || (s = T.style(e, t)),
        !p.pixelBoxStyles() && eM.test(s) && eB.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function eF(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                eo.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                s = 12 === n(c.offsetWidth / 3),
                eo.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, u = i.createElement("div"), c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === c.style.backgroundClip,
        T.extend(p, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                s
            }
        }))
    }();
    var eU = ["Webkit", "Moz", "ms"]
      , e1 = i.createElement("div").style
      , eV = {};
    function ez(e) {
        return T.cssProps[e] || eV[e] || (e in e1 ? e : eV[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = eU.length; n--; )
                if ((e = eU[n] + t)in e1)
                    return e
        }(e) || e)
    }
    var e9 = /^(none|table(?!-c[ea]).+)/
      , eK = /^--/
      , e2 = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , eQ = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function eY(e, t, n) {
        var i = ei.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function e3(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += T.css(e, n + er[s], !0, r)),
            i ? ("content" === n && (l -= T.css(e, "padding" + er[s], !0, r)),
            "margin" !== n && (l -= T.css(e, "border" + er[s] + "Width", !0, r))) : (l += T.css(e, "padding" + er[s], !0, r),
            "padding" !== n ? l += T.css(e, "border" + er[s] + "Width", !0, r) : a += T.css(e, "border" + er[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function e7(e, t, n) {
        var i = eW(e)
          , r = (!p.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i)
          , o = r
          , s = e0(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (eM.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + e3(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    function eG(e, t, n, i, r) {
        return new eG.prototype.init(e,t,n,i,r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = e0(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Q(t), l = eK.test(t), u = e.style;
                if (l || (t = ez(a)),
                s = T.cssHooks[t] || T.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = ei.exec(n)) && r[1] && (n = ec(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = Q(t);
            return eK.test(t) || (t = ez(a)),
            (s = T.cssHooks[t] || T.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = e0(e, t, i)),
            "normal" === r && t in eQ && (r = eQ[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    T.each(["height", "width"], function(e, t) {
        T.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !e9.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? e7(e, t, i) : eu(e, e2, function() {
                        return e7(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var r, o = eW(e), s = !p.scrollboxSize() && "absolute" === o.position, a = (s || i) && "border-box" === T.css(e, "boxSizing", !1, o), l = i ? e3(e, t, i, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - e3(e, t, "border", !1, o) - .5)),
                l && (r = ei.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = T.css(e, t)),
                eY(0, n, l)
            }
        }
    }),
    T.cssHooks.marginLeft = eF(p.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(e0(e, "marginLeft")) || e.getBoundingClientRect().left - eu(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        T.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + er[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        "margin" !== e && (T.cssHooks[e + t].set = eY)
    }),
    T.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = eW(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = T.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((T.Tween = eG).prototype = {
        constructor: eG,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || T.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = eG.propHooks[this.prop];
            return e && e.get ? e.get(this) : eG.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = eG.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : eG.propHooks._default.set(this),
            this
        }
    }).init.prototype = eG.prototype,
    (eG.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 === e.elem.nodeType && (T.cssHooks[e.prop] || null != e.elem.style[ez(e.prop)]) ? T.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = eG.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    T.fx = eG.prototype.init,
    T.fx.step = {};
    var e4, eX, e5, e6, eZ = /^(?:toggle|show|hide)$/, eJ = /queueHooks$/;
    function te() {
        return e.setTimeout(function() {
            e4 = void 0
        }),
        e4 = Date.now()
    }
    function tt(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = er[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function tn(e, t, n) {
        for (var i, r = (ti.tweeners[t] || []).concat(ti.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function ti(e, t, n) {
        var i, r, o = 0, s = ti.prefilters.length, a = T.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = e4 || te(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++)
                u.tweens[o].run(i);
            return a.notifyWith(e, [u, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]),
            a.resolveWith(e, [u]),
            !1)
        }, u = a.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(!0, {
                specialEasing: {},
                easing: T.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: e4 || te(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [u, 1, 0]),
                a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = Q(n)],
                Array.isArray(o = e[n]) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                (s = T.cssHooks[i]) && ("expand"in s))
                    for (n in o = s.expand(o),
                    delete e[i],
                    o)
                        (n in e) || (e[n] = o[n],
                        t[n] = r);
                else
                    t[i] = r
        }(c, u.opts.specialEasing); o < s; o++)
            if (i = ti.prefilters[o].call(u, e, c, u.opts))
                return g(i.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                i;
        return T.map(c, tn, u),
        g(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        T.fx.timer(T.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    T.Animation = T.extend(ti, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ec(n.elem, e, ei.exec(t), n),
                n
            }
            , ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(H);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                ti.tweeners[n] = ti.tweeners[n] || [],
                ti.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, u, c, f = "width"in t || "height"in t, h = this, d = {}, p = e.style, g = e.nodeType && el(e), m = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    T.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                eZ.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    d[i] = m && m[i] || T.style(e, i)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (u = m && m.display) && (u = X.get(e, "display")),
                "none" === (c = T.css(e, "display")) && (u ? c = u : (eh([e], !0),
                u = e.style.display || u,
                c = T.css(e, "display"),
                eh([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (h.done(function() {
                    p.display = u
                }),
                null == u && (u = "none" === (c = p.display) ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                d)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                        display: u
                    }),
                    o && (m.hidden = !g),
                    g && eh([e], !0),
                    h.done(function() {
                        for (i in g || eh([e]),
                        X.remove(e, "fxshow"),
                        d)
                            T.style(e, i, d[i])
                    })),
                    l = tn(g ? m[i] : 0, i, h),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        , ],
        prefilter: function(e, t) {
            t ? ti.prefilters.unshift(e) : ti.prefilters.push(e)
        }
    }),
    T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            g(i.old) && i.old.call(this),
            i.queue && T.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(el).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = T.isEmptyObject(e)
              , o = T.speed(t, n, i)
              , s = function() {
                var t = ti(this, T.extend({}, e), o);
                (r || X.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = T.timers
                  , s = X.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && eJ.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || T.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = X.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = T.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                T.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    T.each(["toggle", "show", "hide"], function(e, t) {
        var n = T.fn[t];
        T.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tt(t, !0), e, i, r)
        }
    }),
    T.each({
        slideDown: tt("show"),
        slideUp: tt("hide"),
        slideToggle: tt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        T.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    T.timers = [],
    T.fx.tick = function() {
        var e, t = 0, n = T.timers;
        for (e4 = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(),
        e4 = void 0
    }
    ,
    T.fx.timer = function(e) {
        T.timers.push(e),
        T.fx.start()
    }
    ,
    T.fx.interval = 13,
    T.fx.start = function() {
        eX || (eX = !0,
        function t() {
            eX && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, T.fx.interval),
            T.fx.tick())
        }())
    }
    ,
    T.fx.stop = function() {
        eX = null
    }
    ,
    T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    T.fn.delay = function(t, n) {
        return t = T.fx && T.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    e5 = i.createElement("input"),
    e6 = i.createElement("select").appendChild(i.createElement("option")),
    e5.type = "checkbox",
    p.checkOn = "" !== e5.value,
    p.optSelected = e6.selected,
    (e5 = i.createElement("input")).value = "t",
    e5.type = "radio",
    p.radioValue = "t" === e5.value;
    var tr, to = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return U(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }),
    T.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? tr : void 0)),
                void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    tr = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = to[t] || T.find.attr;
        to[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = to[s],
            to[s] = r,
            r = null != n(e, t, i) ? s : null,
            to[s] = o),
            r
        }
    });
    var ts = /^(?:input|select|textarea|button)$/i
      , ta = /^(?:a|area)$/i;
    function tl(e) {
        return (e.match(H) || []).join(" ")
    }
    function tu(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function tc(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return U(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }),
    T.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                r = T.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ts.test(e.nodeName) || ta.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }),
    T.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    T(this).addClass(e.call(this, t, tu(this)))
                });
            if ((t = tc(e)).length) {
                for (; n = this[l++]; )
                    if (r = tu(n),
                    i = 1 === n.nodeType && " " + tl(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        r !== (a = tl(i)) && n.setAttribute("class", a)
                    }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    T(this).removeClass(e.call(this, t, tu(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = tc(e)).length) {
                for (; n = this[l++]; )
                    if (r = tu(n),
                    i = 1 === n.nodeType && " " + tl(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = tl(i)) && n.setAttribute("class", a)
                    }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                T(this).toggleClass(e.call(this, n, tu(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0,
                    o = T(this),
                    s = tc(e); t = s[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = tu(this)) && X.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + tl(tu(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var tf = /\r/g;
    T.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, T(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(tf, "") : null == n ? "" : n : void 0
        }
    }),
    T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : tl(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        },
        p.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    p.focusin = "onfocusin"in e;
    var th = /^(?:focusinfocus|focusoutblur)$/
      , td = function(e) {
        e.stopPropagation()
    };
    T.extend(T.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, u, c, h, d, p, v = [r || i], y = f.call(t, "type") ? t.type : t, b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i,
            3 !== r.nodeType && 8 !== r.nodeType && !th.test(y + T.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(),
            b.sort()),
            c = 0 > y.indexOf(":") && "on" + y,
            (t = t[T.expando] ? t : new T.Event(y,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : T.makeArray(n, [t]),
            d = T.event.special[y] || {},
            o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !m(r)) {
                    for (u = d.delegateType || y,
                    th.test(u + y) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = 1 < s ? u : d.bindType || y,
                    (h = (X.get(a, "events") || {})[t.type] && X.get(a, "handle")) && h.apply(a, n),
                    (h = c && a[c]) && h.apply && Y(a) && (t.result = h.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(r) || c && g(r[y]) && !m(r) && ((l = r[c]) && (r[c] = null),
                T.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, td),
                r[y](),
                t.isPropagationStopped() && p.removeEventListener(y, td),
                T.event.triggered = void 0,
                l && (r[c] = l)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(i, null, t)
        }
    }),
    T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return T.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            T.event.simulate(t, e.target, T.event.fix(e))
        };
        T.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = X.access(i, t);
                r || i.addEventListener(e, n, !0),
                X.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = X.access(i, t) - 1;
                r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0),
                X.remove(i, t))
            }
        }
    });
    var tp = e.location
      , tg = Date.now()
      , tm = /\?/;
    T.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t),
        n
    }
    ;
    var tv = /\[\]$/
      , ty = /\r?\n/g
      , t$ = /^(?:submit|button|image|reset|file)$/i
      , tb = /^(?:input|select|textarea|keygen)/i;
    function t8(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            T.each(t, function(t, r) {
                n || tv.test(e) ? i(e, r) : t8(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== b(t))
            i(e, t);
        else
            for (r in t)
                t8(e + "[" + r + "]", t[r], n, i)
    }
    T.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
            T.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                t8(n, e[n], t, r);
        return i.join("&")
    }
    ,
    T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && tb.test(this.nodeName) && !t$.test(e) && (this.checked || !ed.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ty, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ty, "\r\n")
                }
            }).get()
        }
    });
    var tC = /%20/g
      , tT = /#.*$/
      , tE = /([?&])_=[^&]*/
      , t_ = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , tw = /^(?:GET|HEAD)$/
      , tx = /^\/\//
      , tS = {}
      , tA = {}
      , tD = "*/".concat("*")
      , tN = i.createElement("a");
    function tI(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(H) || [];
            if (g(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (e[i = i.slice(1) || "*"] = e[i] || []).unshift(n) : (e[i] = e[i] || []).push(n)
        }
    }
    function tk(e, t, n, i) {
        var r = {}
          , o = e === tA;
        function s(a) {
            var l;
            return r[a] = !0,
            T.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                s(u),
                !1)
            }),
            l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }
    function tO(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i),
        e
    }
    tN.href = tp.href,
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tp.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tp.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tD,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? tO(tO(e, T.ajaxSettings), t) : tO(T.ajaxSettings, e)
        },
        ajaxPrefilter: tI(tS),
        ajaxTransport: tI(tA),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, s, a, l, u, c, f, h, d, p = T.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event, v = T.Deferred(), y = T.Callbacks("once memory"), b = p.statusCode || {}, C = {}, E = {}, _ = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!a)
                            for (a = {}; t = t_.exec(s); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (C[e = E[e.toLowerCase()] = E[e.toLowerCase()] || e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (c)
                            w.always(e[w.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]]
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return r && r.abort(t),
                    A(0, t),
                    this
                }
            };
            if (v.promise(w),
            p.url = ((t || p.url || tp.href) + "").replace(tx, tp.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""],
            null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url,
                    u.href = u.href,
                    p.crossDomain = tN.protocol + "//" + tN.host != u.protocol + "//" + u.host
                } catch (x) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)),
            tk(tS, p, n, w),
            c)
                return w;
            for (h in (f = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !tw.test(p.type),
            o = p.url.replace(tT, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(tC, "+")) : (d = p.url.slice(o.length),
            p.data && (p.processData || "string" == typeof p.data) && (o += (tm.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace(tE, "$1"),
            d = (tm.test(o) ? "&" : "?") + "_=" + tg++ + d),
            p.url = o + d),
            p.ifModified && (T.lastModified[o] && w.setRequestHeader("If-Modified-Since", T.lastModified[o]),
            T.etag[o] && w.setRequestHeader("If-None-Match", T.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + tD + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                w.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, w, p) || c))
                return w.abort();
            if (_ = "abort",
            y.add(p.complete),
            w.done(p.success),
            w.fail(p.error),
            r = tk(tA, p, n, w)) {
                if (w.readyState = 1,
                f && m.trigger("ajaxSend", [w, p]),
                c)
                    return w;
                p.async && 0 < p.timeout && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    c = !1,
                    r.send(C, A)
                } catch (S) {
                    if (c)
                        throw S;
                    A(-1, S)
                }
            } else
                A(-1, "No Transport");
            function A(t, n, i, a) {
                var u, h, d, C, E, _ = n;
                c || (c = !0,
                l && e.clearTimeout(l),
                r = void 0,
                s = a || "",
                w.readyState = 0 < t ? 4 : 0,
                u = 200 <= t && t < 300 || 304 === t,
                i && (C = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) {
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, w, i)),
                C = function(e, t, n, i) {
                    var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift()) {
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o])) {
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                }
                                if (!0 !== s) {
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (f) {
                                            return {
                                                state: "parsererror",
                                                error: s ? f : "No conversion from " + l + " to " + o
                                            }
                                        }
                                }
                            }
                        }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, C, w, u),
                u ? (p.ifModified && ((E = w.getResponseHeader("Last-Modified")) && (T.lastModified[o] = E),
                (E = w.getResponseHeader("etag")) && (T.etag[o] = E)),
                204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = C.state,
                h = C.data,
                u = !(d = C.error))) : (d = _,
                !t && _ || (_ = "error",
                t < 0 && (t = 0))),
                w.status = t,
                w.statusText = (n || _) + "",
                u ? v.resolveWith(g, [h, _, w]) : v.rejectWith(g, [w, _, d]),
                w.statusCode(b),
                b = void 0,
                f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [w, p, u ? h : d]),
                y.fireWith(g, [w, _]),
                f && (m.trigger("ajaxComplete", [w, p]),
                --T.active || T.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }),
    T.each(["get", "post"], function(e, t) {
        T[t] = function(e, n, i, r) {
            return g(n) && (r = r || i,
            i = n,
            n = void 0),
            T.ajax(T.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, T.isPlainObject(e) && e))
        }
    }),
    T._evalUrl = function(e, t) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t)
            }
        })
    }
    ,
    T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = T(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                T(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = T(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                T(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }
    ,
    T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    T.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var tL = {
        0: 200,
        1223: 204
    }
      , tj = T.ajaxSettings.xhr();
    p.cors = !!tj && "withCredentials"in tj,
    p.ajax = tj = !!tj,
    T.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || tj && !t.crossDomain)
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(tL[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n)
                            throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e),
                e
            }
        }
    }),
    T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    T.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, o) {
                    t = T("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var tP, tH = [], tR = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tH.pop() || T.expando + "_" + tg++;
            return this[e] = !0,
            e
        }
    }),
    T.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (tR.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tR.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(tR, "$1" + r) : !1 !== t.jsonp && (t.url += (tm.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return s || T.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? T(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                tH.push(r)),
                s && g(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    p.createHTMLDocument = ((tP = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === tP.childNodes.length),
    T.parseHTML = function(e, t, n) {
        var r, o, s;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(r)) : t = i),
        s = !n && [],
        (o = N.exec(e)) ? [t.createElement(o[1])] : (o = eC([e], t, s),
        s && s.length && T(s).remove(),
        T.merge([], o.childNodes)))
    }
    ,
    T.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = tl(e.slice(a)),
        e = e.slice(0, a)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < s.length && T.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    T.expr.pseudos.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    T.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = T.css(e, "position"), c = T(e), f = {};
            "static" === u && (e.style.position = "relative"),
            a = c.offset(),
            o = T.css(e, "top"),
            l = T.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            g(t) && (t = t.call(e, n, T.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    T.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    T.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === T.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                    r.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                    e = e.offsetParent;
                return e || eo
            })
        }
    }),
    T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        T.fn[e] = function(i) {
            return U(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }),
    T.each(["top", "left"], function(e, t) {
        T.cssHooks[t] = eF(p.pixelPosition, function(e, n) {
            if (n)
                return n = e0(e, t),
                eM.test(n) ? T(e).position()[t] + "px" : n
        })
    }),
    T.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        T.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            T.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === o ? "margin" : "border");
                return U(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? T.css(t, n, a) : T.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }),
    T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        T.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    T.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || T.guid++,
            r
    }
    ,
    T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }
    ,
    T.isArray = Array.isArray,
    T.parseJSON = JSON.parse,
    T.nodeName = D,
    T.isFunction = g,
    T.isWindow = m,
    T.camelCase = Q,
    T.type = b,
    T.now = Date.now,
    T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var tq = e.jQuery
      , tM = e.$;
    return T.noConflict = function(t) {
        return e.$ === T && (e.$ = tM),
        t && e.jQuery === T && (e.jQuery = tq),
        T
    }
    ,
    t || (e.jQuery = e.$ = T),
    T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === ({}).toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function i(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var r = t(e)
          , o = r.overflow
          , s = r.overflowX
          , a = r.overflowY;
        return /(auto|scroll)/.test(o + a + s) ? e : i(n(e))
    }
    function r(e) {
        var n = e && e.offsetParent
          , i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function o(e) {
        return null === e.parentNode ? e : o(e.parentNode)
    }
    function s(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var n, i, a = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, l = a ? e : t, u = a ? t : e, c = document.createRange();
        c.setStart(l, 0),
        c.setEnd(u, 0);
        var f = c.commonAncestorContainer;
        if (e !== f && t !== f || l.contains(u))
            return "BODY" !== (i = (n = f).nodeName) && ("HTML" === i || r(n.firstElementChild) === n) ? f : r(f);
        var h = o(e);
        return h.host ? s(h.host, t) : s(e, o(t).host)
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === t ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[n]
        }
        return e[n]
    }
    function l(e, t) {
        var n = "x" === t ? "Left" : "Top";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + ("Left" == n ? "Right" : "Bottom") + "Width"], 10)
    }
    function u(e, t, n, i) {
        return P(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], F() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function c() {
        var e = document.body
          , t = document.documentElement
          , n = F() && getComputedStyle(t);
        return {
            height: u("Height", e, t, n),
            width: u("Width", e, t, n)
        }
    }
    function f(e) {
        return K({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function h(e) {
        var n = {};
        if (F())
            try {
                n = e.getBoundingClientRect();
                var i = a(e, "top")
                  , r = a(e, "left");
                n.top += i,
                n.left += r,
                n.bottom += i,
                n.right += r
            } catch (o) {}
        else
            n = e.getBoundingClientRect();
        var s = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , u = "HTML" === e.nodeName ? c() : {}
          , h = u.width || e.clientWidth || s.right - s.left
          , d = u.height || e.clientHeight || s.bottom - s.top
          , p = e.offsetWidth - h
          , g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= l(m, "x"),
            g -= l(m, "y"),
            s.width -= p,
            s.height -= g
        }
        return f(s)
    }
    function d(e, n) {
        var r = F()
          , o = "HTML" === n.nodeName
          , s = h(e)
          , l = h(n)
          , u = i(e)
          , c = t(n)
          , d = parseFloat(c.borderTopWidth, 10)
          , p = parseFloat(c.borderLeftWidth, 10)
          , g = f({
            top: s.top - l.top - d,
            left: s.left - l.left - p,
            width: s.width,
            height: s.height
        });
        if (g.marginTop = 0,
        g.marginLeft = 0,
        !r && o) {
            var m = parseFloat(c.marginTop, 10)
              , v = parseFloat(c.marginLeft, 10);
            g.top -= d - m,
            g.bottom -= d - m,
            g.left -= p - v,
            g.right -= p - v,
            g.marginTop = m,
            g.marginLeft = v
        }
        return (r ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (g = function e(t, n) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , r = a(n, "top")
              , o = a(n, "left")
              , s = i ? -1 : 1;
            return t.top += r * s,
            t.bottom += r * s,
            t.left += o * s,
            t.right += o * s,
            t
        }(g, n)),
        g
    }
    function p(e, r, o, l) {
        var u = {
            top: 0,
            left: 0
        }
          , h = s(e, r);
        if ("viewport" === l)
            u = (g = (p = h).ownerDocument.documentElement,
            m = d(p, g),
            v = P(g.clientWidth, window.innerWidth || 0),
            y = P(g.clientHeight, window.innerHeight || 0),
            b = a(g),
            C = a(g, "left"),
            f({
                top: b - m.top + m.marginTop,
                left: C - m.left + m.marginLeft,
                width: v,
                height: y
            }));
        else {
            "scrollParent" === l ? "BODY" === (T = i(n(r))).nodeName && (T = e.ownerDocument.documentElement) : T = "window" === l ? e.ownerDocument.documentElement : l;
            var p, g, m, v, y, b, C, T, E = d(T, h);
            if ("HTML" === T.nodeName && !function e(i) {
                var r = i.nodeName;
                return "BODY" !== r && "HTML" !== r && ("fixed" === t(i, "position") || e(n(i)))
            }(h)) {
                var _ = c()
                  , w = _.height
                  , x = _.width;
                u.top += E.top - E.marginTop,
                u.bottom = w + E.top,
                u.left += E.left - E.marginLeft,
                u.right = x + E.left
            } else
                u = E
        }
        return u.left += o,
        u.top += o,
        u.right -= o,
        u.bottom -= o,
        u
    }
    function g(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = p(n, i, o, r)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            var t, n;
            return K({
                key: e
            }, a[e], {
                area: (n = (t = a[e]).width) * t.height
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = l.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , c = 0 < u.length ? u[0].key : l[0].key
          , f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }
    function m(e, t, n) {
        var i = s(t, n);
        return d(n, i)
    }
    function v(e) {
        var t = getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function y(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function b(e, t, n) {
        n = n.split("-")[0];
        var i = v(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[o ? "width" : "height"] : t[y(a)],
        r
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function T(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function e(t, n, i) {
            if (Array.prototype.findIndex)
                return t.findIndex(function(e) {
                    return e[n] === i
                });
            var r = C(t, function(e) {
                return e[n] === i
            });
            return t.indexOf(r)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper),
            n.offsets.reference = f(n.offsets.reference),
            n = i(n, t))
        }),
        n
    }
    function E() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = m(this.state, this.popper, this.reference),
            e.placement = g(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.offsets.popper = b(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = "absolute",
            e = T(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function _(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function w(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function x() {
        return this.state.isDestroyed = !0,
        _(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.left = "",
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style[w("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function S(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function A() {
        var e, t, n, r, o;
        this.state.eventsEnabled || (this.state = (e = this.reference,
        this.options,
        n = this.state,
        r = this.scheduleUpdate,
        n.updateBound = r,
        S(e).addEventListener("resize", n.updateBound, {
            passive: !0
        }),
        function e(t, n, r, o) {
            var s = "BODY" === t.nodeName
              , a = s ? t.ownerDocument.defaultView : t;
            a.addEventListener(n, r, {
                passive: !0
            }),
            s || e(i(a.parentNode), n, r, o),
            o.push(a)
        }(o = i(e), "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n))
    }
    function D() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        S(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function N(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function I(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && N(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    function k(e, t, n) {
        var i = C(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    function O(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = Y.indexOf(e)
          , i = Y.slice(n + 1).concat(Y.slice(0, n));
        return t ? i.reverse() : i
    }
    for (var L = Math.min, j = Math.floor, P = Math.max, H = "undefined" != typeof window && "undefined" != typeof document, R = ["Edge", "Trident", "Firefox"], q = 0, M = 0; M < R.length; M += 1)
        if (H && 0 <= navigator.userAgent.indexOf(R[M])) {
            q = 1;
            break
        }
    var W, B = H && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, q))
        }
    }
    , F = function() {
        return void 0 == W && (W = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        W
    }, U = function(e, t) {
        if (!(e instanceof t))
            throw TypeError("Cannot call a class as a function")
    }, V = function() {
        function e(e, t) {
            for (var n, i = 0; i < t.length; i++)
                (n = t[i]).enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), z = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }, K = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
    , Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Y = Q.slice(3), G = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, X = function() {
        function t(n, i) {
            var r = this
              , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            U(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ,
            this.update = B(this.update.bind(this)),
            this.options = K({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n && n.jquery ? n[0] : n,
            this.popper = i && i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(K({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                r.options.modifiers[e] = K({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return K({
                    name: e
                }, r.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }),
            this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(),
            this.state.eventsEnabled = s
        }
        return V(t, [{
            key: "update",
            value: function() {
                return E.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return x.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return A.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return D.call(this)
            }
        }, ]),
        t
    }();
    return X.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    X.placements = Q,
    X.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , u = a ? "width" : "height"
                          , c = {
                            start: z({}, l, o[l]),
                            end: z({}, l, o[l] + o[u] - s[u])
                        };
                        e.offsets.popper = K({}, s, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function e(t, n) {
                    var i, r, o, s, a, l, u, c, h, d, p, g = n.offset, m = t.placement, v = t.offsets, y = v.popper, b = v.reference, T = m.split("-")[0];
                    return i = N(+g) ? [+g, 0] : (r = g,
                    o = y,
                    s = b,
                    l = [0, 0],
                    u = -1 !== ["right", "left"].indexOf(a = T),
                    c[h = (c = r.split(/(\+|\-)/).map(function(e) {
                        return e.trim()
                    })).indexOf(C(c, function(e) {
                        return -1 !== e.search(/,|\s/)
                    }))] && -1 === c[h].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
                    d = /\s*,\s*|\s+/,
                    (p = (p = -1 === h ? [c] : [c.slice(0, h).concat([c[h].split(d)[0]]), [c[h].split(d)[1]].concat(c.slice(h + 1))]).map(function(e, t) {
                        var n = (1 === t ? !u : u) ? "height" : "width"
                          , i = !1;
                        return e.reduce(function(e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                            i = !0,
                            e) : i ? (e[e.length - 1] += t,
                            i = !1,
                            e) : e.concat(t)
                        }, []).map(function(e) {
                            var t, i, r, a, l, u, c, h, d;
                            return t = e,
                            i = n,
                            r = o,
                            a = s,
                            c = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            h = +c[1],
                            d = c[2],
                            h ? 0 === d.indexOf("%") ? f(l = "%p" === d ? r : a)[i] / 100 * h : "vh" === d || "vw" === d ? (u = "vh" === d ? P(document.documentElement.clientHeight, window.innerHeight || 0) : P(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * h : h : t
                        })
                    })).forEach(function(e, t) {
                        e.forEach(function(n, i) {
                            N(n) && (l[t] += n * ("-" === e[i - 1] ? -1 : 1))
                        })
                    }),
                    l),
                    "left" === T ? (y.top += i[0],
                    y.left -= i[1]) : "right" === T ? (y.top += i[0],
                    y.left += i[1]) : "top" === T ? (y.left += i[0],
                    y.top -= i[1]) : "bottom" === T && (y.left += i[0],
                    y.top += i[1]),
                    t.popper = y,
                    t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === n && (n = r(n));
                    var i = p(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var o = t.priority
                      , s = e.offsets.popper
                      , a = {
                        primary: function(e) {
                            var n = s[e];
                            return s[e] < i[e] && !t.escapeWithReference && (n = P(s[e], i[e])),
                            z({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , r = s[n];
                            return s[e] > i[e] && !t.escapeWithReference && (r = L(s[n], i[e] - ("right" === e ? s.width : s.height))),
                            z({}, n, r)
                        }
                    };
                    return o.forEach(function(e) {
                        s = K({}, s, a[-1 === ["left", "top"].indexOf(e) ? "secondary" : "primary"](e))
                    }),
                    e.offsets.popper = s,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = j
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[s ? "width" : "height"]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    if (!k(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i, r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r)))
                            return e
                    } else if (!e.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , s = e.offsets
                      , a = s.popper
                      , l = s.reference
                      , u = -1 !== ["left", "right"].indexOf(o)
                      , c = u ? "height" : "width"
                      , h = u ? "Top" : "Left"
                      , d = h.toLowerCase()
                      , p = u ? "bottom" : "right"
                      , g = v(r)[c];
                    l[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - g)),
                    l[d] + g > a[p] && (e.offsets.popper[d] += l[d] + g - a[p]),
                    e.offsets.popper = f(e.offsets.popper);
                    var m = l[d] + l[c] / 2 - g / 2
                      , y = t(e.instance.popper)
                      , b = parseFloat(y["margin" + h], 10)
                      , C = parseFloat(y["border" + h + "Width"], 10)
                      , T = m - e.offsets.popper[d] - b - C;
                    return T = P(L(a[c] - g, T), 0),
                    e.arrowElement = r,
                    e.offsets.arrow = (z(i = {}, d, Math.round(T)),
                    z(i, u ? "left" : "top", ""),
                    i),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (_(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = p(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                      , i = e.placement.split("-")[0]
                      , r = y(i)
                      , o = e.placement.split("-")[1] || ""
                      , s = [];
                    switch (t.behavior) {
                    case G.FLIP:
                        s = [i, r];
                        break;
                    case G.CLOCKWISE:
                        s = O(i);
                        break;
                    case G.COUNTERCLOCKWISE:
                        s = O(i, !0);
                        break;
                    default:
                        s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return e;
                        r = y(i = e.placement.split("-")[0]);
                        var u, c = e.offsets.popper, f = e.offsets.reference, h = j, d = "left" === i && h(c.right) > h(f.left) || "right" === i && h(c.left) < h(f.right) || "top" === i && h(c.bottom) > h(f.top) || "bottom" === i && h(c.top) < h(f.bottom), p = h(c.left) < h(n.left), g = h(c.right) > h(n.right), m = h(c.top) < h(n.top), v = h(c.bottom) > h(n.bottom), C = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v, E = -1 !== ["top", "bottom"].indexOf(i), _ = !!t.flipVariations && (E && "start" === o && p || E && "end" === o && g || !E && "start" === o && m || !E && "end" === o && v);
                        (d || C || _) && (e.flipped = !0,
                        (d || C) && (i = s[l + 1]),
                        _ && (o = "end" === (u = o) ? "start" : "start" === u ? "end" : u),
                        e.placement = i + (o ? "-" + o : ""),
                        e.offsets.popper = K({}, e.offsets.popper, b(e.instance.popper, e.offsets.reference, e.placement)),
                        e = T(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = y(t),
                    e.offsets.popper = f(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!k(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = C(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , s = C(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, u = void 0 === s ? t.gpuAcceleration : s, c = r(e.instance.popper), f = h(c), d = {
                        position: o.position
                    }, p = {
                        left: j(o.left),
                        top: j(o.top),
                        bottom: j(o.bottom),
                        right: j(o.right)
                    }, g = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", v = w("transform");
                    (l = "bottom" == g ? -f.height + p.bottom : p.top,
                    a = "right" == m ? -f.width + p.right : p.left,
                    u && v) ? (d[v] = "translate3d(" + a + "px, " + l + "px, 0)",
                    d[g] = 0,
                    d[m] = 0,
                    d.willChange = "transform") : (d[g] = l * ("bottom" == g ? -1 : 1),
                    d[m] = a * ("right" == m ? -1 : 1),
                    d.willChange = g + ", " + m);
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = K({}, y, e.attributes),
                    e.styles = K({}, d, e.styles),
                    e.arrowStyles = K({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return I(e.instance.popper, e.styles),
                    function e(t, n) {
                        Object.keys(n).forEach(function(e) {
                            !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                        })
                    }(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = m(r, t, e)
                      , s = g(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    I(t, {
                        position: "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    X
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function o() {
        return (o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var s, a, l, u, c, f, h, d, p, g, m, v, y, b, C, T, E, _, w, x, S, A, D, N, I, k, O, L, j, P, H, R, q, M, W, B, F, U, V, z, K, Q, Y, G, X, Z, J, ee, et, en, ei, er, eo, es, ea, el, eu, ec, ef, eh, ed, ep, eg, em, ev, ey, e$, eb, e8, eC, eT, eE, e_, ew, ex, eS, eA, eD, eN, eI, ek, eO, eL, ej, eP, eH, eR, eq, eM, eW, eB, e0, eF, eU, e1, eV, ez, e9, eK, e2, eQ, eY, e3, e7, eG, e4, eX, e5, e6, eZ, eJ, te, tt, tn, ti, tr, to, ts, ta, tl, tu, tc, tf, th, td, tp, tg, tm, tv, ty, t$, tb, t8, tC, tT, tE = (s = t,
    a = !1,
    l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do
                e += ~~(1e6 * Math.random());
            while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t, n = e.getAttribute("data-target");
            n && "#" !== n || (n = e.getAttribute("href") || ""),
            "#" === n.charAt(0) && (t = n,
            n = t = "function" == typeof s.escapeSelector ? s.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
            try {
                return s(document).find(n).length > 0 ? n : null
            } catch (i) {
                return null
            }
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            s(e).trigger(a.end)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r, o = n[i], s = t[i], a = s && l.isElement(s) ? "element" : (r = s,
                    ({}).toString.call(r).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                    if (!RegExp(o).test(a))
                        throw Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
        }
    },
    a = ("undefined" == typeof window || !window.QUnit) && {
        end: "transitionend"
    },
    s.fn.emulateTransitionEnd = function e(t) {
        var n = this
          , i = !1;
        return s(this).one(l.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || l.triggerTransitionEnd(n)
        }, t),
        this
    }
    ,
    l.supportsTransitionEnd() && (s.event.special[l.TRANSITION_END] = {
        bindType: a.end,
        delegateType: a.end,
        handle: function(e) {
            if (s(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    }),
    l), t_ = (eJ = "alert",
    tt = "." + (te = "bs.alert"),
    tn = (eZ = t).fn[eJ],
    ti = {
        CLOSE: "close" + tt,
        CLOSED: "closed" + tt,
        CLICK_DATA_API: "click" + tt + ".data-api"
    },
    tr = "alert",
    to = "fade",
    ts = "show",
    ta = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.close = function(e) {
            e = e || this._element;
            var t = this._getRootElement(e);
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        t.dispose = function() {
            eZ.removeData(this._element, te),
            this._element = null
        }
        ,
        t._getRootElement = function(e) {
            var t = tE.getSelectorFromElement(e)
              , n = !1;
            return t && (n = eZ(t)[0]),
            n || (n = eZ(e).closest("." + tr)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(e) {
            var t = eZ.Event(ti.CLOSE);
            return eZ(e).trigger(t),
            t
        }
        ,
        t._removeElement = function(e) {
            var t = this;
            eZ(e).removeClass(ts),
            tE.supportsTransitionEnd() && eZ(e).hasClass(to) ? eZ(e).one(tE.TRANSITION_END, function(n) {
                return t._destroyElement(e, n)
            }).emulateTransitionEnd(150) : this._destroyElement(e)
        }
        ,
        t._destroyElement = function(e) {
            eZ(e).detach().trigger(ti.CLOSED).remove()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = eZ(this)
                  , i = n.data(te);
                i || (i = new e(this),
                n.data(te, i)),
                "close" === t && i[t](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, ]),
        e
    }(),
    eZ(document).on(ti.CLICK_DATA_API, '[data-dismiss="alert"]', ta._handleDismiss(new ta)),
    eZ.fn[eJ] = ta._jQueryInterface,
    eZ.fn[eJ].Constructor = ta,
    eZ.fn[eJ].noConflict = function() {
        return eZ.fn[eJ] = tn,
        ta._jQueryInterface
    }
    ,
    ta), tw = (tu = "button",
    tf = "." + (tc = "bs.button"),
    th = ".data-api",
    td = (tl = t).fn[tu],
    tp = "active",
    tg = "btn",
    tm = "focus",
    tv = '[data-toggle^="button"]',
    ty = '[data-toggle="buttons"]',
    t$ = "input",
    tb = ".active",
    t8 = ".btn",
    tC = {
        CLICK_DATA_API: "click" + tf + th,
        FOCUS_BLUR_DATA_API: "focus" + tf + th + " blur" + tf + th
    },
    tT = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.toggle = function() {
            var e = !0
              , t = !0
              , n = tl(this._element).closest(ty)[0];
            if (n) {
                var i = tl(this._element).find(t$)[0];
                if (i) {
                    if ("radio" === i.type) {
                        if (i.checked && tl(this._element).hasClass(tp))
                            e = !1;
                        else {
                            var r = tl(n).find(tb)[0];
                            r && tl(r).removeClass(tp)
                        }
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !tl(this._element).hasClass(tp),
                        tl(i).trigger("change")
                    }
                    i.focus(),
                    t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !tl(this._element).hasClass(tp)),
            e && tl(this._element).toggleClass(tp)
        }
        ,
        t.dispose = function() {
            tl.removeData(this._element, tc),
            this._element = null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = tl(this).data(tc);
                n || (n = new e(this),
                tl(this).data(tc, n)),
                "toggle" === t && n[t]()
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, ]),
        e
    }(),
    tl(document).on(tC.CLICK_DATA_API, tv, function(e) {
        e.preventDefault();
        var t = e.target;
        tl(t).hasClass(tg) || (t = tl(t).closest(t8)),
        tT._jQueryInterface.call(tl(t), "toggle")
    }).on(tC.FOCUS_BLUR_DATA_API, tv, function(e) {
        var t = tl(e.target).closest(t8)[0];
        tl(t).toggleClass(tm, /^focus(in)?$/.test(e.type))
    }),
    tl.fn[tu] = tT._jQueryInterface,
    tl.fn[tu].Constructor = tT,
    tl.fn[tu].noConflict = function() {
        return tl.fn[tu] = td,
        tT._jQueryInterface
    }
    ,
    tT), tx = (u = t,
    c = "carousel",
    h = "." + (f = "bs.carousel"),
    d = u.fn[c],
    p = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    },
    g = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    },
    m = "next",
    v = "prev",
    y = {
        SLIDE: "slide" + h,
        SLID: "slid" + h,
        KEYDOWN: "keydown" + h,
        MOUSEENTER: "mouseenter" + h,
        MOUSELEAVE: "mouseleave" + h,
        TOUCHEND: "touchend" + h,
        LOAD_DATA_API: "load" + h + ".data-api",
        CLICK_DATA_API: "click" + h + ".data-api"
    },
    b = "active",
    C = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    },
    T = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._config = this._getConfig(t),
            this._element = u(e)[0],
            this._indicatorsElement = u(this._element).find(C.INDICATORS)[0],
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.next = function() {
            this._isSliding || this._slide(m)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && u(this._element).is(":visible") && "hidden" !== u(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(v)
        }
        ,
        t.pause = function(e) {
            e || (this._isPaused = !0),
            u(this._element).find(C.NEXT_PREV)[0] && tE.supportsTransitionEnd() && (tE.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(e) {
            var t = this;
            this._activeElement = u(this._element).find(C.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) {
                if (this._isSliding)
                    u(this._element).one(y.SLID, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    this._slide(e > n ? m : v, this._items[e])
                }
            }
        }
        ,
        t.dispose = function() {
            u(this._element).off(h),
            u.removeData(this._element, f),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(e) {
            return e = o({}, p, e),
            tE.typeCheckConfig(c, e, g),
            e
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && u(this._element).on(y.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && (u(this._element).on(y.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(y.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            "ontouchstart"in document.documentElement && u(this._element).on(y.TOUCHEND, function() {
                e.pause(),
                e.touchTimeout && clearTimeout(e.touchTimeout),
                e.touchTimeout = setTimeout(function(t) {
                    return e.cycle(t)
                }, 500 + e._config.interval)
            }))
        }
        ,
        t._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(e) {
            return this._items = u.makeArray(u(e).parent().find(C.ITEM)),
            this._items.indexOf(e)
        }
        ,
        t._getItemByDirection = function(e, t) {
            var n = this._getItemIndex(t)
              , i = this._items.length - 1;
            if ((e === v && 0 === n || e === m && n === i) && !this._config.wrap)
                return t;
            var r = (n + (e === v ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        ,
        t._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(u(this._element).find(C.ACTIVE_ITEM)[0])
              , r = u.Event(y.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return u(this._element).trigger(r),
            r
        }
        ,
        t._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                u(this._indicatorsElement).find(C.ACTIVE).removeClass(b);
                var t = this._indicatorsElement.children[this._getItemIndex(e)];
                t && u(t).addClass(b)
            }
        }
        ,
        t._slide = function(e, t) {
            var n, i, r, o = this, s = u(this._element).find(C.ACTIVE_ITEM)[0], a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), f = Boolean(this._interval);
            if (e === m ? (n = "carousel-item-left",
            i = "carousel-item-next",
            r = "left") : (n = "carousel-item-right",
            i = "carousel-item-prev",
            r = "right"),
            l && u(l).hasClass(b))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                f && this.pause(),
                this._setActiveIndicatorElement(l);
                var h = u.Event(y.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: c
                });
                tE.supportsTransitionEnd() && u(this._element).hasClass("slide") ? (u(l).addClass(i),
                tE.reflow(l),
                u(s).addClass(n),
                u(l).addClass(n),
                u(s).one(tE.TRANSITION_END, function() {
                    u(l).removeClass(n + " " + i).addClass(b),
                    u(s).removeClass(b + " " + i + " " + n),
                    o._isSliding = !1,
                    setTimeout(function() {
                        return u(o._element).trigger(h)
                    }, 0)
                }).emulateTransitionEnd(600)) : (u(s).removeClass(b),
                u(l).addClass(b),
                this._isSliding = !1,
                u(this._element).trigger(h)),
                f && this.cycle()
            }
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = u(this).data(f)
                  , i = o({}, p, u(this).data());
                "object" == typeof t && (i = o({}, i, t));
                var r = "string" == typeof t ? t : i.slide;
                if (n || (n = new e(this,i),
                u(this).data(f, n)),
                "number" == typeof t)
                    n.to(t);
                else if ("string" == typeof r) {
                    if (void 0 === n[r])
                        throw TypeError('No method named "' + r + '"');
                    n[r]()
                } else
                    i.interval && (n.pause(),
                    n.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(t) {
            var n = tE.getSelectorFromElement(this);
            if (n) {
                var i = u(n)[0];
                if (i && u(i).hasClass("carousel")) {
                    var r = o({}, u(i).data(), u(this).data())
                      , s = this.getAttribute("data-slide-to");
                    s && (r.interval = !1),
                    e._jQueryInterface.call(u(i), r),
                    s && u(i).data(f).to(s),
                    t.preventDefault()
                }
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return p
            }
        }, ]),
        e
    }(),
    u(document).on(y.CLICK_DATA_API, C.DATA_SLIDE, T._dataApiClickHandler),
    u(window).on(y.LOAD_DATA_API, function() {
        u(C.DATA_RIDE).each(function() {
            var e = u(this);
            T._jQueryInterface.call(e, e.data())
        })
    }),
    u.fn[c] = T._jQueryInterface,
    u.fn[c].Constructor = T,
    u.fn[c].noConflict = function() {
        return u.fn[c] = d,
        T._jQueryInterface
    }
    ,
    T), tS = (E = t,
    _ = "collapse",
    x = "." + (w = "bs.collapse"),
    S = E.fn[_],
    A = {
        toggle: !0,
        parent: ""
    },
    D = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    N = {
        SHOW: "show" + x,
        SHOWN: "shown" + x,
        HIDE: "hide" + x,
        HIDDEN: "hidden" + x,
        CLICK_DATA_API: "click" + x + ".data-api"
    },
    I = "show",
    k = "collapse",
    O = "collapsing",
    L = "collapsed",
    j = "width",
    P = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    },
    H = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = E.makeArray(E('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = E(P.DATA_TOGGLE), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = tE.getSelectorFromElement(r);
                null !== o && E(o).filter(e).length > 0 && (this._selector = o,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = e.prototype;
        return t.toggle = function() {
            E(this._element).hasClass(I) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, n, i = this;
            if (!this._isTransitioning && !E(this._element).hasClass(I) && (this._parent && 0 === (t = E.makeArray(E(this._parent).find(P.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null),
            !(t && (n = E(t).not(this._selector).data(w)) && n._isTransitioning))) {
                var r = E.Event(N.SHOW);
                if (E(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(E(t).not(this._selector), "hide"),
                    n || E(t).data(w, null));
                    var o = this._getDimension();
                    E(this._element).removeClass(k).addClass(O),
                    this._element.style[o] = 0,
                    this._triggerArray.length > 0 && E(this._triggerArray).removeClass(L).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var s = function() {
                        E(i._element).removeClass(O).addClass(k).addClass(I),
                        i._element.style[o] = "",
                        i.setTransitioning(!1),
                        E(i._element).trigger(N.SHOWN)
                    };
                    if (tE.supportsTransitionEnd()) {
                        var a = "scroll" + (o[0].toUpperCase() + o.slice(1));
                        E(this._element).one(tE.TRANSITION_END, s).emulateTransitionEnd(600),
                        this._element.style[o] = this._element[a] + "px"
                    } else
                        s()
                }
            }
        }
        ,
        t.hide = function() {
            var e = this;
            if (!this._isTransitioning && E(this._element).hasClass(I)) {
                var t = E.Event(N.HIDE);
                if (E(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    tE.reflow(this._element),
                    E(this._element).addClass(O).removeClass(k).removeClass(I),
                    this._triggerArray.length > 0)
                        for (var i = 0; i < this._triggerArray.length; i++) {
                            var r = this._triggerArray[i]
                              , o = tE.getSelectorFromElement(r);
                            null !== o && (E(o).hasClass(I) || E(r).addClass(L).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    var s = function() {
                        e.setTransitioning(!1),
                        E(e._element).removeClass(O).addClass(k).trigger(N.HIDDEN)
                    };
                    this._element.style[n] = "",
                    tE.supportsTransitionEnd() ? E(this._element).one(tE.TRANSITION_END, s).emulateTransitionEnd(600) : s()
                }
            }
        }
        ,
        t.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        t.dispose = function() {
            E.removeData(this._element, w),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(e) {
            return (e = o({}, A, e)).toggle = Boolean(e.toggle),
            tE.typeCheckConfig(_, e, D),
            e
        }
        ,
        t._getDimension = function() {
            return E(this._element).hasClass(j) ? j : "height"
        }
        ,
        t._getParent = function() {
            var t = this
              , n = null;
            tE.isElement(this._config.parent) ? (n = this._config.parent,
            void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = E(this._config.parent)[0];
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return E(n).find(i).each(function(n, i) {
                t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
            }),
            n
        }
        ,
        t._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = E(e).hasClass(I);
                t.length > 0 && E(t).toggleClass(L, !n).attr("aria-expanded", n)
            }
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = tE.getSelectorFromElement(e);
            return t ? E(t)[0] : null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = E(this)
                  , i = n.data(w)
                  , r = o({}, A, n.data(), "object" == typeof t && t);
                if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1),
                i || (i = new e(this,r),
                n.data(w, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return A
            }
        }, ]),
        e
    }(),
    E(document).on(N.CLICK_DATA_API, P.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = E(this);
        E(tE.getSelectorFromElement(this)).each(function() {
            var e = E(this)
              , n = e.data(w) ? "toggle" : t.data();
            H._jQueryInterface.call(e, n)
        })
    }),
    E.fn[_] = H._jQueryInterface,
    E.fn[_].Constructor = H,
    E.fn[_].noConflict = function() {
        return E.fn[_] = S,
        H._jQueryInterface
    }
    ,
    H), tA = (R = t,
    q = "dropdown",
    W = "." + (M = "bs.dropdown"),
    B = ".data-api",
    F = R.fn[q],
    U = RegExp("38|40|27"),
    V = {
        HIDE: "hide" + W,
        HIDDEN: "hidden" + W,
        SHOW: "show" + W,
        SHOWN: "shown" + W,
        CLICK: "click" + W,
        CLICK_DATA_API: "click" + W + B,
        KEYDOWN_DATA_API: "keydown" + W + B,
        KEYUP_DATA_API: "keyup" + W + B
    },
    z = "disabled",
    K = "show",
    Q = "dropup",
    Y = "dropdown-menu-right",
    G = '[data-toggle="dropdown"]',
    X = ".dropdown-menu",
    Z = "bottom-start",
    J = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent"
    },
    ee = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)"
    },
    et = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !R(this._element).hasClass(z)) {
                var t = e._getParentFromElement(this._element)
                  , i = R(this._menu).hasClass(K);
                if (e._clearMenus(),
                !i) {
                    var r = {
                        relatedTarget: this._element
                    }
                      , o = R.Event(V.SHOW, r);
                    if (R(t).trigger(o),
                    !o.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === n)
                                throw TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var s = this._element;
                            R(t).hasClass(Q) && (R(this._menu).hasClass("dropdown-menu-left") || R(this._menu).hasClass(Y)) && (s = t),
                            "scrollParent" !== this._config.boundary && R(t).addClass("position-static"),
                            this._popper = new n(s,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === R(t).closest(".navbar-nav").length && R("body").children().on("mouseover", null, R.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        R(this._menu).toggleClass(K),
                        R(t).toggleClass(K).trigger(R.Event(V.SHOWN, r))
                    }
                }
            }
        }
        ,
        t.dispose = function() {
            R.removeData(this._element, M),
            R(this._element).off(W),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            R(this._element).on(V.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(e) {
            return e = o({}, this.constructor.Default, R(this._element).data(), e),
            tE.typeCheckConfig(q, e, this.constructor.DefaultType),
            e
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                this._menu = R(t).find(X)[0]
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var e = R(this._element).parent()
              , t = Z;
            return e.hasClass(Q) ? (t = "top-start",
            R(this._menu).hasClass(Y) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : R(this._menu).hasClass(Y) && (t = "bottom-end"),
            t
        }
        ,
        t._detectNavbar = function() {
            return R(this._element).closest(".navbar").length > 0
        }
        ,
        t._getPopperConfig = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}),
                t
            }
            : t.offset = this._config.offset,
            {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            }
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = R(this).data(M);
                if (n || (n = new e(this,"object" == typeof t ? t : null),
                R(this).data(M, n)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw TypeError('No method named "' + t + '"');
                    n[t]()
                }
            })
        }
        ,
        e._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var n = R.makeArray(R(G)), i = 0; i < n.length; i++) {
                    var r = e._getParentFromElement(n[i])
                      , o = R(n[i]).data(M)
                      , s = {
                        relatedTarget: n[i]
                    };
                    if (o) {
                        var a = o._menu;
                        if (R(r).hasClass(K) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && R.contains(r, t.target))) {
                            var l = R.Event(V.HIDE, s);
                            R(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && R("body").children().off("mouseover", null, R.noop),
                            n[i].setAttribute("aria-expanded", "false"),
                            R(a).removeClass(K),
                            R(r).removeClass(K).trigger(R.Event(V.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = tE.getSelectorFromElement(e);
            return n && (t = R(n)[0]),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || R(t.target).closest(X).length)) : U.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !R(this).hasClass(z))) {
                var n = e._getParentFromElement(this)
                  , i = R(n).hasClass(K);
                if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                    var r = R(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                    if (0 !== r.length) {
                        var o = r.indexOf(t.target);
                        38 === t.which && o > 0 && o--,
                        40 === t.which && o < r.length - 1 && o++,
                        o < 0 && (o = 0),
                        r[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var s = R(n).find(G)[0];
                        R(s).trigger("focus")
                    }
                    R(this).trigger("click")
                }
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return J
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ee
            }
        }, ]),
        e
    }(),
    R(document).on(V.KEYDOWN_DATA_API, G, et._dataApiKeydownHandler).on(V.KEYDOWN_DATA_API, X, et._dataApiKeydownHandler).on(V.CLICK_DATA_API + " " + V.KEYUP_DATA_API, et._clearMenus).on(V.CLICK_DATA_API, G, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        et._jQueryInterface.call(R(this), "toggle")
    }).on(V.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    R.fn[q] = et._jQueryInterface,
    R.fn[q].Constructor = et,
    R.fn[q].noConflict = function() {
        return R.fn[q] = F,
        et._jQueryInterface
    }
    ,
    et), tD = (en = t,
    er = "." + (ei = "bs.modal"),
    eo = en.fn.modal,
    es = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    ea = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    el = {
        HIDE: "hide" + er,
        HIDDEN: "hidden" + er,
        SHOW: "show" + er,
        SHOWN: "shown" + er,
        FOCUSIN: "focusin" + er,
        RESIZE: "resize" + er,
        CLICK_DISMISS: "click.dismiss" + er,
        KEYDOWN_DISMISS: "keydown.dismiss" + er,
        MOUSEUP_DISMISS: "mouseup.dismiss" + er,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + er,
        CLICK_DATA_API: "click" + er + ".data-api"
    },
    eu = "modal-open",
    ec = "fade",
    ef = "show",
    eh = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
    },
    ed = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = en(e).find(eh.DIALOG)[0],
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._originalBodyPadding = 0,
            this._scrollbarWidth = 0
        }
        var t = e.prototype;
        return t.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        t.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                tE.supportsTransitionEnd() && en(this._element).hasClass(ec) && (this._isTransitioning = !0);
                var n = en.Event(el.SHOW, {
                    relatedTarget: e
                });
                en(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                en(document.body).addClass(eu),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                en(this._element).on(el.CLICK_DISMISS, eh.DATA_DISMISS, function(e) {
                    return t.hide(e)
                }),
                en(this._dialog).on(el.MOUSEDOWN_DISMISS, function() {
                    en(t._element).one(el.MOUSEUP_DISMISS, function(e) {
                        en(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        t.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var n = en.Event(el.HIDE);
                if (en(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = tE.supportsTransitionEnd() && en(this._element).hasClass(ec);
                    i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    en(document).off(el.FOCUSIN),
                    en(this._element).removeClass(ef),
                    en(this._element).off(el.CLICK_DISMISS),
                    en(this._dialog).off(el.MOUSEDOWN_DISMISS),
                    i ? en(this._element).one(tE.TRANSITION_END, function(e) {
                        return t._hideModal(e)
                    }).emulateTransitionEnd(300) : this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            en.removeData(this._element, ei),
            en(window, document, this._element, this._backdrop).off(er),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(e) {
            return e = o({}, es, e),
            tE.typeCheckConfig("modal", e, ea),
            e
        }
        ,
        t._showElement = function(e) {
            var t = this
              , n = tE.supportsTransitionEnd() && en(this._element).hasClass(ec);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            n && tE.reflow(this._element),
            en(this._element).addClass(ef),
            this._config.focus && this._enforceFocus();
            var i = en.Event(el.SHOWN, {
                relatedTarget: e
            })
              , r = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                en(t._element).trigger(i)
            };
            n ? en(this._dialog).one(tE.TRANSITION_END, r).emulateTransitionEnd(300) : r()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            en(document).off(el.FOCUSIN).on(el.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === en(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? en(this._element).on(el.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || en(this._element).off(el.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? en(window).on(el.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : en(window).off(el.RESIZE)
        }
        ,
        t._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                en(document.body).removeClass(eu),
                e._resetAdjustments(),
                e._resetScrollbar(),
                en(e._element).trigger(el.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (en(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(e) {
            var t = this
              , n = en(this._element).hasClass(ec) ? ec : "";
            if (this._isShown && this._config.backdrop) {
                var i = tE.supportsTransitionEnd() && n;
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && en(this._backdrop).addClass(n),
                en(this._backdrop).appendTo(document.body),
                en(this._element).on(el.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                }),
                i && tE.reflow(this._backdrop),
                en(this._backdrop).addClass(ef),
                !e)
                    return;
                if (!i)
                    return void e();
                en(this._backdrop).one(tE.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
                en(this._backdrop).removeClass(ef);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                tE.supportsTransitionEnd() && en(this._element).hasClass(ec) ? en(this._backdrop).one(tE.TRANSITION_END, r).emulateTransitionEnd(150) : r()
            } else
                e && e()
        }
        ,
        t._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                en(eh.FIXED_CONTENT).each(function(t, n) {
                    var i = en(n)[0].style.paddingRight
                      , r = en(n).css("padding-right");
                    en(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                }),
                en(eh.STICKY_CONTENT).each(function(t, n) {
                    var i = en(n)[0].style.marginRight
                      , r = en(n).css("margin-right");
                    en(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                }),
                en(eh.NAVBAR_TOGGLER).each(function(t, n) {
                    var i = en(n)[0].style.marginRight
                      , r = en(n).css("margin-right");
                    en(n).data("margin-right", i).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                });
                var t = document.body.style.paddingRight
                  , n = en("body").css("padding-right");
                en("body").data("padding-right", t).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
            }
        }
        ,
        t._resetScrollbar = function() {
            en(eh.FIXED_CONTENT).each(function(e, t) {
                var n = en(t).data("padding-right");
                void 0 !== n && en(t).css("padding-right", n).removeData("padding-right")
            }),
            en(eh.STICKY_CONTENT + ", " + eh.NAVBAR_TOGGLER).each(function(e, t) {
                var n = en(t).data("margin-right");
                void 0 !== n && en(t).css("margin-right", n).removeData("margin-right")
            });
            var e = en("body").data("padding-right");
            void 0 !== e && en("body").css("padding-right", e).removeData("padding-right")
        }
        ,
        t._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(t, n) {
            return this.each(function() {
                var i = en(this).data(ei)
                  , r = o({}, e.Default, en(this).data(), "object" == typeof t && t);
                if (i || (i = new e(this,r),
                en(this).data(ei, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError('No method named "' + t + '"');
                    i[t](n)
                } else
                    r.show && i.show(n)
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return es
            }
        }, ]),
        e
    }(),
    en(document).on(el.CLICK_DATA_API, eh.DATA_TOGGLE, function(e) {
        var t, n = this, i = tE.getSelectorFromElement(this);
        i && (t = en(i)[0]);
        var r = en(t).data(ei) ? "toggle" : o({}, en(t).data(), en(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = en(t).one(el.SHOW, function(e) {
            e.isDefaultPrevented() || s.one(el.HIDDEN, function() {
                en(n).is(":visible") && n.focus()
            })
        });
        ed._jQueryInterface.call(en(t), r, this)
    }),
    en.fn.modal = ed._jQueryInterface,
    en.fn.modal.Constructor = ed,
    en.fn.modal.noConflict = function() {
        return en.fn.modal = eo,
        ed._jQueryInterface
    }
    ,
    ed), tN = (ep = t,
    eg = "tooltip",
    ev = "." + (em = "bs.tooltip"),
    ey = ep.fn[eg],
    e$ = RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    eb = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
    },
    e8 = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    },
    eC = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    },
    eT = "show",
    eE = {
        HIDE: "hide" + ev,
        HIDDEN: "hidden" + ev,
        SHOW: "show" + ev,
        SHOWN: "shown" + ev,
        INSERTED: "inserted" + ev,
        CLICK: "click" + ev,
        FOCUSIN: "focusin" + ev,
        FOCUSOUT: "focusout" + ev,
        MOUSEENTER: "mouseenter" + ev,
        MOUSELEAVE: "mouseleave" + ev
    },
    e_ = "fade",
    ew = "show",
    ex = "hover",
    eS = "focus",
    eA = function() {
        function e(e, t) {
            if (void 0 === n)
                throw TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var t = e.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(e) {
            if (this._isEnabled) {
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = ep(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    ep(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (ep(this.getTipElement()).hasClass(ew))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
            }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            ep.removeData(this.element, this.constructor.DATA_KEY),
            ep(this.element).off(this.constructor.EVENT_KEY),
            ep(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && ep(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            null !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var t = this;
            if ("none" === ep(this.element).css("display"))
                throw Error("Please use show on visible elements");
            var i = ep.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                ep(this.element).trigger(i);
                var r = ep.contains(this.element.ownerDocument.documentElement, this.element);
                if (i.isDefaultPrevented() || !r)
                    return;
                var o = this.getTipElement()
                  , s = tE.getUID(this.constructor.NAME);
                o.setAttribute("id", s),
                this.element.setAttribute("aria-describedby", s),
                this.setContent(),
                this.config.animation && ep(o).addClass(e_);
                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , l = this._getAttachment(a);
                this.addAttachmentClass(l);
                var u = !1 === this.config.container ? document.body : ep(this.config.container);
                ep(o).data(this.constructor.DATA_KEY, this),
                ep.contains(this.element.ownerDocument.documentElement, this.tip) || ep(o).appendTo(u),
                ep(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new n(this.element,o,{
                    placement: l,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        t._handlePopperPlacementChange(e)
                    }
                }),
                ep(o).addClass(ew),
                "ontouchstart"in document.documentElement && ep("body").children().on("mouseover", null, ep.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    ep(t.element).trigger(t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t)
                };
                tE.supportsTransitionEnd() && ep(this.tip).hasClass(e_) ? ep(this.tip).one(tE.TRANSITION_END, c).emulateTransitionEnd(e._TRANSITION_DURATION) : c()
            }
        }
        ,
        t.hide = function(e) {
            var t = this
              , n = this.getTipElement()
              , i = ep.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== eT && n.parentNode && n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                ep(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            ep(this.element).trigger(i),
            i.isDefaultPrevented() || (ep(n).removeClass(ew),
            "ontouchstart"in document.documentElement && ep("body").children().off("mouseover", null, ep.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger[eS] = !1,
            this._activeTrigger[ex] = !1,
            tE.supportsTransitionEnd() && ep(this.tip).hasClass(e_) ? ep(n).one(tE.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
            this._hoverState = "")
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(e) {
            ep(this.getTipElement()).addClass("bs-tooltip-" + e)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || ep(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var e = ep(this.getTipElement());
            this.setElementContent(e.find(".tooltip-inner"), this.getTitle()),
            e.removeClass(e_ + " " + ew)
        }
        ,
        t.setElementContent = function(e, t) {
            var n = this.config.html;
            "object" == typeof t && (t.nodeType || t.jquery) ? n ? ep(t).parent().is(e) || e.empty().append(t) : e.text(ep(t).text()) : e[n ? "html" : "text"](t)
        }
        ,
        t.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        t._getAttachment = function(e) {
            return e8[e.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    ep(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== t) {
                    var n = t === ex ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , i = t === ex ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    ep(e.element).on(n, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(i, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
                ep(e.element).closest(".modal").on("hide.bs.modal", function() {
                    return e.hide()
                })
            }),
            this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || ep(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            ep(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? eS : ex] = !0),
            ep(t.getTipElement()).hasClass(ew) || t._hoverState === eT ? t._hoverState = eT : (clearTimeout(t._timeout),
            t._hoverState = eT,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === eT && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        t._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || ep(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            ep(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? eS : ex] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = "out",
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(e) {
            return "number" == typeof (e = o({}, this.constructor.Default, ep(this.element).data(), e)).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            tE.typeCheckConfig(eg, e, this.constructor.DefaultType),
            e
        }
        ,
        t._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        t._cleanTipClass = function() {
            var e = ep(this.getTipElement())
              , t = e.attr("class").match(e$);
            null !== t && t.length > 0 && e.removeClass(t.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(e) {
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        t._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (ep(e).removeClass(e_),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = ep(this).data(em);
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this,"object" == typeof t && t),
                ep(this).data(em, n)),
                "string" == typeof t)) {
                    if (void 0 === n[t])
                        throw TypeError('No method named "' + t + '"');
                    n[t]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return eC
            }
        }, {
            key: "NAME",
            get: function() {
                return eg
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return em
            }
        }, {
            key: "Event",
            get: function() {
                return eE
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ev
            }
        }, {
            key: "DefaultType",
            get: function() {
                return eb
            }
        }, ]),
        e
    }(),
    ep.fn[eg] = eA._jQueryInterface,
    ep.fn[eg].Constructor = eA,
    ep.fn[eg].noConflict = function() {
        return ep.fn[eg] = ey,
        eA._jQueryInterface
    }
    ,
    eA), tI = (eD = t,
    eN = "popover",
    ek = "." + (eI = "bs.popover"),
    eO = eD.fn[eN],
    eL = RegExp("(^|\\s)bs-popover\\S+", "g"),
    ej = o({}, tN.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    eP = o({}, tN.DefaultType, {
        content: "(string|element|function)"
    }),
    eH = {
        HIDE: "hide" + ek,
        HIDDEN: "hidden" + ek,
        SHOW: "show" + ek,
        SHOWN: "shown" + ek,
        INSERTED: "inserted" + ek,
        CLICK: "click" + ek,
        FOCUSIN: "focusin" + ek,
        FOCUSOUT: "focusout" + ek,
        MOUSEENTER: "mouseenter" + ek,
        MOUSELEAVE: "mouseleave" + ek
    },
    eR = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        i = e,
        (n = t).prototype = Object.create(i.prototype),
        n.prototype.constructor = n,
        n.__proto__ = i;
        var n, i, o = t.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(e) {
            eD(this.getTipElement()).addClass("bs-popover-" + e)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || eD(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var e = eD(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(".popover-body"), t),
            e.removeClass("fade show")
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var e = eD(this.getTipElement())
              , t = e.attr("class").match(eL);
            null !== t && t.length > 0 && e.removeClass(t.join(""))
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = eD(this).data(eI);
                if ((n || !/destroy|hide/.test(e)) && (n || (n = new t(this,"object" == typeof e ? e : null),
                eD(this).data(eI, n)),
                "string" == typeof e)) {
                    if (void 0 === n[e])
                        throw TypeError('No method named "' + e + '"');
                    n[e]()
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return ej
            }
        }, {
            key: "NAME",
            get: function() {
                return eN
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return eI
            }
        }, {
            key: "Event",
            get: function() {
                return eH
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ek
            }
        }, {
            key: "DefaultType",
            get: function() {
                return eP
            }
        }, ]),
        t
    }(tN),
    eD.fn[eN] = eR._jQueryInterface,
    eD.fn[eN].Constructor = eR,
    eD.fn[eN].noConflict = function() {
        return eD.fn[eN] = eO,
        eR._jQueryInterface
    }
    ,
    eR), tk = (eq = t,
    eM = "scrollspy",
    eB = "." + (eW = "bs.scrollspy"),
    e0 = eq.fn[eM],
    eF = {
        offset: 10,
        method: "auto",
        target: ""
    },
    eU = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    e1 = {
        ACTIVATE: "activate" + eB,
        SCROLL: "scroll" + eB,
        LOAD_DATA_API: "load" + eB + ".data-api"
    },
    eV = "active",
    ez = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
    e9 = "position",
    eK = function() {
        function e(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + ez.NAV_LINKS + "," + this._config.target + " " + ez.LIST_ITEMS + "," + this._config.target + " " + ez.DROPDOWN_ITEMS,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            eq(this._scrollElement).on(e1.SCROLL, function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var t = e.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? "offset" : e9
              , n = "auto" === this._config.method ? t : this._config.method
              , i = n === e9 ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            eq.makeArray(eq(this._selector)).map(function(e) {
                var t, r = tE.getSelectorFromElement(e);
                if (r && (t = eq(r)[0]),
                t) {
                    var o = t.getBoundingClientRect();
                    if (o.width || o.height)
                        return [eq(t)[n]().top + i, r]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            eq.removeData(this._element, eW),
            eq(this._scrollElement).off(eB),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(e) {
            if ("string" != typeof (e = o({}, eF, e)).target) {
                var t = eq(e.target).attr("id");
                t || (t = tE.getUID(eM),
                eq(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return tE.typeCheckConfig(eM, e, eU),
            e
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            e >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; )
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",")
              , n = eq((t = t.map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })).join(","));
            n.hasClass("dropdown-item") ? (n.closest(ez.DROPDOWN).find(ez.DROPDOWN_TOGGLE).addClass(eV),
            n.addClass(eV)) : (n.addClass(eV),
            n.parents(ez.NAV_LIST_GROUP).prev(ez.NAV_LINKS + ", " + ez.LIST_ITEMS).addClass(eV),
            n.parents(ez.NAV_LIST_GROUP).prev(ez.NAV_ITEMS).children(ez.NAV_LINKS).addClass(eV)),
            eq(this._scrollElement).trigger(e1.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            eq(this._selector).filter(ez.ACTIVE).removeClass(eV)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = eq(this).data(eW);
                if (n || (n = new e(this,"object" == typeof t && t),
                eq(this).data(eW, n)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw TypeError('No method named "' + t + '"');
                    n[t]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, {
            key: "Default",
            get: function() {
                return eF
            }
        }, ]),
        e
    }(),
    eq(window).on(e1.LOAD_DATA_API, function() {
        for (var e = eq.makeArray(eq(ez.DATA_SPY)), t = e.length; t--; ) {
            var n = eq(e[t]);
            eK._jQueryInterface.call(n, n.data())
        }
    }),
    eq.fn[eM] = eK._jQueryInterface,
    eq.fn[eM].Constructor = eK,
    eq.fn[eM].noConflict = function() {
        return eq.fn[eM] = e0,
        eK._jQueryInterface
    }
    ,
    eK), tO = (e2 = t,
    eY = "." + (eQ = "bs.tab"),
    e3 = e2.fn.tab,
    e7 = {
        HIDE: "hide" + eY,
        HIDDEN: "hidden" + eY,
        SHOW: "show" + eY,
        SHOWN: "shown" + eY,
        CLICK_DATA_API: "click.bs.tab.data-api"
    },
    eG = "active",
    e4 = "show",
    eX = ".active",
    e5 = "> li > .active",
    e6 = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e2(this._element).hasClass(eG) || e2(this._element).hasClass("disabled"))) {
                var t, n, i = e2(this._element).closest(".nav, .list-group")[0], r = tE.getSelectorFromElement(this._element);
                if (i) {
                    var o = "UL" === i.nodeName ? e5 : eX;
                    n = (n = e2.makeArray(e2(i).find(o)))[n.length - 1]
                }
                var s = e2.Event(e7.HIDE, {
                    relatedTarget: this._element
                })
                  , a = e2.Event(e7.SHOW, {
                    relatedTarget: n
                });
                if (n && e2(n).trigger(s),
                e2(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (t = e2(r)[0]),
                    this._activate(this._element, i);
                    var l = function() {
                        var t = e2.Event(e7.HIDDEN, {
                            relatedTarget: e._element
                        })
                          , i = e2.Event(e7.SHOWN, {
                            relatedTarget: n
                        });
                        e2(n).trigger(t),
                        e2(e._element).trigger(i)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            e2.removeData(this._element, eQ),
            this._element = null
        }
        ,
        t._activate = function(e, t, n) {
            var i = this
              , r = ("UL" === t.nodeName ? e2(t).find(e5) : e2(t).children(eX))[0]
              , o = n && tE.supportsTransitionEnd() && r && e2(r).hasClass("fade")
              , s = function() {
                return i._transitionComplete(e, r, n)
            };
            r && o ? e2(r).one(tE.TRANSITION_END, s).emulateTransitionEnd(150) : s()
        }
        ,
        t._transitionComplete = function(e, t, n) {
            if (t) {
                e2(t).removeClass(e4 + " " + eG);
                var i = e2(t.parentNode).find("> .dropdown-menu .active")[0];
                i && e2(i).removeClass(eG),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (e2(e).addClass(eG),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            tE.reflow(e),
            e2(e).addClass(e4),
            e.parentNode && e2(e.parentNode).hasClass("dropdown-menu")) {
                var r = e2(e).closest(".dropdown")[0];
                r && e2(r).find(".dropdown-toggle").addClass(eG),
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var n = e2(this)
                  , i = n.data(eQ);
                if (i || (i = new e(this),
                n.data(eQ, i)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }, ]),
        e
    }(),
    e2(document).on(e7.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        e6._jQueryInterface.call(e2(this), "show")
    }),
    e2.fn.tab = e6._jQueryInterface,
    e2.fn.tab.Constructor = e6,
    e2.fn.tab.noConflict = function() {
        return e2.fn.tab = e3,
        e6._jQueryInterface
    }
    ,
    e6);
    (function(e) {
        if (void 0 === e)
            throw TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
            throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }
    )(t),
    e.Util = tE,
    e.Alert = t_,
    e.Button = tw,
    e.Carousel = tx,
    e.Collapse = tS,
    e.Dropdown = tA,
    e.Modal = tD,
    e.Popover = tI,
    e.Scrollspy = tk,
    e.Tab = tO,
    e.Tooltip = tN,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n || (this.attr("novalidate", "novalidate"),
            n = new e.validator(t,this[0]),
            e.data(this[0], "validator", n),
            n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                n.submitButton = t.currentTarget,
                e(this).hasClass("cancel") && (n.cancelSubmit = !0),
                void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(t) {
                function i() {
                    var i, r;
                    return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),
                    !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t),
                    i && i.remove(),
                    void 0 !== r && r)
                }
                return n.settings.debug && t.preventDefault(),
                n.cancelSubmit ? (n.cancelSubmit = !1,
                i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0,
                !1) : i() : (n.focusInvalid(),
                !1)
            }))),
            n
        },
        valid: function() {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [],
            t = !0,
            n = e(this[0].form).validate(),
            this.each(function() {
                (t = n.element(this) && t) || (i = i.concat(n.errorList))
            }),
            n.errorList = i),
            t
        },
        rules: function(t, n) {
            var i, r, o, s, a, l, u = this[0];
            if (null != u && (!u.form && u.hasAttribute("contenteditable") && (u.form = this.closest("form")[0],
            u.name = this.attr("name")),
            null != u.form)) {
                if (t)
                    switch (r = (i = e.data(u.form, "validator").settings).rules,
                    o = e.validator.staticRules(u),
                    t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(n)),
                        delete o.messages,
                        r[u.name] = o,
                        n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {},
                        e.each(n.split(/\s/), function(e, t) {
                            l[t] = o[t],
                            delete o[t]
                        }),
                        l) : (delete r[u.name],
                        o)
                    }
                return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (a = s.required,
                delete s.required,
                s = e.extend({
                    required: a
                }, s)),
                s.remote && (a = s.remote,
                delete s.remote,
                s = e.extend(s, {
                    remote: a
                })),
                s
            }
        }
    }),
    e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var n = e(t).val();
            return null !== n && !!e.trim("" + n)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }),
    e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t),
        this.currentForm = n,
        this.init()
    }
    ,
    e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t),
            e.validator.format.apply(this, n)
        }
        : (void 0 === n || (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)),
        n.constructor !== Array && (n = [n]),
        e.each(n, function(e, n) {
            t = t.replace(RegExp("\\{" + e + "\\}", "g"), function() {
                return n
            })
        })),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, n) {
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0],
                    this.name = e(this).attr("name"));
                    var n = e.data(this.form, "validator")
                      , i = "on" + t.type.replace(/^validate/, "")
                      , r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n, i = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)),
                    e.each(n, function(e, n) {
                        i[n] = t
                    })
                }),
                n = this.settings.rules,
                e.each(n, function(t, i) {
                    n[t] = e.validator.normalizeRule(i)
                }),
                e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var n, i, r = this.clean(t), o = this.validationTargetFor(r), s = this, a = !0;
                return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o),
                this.currentElements = e(o),
                (i = this.groups[o.name]) && e.each(this.groups, function(e, t) {
                    t === i && e !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r),
                    a = s.check(r) && a)
                }),
                n = !1 !== this.check(o),
                a = a && n,
                n ? this.invalid[o.name] = !1 : this.invalid[o.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                e(t).attr("aria-invalid", !n)),
                a
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t),
                    this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    }),
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                else
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e)
                    void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""),
                this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || e(this).attr("name");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0],
                    this.name = i),
                    !(i in n || !t.objectLength(e(this).rules())) && (n[i] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n, i, r = e(t), o = t.type;
                return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(),
                "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, o, s = e(t).rules(), a = e.map(s, function(e, t) {
                    return t
                }).length, l = !1, u = this.elementValue(t);
                if ("function" == typeof s.normalizer ? o = s.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer),
                o) {
                    if ("string" != typeof (u = o.call(t, u)))
                        throw TypeError("The normalizer should return a string value.");
                    delete s.normalizer
                }
                for (i in s) {
                    r = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if (n = e.validator.methods[i].call(this, u, t, r.parameters),
                        "dependency-mismatch" === n && 1 === a) {
                            l = !0;
                            continue
                        }
                        if (l = !1,
                        "pending" === n)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n)
                            return this.formatAndAdd(t, r),
                            !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", c),
                        c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."),
                        c
                    }
                }
                if (!l)
                    return this.objectLength(s) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(t, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)),
                i
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++)
                    n = this.errorList[e],
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var i, r, o, s, a = this.errorsFor(t), l = this.idOrName(t), u = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                a.html(n)) : (i = a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""),
                this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t),
                a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"),
                u ? u.match(RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (u += " " + o) : u = o,
                e(t).attr("aria-describedby", u),
                (r = this.groups[t.name]) && (s = this,
                e.each(s.groups, function(t, n) {
                    n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                })))),
                !n && this.settings.success && (a.text(""),
                "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)),
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(t) {
                var n = this.escapeCssMeta(this.idOrName(t))
                  , i = e(t).attr("aria-describedby")
                  , r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")),
                this.errors().filter(r)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", n).length;
                case "input":
                    if (this.checkable(n))
                        return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                e(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                e(t).removeClass(this.settings.pendingClass),
                n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, n) {
                return n = "string" == typeof n && n || "remote",
                e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {}
              , i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }),
            n
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && isNaN(i = Number(i)) && (i = void 0),
            i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(t) {
            var n, i, r = {}, o = e(t), s = t.getAttribute("type");
            for (n in e.validator.methods)
                "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0),
                i = !!i) : i = o.attr(n),
                this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(t) {
            var n, i, r = {}, o = e(t), s = t.getAttribute("type");
            for (n in e.validator.methods)
                i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()),
                this.normalizeAttributeRule(r, s, n, i);
            return r
        },
        staticRules: function(t) {
            var n = {}
              , i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(i, r) {
                if (!1 === r)
                    return void delete t[i];
                if (r.param || r.depends) {
                    var o = !0;
                    switch (typeof r.depends) {
                    case "string":
                        o = !!e(r.depends, n.form).length;
                        break;
                    case "function":
                        o = r.depends.call(n, n)
                    }
                    o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)),
                    delete t[i])
                }
            }),
            e.each(t, function(i, r) {
                t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r
            }),
            e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(n[0]), Number(n[1])]))
            }),
            e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }),
                t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n,
            e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t],
            n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n))
                    return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i
            },
            maxlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r <= i
            },
            rangelength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(t, n, i) {
                var r, o = e(n).attr("type"), s = RegExp("\\b" + o + "\\b"), a = o && !s.test("text,number,range"), l = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, u = function(e) {
                    return Math.round(e * Math.pow(10, r))
                }, c = !0;
                if (a)
                    throw Error("Step attribute on input type " + o + " is not supported.");
                return r = l(i),
                (l(t) > r || u(t) % u(i) != 0) && (c = !1),
                this.optional(n) || c
            },
            equalTo: function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(n).valid()
                }),
                t === r.val()
            },
            remote: function(t, n, i, r) {
                if (this.optional(n))
                    return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var o, s, a, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                l.originalMessage = l.originalMessage || this.settings.messages[n.name][r],
                this.settings.messages[n.name][r] = l.message,
                i = "string" == typeof i && {
                    url: i
                } || i,
                a = e.param(e.extend({
                    data: t
                }, i.data)),
                l.old === a ? l.valid : (l.old = a,
                o = this,
                this.startRequest(n),
                (s = {})[n.name] = t,
                e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: o.currentForm,
                    success: function(e) {
                        var i, s, a, u = !0 === e || "true" === e;
                        o.settings.messages[n.name][r] = l.originalMessage,
                        u ? (a = o.formSubmitted,
                        o.resetInternals(),
                        o.toHide = o.errorsFor(n),
                        o.formSubmitted = a,
                        o.successList.push(n),
                        o.invalid[n.name] = !1,
                        o.showErrors()) : (i = {},
                        s = e || o.defaultMessage(n, {
                            method: r,
                            parameters: t
                        }),
                        i[n.name] = l.message = s,
                        o.invalid[n.name] = !0,
                        o.showErrors(i)),
                        l.valid = u,
                        o.stopRequest(n, u)
                    }
                }, i)),
                "pending")
            }
        }
    });
    var t, n = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
        var r = e.port;
        "abort" === e.mode && (n[r] && n[r].abort(),
        n[r] = i)
    }) : (t = e.ajax,
    e.ajax = function(i) {
        var r = ("mode"in i ? i : e.ajaxSettings).mode,
         o = ("port"in i ? i : e.ajaxSettings).port;
        return "abort" === r ? (n[o] && n[o].abort(),
        n[o] = t.apply(this, arguments),
        n[o]) : t.apply(this, arguments)
    }
    ),
    e
}),
$("document").ready(function() {
    var e;
    $(document).on("click", "#removeCatch", function() {
        $("#removeCatch").html("Please Wait..");
        var e = {
            path: window.location.href,
            _csrf_: $("#csrf").attr("value")
        };
        $.ajax({
            type: "POST",
            url: "job/rm-cache",
            data: e,
            success: function(e) {
                1 == e && window.location.reload()
            }
        })
    }),
    e = {
        resctl: window.location.href,
        _csrf_: $("#csrf").attr("value")
    },
    $.ajax({
        type: "POST",
        url: "job/resctl",
        data: e,
        success: function(e) {
            403 == e ? ($("#resctl").hide(),
            $("#resctl").html("")) : ($("#resctl").show(),
            $("#resctl").html(e))
        }
    })
});
var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
$(document).ready(function() {
    $('#sort_relevance').change(function() {
        var s = $(this).val();
        var url = window.location.href;
        var sign = (url.indexOf("?") > 0) ? '&' : '?';

        if (url.indexOf("?") > 0) {

            a = new URL(window.location.href);
            if (a.searchParams.get('sort') != null) {

                a.searchParams.set("sort", s);
                var newUrl = a.href;
                window.location.href = newUrl;

            } else {
                window.location.href = url + '&sort=' + s;
            }

        } else {
            window.location.href = url + '?sort=' + s;
        }

    });
});

// const firebaseConfig = {
//     apiKey: "AIzaSyD9j6lbZIwRyjt2JDgQn8qb5HBeEzJwf0Y",
//     authDomain: "agj-web-push-notification.firebaseapp.com",
//     projectId: "agj-web-push-notification",
//     storageBucket: "agj-web-push-notification.appspot.com",
//     messagingSenderId: "965290381490",
//     appId: "1:965290381490:web:f0de7b2b7c62f29115f9ab",
//     measurementId: "G-0ZYZT2TBSC"
// };


// databse config.
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BF-1ok6r9diLJYftkYCUyjjb7glJw_kCKxI0LKMXmBwZ1kDQ1cA4zL-FgnL5JKQrXwixYtHlhfFv2ddQxjoQWeU");

// Notification.requestPermission().then((permission)=>{
//     if (permission === 'granted') {
//         messaging.getToken().then((currentToken)=>{
//             saveToken(currentToken);
//         }
//         );
//     } else {
//         console.log('Unable to get permission to notify.');
//     }
// }
// );

// function saveToken(currentToken) {
//     $.ajax({
//         data: {
//             "token": currentToken,
//             "page": window.location.href,
//             '_csrf_': csrf
//         },
//         type: "post",
//         url: "save-token",
//         success: function(res) {
//             console.log(res);
//         }
//     });
// }

messaging.onMessage((payload)=>{
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon,
        data: {
            time: new Date(Date.now()).toString(),
            click_action: payload.data.click_action
        }
    };

    var myNotification = new Notification(notificationTitle,notificationOptions);
}
);

$(document).ready(function() {
    var updateFollow = function(res) {
        if (res.status == 200) {
            $('.follow-post').html(res.message);
        }
    };

    if (typeof sc !== "undefined") {
        var ajaxOptions = {
            type: 'POST',
            data: {
                'label': sc.label,
                'target': sc.target
            },
            url: 'job/follow',
            dataType: 'json',
            success: updateFollow
        };
        $.ajax(ajaxOptions);
    }

});

$(document).ready(function() {
    $('body').on('click', '#follow_post', function() {
        var updateFollow = function(res) {
            if (res.status == 200) {
                $('.follow-post').html(res.message);
            } else {
                window.location.href = 'login';
            }
        };

        if (typeof sc !== "undefined") {

            var followOptions = {
                type: 'POST',
                data: {
                    'label': sc.label,
                    'target': sc.target,
                    'action': 'following'
                },
                url: 'job/follow',
                dataType: 'json',
                success: updateFollow
            };
            $.ajax(followOptions);
        }
    });
});
var recent = 0;
function _rtview() {

    if (typeof sc !== "undefined") {
        var followOptions = {
            type: 'POST',
            data: {
                'label': sc.label,
                'target': sc.target
            },
            url: 'job/recent',
            dataType: 'text',
        };
        $.ajax(followOptions);
    }
}
$(document).ready(function() {
    $.get("comment-form", function(data, status) {
        $('#comment-section').html(data);
    });

    function amountscrolled() {
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop / trackLength * 100)
        if (pctScrolled >= 20) {
            if (recent == 0) {
                _rtview();
                window.recent = 1;
            }
        }
    }

    $(window).on("scroll", function() {
        amountscrolled()
    })
});

window.onload = function() {
    if (!document.hidden) {
        setTimeout(loadAfterTime, 5000)
    }
}
;

function loadAfterTime() {
    if (recent == 0) {
        _rtview();
        window.recent = 1;
    }
}
//if(localStorage.getItem("agjosms")!=utc){function loadAfterTime(){$("#jobssubscribe").modal("show")}window.onload=function(){setTimeout(loadAfterTime,1e4)},localStorage.setItem("agjosms",utc)}

// $(document).ready(function() {
// 	const installButton = document.getElementById("install_button");
// 	installButton.addEventListener("click", installApp);
// });
