(this["webpackJsonpcode-documenter-client"]=this["webpackJsonpcode-documenter-client"]||[]).push([[171],{342:function(n,t){Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/[A-Z]\w*Input(?=!?.*$)/m,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",(function(n){if("graphql"===n.language)for(var t=n.tokens.filter((function(n){return"string"!=typeof n&&"comment"!==n.type&&"scalar"!==n.type})),e=0;e<t.length;){var a=t[e++];if("keyword"===a.type&&"mutation"===a.content){var r=[];if(l(["definition-mutation","punctuation"])&&"("===c(1).content){e+=2;var i=f(/^\($/,/^\)$/);if(-1===i)continue;for(;e<i;e++){var o=c(0);"variable"===o.type&&(m(o,"variable-input"),r.push(o.content))}e=i+1}if(l(["punctuation","property-query"])&&"{"===c(0).content&&(e++,m(c(0),"property-mutation"),0<r.length)){var s=f(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=e;u<s;u++){var p=t[u];"variable"===p.type&&0<=r.indexOf(p.content)&&m(p,"variable-input")}}}}function c(n){return t[e+n]}function l(n,t){t=t||0;for(var e=0;e<n.length;e++){var a=c(e+t);if(!a||a.type!==n[e])return!1}return!0}function f(n,a){for(var r=1,i=e;i<t.length;i++){var o=t[i],s=o.content;if("punctuation"===o.type&&"string"==typeof s)if(n.test(s))r++;else if(a.test(s)&&0===--r)return i}return-1}function m(n,t){var e=n.alias;e?Array.isArray(e)||(n.alias=e=[e]):n.alias=e=[],e.push(t)}}))}}]);
//# sourceMappingURL=171.e44345a0.chunk.js.map