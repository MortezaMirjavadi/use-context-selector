var e,t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e,r="production"!==process.env.NODE_ENV?Symbol("CONTEXT_LISTENERS"):Symbol(),n=function(e,n){var o=e[r];if("production"!==process.env.NODE_ENV&&!o)throw new Error("useContextSelector requires special context");var u=t.useReducer(function(e){return e+1},0)[1],c=t.useContext(e),f=n(c),i=t.useRef(null);return t.useLayoutEffect(function(){i.current={f:n,v:c,s:f}}),t.useLayoutEffect(function(){var e=function(e){try{if(i.current.v===e||Object.is(i.current.s,i.current.f(e)))return}catch(e){}u()};return o.add(e),function(){o.delete(e)}},[o]),f};exports.createContext=function(e){var n,o,u=t.createContext(e,function(){return 0});return u[r]=new Set,u.Provider=(n=u.Provider,o=u[r],t.memo(function(e){var r=e.value,u=e.children;return"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV?t.useLayoutEffect(function(){o.forEach(function(e){e(r)})}):o.forEach(function(e){e(r)}),t.createElement(n,{value:r},u)})),delete u.Consumer,u},exports.useContext=function(e){return n(e,function(e){return e})},exports.useContextSelector=n;
//# sourceMappingURL=index.js.map