!(function (n) {
  var a = {};
  function i(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = n),
    (i.c = a),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 3));
})([
  ,
  ,
  ,
  function (F, e, D) {
    (function (e) {
      var t,
        n,
        a,
        d =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        b = (function () {
          var l = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            P = (d.Prism = {
              manual: d.Prism && d.Prism.manual,
              disableWorkerMessageHandler:
                d.Prism && d.Prism.disableWorkerMessageHandler,
              util: {
                encode: function (e) {
                  return e instanceof o
                    ? new o(e.type, P.util.encode(e.content), e.alias)
                    : "Array" === P.util.type(e)
                    ? e.map(P.util.encode)
                    : e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function (e, n) {
                  var t = P.util.type(e);
                  switch (((n = n || {}), t)) {
                    case "Object":
                      if (n[P.util.objId(e)]) return n[P.util.objId(e)];
                      var a = {};
                      for (var i in ((n[P.util.objId(e)] = a), e))
                        e.hasOwnProperty(i) && (a[i] = P.util.clone(e[i], n));
                      return a;
                    case "Array":
                      if (n[P.util.objId(e)]) return n[P.util.objId(e)];
                      a = [];
                      return (
                        (n[P.util.objId(e)] = a),
                        e.forEach(function (e, t) {
                          a[t] = P.util.clone(e, n);
                        }),
                        a
                      );
                  }
                  return e;
                },
              },
              languages: {
                extend: function (e, t) {
                  var n = P.util.clone(P.languages[e]);
                  for (var a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (n, e, t, a) {
                  var i = (a = a || P.languages)[n],
                    r = {};
                  for (var o in i)
                    if (i.hasOwnProperty(o)) {
                      if (o == e)
                        for (var s in t) t.hasOwnProperty(s) && (r[s] = t[s]);
                      t.hasOwnProperty(o) || (r[o] = i[o]);
                    }
                  var l = a[n];
                  return (
                    (a[n] = r),
                    P.languages.DFS(P.languages, function (e, t) {
                      t === l && e != n && (this[e] = r);
                    }),
                    r
                  );
                },
                DFS: function (e, t, n, a) {
                  for (var i in ((a = a || {}), e))
                    e.hasOwnProperty(i) &&
                      (t.call(e, i, e[i], n || i),
                      "Object" !== P.util.type(e[i]) || a[P.util.objId(e[i])]
                        ? "Array" !== P.util.type(e[i]) ||
                          a[P.util.objId(e[i])] ||
                          ((a[P.util.objId(e[i])] = !0),
                          P.languages.DFS(e[i], t, i, a))
                        : ((a[P.util.objId(e[i])] = !0),
                          P.languages.DFS(e[i], t, null, a)));
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                P.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var a = {
                  callback: n,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                P.hooks.run("before-highlightall", a);
                for (
                  var i,
                    r = a.elements || e.querySelectorAll(a.selector),
                    o = 0;
                  (i = r[o++]);

                )
                  P.highlightElement(i, !0 === t, a.callback);
              },
              highlightElement: function (e, t, n) {
                for (var a, i, r = e; r && !l.test(r.className); )
                  r = r.parentNode;
                r &&
                  ((a = (r.className.match(l) || [, ""])[1].toLowerCase()),
                  (i = P.languages[a])),
                  (e.className =
                    e.className.replace(l, "").replace(/\s+/g, " ") +
                    " language-" +
                    a),
                  e.parentNode &&
                    ((r = e.parentNode),
                    /pre/i.test(r.nodeName) &&
                      (r.className =
                        r.className.replace(l, "").replace(/\s+/g, " ") +
                        " language-" +
                        a));
                var o,
                  s = {
                    element: e,
                    language: a,
                    grammar: i,
                    code: e.textContent,
                  };
                if (
                  (P.hooks.run("before-sanity-check", s), !s.code || !s.grammar)
                )
                  return (
                    s.code &&
                      (P.hooks.run("before-highlight", s),
                      (s.element.textContent = s.code),
                      P.hooks.run("after-highlight", s)),
                    void P.hooks.run("complete", s)
                  );
                P.hooks.run("before-highlight", s),
                  t && d.Worker
                    ? (((o = new Worker(P.filename)).onmessage = function (e) {
                        (s.highlightedCode = e.data),
                          P.hooks.run("before-insert", s),
                          (s.element.innerHTML = s.highlightedCode),
                          P.hooks.run("after-highlight", s),
                          P.hooks.run("complete", s),
                          n && n.call(s.element);
                      }),
                      o.postMessage(
                        JSON.stringify({
                          language: s.language,
                          code: s.code,
                          immediateClose: !0,
                        })
                      ))
                    : ((s.highlightedCode = P.highlight(
                        s.code,
                        s.grammar,
                        s.language
                      )),
                      P.hooks.run("before-insert", s),
                      (s.element.innerHTML = s.highlightedCode),
                      P.hooks.run("after-highlight", s),
                      P.hooks.run("complete", s),
                      n && n.call(e));
              },
              highlight: function (e, t, n) {
                var a = { code: e, grammar: t, language: n };
                return (
                  P.hooks.run("before-tokenize", a),
                  (a.tokens = P.tokenize(a.code, a.grammar)),
                  P.hooks.run("after-tokenize", a),
                  o.stringify(P.util.encode(a.tokens), a.language)
                );
              },
              matchGrammar: function (e, t, n, a, i, r, o) {
                var s = P.Token;
                for (var l in n)
                  if (n.hasOwnProperty(l) && n[l]) {
                    if (l == o) return;
                    for (
                      var d = n[l],
                        d = "Array" === P.util.type(d) ? d : [d],
                        c = 0;
                      c < d.length;
                      ++c
                    ) {
                      var u,
                        p = d[c],
                        g = p.inside,
                        m = !!p.lookbehind,
                        f = !!p.greedy,
                        b = 0,
                        h = p.alias;
                      f &&
                        !p.pattern.global &&
                        ((u = p.pattern.toString().match(/[imuy]*$/)[0]),
                        (p.pattern = RegExp(p.pattern.source, u + "g"))),
                        (p = p.pattern || p);
                      for (
                        var y = a, v = i;
                        y < t.length;
                        v += t[y].length, ++y
                      ) {
                        var w = t[y];
                        if (t.length > e.length) return;
                        if (!(w instanceof s)) {
                          if (f && y != t.length - 1) {
                            if (((p.lastIndex = v), !(L = p.exec(e)))) break;
                            for (
                              var k = L.index + (m ? L[1].length : 0),
                                S = L.index + L[0].length,
                                x = y,
                                A = v,
                                E = t.length;
                              x < E &&
                              (A < S || (!t[x].type && !t[x - 1].greedy));
                              ++x
                            )
                              (A += t[x].length) <= k && (++y, (v = A));
                            if (t[y] instanceof s) continue;
                            (C = x - y), (w = e.slice(v, A)), (L.index -= v);
                          } else {
                            p.lastIndex = 0;
                            var L = p.exec(w),
                              C = 1;
                          }
                          if (L) {
                            m && (b = L[1] ? L[1].length : 0);
                            var S =
                                (k = L.index + b) + (L = L[0].slice(b)).length,
                              _ = w.slice(0, k),
                              T = w.slice(S),
                              I = [y, C];
                            _ && (++y, (v += _.length), I.push(_));
                            var R = new s(l, g ? P.tokenize(L, g) : L, h, L, f);
                            if (
                              (I.push(R),
                              T && I.push(T),
                              Array.prototype.splice.apply(t, I),
                              1 != C && P.matchGrammar(e, t, n, y, v, !0, l),
                              r)
                            )
                              break;
                          } else if (r) break;
                        }
                      }
                    }
                  }
              },
              tokenize: function (e, t) {
                var n = [e],
                  a = t.rest;
                if (a) {
                  for (var i in a) t[i] = a[i];
                  delete t.rest;
                }
                return P.matchGrammar(e, n, t, 0, 0, !1), n;
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = P.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = P.hooks.all[e];
                  if (n && n.length) for (var a, i = 0; (a = n[i++]); ) a(t);
                },
              },
            }),
            o = (P.Token = function (e, t, n, a, i) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (a || "").length),
                (this.greedy = !!i);
            });
          if (
            ((o.stringify = function (t, n, e) {
              if ("string" == typeof t) return t;
              if ("Array" === P.util.type(t))
                return t
                  .map(function (e) {
                    return o.stringify(e, n, t);
                  })
                  .join("");
              var a,
                i = {
                  type: t.type,
                  content: o.stringify(t.content, n, e),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                  parent: e,
                };
              t.alias &&
                ((a = "Array" === P.util.type(t.alias) ? t.alias : [t.alias]),
                Array.prototype.push.apply(i.classes, a)),
                P.hooks.run("wrap", i);
              var r = Object.keys(i.attributes)
                .map(function (e) {
                  return (
                    e +
                    '="' +
                    (i.attributes[e] || "").replace(/"/g, "&quot;") +
                    '"'
                  );
                })
                .join(" ");
              return (
                "<" +
                i.tag +
                ' class="' +
                i.classes.join(" ") +
                '"' +
                (r ? " " + r : "") +
                ">" +
                i.content +
                "</" +
                i.tag +
                ">"
              );
            }),
            !d.document)
          )
            return (
              d.addEventListener &&
                (P.disableWorkerMessageHandler ||
                  d.addEventListener(
                    "message",
                    function (e) {
                      var t = JSON.parse(e.data),
                        n = t.language,
                        a = t.code,
                        i = t.immediateClose;
                      d.postMessage(P.highlight(a, P.languages[n], n)),
                        i && d.close();
                    },
                    !1
                  )),
              d.Prism
            );
          var e =
            document.currentScript ||
            [].slice.call(document.getElementsByTagName("script")).pop();
          return (
            e &&
              ((P.filename = e.src),
              P.manual ||
                e.hasAttribute("data-manual") ||
                ("loading" !== document.readyState
                  ? window.requestAnimationFrame
                    ? window.requestAnimationFrame(P.highlightAll)
                    : window.setTimeout(P.highlightAll, 16)
                  : document.addEventListener(
                      "DOMContentLoaded",
                      P.highlightAll
                    ))),
            d.Prism
          );
        })();
      F.exports && (F.exports = b),
        void 0 !== e && (e.Prism = b),
        (b.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: /<!DOCTYPE[\s\S]+?>/i,
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                  punctuation: [
                    /^=/,
                    { pattern: /(^|[^\\])["']/, lookbehind: !0 },
                  ],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: /&#?[\da-z]{1,8};/i,
        }),
        (b.languages.markup.tag.inside["attr-value"].inside.entity =
          b.languages.markup.entity),
        b.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        (b.languages.xml = b.languages.markup),
        (b.languages.html = b.languages.markup),
        (b.languages.mathml = b.languages.markup),
        (b.languages.svg = b.languages.markup),
        (b.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
            inside: { rule: /@[\w-]+/ },
          },
          url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
          selector: /[^{}\s][^{};]*?(?=\s*\{)/,
          string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
          important: /!important\b/i,
          function: /[-a-z0-9]+(?=\()/i,
          punctuation: /[(){};:,]/,
        }),
        (b.languages.css.atrule.inside.rest = b.languages.css),
        b.languages.markup &&
          (b.languages.insertBefore("markup", "tag", {
            style: {
              pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
              lookbehind: !0,
              inside: b.languages.css,
              alias: "language-css",
              greedy: !0,
            },
          }),
          b.languages.insertBefore(
            "inside",
            "attr-value",
            {
              "style-attr": {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                  "attr-name": {
                    pattern: /^\s*style/i,
                    inside: b.languages.markup.tag.inside,
                  },
                  punctuation: /^\s*=\s*['"]|['"]\s*$/,
                  "attr-value": { pattern: /.+/i, inside: b.languages.css },
                },
                alias: "language-css",
              },
            },
            b.languages.markup.tag
          )),
        (b.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (b.languages.javascript = b.languages.extend("clike", {
          "class-name": [
            b.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            /\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
          ],
          number:
            /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          function:
            /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,
          operator:
            /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (b.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        b.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          "function-variable": {
            pattern:
              /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)[^\s()][^()]*?(?=\s*\))/,
              lookbehind: !0,
              inside: b.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/,
              inside: b.languages.javascript,
            },
            {
              pattern: /(\(\s*)[^\s()][^()]*?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: b.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)[^\s()][^()]*?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: b.languages.javascript,
            },
          ],
          constant: /\b[A-Z][A-Z\d_]*\b/,
        }),
        b.languages.insertBefore("javascript", "string", {
          "template-string": {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\${[^}]+}/,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\${|}$/,
                    alias: "punctuation",
                  },
                  rest: b.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        b.languages.markup &&
          b.languages.insertBefore("markup", "tag", {
            script: {
              pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
              lookbehind: !0,
              inside: b.languages.javascript,
              alias: "language-javascript",
              greedy: !0,
            },
          }),
        (b.languages.js = b.languages.javascript),
        (b.languages.actionscript = b.languages.extend("javascript", {
          keyword:
            /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (b.languages.actionscript["class-name"].alias = "function"),
        b.languages.markup &&
          b.languages.insertBefore("actionscript", "string", {
            xml: {
              pattern:
                /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: { rest: b.languages.markup },
            },
          }),
        (b.languages.apacheconf = {
          comment: /#.*/,
          "directive-inline": {
            pattern:
              /^(\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
            lookbehind: !0,
            alias: "property",
          },
          "directive-block": {
            pattern:
              /<\/?\b(?:AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
            inside: {
              "directive-block": {
                pattern: /^<\/?\w+/,
                inside: { punctuation: /^<\/?/ },
                alias: "tag",
              },
              "directive-block-parameter": {
                pattern: /.*[^>]/,
                inside: {
                  punctuation: /:/,
                  string: {
                    pattern: /("|').*\1/,
                    inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
                  },
                },
                alias: "attr-value",
              },
              punctuation: />/,
            },
            alias: "tag",
          },
          "directive-flags": { pattern: /\[(?:\w,?)+\]/, alias: "keyword" },
          string: {
            pattern: /("|').*\1/,
            inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
          },
          variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
          regex: /\^?.*\$|\^.*\$?/,
        }),
        (b.languages.applescript = {
          comment: [/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/, /--.+/, /#.+/],
          string: /"(?:\\.|[^"\\\r\n])*"/,
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
          operator: [
            /[&=≠≤≥*+\-\/÷^]|[<>]=?/,
            /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/,
          ],
          keyword:
            /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
          class: {
            pattern:
              /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
            alias: "builtin",
          },
          punctuation: /[{}():,¬«»《》]/,
        }),
        (b.languages.c = b.languages.extend("clike", {
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*\/%&|^!=<>]=?/,
          number:
            /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        b.languages.insertBefore("c", "string", {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
              string: {
                pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                lookbehind: !0,
              },
              directive: {
                pattern:
                  /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
          constant:
            /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete b.languages.c["class-name"],
        delete b.languages.c.boolean,
        (b.languages.csharp = b.languages.extend("clike", {
          keyword:
            /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
          string: [
            { pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 },
          ],
          "class-name": [
            {
              pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
              inside: { punctuation: /\./ },
            },
            {
              pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            {
              pattern:
                /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            {
              pattern:
                /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          ],
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
          operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*\/%&|^!=<>]=?/,
          punctuation: /\?\.?|::|[{}[\];(),.:]/,
        })),
        b.languages.insertBefore("csharp", "class-name", {
          "generic-method": {
            pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
            inside: {
              function: /^\w+/,
              "class-name": {
                pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
                inside: { punctuation: /\./ },
              },
              keyword: b.languages.csharp.keyword,
              punctuation: /[<>(),.:]/,
            },
          },
          preprocessor: {
            pattern: /(^\s*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
              directive: {
                pattern:
                  /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
        }),
        (b.languages.dotnet = b.languages.csharp),
        (function (e) {
          var t = {
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                inside: {
                  variable: [
                    { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                    /^\$\(\(/,
                  ],
                  number:
                    /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator:
                    /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                  punctuation: /\(\(?|\)\)?|,|;/,
                },
              },
              {
                pattern: /\$\([^)]+\)|`[^`]+`/,
                greedy: !0,
                inside: { variable: /^\$\(|^`|\)$|`$/ },
              },
              /\$(?:[\w#?*!@]+|\{[^}]+\})/i,
            ],
          };
          e.languages.bash = {
            shebang: {
              pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
              alias: "important",
            },
            comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
            string: [
              {
                pattern:
                  /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
                lookbehind: !0,
                greedy: !0,
                inside: t,
              },
              {
                pattern:
                  /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: t,
              },
            ],
            variable: t.variable,
            function: {
              pattern:
                /(^|[\s;|&])(?:alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip|zypper)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            boolean: {
              pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/,
          };
          var n = t.variable[1].inside;
          (n.string = e.languages.bash.string),
            (n.function = e.languages.bash.function),
            (n.keyword = e.languages.bash.keyword),
            (n.boolean = e.languages.bash.boolean),
            (n.operator = e.languages.bash.operator),
            (n.punctuation = e.languages.bash.punctuation),
            (e.languages.shell = e.languages.bash);
        })(b),
        (b.languages.cpp = b.languages.extend("c", {
          keyword:
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
          boolean: /\b(?:true|false)\b/,
          operator:
            />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*\/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        })),
        b.languages.insertBefore("cpp", "keyword", {
          "class-name": { pattern: /(class\s+)\w+/i, lookbehind: !0 },
        }),
        b.languages.insertBefore("cpp", "string", {
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0,
          },
        }),
        (n = /#(?!\{).+/),
        (a = { pattern: /#\{[^}]+\}/, alias: "variable" }),
        ((t = b).languages.coffeescript = t.languages.extend("javascript", {
          comment: n,
          string: [
            { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
            {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              inside: { interpolation: a },
            },
          ],
          keyword:
            /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
          "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
        })),
        t.languages.insertBefore("coffeescript", "comment", {
          "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
          "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: { comment: n, interpolation: a },
          },
        }),
        t.languages.insertBefore("coffeescript", "string", {
          "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
              delimiter: { pattern: /^`|`$/, alias: "punctuation" },
              rest: t.languages.javascript,
            },
          },
          "multiline-string": [
            { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
            {
              pattern: /"""[\s\S]*?"""/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: a },
            },
          ],
        }),
        t.languages.insertBefore("coffeescript", "keyword", {
          property: /(?!\d)\w+(?=\s*:(?!:))/,
        }),
        delete t.languages.coffeescript["template-string"],
        (t.languages.coffee = t.languages.coffeescript),
        (function (e) {
          e.languages.ruby = e.languages.extend("clike", {
            comment: [
              /#.*/,
              {
                pattern: /^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m,
                greedy: !0,
              },
            ],
            keyword:
              /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,
          });
          var t = {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: { pattern: /^#\{|\}$/, alias: "tag" },
              rest: e.languages.ruby,
            },
          };
          delete e.languages.ruby.function,
            e.languages.insertBefore("ruby", "keyword", {
              regex: [
                {
                  pattern:
                    /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t },
                },
                {
                  pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t },
                },
                {
                  pattern:
                    /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t },
                },
                {
                  pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t },
                },
                {
                  pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t },
                },
                {
                  pattern:
                    /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                  lookbehind: !0,
                  greedy: !0,
                },
              ],
              variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
              symbol: {
                pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
                lookbehind: !0,
              },
              "method-definition": {
                pattern: /(\bdef\s+)[\w.]+/,
                lookbehind: !0,
                inside: { function: /\w+$/, rest: e.languages.ruby },
              },
            }),
            e.languages.insertBefore("ruby", "number", {
              builtin:
                /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
              constant: /\b[A-Z]\w*(?:[?!]|\b)/,
            }),
            (e.languages.ruby.string = [
              {
                pattern:
                  /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                greedy: !0,
                inside: { interpolation: t },
              },
              {
                pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
                greedy: !0,
                inside: { interpolation: t },
              },
              {
                pattern:
                  /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
                greedy: !0,
                inside: { interpolation: t },
              },
              {
                pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
                greedy: !0,
                inside: { interpolation: t },
              },
              {
                pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
                greedy: !0,
                inside: { interpolation: t },
              },
              {
                pattern:
                  /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
                inside: { interpolation: t },
              },
            ]),
            (e.languages.rb = e.languages.ruby);
        })(b),
        (b.languages.csp = {
          directive: {
            pattern:
              /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
            alias: "keyword",
          },
          safe: {
            pattern:
              /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=\/]+)'/,
            alias: "selector",
          },
          unsafe: {
            pattern:
              /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
            alias: "function",
          },
        }),
        (b.languages.css.selector = {
          pattern: b.languages.css.selector,
          inside: {
            "pseudo-element":
              /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: /\[[^\]]+\]/,
          },
        }),
        b.languages.insertBefore("css", "property", {
          variable: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        b.languages.insertBefore("css", "function", {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: /-?[\d.]+/,
        }),
        (b.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          deleted: /^[-<].*$/m,
          inserted: /^[+>].*$/m,
          diff: { pattern: /^!(?!!).+$/m, alias: "important" },
        });
      var i,
        r,
        o,
        s,
        l,
        c,
        u,
        p,
        g,
        m,
        f = {
          property: {
            pattern: /(?:{{|{%)[\s\S]*?(?:%}|}})/g,
            greedy: !0,
            inside: {
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              keyword:
                /\b(?:\||load|verbatim|widthratio|ssi|firstof|for|url|ifchanged|csrf_token|lorem|ifnotequal|autoescape|now|templatetag|debug|cycle|ifequal|regroup|comment|filter|endfilter|if|spaceless|with|extends|block|include|else|empty|endif|endfor|as|endblock|endautoescape|endverbatim|trans|endtrans|[Tt]rue|[Ff]alse|[Nn]one|in|is|static|macro|endmacro|call|endcall|set|endset|raw|endraw)\b/,
              operator:
                /[-+=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
              function:
                /\b(?:_|abs|add|addslashes|attr|batch|callable|capfirst|capitalize|center|count|cut|d|date|default|default_if_none|defined|dictsort|dictsortreversed|divisibleby|e|equalto|escape|escaped|escapejs|even|filesizeformat|first|float|floatformat|force_escape|forceescape|format|get_digit|groupby|indent|int|iriencode|iterable|join|last|length|length_is|linebreaks|linebreaksbr|linenumbers|list|ljust|lower|make_list|map|mapping|number|odd|phone2numeric|pluralize|pprint|random|reject|rejectattr|removetags|replace|reverse|rjust|round|safe|safeseq|sameas|select|selectattr|sequence|slice|slugify|sort|string|stringformat|striptags|sum|time|timesince|timeuntil|title|trim|truncate|truncatechars|truncatechars_html|truncatewords|truncatewords_html|undefined|unordered_list|upper|urlencode|urlize|urlizetrunc|wordcount|wordwrap|xmlattr|yesno)\b/,
              important: /\b-?\d+(?:\.\d+)?\b/,
              variable: /\b\w+?\b/,
              punctuation: /[[\];(),.:]/,
            },
          },
        };
      (b.languages.django = b.languages.extend("markup", {
        comment: /(?:<!--|{#)[\s\S]*?(?:#}|-->)/,
      })),
        (b.languages.django.tag.pattern =
          /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^>=]+))?)*\s*\/?>/i),
        b.languages.insertBefore("django", "entity", f),
        b.languages.insertBefore("inside", "tag", f, b.languages.django.tag),
        b.languages.javascript &&
          (b.languages.insertBefore(
            "inside",
            "string",
            f,
            b.languages.django.script
          ),
          (b.languages.django.script.inside.string.inside = f)),
        b.languages.css &&
          (b.languages.insertBefore(
            "inside",
            "atrule",
            { tag: f.property },
            b.languages.django.style
          ),
          (b.languages.django.style.inside.string.inside = f)),
        (b.languages.jinja2 = b.languages.django),
        (b.languages.docker = {
          keyword: {
            pattern:
              /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
            lookbehind: !0,
          },
          string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          comment: /#.*/,
          punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/,
        }),
        (b.languages.dockerfile = b.languages.docker),
        (b.languages.elixir = {
          comment: { pattern: /#.*/m, lookbehind: !0 },
          regex: {
            pattern:
              /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
            greedy: !0,
          },
          string: [
            {
              pattern:
                /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
              greedy: !0,
              inside: {},
            },
            { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
            {
              pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
              inside: {},
            },
          ],
          atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: "symbol" },
          "attr-name": /\w+:(?!:)/,
          capture: {
            pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
            lookbehind: !0,
            alias: "function",
          },
          argument: {
            pattern: /(^|[^&])&\d+/,
            lookbehind: !0,
            alias: "variable",
          },
          attribute: { pattern: /@\w+/, alias: "variable" },
          number:
            /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
          keyword:
            /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          operator: [
            /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
            { pattern: /([^<])<(?!<)/, lookbehind: !0 },
            { pattern: /([^>])>(?!>)/, lookbehind: !0 },
          ],
          punctuation: /<<|>>|[.,%\[\]{}()]/,
        }),
        b.languages.elixir.string.forEach(function (e) {
          e.inside = {
            interpolation: {
              pattern: /#\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                rest: b.languages.elixir,
              },
            },
          };
        }),
        (b.languages.elm = {
          comment: /--.*|{-[\s\S]*?-}/,
          char: {
            pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
            greedy: !0,
          },
          string: [
            { pattern: /"""[\s\S]*?"""/, greedy: !0 },
            {
              pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
              greedy: !0,
            },
          ],
          import_statement: {
            pattern:
              /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
            inside: { keyword: /\b(?:import|as|exposing)\b/ },
          },
          keyword:
            /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
          builtin:
            /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[+\-\/*=.$<>:&|^?%#@~!]{2,}|[+\-\/*=$<>:&|^?%#@~!]/,
          hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
          constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
          punctuation: /[{}[\]|(),.:]/,
        }),
        (b.languages["markup-templating"] = {}),
        Object.defineProperties(b.languages["markup-templating"], {
          buildPlaceholders: {
            value: function (n, a, e, i) {
              n.language === a &&
                ((n.tokenStack = []),
                (n.code = n.code.replace(e, function (e) {
                  if ("function" == typeof i && !i(e)) return e;
                  for (
                    var t = n.tokenStack.length;
                    -1 !== n.code.indexOf("___" + a.toUpperCase() + t + "___");

                  )
                    ++t;
                  return (
                    (n.tokenStack[t] = e), "___" + a.toUpperCase() + t + "___"
                  );
                })),
                (n.grammar = b.languages.markup));
            },
          },
          tokenizePlaceholders: {
            value: function (p, g) {
              var m, f;
              p.language === g &&
                p.tokenStack &&
                ((p.grammar = b.languages[g]),
                (m = 0),
                (f = Object.keys(p.tokenStack)),
                (function e(t) {
                  if (!(m >= f.length))
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n];
                      if (
                        "string" == typeof a ||
                        (a.content && "string" == typeof a.content)
                      ) {
                        var i = f[m],
                          r = p.tokenStack[i],
                          o = "string" == typeof a ? a : a.content,
                          s = o.indexOf("___" + g.toUpperCase() + i + "___");
                        if (-1 < s) {
                          ++m;
                          var l,
                            d = o.substring(0, s),
                            c = new b.Token(
                              g,
                              b.tokenize(r, p.grammar, g),
                              "language-" + g,
                              r
                            ),
                            u = o.substring(
                              s + ("___" + g.toUpperCase() + i + "___").length
                            );
                          if (
                            (d || u
                              ? e(
                                  (l = [d, c, u].filter(function (e) {
                                    return !!e;
                                  }))
                                )
                              : (l = c),
                            "string" == typeof a
                              ? Array.prototype.splice.apply(
                                  t,
                                  [n, 1].concat(l)
                                )
                              : (a.content = l),
                            m >= f.length)
                          )
                            break;
                        }
                      } else
                        a.content &&
                          "string" != typeof a.content &&
                          e(a.content);
                    }
                })(p.tokens));
            },
          },
        }),
        (b.languages.erlang = {
          comment: /%.+/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          "quoted-function": {
            pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
            alias: "function",
          },
          "quoted-atom": { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: "atom" },
          boolean: /\b(?:true|false)\b/,
          keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
          number: [
            /\$\\?./,
            /\d+#[a-z0-9]+/i,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          ],
          function: /\b[a-z][\w@]*(?=\()/,
          variable: {
            pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
            lookbehind: !0,
          },
          operator: [
            /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 },
          ],
          atom: /\b[a-z][\w@]*/,
          punctuation: /[()[\]{}:;,.#|]|<<|>>/,
        }),
        (b.languages.fsharp = b.languages.extend("clike", {
          comment: [
            { pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
          ],
          string: {
            pattern:
              /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\.)'B?/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
            lookbehind: !0,
            inside: { operator: /->|\*/, punctuation: /\./ },
          },
          keyword:
            /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
          number: [
            /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
            /\b0b[01]+(?:y|uy)?\b/,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
            /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/,
          ],
          operator:
            /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*\/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/,
        })),
        b.languages.insertBefore("fsharp", "keyword", {
          preprocessor: {
            pattern: /^[^\r\n\S]*#.*/m,
            alias: "property",
            inside: {
              directive: {
                pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
        }),
        b.languages.insertBefore("fsharp", "punctuation", {
          "computation-expression": {
            pattern: /[_a-z]\w*(?=\s*\{)/i,
            alias: "keyword",
          },
        }),
        b.languages.insertBefore("fsharp", "string", {
          annotation: {
            pattern: /\[<.+?>\]/,
            inside: {
              punctuation: /^\[<|>\]$/,
              "class-name": {
                pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
                lookbehind: !0,
              },
              "annotation-content": {
                pattern: /[\s\S]*/,
                inside: b.languages.fsharp,
              },
            },
          },
        }),
        ((i = b).languages.flow = i.languages.extend("javascript", {})),
        i.languages.insertBefore("flow", "keyword", {
          type: [
            {
              pattern:
                /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
              alias: "tag",
            },
          ],
        }),
        (i.languages.flow["function-variable"].pattern =
          /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
        delete i.languages.flow.parameter,
        i.languages.insertBefore("flow", "operator", {
          "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" },
        }),
        "Array" !== i.util.type(i.languages.flow.keyword) &&
          (i.languages.flow.keyword = [i.languages.flow.keyword]),
        i.languages.flow.keyword.unshift(
          {
            pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
            lookbehind: !0,
          },
          {
            pattern:
              /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
            lookbehind: !0,
          }
        ),
        (b.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (b.languages.go = b.languages.extend("clike", {
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin:
            /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete b.languages.go["class-name"],
        (b.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": /[a-z_]\w*(?=\s*:)/i,
          keyword: [
            {
              pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/,
              lookbehind: !0,
            },
            /\b(?:query|fragment|mutation)\b/,
          ],
          operator: /!|=|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
        }),
        (b.languages.less = b.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        b.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        ((r = b).languages.handlebars = {
          comment: /\{\{![\s\S]*?\}\}/,
          delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
          string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          boolean: /\b(?:true|false)\b/,
          block: {
            pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
            lookbehind: !0,
            alias: "keyword",
          },
          brackets: {
            pattern: /\[[^\]]+\]/,
            inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
          },
          punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
          variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
        }),
        r.hooks.add("before-tokenize", function (e) {
          r.languages["markup-templating"].buildPlaceholders(
            e,
            "handlebars",
            /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
          );
        }),
        r.hooks.add("after-tokenize", function (e) {
          r.languages["markup-templating"].tokenizePlaceholders(
            e,
            "handlebars"
          );
        }),
        (b.languages.haskell = {
          comment: {
            pattern:
              /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
            lookbehind: !0,
          },
          char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
          string: {
            pattern:
              /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
          import_statement: {
            pattern:
              /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
            lookbehind: !0,
            inside: { keyword: /\b(?:import|qualified|as|hiding)\b/ },
          },
          builtin:
            /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
          operator:
            /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
          hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
          constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (function (e) {
          e.languages.http = {
            "request-line": {
              pattern:
                /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
              inside: {
                property:
                  /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
                "attr-name": /:\w+/,
              },
            },
            "response-status": {
              pattern: /^HTTP\/1.[01] \d+.*/m,
              inside: {
                property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 },
              },
            },
            "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" },
          };
          var t,
            n,
            a,
            i,
            r = e.languages,
            o = {
              "application/javascript": r.javascript,
              "application/json": r.json || r.javascript,
              "application/xml": r.xml,
              "text/xml": r.xml,
              "text/html": r.html,
              "text/css": r.css,
            },
            s = { "application/json": !0, "application/xml": !0 };
          for (var l in o) {
            o[l] &&
              ((t = t || {}),
              (n = s[l]
                ? ((i = void 0),
                  (i = (a = l).replace(/^[a-z]+\//, "")),
                  "(?:" +
                    a +
                    "|" +
                    ("\\w+/(?:[\\w.-]+\\+)+" + i + "(?![+\\w.-])") +
                    ")")
                : l),
              (t[l] = {
                pattern: RegExp(
                  "(content-type:\\s*" +
                    n +
                    "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*",
                  "i"
                ),
                lookbehind: !0,
                inside: { rest: o[l] },
              }));
          }
          t && e.languages.insertBefore("http", "header-name", t);
        })(b),
        (s =
          /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/),
        (l = /\b[A-Z](?:\w*[a-z]\w*)?\b/),
        ((o = b).languages.java = o.languages.extend("clike", {
          "class-name": [l, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
          keyword: s,
          function: [
            o.languages.clike.function,
            { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
          ],
          number:
            /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
          operator: {
            pattern:
              /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*\/%&|^!=<>]=?)/m,
            lookbehind: !0,
          },
        })),
        o.languages.insertBefore("java", "class-name", {
          annotation: {
            alias: "punctuation",
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0,
          },
          namespace: {
            pattern:
              /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
            lookbehind: !0,
            inside: { punctuation: /\./ },
          },
          generics: {
            pattern:
              /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
              "class-name": l,
              keyword: s,
              punctuation: /[<>(),.:]/,
              operator: /[?&|]/,
            },
          },
        }),
        (b.languages.json = {
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: /\bnull\b/,
        }),
        (b.languages.jsonp = b.languages.json),
        (function (e) {
          (e.languages.kotlin = e.languages.extend("clike", {
            keyword: {
              pattern:
                /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
              lookbehind: !0,
            },
            function: [
              /\w+(?=\s*\()/,
              { pattern: /(\.)\w+(?=\s*\{)/, lookbehind: !0 },
            ],
            number:
              /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
            operator:
              /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
          })),
            delete e.languages.kotlin["class-name"],
            e.languages.insertBefore("kotlin", "string", {
              "raw-string": { pattern: /("""|''')[\s\S]*?\1/, alias: "string" },
            }),
            e.languages.insertBefore("kotlin", "keyword", {
              annotation: {
                pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                alias: "builtin",
              },
            }),
            e.languages.insertBefore("kotlin", "function", {
              label: { pattern: /\w+@|@\w+/, alias: "symbol" },
            });
          var t = [
            {
              pattern: /\$\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^\$\{|\}$/, alias: "variable" },
                rest: e.languages.kotlin,
              },
            },
            { pattern: /\$\w+/, alias: "variable" },
          ];
          e.languages.kotlin.string.inside = e.languages.kotlin[
            "raw-string"
          ].inside = { interpolation: t };
        })(b),
        (u = {
          "equation-command": {
            pattern: (c = /\\(?:[^a-z()[\]]|[a-z*]+)/i),
            alias: "regex",
          },
        }),
        (b.languages.latex = {
          comment: /%.*/m,
          cdata: {
            pattern:
              /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
          },
          equation: [
            {
              pattern:
                /\$(?:\\[\s\S]|[^\\$])*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
              inside: u,
              alias: "string",
            },
            {
              pattern:
                /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: !0,
              inside: u,
              alias: "string",
            },
          ],
          keyword: {
            pattern:
              /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0,
          },
          url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
          headline: {
            pattern:
              /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
            lookbehind: !0,
            alias: "class-name",
          },
          function: { pattern: c, alias: "selector" },
          punctuation: /[[\]{}&]/,
        }),
        (b.languages.markdown = b.languages.extend("markup", {})),
        b.languages.insertBefore("markdown", "prolog", {
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
          code: [
            { pattern: /^(?: {4}|\t).+/m, alias: "keyword" },
            { pattern: /``.+?``|`[^`\n]+`/, alias: "keyword" },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                "code-block": {
                  pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                  lookbehind: !0,
                },
                "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)/,
              alias: "important",
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#+.+/m,
              lookbehind: !0,
              alias: "important",
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation",
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation",
          },
          "url-reference": {
            pattern:
              /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string:
                /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: "url",
          },
          bold: {
            pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
          },
          italic: {
            pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^[*_]|[*_]$/ },
          },
          strike: {
            pattern: /(^|[^\\])(~~?)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^~~?|~~?$/ },
          },
          url: {
            pattern:
              /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
            inside: {
              variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
              string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
            },
          },
        }),
        (b.languages.markdown.bold.inside.url = b.languages.markdown.url),
        (b.languages.markdown.italic.inside.url = b.languages.markdown.url),
        (b.languages.markdown.strike.inside.url = b.languages.markdown.url),
        (b.languages.markdown.bold.inside.italic = b.languages.markdown.italic),
        (b.languages.markdown.bold.inside.strike = b.languages.markdown.strike),
        (b.languages.markdown.italic.inside.bold = b.languages.markdown.bold),
        (b.languages.markdown.italic.inside.strike =
          b.languages.markdown.strike),
        (b.languages.markdown.strike.inside.bold = b.languages.markdown.bold),
        (b.languages.markdown.strike.inside.italic =
          b.languages.markdown.italic),
        b.hooks.add("after-tokenize", function (e) {
          "markdown" === e.language &&
            (function e(t) {
              if (t && "string" != typeof t)
                for (var n = 0, a = t.length; n < a; n++) {
                  var i,
                    r,
                    o,
                    s = t[n];
                  "code" === s.type
                    ? ((i = s.content[1]),
                      (r = s.content[3]),
                      i &&
                        r &&
                        "code-language" === i.type &&
                        "code-block" === r.type &&
                        "string" == typeof i.content &&
                        ((o =
                          "language-" +
                          i.content.trim().split(/\s+/)[0].toLowerCase()),
                        r.alias
                          ? "string" == typeof r.alias
                            ? (r.alias = [r.alias, o])
                            : r.alias.push(o)
                          : (r.alias = [o])))
                    : e(s.content);
                }
            })(e.tokens);
        }),
        b.hooks.add("wrap", function (e) {
          if ("code-block" === e.type) {
            for (var t = "", n = 0, a = e.classes.length; n < a; n++) {
              var i = e.classes[n],
                r = /language-(\w+)/.exec(i);
              if (r) {
                t = r[1];
                break;
              }
            }
            var o,
              s = b.languages[t];
            s &&
              ((o = e.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&")),
              (e.content = b.highlight(o, s, t)));
          }
        }),
        (b.languages.md = b.languages.markdown),
        (b.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern:
                /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (b.languages.objectivec = b.languages.extend("c", {
          keyword:
            /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string:
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        (b.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number:
            /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: "variable" },
          directive: { pattern: /\B#\w+/, alias: "function" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator:
            /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/,
        }),
        (b.languages.perl = {
          comment: [
            { pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m, lookbehind: !0 },
            { pattern: /(^|[^\\$])#.*/, lookbehind: !0 },
          ],
          string: [
            {
              pattern:
                /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0,
            },
            {
              pattern:
                /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0,
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
              greedy: !0,
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
              greedy: !0,
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
              greedy: !0,
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
              greedy: !0,
            },
            { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
            { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
          ],
          regex: [
            {
              pattern:
                /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern:
                /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern:
                /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0,
            },
            {
              pattern:
                /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
              greedy: !0,
            },
          ],
          variable: [
            /[&*$@%]\{\^[A-Z]+\}/,
            /[&*$@%]\^[A-Z_]/,
            /[&*$@%]#?(?=\{)/,
            /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,
            /[&*$@%]\d+/,
            /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
          ],
          filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol" },
          vstring: {
            pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
            alias: "string",
          },
          function: { pattern: /sub [a-z0-9_]+/i, inside: { keyword: /sub/ } },
          keyword:
            /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
          number:
            /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
          operator:
            /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
          punctuation: /[{}[\];(),:]/,
        }),
        (function (t) {
          (t.languages.php = t.languages.extend("clike", {
            keyword:
              /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|null|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            constant: /\b[A-Z_][A-Z0-9_]*\b/,
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
          })),
            t.languages.insertBefore("php", "string", {
              "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment",
              },
            }),
            t.languages.insertBefore("php", "keyword", {
              delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: "important" },
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            t.languages.insertBefore("php", "operator", {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var e = {
            pattern:
              /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: t.languages.php },
          };
          t.languages.insertBefore("php", "string", {
            "nowdoc-string": {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            "heredoc-string": {
              pattern:
                /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: e,
              },
            },
            "single-quoted-string": {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: "string",
            },
            "double-quoted-string": {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: e },
            },
          }),
            delete t.languages.php.string,
            t.hooks.add("before-tokenize", function (e) {
              /(?:<\?php|<\?)/gi.test(e.code) &&
                t.languages["markup-templating"].buildPlaceholders(
                  e,
                  "php",
                  /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi
                );
            }),
            t.hooks.add("after-tokenize", function (e) {
              t.languages["markup-templating"].tokenizePlaceholders(e, "php");
            });
        })(b),
        b.languages.insertBefore("php", "variable", {
          this: /\$this\b/,
          global:
            /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
          scope: {
            pattern: /\b[\w\\]+::/,
            inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
          },
        }),
        (b.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (b.languages.processing = b.languages.extend("clike", {
          keyword:
            /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
          operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/,
        })),
        b.languages.insertBefore("processing", "number", {
          constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
          type: {
            pattern:
              /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
            alias: "variable",
          },
        }),
        (b.languages.processing.function.pattern = /\w+(?=\s*\()/),
        (b.languages.processing["class-name"].alias = "variable"),
        (b.languages.scss = b.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)*url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        b.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        b.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        b.languages.insertBefore("scss", "function", {
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:true|false)\b/,
          null: /\bnull\b/,
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (b.languages.scss.atrule.inside.rest = b.languages.scss),
        (b.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number:
            /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (b.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = b.languages.python),
        (b.languages.py = b.languages.python),
        (b.languages.r = {
          comment: /#.*/,
          string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
          boolean: /\b(?:TRUE|FALSE)\b/,
          ellipsis: /\.\.(?:\.|\d+)/,
          number: [
            /\b(?:NaN|Inf)\b/,
            /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
          ],
          keyword:
            /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
          operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
          punctuation: /[(){}\[\],;]/,
        }),
        (function (s) {
          var e = s.util.clone(s.languages.javascript);
          (s.languages.jsx = s.languages.extend("markup", e)),
            (s.languages.jsx.tag.pattern =
              /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (s.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (s.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (s.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*$/),
            s.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                },
              },
              s.languages.jsx.tag
            ),
            s.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation",
                    },
                    rest: s.languages.jsx,
                  },
                  alias: "language-javascript",
                },
              },
              s.languages.jsx.tag
            );
          function l(e) {
            return e
              ? "string" == typeof e
                ? e
                : "string" == typeof e.content
                ? e.content
                : e.content.map(l).join("")
              : "";
          }
          s.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) ||
              (function e(t) {
                for (var n = [], a = 0; a < t.length; a++) {
                  var i,
                    r = t[a],
                    o = !1;
                  "string" != typeof r &&
                    ("tag" === r.type &&
                    r.content[0] &&
                    "tag" === r.content[0].type
                      ? "</" === r.content[0].content[0].content
                        ? 0 < n.length &&
                          n[n.length - 1].tagName ===
                            l(r.content[0].content[1]) &&
                          n.pop()
                        : "/>" === r.content[r.content.length - 1].content ||
                          n.push({
                            tagName: l(r.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : 0 < n.length &&
                        "punctuation" === r.type &&
                        "{" === r.content
                      ? n[n.length - 1].openedBraces++
                      : 0 < n.length &&
                        0 < n[n.length - 1].openedBraces &&
                        "punctuation" === r.type &&
                        "}" === r.content
                      ? n[n.length - 1].openedBraces--
                      : (o = !0)),
                    (o || "string" == typeof r) &&
                      0 < n.length &&
                      0 === n[n.length - 1].openedBraces &&
                      ((i = l(r)),
                      a < t.length - 1 &&
                        ("string" == typeof t[a + 1] ||
                          "plain-text" === t[a + 1].type) &&
                        ((i += l(t[a + 1])), t.splice(a + 1, 1)),
                      0 < a &&
                        ("string" == typeof t[a - 1] ||
                          "plain-text" === t[a - 1].type) &&
                        ((i = l(t[a - 1]) + i), t.splice(a - 1, 1), a--),
                      (t[a] = new s.Token("plain-text", i, null, i))),
                    r.content && "string" != typeof r.content && e(r.content);
                }
              })(e.tokens);
          });
        })(b),
        (b.languages.typescript = b.languages.extend("javascript", {
          keyword:
            /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin:
            /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (b.languages.ts = b.languages.typescript),
        (b.languages.reason = b.languages.extend("clike", {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        b.languages.insertBefore("reason", "class-name", {
          character: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: "string",
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: "variable" },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete b.languages.reason.function,
        (function (e) {
          var t = "(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",
            n = {
              css: { pattern: /\{[^}]+\}/, inside: { rest: e.languages.css } },
              "class-id": {
                pattern: /(\()[^)]+(?=\))/,
                lookbehind: !0,
                alias: "attr-value",
              },
              lang: {
                pattern: /(\[)[^\]]+(?=\])/,
                lookbehind: !0,
                alias: "attr-value",
              },
              punctuation: /[\\\/]\d+|\S/,
            };
          e.languages.textile = e.languages.extend("markup", {
            phrase: {
              pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
              lookbehind: !0,
              inside: {
                "block-tag": {
                  pattern: RegExp("^[a-z]\\w*(?:" + t + "|[<>=()])*\\."),
                  inside: {
                    modifier: {
                      pattern: RegExp(
                        "(^[a-z]\\w*)(?:" + t + "|[<>=()])+(?=\\.)"
                      ),
                      lookbehind: !0,
                      inside: n,
                    },
                    tag: /^[a-z]\w*/,
                    punctuation: /\.$/,
                  },
                },
                list: {
                  pattern: RegExp("^[*#]+(?:" + t + ")?\\s+.+", "m"),
                  inside: {
                    modifier: {
                      pattern: RegExp("(^[*#]+)" + t),
                      lookbehind: !0,
                      inside: n,
                    },
                    punctuation: /^[*#]+/,
                  },
                },
                table: {
                  pattern: RegExp(
                    "^(?:(?:" +
                      t +
                      "|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:" +
                      t +
                      "|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|",
                    "m"
                  ),
                  inside: {
                    modifier: {
                      pattern: RegExp(
                        "(^|\\|(?:\\r?\\n|\\r)?)(?:" +
                          t +
                          "|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"
                      ),
                      lookbehind: !0,
                      inside: n,
                    },
                    punctuation: /\||^\./,
                  },
                },
                inline: {
                  pattern: RegExp(
                    "(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:" + t + ")?.+?\\1"
                  ),
                  inside: {
                    bold: {
                      pattern: RegExp("(^(\\*\\*?)(?:" + t + ")?).+?(?=\\2)"),
                      lookbehind: !0,
                    },
                    italic: {
                      pattern: RegExp("(^(__?)(?:" + t + ")?).+?(?=\\2)"),
                      lookbehind: !0,
                    },
                    cite: {
                      pattern: RegExp("(^\\?\\?(?:" + t + ")?).+?(?=\\?\\?)"),
                      lookbehind: !0,
                      alias: "string",
                    },
                    code: {
                      pattern: RegExp("(^@(?:" + t + ")?).+?(?=@)"),
                      lookbehind: !0,
                      alias: "keyword",
                    },
                    inserted: {
                      pattern: RegExp("(^\\+(?:" + t + ")?).+?(?=\\+)"),
                      lookbehind: !0,
                    },
                    deleted: {
                      pattern: RegExp("(^-(?:" + t + ")?).+?(?=-)"),
                      lookbehind: !0,
                    },
                    span: {
                      pattern: RegExp("(^%(?:" + t + ")?).+?(?=%)"),
                      lookbehind: !0,
                    },
                    modifier: {
                      pattern: RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])" + t),
                      lookbehind: !0,
                      inside: n,
                    },
                    punctuation: /[*_%?@+\-^~]+/,
                  },
                },
                "link-ref": {
                  pattern: /^\[[^\]]+\]\S+$/m,
                  inside: {
                    string: { pattern: /(\[)[^\]]+(?=\])/, lookbehind: !0 },
                    url: { pattern: /(\])\S+$/, lookbehind: !0 },
                    punctuation: /[\[\]]/,
                  },
                },
                link: {
                  pattern: RegExp(
                    '"(?:' + t + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'
                  ),
                  inside: {
                    text: {
                      pattern: RegExp('(^"(?:' + t + ')?)[^"]+(?=")'),
                      lookbehind: !0,
                    },
                    modifier: {
                      pattern: RegExp('(^")' + t),
                      lookbehind: !0,
                      inside: n,
                    },
                    url: { pattern: /(:).+/, lookbehind: !0 },
                    punctuation: /[":]/,
                  },
                },
                image: {
                  pattern: RegExp(
                    "!(?:" +
                      t +
                      "|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"
                  ),
                  inside: {
                    source: {
                      pattern: RegExp(
                        "(^!(?:" +
                          t +
                          "|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"
                      ),
                      lookbehind: !0,
                      alias: "url",
                    },
                    modifier: {
                      pattern: RegExp("(^!)(?:" + t + "|[<>=()])+"),
                      lookbehind: !0,
                      inside: n,
                    },
                    url: { pattern: /(:).+/, lookbehind: !0 },
                    punctuation: /[!:]/,
                  },
                },
                footnote: {
                  pattern: /\b\[\d+\]/,
                  alias: "comment",
                  inside: { punctuation: /\[|\]/ },
                },
                acronym: {
                  pattern: /\b[A-Z\d]+\([^)]+\)/,
                  inside: {
                    comment: { pattern: /(\()[^)]+(?=\))/, lookbehind: !0 },
                    punctuation: /[()]/,
                  },
                },
                mark: {
                  pattern: /\b\((?:TM|R|C)\)/,
                  alias: "comment",
                  inside: { punctuation: /[()]/ },
                },
              },
            },
          });
          var a = {
            inline: e.languages.textile.phrase.inside.inline,
            link: e.languages.textile.phrase.inside.link,
            image: e.languages.textile.phrase.inside.image,
            footnote: e.languages.textile.phrase.inside.footnote,
            acronym: e.languages.textile.phrase.inside.acronym,
            mark: e.languages.textile.phrase.inside.mark,
          };
          (e.languages.textile.tag.pattern =
            /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
            (e.languages.textile.phrase.inside.inline.inside.bold.inside = a),
            (e.languages.textile.phrase.inside.inline.inside.italic.inside = a),
            (e.languages.textile.phrase.inside.inline.inside.inserted.inside =
              a),
            (e.languages.textile.phrase.inside.inline.inside.deleted.inside =
              a),
            (e.languages.textile.phrase.inside.inline.inside.span.inside = a),
            (e.languages.textile.phrase.inside.table.inside.inline = a.inline),
            (e.languages.textile.phrase.inside.table.inside.link = a.link),
            (e.languages.textile.phrase.inside.table.inside.image = a.image),
            (e.languages.textile.phrase.inside.table.inside.footnote =
              a.footnote),
            (e.languages.textile.phrase.inside.table.inside.acronym =
              a.acronym),
            (e.languages.textile.phrase.inside.table.inside.mark = a.mark);
        })(b),
        (b.languages.rust = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
          ],
          string: [
            { pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, greedy: !0 },
            { pattern: /b?"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
          ],
          char: {
            pattern:
              /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
            alias: "string",
          },
          "lifetime-annotation": { pattern: /'[^\s>']+/, alias: "symbol" },
          keyword:
            /\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
          attribute: { pattern: /#!?\[.+?\]/, greedy: !0, alias: "attr-name" },
          function: [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/],
          "macro-rules": { pattern: /\w+!/, alias: "function" },
          number:
            /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
          "closure-params": {
            pattern: /\|[^|]*\|(?=\s*[{-])/,
            inside: { punctuation: /[|:,]/, operator: /[&*]/ },
          },
          punctuation: /[{}[\];(),:]|\.+|->/,
          operator: /[-+*\/%!^]=?|=[=>]?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/,
        }),
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(b),
        (p = b),
        ((g = {
          url: /url\((["']?).*?\1\)/i,
          string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: !0,
          },
          interpolation: null,
          func: null,
          important: /\B!(?:important|optional)\b/i,
          keyword: {
            pattern:
              /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
            lookbehind: !0,
          },
          hexcode: /#[\da-f]{3,6}/i,
          number: /\b\d+(?:\.\d+)?%?/,
          boolean: /\b(?:true|false)\b/,
          operator: [
            /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
          ],
          punctuation: /[{}()\[\];:,]/,
        }).interpolation = {
          pattern: /\{[^\r\n}:]+\}/,
          alias: "variable",
          inside: {
            delimiter: { pattern: /^{|}$/, alias: "punctuation" },
            rest: g,
          },
        }),
        (g.func = {
          pattern: /[\w-]+\([^)]*\).*/,
          inside: { function: /^[^(]+/, rest: g },
        }),
        (p.languages.stylus = {
          comment: {
            pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          "atrule-declaration": {
            pattern: /(^\s*)@.+/m,
            lookbehind: !0,
            inside: { atrule: /^@[\w-]+/, rest: g },
          },
          "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
            lookbehind: !0,
            inside: { variable: /^\S+/, rest: g },
          },
          statement: {
            pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
            lookbehind: !0,
            inside: { keyword: /^\S+/, rest: g },
          },
          "property-declaration": {
            pattern:
              /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
            lookbehind: !0,
            inside: {
              property: {
                pattern: /^[^\s:]+/,
                inside: { interpolation: g.interpolation },
              },
              rest: g,
            },
          },
          selector: {
            pattern:
              /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
            lookbehind: !0,
            inside: { interpolation: g.interpolation, punctuation: /[{},]/ },
          },
          func: g.func,
          string: g.string,
          interpolation: g.interpolation,
          punctuation: /[{}()\[\];:.]/,
        }),
        (b.languages.scheme = {
          comment: /;.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'[^()#'\s]+/, greedy: !0 },
          character: {
            pattern: /#\\(?:u[a-fA-F\d]{4}|[a-zA-Z]+|\S)/,
            alias: "string",
          },
          keyword: {
            pattern:
              /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
            lookbehind: !0,
          },
          builtin: {
            pattern:
              /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
            lookbehind: !0,
          },
          number: {
            pattern: /(\s|[()])[-+]?\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?\b/,
            lookbehind: !0,
          },
          boolean: /#[tf]/,
          operator: { pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/, lookbehind: !0 },
          function: { pattern: /(\()[^()#'\s]+(?=[()\s)])/, lookbehind: !0 },
          punctuation: /[()']/,
        }),
        (function (e) {
          e.languages.pug = {
            comment: {
              pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
              lookbehind: !0,
            },
            "multiline-script": {
              pattern:
                /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript },
            },
            filter: {
              pattern:
                /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: {
                "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
              },
            },
            "multiline-plain-text": {
              pattern:
                /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
            },
            markup: {
              pattern: /(^[\t ]*)<.+/m,
              lookbehind: !0,
              inside: { rest: e.languages.markup },
            },
            doctype: {
              pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
              lookbehind: !0,
            },
            "flow-control": {
              pattern:
                /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
              lookbehind: !0,
              inside: {
                each: {
                  pattern: /^each .+? in\b/,
                  inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
                },
                branch: {
                  pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                  alias: "keyword",
                },
                rest: e.languages.javascript,
              },
            },
            keyword: {
              pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
              lookbehind: !0,
            },
            mixin: [
              {
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: {
                  keyword: /^mixin/,
                  function: /\w+(?=\s*\(|\s*$)/,
                  punctuation: /[(),.]/,
                },
              },
              {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: {
                  name: { pattern: /^\+\w+/, alias: "function" },
                  rest: e.languages.javascript,
                },
              },
            ],
            script: {
              pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript },
            },
            "plain-text": {
              pattern:
                /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
              lookbehind: !0,
            },
            tag: {
              pattern:
                /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
              lookbehind: !0,
              inside: {
                attributes: [
                  {
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: { rest: e.languages.javascript },
                  },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      "attr-value": {
                        pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                        lookbehind: !0,
                        inside: { rest: e.languages.javascript },
                      },
                      "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[!=(),]+/,
                    },
                  },
                ],
                punctuation: /:/,
              },
            },
            code: [
              {
                pattern: /(^[\t ]*(?:-|!?=)).+/m,
                lookbehind: !0,
                inside: { rest: e.languages.javascript },
              },
            ],
            punctuation: /[.\-!=|]+/,
          };
          for (
            var t = [
                { filter: "atpl", language: "twig" },
                { filter: "coffee", language: "coffeescript" },
                "ejs",
                "handlebars",
                "hogan",
                "less",
                "livescript",
                "markdown",
                "mustache",
                "plates",
                { filter: "sass", language: "scss" },
                "stylus",
                "swig",
              ],
              n = {},
              a = 0,
              i = t.length;
            a < i;
            a++
          ) {
            var r =
              "string" == typeof (r = t[a]) ? { filter: r, language: r } : r;
            e.languages[r.language] &&
              (n["filter-" + r.filter] = {
                pattern: RegExp(
                  "(^([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace(
                    "{{filter_name}}",
                    r.filter
                  ),
                  "m"
                ),
                lookbehind: !0,
                inside: {
                  "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                  rest: e.languages[r.language],
                },
              });
          }
          e.languages.insertBefore("pug", "filter", n);
        })(b),
        (b.languages.swift = b.languages.extend("clike", {
          string: {
            pattern:
              /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: {
                  delimiter: { pattern: /^\\\(|\)$/, alias: "variable" },
                },
              },
            },
          },
          keyword:
            /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
          number:
            /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          atrule:
            /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
          builtin:
            /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/,
        })),
        (b.languages.swift.string.inside.interpolation.inside.rest =
          b.languages.swift),
        (b.languages.yaml = {
          scalar: {
            pattern:
              /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: "string",
          },
          comment: /#.*/,
          key: {
            pattern:
              /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: "atrule",
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important",
          },
          datetime: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: "number",
          },
          boolean: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          null: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          string: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
        (b.languages.yml = b.languages.yaml),
        (function (e) {
          e.languages.haml = {
            "multiline-comment": {
              pattern:
                /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
              lookbehind: !0,
              alias: "comment",
            },
            "multiline-code": [
              {
                pattern:
                  /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby },
              },
              {
                pattern:
                  /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby },
              },
            ],
            filter: {
              pattern:
                /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
              lookbehind: !0,
              inside: {
                "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
              },
            },
            markup: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
              lookbehind: !0,
              inside: { rest: e.languages.markup },
            },
            doctype: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
              lookbehind: !0,
            },
            tag: {
              pattern:
                /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
              lookbehind: !0,
              inside: {
                attributes: [
                  {
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: { rest: e.languages.ruby },
                  },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      "attr-value": {
                        pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                        lookbehind: !0,
                      },
                      "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[=(),]/,
                    },
                  },
                  { pattern: /\[[^\]]+\]/, inside: { rest: e.languages.ruby } },
                ],
                punctuation: /[<>]/,
              },
            },
            code: {
              pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
              lookbehind: !0,
              inside: { rest: e.languages.ruby },
            },
            interpolation: {
              pattern: /#\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                rest: e.languages.ruby,
              },
            },
            punctuation: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
              lookbehind: !0,
            },
          };
          for (
            var t = [
                "css",
                { filter: "coffee", language: "coffeescript" },
                "erb",
                "javascript",
                "less",
                "markdown",
                "ruby",
                "scss",
                "textile",
              ],
              n = {},
              a = 0,
              i = t.length;
            a < i;
            a++
          ) {
            var r =
              "string" == typeof (r = t[a]) ? { filter: r, language: r } : r;
            e.languages[r.language] &&
              (n["filter-" + r.filter] = {
                pattern: RegExp(
                  "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace(
                    "{{filter_name}}",
                    r.filter
                  )
                ),
                lookbehind: !0,
                inside: {
                  "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                  rest: e.languages[r.language],
                },
              });
          }
          e.languages.insertBefore("haml", "filter", n);
        })(b),
        (m = "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\.|[^\\\\\"\r\n])*\")"),
        (b.languages.toml = {
          comment: { pattern: /#.*/, greedy: !0 },
          table: {
            pattern: RegExp(
              "(\\[\\s*)" + m + "(?:\\s*\\.\\s*" + m + ")*(?=\\s*\\])"
            ),
            lookbehind: !0,
            greedy: !0,
            alias: "class-name",
          },
          key: {
            pattern: RegExp(
              "(^\\s*|[{,]\\s*)" + m + "(?:\\s*\\.\\s*" + m + ")*(?=\\s*=)",
              "m"
            ),
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
          string: {
            pattern:
              /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          date: [
            {
              pattern:
                /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,
              alias: "number",
            },
            { pattern: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/i, alias: "number" },
          ],
          number:
            /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,
          boolean: /\b(?:true|false)\b/,
          punctuation: /[.,=[\]{}]/,
        }),
        (b.languages.twig = {
          comment: /\{#[\s\S]*?#\}/,
          tag: {
            pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
            inside: {
              ld: {
                pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
                inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ },
              },
              rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.*/ } },
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                inside: { punctuation: /^['"]|['"]$/ },
              },
              keyword: /\b(?:even|if|odd)\b/,
              boolean: /\b(?:true|false|null)\b/,
              number:
                /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
              operator: [
                {
                  pattern:
                    /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                  lookbehind: !0,
                },
                /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
              ],
              property: /\b[a-zA-Z_]\w*\b/,
              punctuation: /[()\[\]{}:.,]/,
            },
          },
          other: { pattern: /\S(?:[\s\S]*\S)?/, inside: b.languages.markup },
        });
      var h,
        y,
        v,
        w,
        k,
        S,
        x,
        A,
        E,
        L,
        C,
        _,
        T,
        I = b.util.clone(b.languages.typescript);
      function R(e) {
        "function" != typeof e || P(e) || L.push(e);
      }
      function P(t) {
        return "function" == typeof t
          ? L.filter(function (e) {
              return e.valueOf() === t.valueOf();
            })[0]
          : "string" == typeof t && 0 < t.length
          ? L.filter(function (e) {
              return e.name === t;
            })[0]
          : null;
      }
      function N() {
        Array.prototype.slice
          .call(document.querySelectorAll("pre[data-jsonp]"))
          .forEach(function (a) {
            a.textContent = "";
            var i = document.createElement("code");
            (i.textContent = _), a.appendChild(i);
            var e = a.getAttribute("data-adapter"),
              r = null;
            if (e) {
              if ("function" != typeof window[e])
                return void (i.textContent =
                  "JSONP adapter function '" + e + "' doesn't exist");
              r = window[e];
            }
            var o = "prismjsonp" + C++,
              t = document.createElement("a"),
              n = (t.href = a.getAttribute("data-jsonp"));
            t.href +=
              (t.search ? "&" : "?") +
              (a.getAttribute("data-callback") || "callback") +
              "=" +
              o;
            var s = setTimeout(function () {
                i.textContent === _ &&
                  (i.textContent = "Timeout loading '" + n + "'");
              }, 5e3),
              l = document.createElement("script");
            (l.src = t.href),
              (window[o] = function (e) {
                document.head.removeChild(l), clearTimeout(s), delete window[o];
                var t = "";
                if (r) t = r(e, a);
                else for (var n in L) if (null !== (t = L[n](e, a))) break;
                null === t
                  ? (i.textContent =
                      "Cannot parse response (perhaps you need an adapter function?)")
                  : ((i.textContent = t), b.highlightElement(i));
              }),
              document.head.appendChild(l);
          });
      }
      (b.languages.tsx = b.languages.extend("jsx", I)),
        (b.languages.vim = {
          string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
          comment: /".*/,
          function: /\w+(?=\()/,
          keyword:
            /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
          builtin:
            /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
          operator:
            /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
          punctuation: /[{}[\](),;:]/,
        }),
        (b.languages["visual-basic"] = {
          comment: {
            pattern: /(?:['‘’]|REM\b).*/i,
            inside: { keyword: /^REM/i },
          },
          directive: {
            pattern:
              /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
            alias: "comment",
            greedy: !0,
          },
          string: { pattern: /["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: !0 },
          date: {
            pattern:
              /#[^\S\r\n]*(?:\d+([\/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
            alias: "builtin",
          },
          number:
            /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
          boolean: /\b(?:True|False|Nothing)\b/i,
          keyword:
            /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
          operator: [
            /[+\-*\/\\^<=>&#@$%!]/,
            { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: !0 },
          ],
          punctuation: /[{}().,:?]/,
        }),
        (b.languages.vb = b.languages["visual-basic"]),
        (b.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-.\/:<=>?@\\^_`|~]+/i,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        "undefined" != typeof self &&
          self.Prism &&
          self.document &&
          ((h = "line-numbers"),
          (y = /\n(?!$)/g),
          (v = function (e) {
            var t,
              a,
              i,
              n,
              r = w(e),
              o = r["white-space"];
            ("pre-wrap" !== o && "pre-line" !== o) ||
              ((t = e.querySelector("code")),
              (a = e.querySelector(".line-numbers-rows")),
              (i = e.querySelector(".line-numbers-sizer")),
              (n = t.textContent.split(y)),
              i ||
                (((i = document.createElement("span")).className =
                  "line-numbers-sizer"),
                t.appendChild(i)),
              (i.style.display = "block"),
              n.forEach(function (e, t) {
                i.textContent = e || "\n";
                var n = i.getBoundingClientRect().height;
                a.children[t].style.height = n + "px";
              }),
              (i.textContent = ""),
              (i.style.display = "none"));
          }),
          (w = function (e) {
            return e
              ? window.getComputedStyle
                ? getComputedStyle(e)
                : e.currentStyle || null
              : null;
          }),
          window.addEventListener("resize", function () {
            Array.prototype.forEach.call(
              document.querySelectorAll("pre." + h),
              v
            );
          }),
          b.hooks.add("complete", function (e) {
            var t, n, a, i, r, o;
            e.code &&
              ((n = /\s*\bline-numbers\b\s*/),
              (t = e.element.parentNode) &&
                /pre/i.test(t.nodeName) &&
                (n.test(t.className) || n.test(e.element.className)) &&
                !e.element.querySelector(".line-numbers-rows") &&
                (n.test(e.element.className) &&
                  (e.element.className = e.element.className.replace(n, " ")),
                n.test(t.className) || (t.className += " line-numbers"),
                (i = (a = e.code.match(y)) ? a.length + 1 : 1),
                (r = (r = new Array(i + 1)).join("<span></span>")),
                (o = document.createElement("span")).setAttribute(
                  "aria-hidden",
                  "true"
                ),
                (o.className = "line-numbers-rows"),
                (o.innerHTML = r),
                t.hasAttribute("data-start") &&
                  (t.style.counterReset =
                    "linenumber " +
                    (parseInt(t.getAttribute("data-start"), 10) - 1)),
                e.element.appendChild(o),
                v(t),
                b.hooks.run("line-numbers", e)));
          }),
          b.hooks.add("line-numbers", function (e) {
            (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
          }),
          (b.plugins.lineNumbers = {
            getLine: function (e, t) {
              if ("PRE" === e.tagName && e.classList.contains(h)) {
                var n = e.querySelector(".line-numbers-rows"),
                  a = parseInt(e.getAttribute("data-start"), 10) || 1,
                  i = a + (n.children.length - 1);
                t < a && (t = a), i < t && (t = i);
                var r = t - a;
                return n.children[r];
              }
            },
          })),
        "undefined" != typeof self &&
          self.Prism &&
          self.document &&
          ((k = []),
          (S = {}),
          (x = function () {}),
          (b.plugins.toolbar = {}),
          (A = b.plugins.toolbar.registerButton =
            function (e, n) {
              var t =
                "function" == typeof n
                  ? n
                  : function (e) {
                      var t;
                      return (
                        "function" == typeof n.onClick
                          ? (((t = document.createElement("button")).type =
                              "button"),
                            t.addEventListener("click", function () {
                              n.onClick.call(this, e);
                            }))
                          : "string" == typeof n.url
                          ? ((t = document.createElement("a")).href = n.url)
                          : (t = document.createElement("span")),
                        (t.textContent = n.text),
                        t
                      );
                    };
              k.push((S[e] = t));
            }),
          (E = b.plugins.toolbar.hook =
            function (a) {
              var e,
                i,
                t = a.element.parentNode;
              t &&
                /pre/i.test(t.nodeName) &&
                !t.parentNode.classList.contains("code-toolbar") &&
                ((e = document.createElement("div")).classList.add(
                  "code-toolbar"
                ),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t),
                (i = document.createElement("div")).classList.add("toolbar"),
                document.body.hasAttribute("data-toolbar-order") &&
                  (k = document.body
                    .getAttribute("data-toolbar-order")
                    .split(",")
                    .map(function (e) {
                      return S[e] || x;
                    })),
                k.forEach(function (e) {
                  var t,
                    n = e(a);
                  n &&
                    ((t = document.createElement("div")).classList.add(
                      "toolbar-item"
                    ),
                    t.appendChild(n),
                    i.appendChild(t));
                }),
                e.appendChild(i));
            }),
          A("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
              var n,
                a,
                i = t.getAttribute("data-label");
              try {
                a = document.querySelector("template#" + i);
              } catch (e) {}
              return (
                a
                  ? (n = a.content)
                  : (t.hasAttribute("data-url")
                      ? ((n = document.createElement("a")).href =
                          t.getAttribute("data-url"))
                      : (n = document.createElement("span")),
                    (n.textContent = i)),
                n
              );
            }
          }),
          b.hooks.add("complete", E)),
        self.Prism &&
          self.document &&
          document.querySelectorAll &&
          [].filter &&
          ((L = []),
          (b.plugins.jsonphighlight = {
            registerAdapter: R,
            removeAdapter: function (e) {
              var t;
              "string" == typeof e && (e = P(e)),
                "function" == typeof e &&
                  0 <= (t = L.indexOf(e)) &&
                  L.splice(t, 1);
            },
            highlight: N,
          }),
          R(function (e) {
            if (e && e.meta && e.data) {
              if (e.meta.status && 400 <= e.meta.status)
                return "Error: " + (e.data.message || e.meta.status);
              if ("string" == typeof e.data.content)
                return "function" == typeof atob
                  ? atob(e.data.content.replace(/\s/g, ""))
                  : "Your browser cannot decode base64";
            }
            return null;
          }),
          R(function (e, t) {
            if (e && e.meta && e.data && e.data.files) {
              if (e.meta.status && 400 <= e.meta.status)
                return "Error: " + (e.data.message || e.meta.status);
              var n = t.getAttribute("data-filename");
              if (null == n)
                for (var a in e.data.files)
                  if (e.data.files.hasOwnProperty(a)) {
                    n = a;
                    break;
                  }
              return void 0 !== e.data.files[n]
                ? e.data.files[n].content
                : "Error: unknown or missing gist file " + n;
            }
            return null;
          }),
          R(function (e) {
            return e && e.node && "string" == typeof e.data ? e.data : null;
          }),
          (C = 0),
          (_ = "Loading…"),
          N()),
        "undefined" != typeof self &&
          self.Prism &&
          self.document &&
          ((T = /(?:^|\s)command-line(?:\s|$)/),
          b.hooks.add("before-highlight", function (e) {
            var t = (e.vars = e.vars || {}),
              n = (t["command-line"] = t["command-line"] || {});
            if (!n.complete && e.code) {
              var a = e.element.parentNode;
              if (
                a &&
                /pre/i.test(a.nodeName) &&
                (T.test(a.className) || T.test(e.element.className))
              )
                if (e.element.querySelector(".command-line-prompt"))
                  n.complete = !0;
                else {
                  var i = e.code.split("\n");
                  n.numberOfLines = i.length;
                  var r = (n.outputLines = []),
                    o = a.getAttribute("data-output"),
                    s = a.getAttribute("data-filter-output");
                  if (o || "" === o) {
                    o = o.split(",");
                    for (var l = 0; l < o.length; l++) {
                      var d = o[l].split("-"),
                        c = parseInt(d[0], 10),
                        u = 2 === d.length ? parseInt(d[1], 10) : c;
                      if (!isNaN(c) && !isNaN(u)) {
                        c < 1 && (c = 1), u > i.length && (u = i.length), u--;
                        for (var p = --c; p <= u; p++)
                          (r[p] = i[p]), (i[p] = "");
                      }
                    }
                  } else if (s)
                    for (l = 0; l < i.length; l++)
                      0 === i[l].indexOf(s) &&
                        ((r[l] = i[l].slice(s.length)), (i[l] = ""));
                  e.code = i.join("\n");
                }
              else n.complete = !0;
            } else n.complete = !0;
          }),
          b.hooks.add("before-insert", function (e) {
            var t = (e.vars = e.vars || {}),
              n = (t["command-line"] = t["command-line"] || {});
            if (!n.complete) {
              for (
                var a = e.highlightedCode.split("\n"), i = 0;
                i < n.outputLines.length;
                i++
              )
                n.outputLines.hasOwnProperty(i) && (a[i] = n.outputLines[i]);
              e.highlightedCode = a.join("\n");
            }
          }),
          b.hooks.add("complete", function (e) {
            var t = (e.vars = e.vars || {}),
              n = (t["command-line"] = t["command-line"] || {});
            if (!n.complete) {
              var a = e.element.parentNode;
              T.test(e.element.className) &&
                (e.element.className = e.element.className.replace(T, " ")),
                T.test(a.className) || (a.className += " command-line");
              function i(e, t) {
                return (a.getAttribute(e) || t).replace(/"/g, "&quot");
              }
              var r,
                o,
                s = new Array(n.numberOfLines + 1),
                l = i("data-prompt", "");
              s =
                "" !== l
                  ? s.join('<span data-prompt="' + l + '"></span>')
                  : ((r = i("data-user", "user")),
                    (o = i("data-host", "localhost")),
                    s.join(
                      '<span data-user="' +
                        r +
                        '" data-host="' +
                        o +
                        '"></span>'
                    ));
              var d = document.createElement("span");
              (d.className = "command-line-prompt"), (d.innerHTML = s);
              for (var c, u = 0; u < n.outputLines.length; u++) {
                n.outputLines.hasOwnProperty(u) &&
                  ((c = d.children[u]).removeAttribute("data-user"),
                  c.removeAttribute("data-host"),
                  c.removeAttribute("data-prompt"));
              }
              e.element.insertBefore(d, e.element.firstChild),
                (n.complete = !0);
            }
          })),
        (function () {
          if ("undefined" != typeof self && self.Prism && self.document) {
            if (!b.plugins.toolbar)
              return console.warn(
                "Copy to Clipboard plugin loaded before Toolbar plugin."
              );
            var e,
              t,
              i = (i = window.ClipboardJS || void 0) || D(5),
              r = [];
            i ||
              ((e = document.createElement("script")),
              (t = document.querySelector("head")),
              (e.onload = function () {
                if ((i = window.ClipboardJS)) for (; r.length; ) r.pop()();
              }),
              (e.src =
                "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"),
              t.appendChild(e)),
              b.plugins.toolbar.registerButton(
                "copy-to-clipboard",
                function (t) {
                  function e() {
                    var e = new i(a, {
                      text: function () {
                        return t.code;
                      },
                    });
                    e.on("success", function () {
                      (a.textContent = "Copied!"), n();
                    }),
                      e.on("error", function () {
                        (a.textContent = "Press Ctrl+C to copy"), n();
                      });
                  }
                  function n() {
                    setTimeout(function () {
                      a.textContent = "Copy";
                    }, 5e3);
                  }
                  var a = document.createElement("a");
                  return (a.textContent = "Copy"), i ? e() : r.push(e), a;
                }
              );
          }
        })();
    }.call(this, D(4)));
  },
  function (e, t) {
    var n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    /*!
     * clipboard.js v2.0.6
     * https://clipboardjs.com/
     *
     * Licensed MIT © Zeno Rocha
     */
    var a;
    (a = function () {
      return (
        (a = {}),
        (i.m = n =
          [
            function (e, t) {
              e.exports = function (e) {
                var t,
                  n,
                  a,
                  i =
                    "SELECT" === e.nodeName
                      ? (e.focus(), e.value)
                      : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
                      ? ((t = e.hasAttribute("readonly")) ||
                          e.setAttribute("readonly", ""),
                        e.select(),
                        e.setSelectionRange(0, e.value.length),
                        t || e.removeAttribute("readonly"),
                        e.value)
                      : (e.hasAttribute("contenteditable") && e.focus(),
                        (n = window.getSelection()),
                        (a = document.createRange()).selectNodeContents(e),
                        n.removeAllRanges(),
                        n.addRange(a),
                        n.toString());
                return i;
              };
            },
            function (e, t) {
              function n() {}
              (n.prototype = {
                on: function (e, t, n) {
                  var a = this.e || (this.e = {});
                  return (a[e] || (a[e] = [])).push({ fn: t, ctx: n }), this;
                },
                once: function (e, t, n) {
                  var a = this;
                  function i() {
                    a.off(e, i), t.apply(n, arguments);
                  }
                  return (i._ = t), this.on(e, i, n);
                },
                emit: function (e) {
                  for (
                    var t = [].slice.call(arguments, 1),
                      n = ((this.e || (this.e = {}))[e] || []).slice(),
                      a = 0,
                      i = n.length;
                    a < i;
                    a++
                  )
                    n[a].fn.apply(n[a].ctx, t);
                  return this;
                },
                off: function (e, t) {
                  var n = this.e || (this.e = {}),
                    a = n[e],
                    i = [];
                  if (a && t)
                    for (var r = 0, o = a.length; r < o; r++)
                      a[r].fn !== t && a[r].fn._ !== t && i.push(a[r]);
                  return i.length ? (n[e] = i) : delete n[e], this;
                },
              }),
                (e.exports = n),
                (e.exports.TinyEmitter = n);
            },
            function (e, t, n) {
              var p = n(3),
                g = n(4);
              e.exports = function (e, t, n) {
                if (!e && !t && !n)
                  throw new Error("Missing required arguments");
                if (!p.string(t))
                  throw new TypeError("Second argument must be a String");
                if (!p.fn(n))
                  throw new TypeError("Third argument must be a Function");
                if (p.node(e))
                  return (
                    (c = t),
                    (u = n),
                    (d = e).addEventListener(c, u),
                    {
                      destroy: function () {
                        d.removeEventListener(c, u);
                      },
                    }
                  );
                if (p.nodeList(e))
                  return (
                    (o = e),
                    (s = t),
                    (l = n),
                    Array.prototype.forEach.call(o, function (e) {
                      e.addEventListener(s, l);
                    }),
                    {
                      destroy: function () {
                        Array.prototype.forEach.call(o, function (e) {
                          e.removeEventListener(s, l);
                        });
                      },
                    }
                  );
                if (p.string(e))
                  return (a = e), (i = t), (r = n), g(document.body, a, i, r);
                throw new TypeError(
                  "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                );
                var a, i, r, o, s, l, d, c, u;
              };
            },
            function (e, n) {
              (n.node = function (e) {
                return (
                  void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                );
              }),
                (n.nodeList = function (e) {
                  var t = Object.prototype.toString.call(e);
                  return (
                    void 0 !== e &&
                    ("[object NodeList]" === t ||
                      "[object HTMLCollection]" === t) &&
                    "length" in e &&
                    (0 === e.length || n.node(e[0]))
                  );
                }),
                (n.string = function (e) {
                  return "string" == typeof e || e instanceof String;
                }),
                (n.fn = function (e) {
                  return (
                    "[object Function]" === Object.prototype.toString.call(e)
                  );
                });
            },
            function (e, t, n) {
              var o = n(5);
              function r(e, t, n, a, i) {
                var r = function (t, n, e, a) {
                  return function (e) {
                    (e.delegateTarget = o(e.target, n)),
                      e.delegateTarget && a.call(t, e);
                  };
                }.apply(this, arguments);
                return (
                  e.addEventListener(n, r, i),
                  {
                    destroy: function () {
                      e.removeEventListener(n, r, i);
                    },
                  }
                );
              }
              e.exports = function (e, t, n, a, i) {
                return "function" == typeof e.addEventListener
                  ? r.apply(null, arguments)
                  : "function" == typeof n
                  ? r.bind(null, document).apply(null, arguments)
                  : ("string" == typeof e && (e = document.querySelectorAll(e)),
                    Array.prototype.map.call(e, function (e) {
                      return r(e, t, n, a, i);
                    }));
              };
            },
            function (e, t) {
              var n;
              "undefined" == typeof Element ||
                Element.prototype.matches ||
                ((n = Element.prototype).matches =
                  n.matchesSelector ||
                  n.mozMatchesSelector ||
                  n.msMatchesSelector ||
                  n.oMatchesSelector ||
                  n.webkitMatchesSelector),
                (e.exports = function (e, t) {
                  for (; e && 9 !== e.nodeType; ) {
                    if ("function" == typeof e.matches && e.matches(t))
                      return e;
                    e = e.parentNode;
                  }
                });
            },
            function (e, t, n) {
              "use strict";
              n.r(t);
              var a = n(0),
                i = n.n(a),
                r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      };
              function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              function s(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, s),
                  this.resolveOptions(e),
                  this.initSelection();
              }
              var l =
                  ((function (e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e;
                  })(s, [
                    {
                      key: "resolveOptions",
                      value: function (e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        (this.action = t.action),
                          (this.container = t.container),
                          (this.emitter = t.emitter),
                          (this.target = t.target),
                          (this.text = t.text),
                          (this.trigger = t.trigger),
                          (this.selectedText = "");
                      },
                    },
                    {
                      key: "initSelection",
                      value: function () {
                        this.text
                          ? this.selectFake()
                          : this.target && this.selectTarget();
                      },
                    },
                    {
                      key: "selectFake",
                      value: function () {
                        var e = this,
                          t =
                            "rtl" ==
                            document.documentElement.getAttribute("dir");
                        this.removeFake(),
                          (this.fakeHandlerCallback = function () {
                            return e.removeFake();
                          }),
                          (this.fakeHandler =
                            this.container.addEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ) || !0),
                          (this.fakeElem = document.createElement("textarea")),
                          (this.fakeElem.style.fontSize = "12pt"),
                          (this.fakeElem.style.border = "0"),
                          (this.fakeElem.style.padding = "0"),
                          (this.fakeElem.style.margin = "0"),
                          (this.fakeElem.style.position = "absolute"),
                          (this.fakeElem.style[t ? "right" : "left"] =
                            "-9999px");
                        var n =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        (this.fakeElem.style.top = n + "px"),
                          this.fakeElem.setAttribute("readonly", ""),
                          (this.fakeElem.value = this.text),
                          this.container.appendChild(this.fakeElem),
                          (this.selectedText = i()(this.fakeElem)),
                          this.copyText();
                      },
                    },
                    {
                      key: "removeFake",
                      value: function () {
                        this.fakeHandler &&
                          (this.container.removeEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ),
                          (this.fakeHandler = null),
                          (this.fakeHandlerCallback = null)),
                          this.fakeElem &&
                            (this.container.removeChild(this.fakeElem),
                            (this.fakeElem = null));
                      },
                    },
                    {
                      key: "selectTarget",
                      value: function () {
                        (this.selectedText = i()(this.target)), this.copyText();
                      },
                    },
                    {
                      key: "copyText",
                      value: function () {
                        var t = void 0;
                        try {
                          t = document.execCommand(this.action);
                        } catch (e) {
                          t = !1;
                        }
                        this.handleResult(t);
                      },
                    },
                    {
                      key: "handleResult",
                      value: function (e) {
                        this.emitter.emit(e ? "success" : "error", {
                          action: this.action,
                          text: this.selectedText,
                          trigger: this.trigger,
                          clearSelection: this.clearSelection.bind(this),
                        });
                      },
                    },
                    {
                      key: "clearSelection",
                      value: function () {
                        this.trigger && this.trigger.focus(),
                          document.activeElement.blur(),
                          window.getSelection().removeAllRanges();
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.removeFake();
                      },
                    },
                    {
                      key: "action",
                      set: function (e) {
                        var t =
                          0 < arguments.length && void 0 !== e ? e : "copy";
                        if (
                          ((this._action = t),
                          "copy" !== this._action && "cut" !== this._action)
                        )
                          throw new Error(
                            'Invalid "action" value, use either "copy" or "cut"'
                          );
                      },
                      get: function () {
                        return this._action;
                      },
                    },
                    {
                      key: "target",
                      set: function (e) {
                        if (void 0 !== e) {
                          if (
                            !e ||
                            "object" !== (void 0 === e ? "undefined" : r(e)) ||
                            1 !== e.nodeType
                          )
                            throw new Error(
                              'Invalid "target" value, use a valid Element'
                            );
                          if (
                            "copy" === this.action &&
                            e.hasAttribute("disabled")
                          )
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                            );
                          if (
                            "cut" === this.action &&
                            (e.hasAttribute("readonly") ||
                              e.hasAttribute("disabled"))
                          )
                            throw new Error(
                              'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            );
                          this._target = e;
                        }
                      },
                      get: function () {
                        return this._target;
                      },
                    },
                  ]),
                  s),
                d = n(1),
                c = n.n(d),
                u = n(2),
                p = n.n(u),
                g =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                m = function (e, t, n) {
                  return t && f(e.prototype, t), n && f(e, n), e;
                };
              function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              var b =
                ((function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(h, c.a),
                m(
                  h,
                  [
                    {
                      key: "resolveOptions",
                      value: function (e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        (this.action =
                          "function" == typeof t.action
                            ? t.action
                            : this.defaultAction),
                          (this.target =
                            "function" == typeof t.target
                              ? t.target
                              : this.defaultTarget),
                          (this.text =
                            "function" == typeof t.text
                              ? t.text
                              : this.defaultText),
                          (this.container =
                            "object" === g(t.container)
                              ? t.container
                              : document.body);
                      },
                    },
                    {
                      key: "listenClick",
                      value: function (e) {
                        var t = this;
                        this.listener = p()(e, "click", function (e) {
                          return t.onClick(e);
                        });
                      },
                    },
                    {
                      key: "onClick",
                      value: function (e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                          (this.clipboardAction = new l({
                            action: this.action(t),
                            target: this.target(t),
                            text: this.text(t),
                            container: this.container,
                            trigger: t,
                            emitter: this,
                          }));
                      },
                    },
                    {
                      key: "defaultAction",
                      value: function (e) {
                        return y("action", e);
                      },
                    },
                    {
                      key: "defaultTarget",
                      value: function (e) {
                        var t = y("target", e);
                        if (t) return document.querySelector(t);
                      },
                    },
                    {
                      key: "defaultText",
                      value: function (e) {
                        return y("text", e);
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.listener.destroy(),
                          this.clipboardAction &&
                            (this.clipboardAction.destroy(),
                            (this.clipboardAction = null));
                      },
                    },
                  ],
                  [
                    {
                      key: "isSupported",
                      value: function (e) {
                        var t =
                            0 < arguments.length && void 0 !== e
                              ? e
                              : ["copy", "cut"],
                          n = "string" == typeof t ? [t] : t,
                          a = !!document.queryCommandSupported;
                        return (
                          n.forEach(function (e) {
                            a = a && !!document.queryCommandSupported(e);
                          }),
                          a
                        );
                      },
                    },
                  ]
                ),
                h);
              function h(e, t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, h);
                var n = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this));
                return n.resolveOptions(t), n.listenClick(e), n;
              }
              function y(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n)) return t.getAttribute(n);
              }
              t.default = b;
            },
          ]),
        (i.c = a),
        (i.d = function (e, t, n) {
          i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
          if ((1 & e && (t = i(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (i.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: t }),
            2 & e && "string" != typeof t)
          )
            for (var a in t)
              i.d(
                n,
                a,
                function (e) {
                  return t[e];
                }.bind(null, a)
              );
          return n;
        }),
        (i.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ""),
        i((i.s = 6)).default
      );
      function i(e) {
        if (a[e]) return a[e].exports;
        var t = (a[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
      }
      var n, a;
    }),
      (e.exports = a());
  },
]);
